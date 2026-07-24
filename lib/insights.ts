import { existsSync, readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";

const postsDirectory = join(process.cwd(), "posts");

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  draft: boolean;
  content: string;
};

type FrontMatter = Record<string, string>;

function parseFrontMatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: source };
  }

  const data = match[1].split(/\r?\n/).reduce<FrontMatter>((result, line) => {
    const separator = line.indexOf(":");

    if (separator === -1) {
      return result;
    }

    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();
    const value = rawValue.replace(/^(['"])(.*)\1$/, "$2");

    if (key) {
      result[key] = value;
    }

    return result;
  }, {});

  return { data, content: match[2].trim() };
}

function estimateReadTime(content: string) {
  const words = content
    .replace(/[#>*_[\]()`-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return `${Math.max(1, Math.ceil(words / 200))} min de leitura`;
}

function loadInsight(filename: string): Insight {
  const source = readFileSync(join(postsDirectory, filename), "utf8");
  const { data, content } = parseFrontMatter(source);
  const slug = basename(filename, ".md");
  const draft = data.draft !== "false";

  if (!draft) {
    const requiredFields = ["title", "excerpt", "date", "category"];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length) {
      throw new Error(
        `O artigo "${filename}" não pode ser publicado. Preencha: ${missingFields.join(
          ", ",
        )}.`,
      );
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
      throw new Error(
        `O artigo "${filename}" usa uma data inválida. Utilize AAAA-MM-DD.`,
      );
    }
  }

  return {
    slug,
    title: data.title || slug.replaceAll("-", " "),
    excerpt: data.excerpt || "",
    date: data.date || "1970-01-01",
    category: data.category || "MA Comunica",
    author: data.author || "Maurício Barbosa Alcântara",
    readTime: data.readTime || estimateReadTime(content),
    draft,
    content,
  };
}

export function getAllInsights() {
  if (!existsSync(postsDirectory)) {
    return [];
  }

  return readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md") && !filename.startsWith("_"))
    .map(loadInsight)
    .sort((first, second) => second.date.localeCompare(first.date));
}

export function getPublishedInsights() {
  return getAllInsights().filter((insight) => !insight.draft);
}

export function getPublishedInsight(slug: string) {
  return getPublishedInsights().find((insight) => insight.slug === slug);
}

export function formatInsightDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
