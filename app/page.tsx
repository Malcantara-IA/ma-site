import Link from "next/link";
import { Footer, Header } from "./components";
import { practiceAreas } from "./site-data";

const method = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Entendemos o negócio, as relações e o risco real antes de propor qualquer estrutura.",
  },
  {
    number: "02",
    title: "Estratégia",
    text: "Traduzimos complexidade jurídica em alternativas claras, prioridades e decisões executáveis.",
  },
  {
    number: "03",
    title: "Implementação",
    text: "Conduzimos documentos, negociações e medidas jurídicas com coordenação e controle.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "A estratégia evolui com a empresa, a família e o ambiente de negócios.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Empresas • Patrimônio • Legado</p>
              <h1>
                Decisões jurídicas para quem constrói negócios de{" "}
                <em>longo prazo.</em>
              </h1>
              <p className="hero-lead">
                O MA atua ao lado de empresários, produtores rurais e famílias
                empresárias para proteger operações, organizar relações e
                conduzir momentos críticos com estratégia.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-gold"
                  href="https://wa.me/5538998658787?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico."
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar diagnóstico
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#atuacao">
                  Conhecer a atuação <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Posicionamento do MA">
              <p className="panel-kicker">Inteligência jurídica aplicada</p>
              <blockquote>
                “O problema raramente é só jurídico. Ele envolve pessoas,
                patrimônio, operação e futuro.”
              </blockquote>
              <div className="panel-rule" />
              <p>
                Técnica jurídica, visão empresarial e tecnologia para decisões
                mais seguras.
              </p>
            </aside>
          </div>

          <div className="shell trust-line">
            <span>Atuação estratégica</span>
            <span>Norte de Minas</span>
            <span>Vale do Jequitinhonha</span>
            <span>Sul da Bahia</span>
            <span>Atendimento nacional</span>
          </div>
        </section>

        <section className="section section-light" id="atuacao">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow eyebrow-blue">Áreas de atuação</p>
                <h2>Estratégia jurídica no ponto em que o risco acontece.</h2>
              </div>
              <p>
                A atuação é integrada porque empresas, contratos, patrimônio e
                família não vivem em gavetas separadas.
              </p>
            </div>

            <div className="practice-grid">
              {practiceAreas.map((area, index) => (
                <Link
                  className="practice-card"
                  href={`/atuacao/${area.slug}`}
                  key={area.slug}
                >
                  <div className="card-index">0{index + 1}</div>
                  <h3>{area.shortTitle}</h3>
                  <p>{area.cardText}</p>
                  <span className="card-link">
                    Ver como atuamos <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-ink">
          <div className="shell diagnosis-grid">
            <div>
              <p className="eyebrow">Antes da crise</p>
              <h2>Clareza para decidir antes que o problema decida por você.</h2>
            </div>
            <div className="diagnosis-copy">
              <p>
                Contratos desalinhados, sucessão adiada, garantias mal
                dimensionadas e conflitos silenciosos costumam dar sinais. O
                diagnóstico jurídico-estratégico organiza esses sinais e
                transforma risco difuso em plano de ação.
              </p>
              <Link className="button button-outline" href="/diagnostico">
                Entender o diagnóstico <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-warm">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow eyebrow-blue">Método MA</p>
              <h2>Direito que entra na sala de decisão.</h2>
            </div>
            <div className="method-grid">
              {method.map((item) => (
                <article className="method-step" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="shell founder-grid">
            <div className="founder-mark" aria-hidden="true">
              <span>MA</span>
              <small>Inteligência Jurídica</small>
            </div>
            <div className="founder-copy">
              <p className="eyebrow eyebrow-blue">Liderança</p>
              <h2>Maurício Barbosa Alcântara</h2>
              <p className="founder-role">
                Advogado • OAB/MG 110.352
              </p>
              <p>
                À frente do MA, Maurício atua em direito empresarial,
                contratos, agronegócio, sucessão patrimonial e governança de
                famílias empresárias. A abordagem combina rigor técnico,
                leitura de negócio e comunicação direta para construir soluções
                que funcionem fora do papel.
              </p>
              <Link className="text-link text-link-dark" href="/sobre">
                Conhecer o MA <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="shell cta-band-inner">
            <div>
              <p className="eyebrow">Próxima decisão</p>
              <h2>Seu negócio precisa de uma resposta ou de uma estratégia?</h2>
            </div>
            <div>
              <p>
                Conte o contexto. O primeiro passo é identificar o problema
                certo.
              </p>
              <a
                className="button button-light"
                href="https://wa.me/5538998658787?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20uma%20quest%C3%A3o%20jur%C3%ADdica%20estrat%C3%A9gica."
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
