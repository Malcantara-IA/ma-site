import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";
import { practiceAreas } from "../site-data";

export const metadata: Metadata = {
  title: "Revisão do projeto",
  robots: { index: false, follow: false },
};

const checkpoints = [
  "Logo oficial e aplicação da identidade azul, branco e dourado",
  "WhatsApp, e-mail, Instagram e OAB",
  "Posicionamento principal e linguagem comercial",
  "Descrição de cada área e respectivos serviços",
  "Extensão regional e nacional do atendimento",
  "Pautas que devem inaugurar a área de Insights",
  "Política de privacidade e eventual uso de analytics",
];

export default function ReviewPage() {
  return (
    <>
      <Header />
      <main className="review-main">
        <section className="review-hero">
          <div className="shell">
            <p className="eyebrow">Documento vivo</p>
            <h1>Arquitetura e roteiro de revisão do novo site.</h1>
            <p>
              Esta página organiza o que foi construído e o que deve ser
              confirmado antes da substituição do site atual.
            </p>
          </div>
        </section>

        <section className="review-content">
          <div className="shell review-layout">
            <div>
              <p className="review-label">01 • Arquitetura</p>
              <h2>Mapa de páginas</h2>
              <div className="sitemap">
                <article>
                  <span>Entrada e conversão</span>
                  <Link href="/">Página inicial</Link>
                  <Link href="/diagnostico">Diagnóstico estratégico</Link>
                </article>
                <article>
                  <span>Áreas de atuação</span>
                  {practiceAreas.map((area) => (
                    <Link href={`/atuacao/${area.slug}`} key={area.slug}>
                      {area.shortTitle}
                    </Link>
                  ))}
                </article>
                <article>
                  <span>Autoridade e confiança</span>
                  <Link href="/sobre">O MA</Link>
                  <Link href="/insights">Insights</Link>
                  <Link href="/privacidade">Política de Privacidade</Link>
                </article>
              </div>
            </div>

            <aside className="review-checklist">
              <p className="review-label">02 • Aprovação</p>
              <h2>Itens para confirmar</h2>
              <ul>
                {checkpoints.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="review-notes">
          <div className="shell review-notes-grid">
            <div>
              <p className="review-label">03 • Decisões de conteúdo</p>
              <h2>O que já foi definido</h2>
            </div>
            <div>
              <p>
                O site fala diretamente com empresários, produtores e famílias
                empresárias. O eixo comercial é o diagnóstico estratégico, sem
                promessas de resultado, ofertas promocionais ou linguagem
                incompatível com a advocacia.
              </p>
              <p>
                As seis áreas têm páginas próprias para busca, campanhas e
                compartilhamento. A página inicial conecta todas elas sob um
                posicionamento único: empresa, patrimônio e legado.
              </p>
            </div>
          </div>
        </section>

        <section className="review-action">
          <div className="shell">
            <div>
              <p className="review-label">Próxima rodada</p>
              <h2>Após sua revisão, ajustamos texto, imagens e prioridade dos CTAs.</h2>
            </div>
            <Link className="button button-gold" href="/">
              Voltar ao site <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
