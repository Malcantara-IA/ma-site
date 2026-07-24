import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";
import {
  formatInsightDate,
  getPublishedInsights,
} from "../../lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Análises do MA sobre empresas familiares, contratos, agronegócio, recuperação judicial e sucessão.",
};

const upcomingInsights = [
  {
    series: "Família empresária em risco",
    title: "Quando a sucessão é adiada, a empresa paga a conta",
    excerpt:
      "Os sinais de que a continuidade depende de regras, e não apenas de boas relações.",
  },
  {
    series: "Contrato que trava",
    title: "A cláusula que protege no papel pode inviabilizar a operação",
    excerpt:
      "Como alinhar garantias, rescisão e penalidades à realidade econômica do contrato.",
  },
  {
    series: "Antes da crise",
    title: "Renegociar dívida sem mapear garantias é negociar no escuro",
    excerpt:
      "O que deve ser consolidado antes da primeira conversa com os credores.",
  },
  {
    series: "Agro estratégico",
    title: "Crédito rural: o vencimento precisa conversar com a safra",
    excerpt:
      "Fluxo produtivo, CPRs e garantias vistos como uma única estrutura de risco.",
  },
  {
    series: "Recuperação e empresa",
    title: "Recuperação judicial começa antes da petição",
    excerpt:
      "Documentos, caixa, comunicação e estratégia como base de uma reestruturação possível.",
  },
  {
    series: "Patrimônio e legado",
    title: "Holding familiar não é resposta automática",
    excerpt:
      "Por que objetivos, governança e desenho patrimonial devem vir antes da estrutura.",
  },
];

export default function InsightsPage() {
  const publishedInsights = getPublishedInsights();

  return (
    <>
      <Header />
      <main>
        <section className="inner-hero insights-hero">
          <div className="shell narrow-hero">
            <p className="eyebrow">MA Comunica</p>
            <h1>Análise jurídica para decisões que não cabem em manchetes.</h1>
            <p className="inner-lead">
              Conteúdo direto sobre contratos, empresas familiares,
              agronegócio, crise e patrimônio — sempre conectado ao impacto no
              negócio.
            </p>
          </div>
        </section>

        <section className="section section-light">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow eyebrow-blue">
                  {publishedInsights.length ? "Últimos artigos" : "Pautas iniciais"}
                </p>
                <h2>Conteúdo para antecipar risco e melhorar decisão.</h2>
              </div>
              <p>
                Análises desenvolvidas pelo MA para conectar direito, operação,
                patrimônio e estratégia.
              </p>
            </div>
            <div className="insight-grid">
              {publishedInsights.length
                ? publishedInsights.map((insight) => (
                    <Link
                      className="insight-card"
                      href={`/insights/${insight.slug}`}
                      key={insight.slug}
                    >
                      <span>{insight.category}</span>
                      <h3>{insight.title}</h3>
                      <p>{insight.excerpt}</p>
                      <small>
                        {formatInsightDate(insight.date)} • {insight.readTime}
                      </small>
                      <strong>Leia o artigo →</strong>
                    </Link>
                  ))
                : upcomingInsights.map((insight) => (
                    <article key={insight.title}>
                      <span>{insight.series}</span>
                      <h3>{insight.title}</h3>
                      <p>{insight.excerpt}</p>
                      <small>Artigo em preparação</small>
                    </article>
                  ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="shell cta-band-inner">
            <div>
              <p className="eyebrow">Aplicação prática</p>
              <h2>O tema atingiu uma decisão da sua empresa?</h2>
            </div>
            <div>
              <p>Conte o contexto antes de aplicar uma resposta genérica.</p>
              <a
                className="button button-light"
                href="https://wa.me/5538998658787?text=Ol%C3%A1%2C%20li%20um%20conte%C3%BAdo%20do%20MA%20e%20gostaria%20de%20conversar%20sobre%20o%20meu%20caso."
                target="_blank"
                rel="noreferrer"
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
