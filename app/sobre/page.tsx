import type { Metadata } from "next";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "O MA",
  description:
    "Conheça o MA – Inteligência Jurídica e a atuação de Maurício Barbosa Alcântara.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="inner-hero about-hero">
          <div className="shell inner-hero-grid">
            <div>
              <p className="eyebrow">O MA</p>
              <h1>Inteligência jurídica para proteger o que a empresa ainda vai construir.</h1>
            </div>
            <div className="about-statement">
              <p>
                O MA nasceu para ir além da advocacia genérica: soluções
                jurídicas sob medida, guiadas por técnica, leitura empresarial
                e visão de futuro.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="shell about-grid">
            <div className="founder-mark" aria-hidden="true">
              <span>MA</span>
              <small>Inteligência Jurídica</small>
            </div>
            <div className="about-copy">
              <p className="eyebrow eyebrow-blue">Quem lidera</p>
              <h2>Maurício Barbosa Alcântara</h2>
              <p className="founder-role">
                Advogado • OAB/MG 110.352
              </p>
              <p>
                Especialista em direito empresarial, contratos, agronegócio,
                planejamento sucessório e governança de famílias empresárias,
                Maurício trabalha no encontro entre técnica jurídica e decisão
                de negócio.
              </p>
              <p>
                A atuação é direta, personalizada e orientada por contexto.
                Cada estratégia considera as pessoas envolvidas, a operação,
                o patrimônio e o efeito da decisão ao longo do tempo.
              </p>
              <div className="about-facts">
                <div>
                  <span>Base</span>
                  <strong>Montes Claros • MG</strong>
                </div>
                <div>
                  <span>Atendimento</span>
                  <strong>Regional e nacional</strong>
                </div>
                <div>
                  <span>Abordagem</span>
                  <strong>Técnica + negócio + tecnologia</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-warm">
          <div className="shell principles-grid">
            <div>
              <p className="eyebrow eyebrow-blue">Princípios</p>
              <h2>O que orienta a atuação.</h2>
            </div>
            <div className="principles-list">
              <article>
                <span>01</span>
                <div>
                  <h3>Clareza antes da complexidade</h3>
                  <p>A decisão precisa ser compreendida por quem vai executá-la.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Estratégia antes do documento</h3>
                  <p>A minuta é consequência da estrutura e do objetivo.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Prevenção sem ingenuidade</h3>
                  <p>Boas relações merecem regras para os momentos difíceis.</p>
                </div>
              </article>
              <article>
                <span>04</span>
                <div>
                  <h3>Tecnologia com responsabilidade</h3>
                  <p>Inteligência aplicada para ampliar análise, controle e velocidade.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="shell cta-band-inner">
            <div>
              <p className="eyebrow">Contato direto</p>
              <h2>Converse com quem vai pensar a estratégia.</h2>
            </div>
            <div>
              <p>
                Atendimento a empresários, produtores rurais e famílias
                empresárias.
              </p>
              <a
                className="button button-light"
                href="https://wa.me/5538998658787?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20atua%C3%A7%C3%A3o%20do%20MA."
                target="_blank"
                rel="noreferrer"
              >
                Falar com Maurício <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
