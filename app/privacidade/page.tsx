import type { Metadata } from "next";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do MA – Inteligência Jurídica.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="legal-hero">
          <div className="shell narrow-hero">
            <p className="eyebrow">Privacidade</p>
            <h1>Política de Privacidade</h1>
            <p>Texto inicial para revisão • Atualizado em julho de 2026</p>
          </div>
        </section>
        <section className="legal-body">
          <div className="shell legal-copy">
            <h2>1. Compromisso</h2>
            <p>
              O MA – Inteligência Jurídica trata dados pessoais com
              responsabilidade, finalidade definida e observância à Lei Geral
              de Proteção de Dados Pessoais (Lei nº 13.709/2018).
            </p>
            <h2>2. Dados tratados</h2>
            <p>
              Podemos tratar informações fornecidas diretamente por contato via
              e-mail ou WhatsApp, como nome, telefone, e-mail e os dados
              necessários para compreender a solicitação. Dados de navegação
              poderão ser tratados se ferramentas de análise forem ativadas.
            </p>
            <h2>3. Finalidades</h2>
            <p>
              Os dados são utilizados para responder contatos, avaliar a
              possibilidade de atendimento, cumprir obrigações legais e
              regulatórias, exercer direitos e aprimorar a comunicação do
              escritório.
            </p>
            <h2>4. Compartilhamento e segurança</h2>
            <p>
              Informações poderão ser compartilhadas com fornecedores
              estritamente necessários à operação, sujeitos a deveres de
              confidencialidade e segurança. Não comercializamos dados
              pessoais.
            </p>
            <h2>5. Direitos do titular</h2>
            <p>
              O titular pode solicitar confirmação, acesso, correção,
              informação sobre compartilhamento, oposição ou eliminação quando
              aplicável, observadas as hipóteses legais de conservação.
            </p>
            <h2>6. Contato</h2>
            <p>
              Solicitações sobre privacidade podem ser encaminhadas para{" "}
              <a href="mailto:mauricio@malcantara.adv.br">
                mauricio@malcantara.adv.br
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
