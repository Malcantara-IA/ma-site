import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components";
import { practiceAreas } from "../../site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);

  if (!area) {
    return {};
  }

  return {
    title: area.shortTitle,
    description: area.lead,
  };
}

export default async function PracticePage({ params }: PageProps) {
  const { slug } = await params;
  const areaIndex = practiceAreas.findIndex((item) => item.slug === slug);
  const area = practiceAreas[areaIndex];

  if (!area) {
    notFound();
  }

  const nextArea = practiceAreas[(areaIndex + 1) % practiceAreas.length];
  const message = encodeURIComponent(
    `Olá, gostaria de conversar sobre ${area.shortTitle.toLowerCase()}.`,
  );

  return (
    <>
      <Header />
      <main>
        <section className="inner-hero">
          <div className="inner-orbit" aria-hidden="true" />
          <div className="shell inner-hero-grid">
            <div>
              <p className="eyebrow">{area.eyebrow}</p>
              <h1>{area.title}</h1>
              <p className="inner-lead">{area.lead}</p>
              <a
                className="button button-gold"
                href={`https://wa.me/5538998658787?text=${message}`}
                target="_blank"
                rel="noreferrer"
              >
                Conversar sobre este tema <span aria-hidden="true">↗</span>
              </a>
            </div>
            <aside className="signal-panel">
              <p className="panel-kicker">Sinais de atenção</p>
              <ul>
                {area.signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section section-light">
          <div className="shell audience-grid">
            <div>
              <p className="eyebrow eyebrow-blue">Para quem</p>
              <h2>Atuação construída a partir da realidade do cliente.</h2>
            </div>
            <ul className="audience-list">
              {area.audience.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">↳</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-warm">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow eyebrow-blue">Como o MA atua</p>
                <h2>Estrutura jurídica com começo, meio e decisão.</h2>
              </div>
              <p>
                O escopo é definido após o diagnóstico. Cada frente pode ser
                contratada de forma específica ou coordenada em uma estratégia
                mais ampla.
              </p>
            </div>
            <div className="service-grid">
              {area.services.map((service, index) => (
                <article key={service.title}>
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-ink">
          <div className="shell outcome-grid">
            <div>
              <p className="eyebrow">O que buscamos construir</p>
              <h2>Menos improviso. Mais previsibilidade.</h2>
            </div>
            <ul>
              {area.outcomes.map((outcome) => (
                <li key={outcome}>
                  <span aria-hidden="true">✓</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="closing-section">
          <div className="shell closing-grid">
            <div>
              <p className="eyebrow eyebrow-blue">Próximo passo</p>
              <h2>{area.closingTitle}</h2>
            </div>
            <div>
              <p>{area.closingText}</p>
              <a
                className="button button-gold"
                href={`https://wa.me/5538998658787?text=${message}`}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar análise inicial <span aria-hidden="true">↗</span>
              </a>
              {area.slug === "recuperacao-judicial" && (
                <small>
                  A adoção de medida judicial depende da análise individual de
                  viabilidade e documentação. Não há promessa de resultado.
                </small>
              )}
              {area.slug === "tributario-reforma-tributaria" && (
                <small>
                  A estratégia tributária depende do regime, das operações e
                  das obrigações aplicáveis a cada empresa, com coordenação
                  entre jurídico, contabilidade e sistemas.
                </small>
              )}
            </div>
          </div>
        </section>

        <section className="next-area">
          <div className="shell">
            <span>Explore também</span>
            <Link href={`/atuacao/${nextArea.slug}`}>
              {nextArea.shortTitle} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
