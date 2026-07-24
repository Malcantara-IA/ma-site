import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components";
import {
  formatInsightDate,
  getPublishedInsight,
  getPublishedInsights,
} from "../../../lib/insights";
import { MarkdownContent } from "../markdown";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedInsights().map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getPublishedInsight(slug);

  if (!insight) {
    return {};
  }

  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: {
      canonical: `/insights/${insight.slug}`,
    },
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.excerpt,
      publishedTime: insight.date,
      authors: [insight.author],
    },
  };
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getPublishedInsight(slug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <article>
          <header className="article-hero">
            <div className="shell article-hero-inner">
              <Link className="article-back" href="/insights">
                ← Todos os insights
              </Link>
              <p className="eyebrow">{insight.category}</p>
              <h1>{insight.title}</h1>
              <p className="article-excerpt">{insight.excerpt}</p>
              <div className="article-meta">
                <span>{formatInsightDate(insight.date)}</span>
                <span>{insight.readTime}</span>
                <span>{insight.author}</span>
              </div>
            </div>
          </header>

          <section className="article-section">
            <div className="shell article-layout">
              <MarkdownContent content={insight.content} />
              <aside className="article-aside">
                <span>MA – Inteligência Jurídica</span>
                <p>
                  Conteúdo informativo. A aplicação ao caso concreto depende de
                  análise jurídica individual.
                </p>
              </aside>
            </div>
          </section>
        </article>

        <section className="cta-band">
          <div className="shell cta-band-inner">
            <div>
              <p className="eyebrow">Aplicação prática</p>
              <h2>Este tema afeta uma decisão do seu negócio?</h2>
            </div>
            <div>
              <p>Conte o contexto para uma análise jurídica individual.</p>
              <a
                className="button button-light"
                href={`https://wa.me/5538998658787?text=${encodeURIComponent(
                  `Olá, li o artigo “${insight.title}” e gostaria de conversar sobre o meu caso.`,
                )}`}
                rel="noreferrer"
                target="_blank"
              >
                Falar com o MA <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
