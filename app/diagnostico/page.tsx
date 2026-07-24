import type { Metadata } from "next";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Diagnóstico estratégico",
  description:
    "Diagnóstico jurídico-estratégico do MA para organizar riscos, prioridades e decisões empresariais.",
};

const stages = [
  {
    title: "Contexto",
    text: "Entrevista orientada para entender negócio, pessoas, patrimônio, urgências e objetivo.",
  },
  {
    title: "Mapa de risco",
    text: "Leitura integrada de documentos, obrigações, conflitos, garantias e exposição.",
  },
  {
    title: "Cenários",
    text: "Alternativas possíveis, impacto, urgência, dependências e pontos de decisão.",
  },
  {
    title: "Plano de ação",
    text: "Prioridades organizadas, responsáveis e próximos passos para execução.",
  },
];

export default function DiagnosisPage() {
  return (
    <>
      <Header />
      <main>
        <section className="inner-hero diagnosis-hero">
          <div className="shell narrow-hero">
            <p className="eyebrow">Método MA</p>
            <h1>Antes de escolher a solução, precisamos enxergar o problema inteiro.</h1>
            <p className="inner-lead">
              O diagnóstico jurídico-estratégico conecta documentos, relações,
              patrimônio e operação para transformar incerteza em decisão.
            </p>
          </div>
        </section>

        <section className="section section-light">
          <div className="shell diagnosis-intro-grid">
            <div>
              <p className="eyebrow eyebrow-blue">Quando faz sentido</p>
              <h2>Quando o risco é importante demais para uma resposta isolada.</h2>
            </div>
            <div className="prose">
              <p>
                O diagnóstico é indicado quando a questão envolve mais de uma
                área, afeta decisões relevantes ou exige escolher entre
                caminhos jurídicos com consequências empresariais diferentes.
              </p>
              <p>
                Não é uma consulta genérica. É uma etapa de investigação e
                organização da decisão.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-warm">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow eyebrow-blue">A entrega</p>
              <h2>Quatro movimentos para sair do ruído.</h2>
            </div>
            <div className="diagnosis-stage-grid">
              {stages.map((stage, index) => (
                <article key={stage.title}>
                  <span>0{index + 1}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-ink">
          <div className="shell preparation-grid">
            <div>
              <p className="eyebrow">Como se preparar</p>
              <h2>Comece pelo contexto. Os documentos vêm depois.</h2>
            </div>
            <div>
              <p>Na mensagem inicial, indique:</p>
              <ul>
                <li>qual decisão precisa ser tomada;</li>
                <li>quem está envolvido;</li>
                <li>se existe prazo, execução ou risco imediato;</li>
                <li>quais documentos principais já estão disponíveis.</li>
              </ul>
              <a
                className="button button-gold"
                href="https://wa.me/5538998658787?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20jur%C3%ADdico-estrat%C3%A9gico."
                target="_blank"
                rel="noreferrer"
              >
                Iniciar pelo WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
