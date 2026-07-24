import type { ReactNode } from "react";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const pattern =
    /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\((?:https?:\/\/|mailto:)[^)]+\))/g;
  const parts = text.split(pattern).filter(Boolean);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }

    const link = part.match(/^\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^)]+)\)$/);

    if (link) {
      return (
        <a
          href={link[2]}
          key={key}
          rel={link[2].startsWith("http") ? "noreferrer" : undefined}
          target={link[2].startsWith("http") ? "_blank" : undefined}
        >
          {link[1]}
        </a>
      );
    }

    return part;
  });
}

export function MarkdownContent({ content }: { content: string }) {
  const lines = content.replace(/\r/g, "").split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line === "---") {
      blocks.push(<hr key={`hr-${index}`} />);
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={`h3-${index}`}>
          {renderInline(line.slice(4), `h3-${index}`)}
        </h3>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={`h2-${index}`}>
          {renderInline(line.slice(3), `h2-${index}`)}
        </h2>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      const quote: string[] = [];
      const start = index;

      while (index < lines.length && lines[index].trim().startsWith("> ")) {
        quote.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push(
        <blockquote key={`quote-${start}`}>
          {renderInline(quote.join(" "), `quote-${start}`)}
        </blockquote>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      const start = index;

      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push(
        <ul key={`ul-${start}`}>
          {items.map((item, itemIndex) => (
            <li key={`ul-${start}-${itemIndex}`}>
              {renderInline(item, `ul-${start}-${itemIndex}`)}
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      const start = index;

      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s/, ""));
        index += 1;
      }

      blocks.push(
        <ol key={`ol-${start}`}>
          {items.map((item, itemIndex) => (
            <li key={`ol-${start}-${itemIndex}`}>
              {renderInline(item, `ol-${start}-${itemIndex}`)}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    const paragraph: string[] = [];
    const start = index;

    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(---|##\s|###\s|>\s|-\s|\d+\.\s)/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push(
      <p key={`p-${start}`}>
        {renderInline(paragraph.join(" "), `p-${start}`)}
      </p>,
    );
  }

  return <div className="article-body">{blocks}</div>;
}
