import Link from "next/link";
import { Footer, Header } from "./components";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found">
        <div className="shell">
          <p className="eyebrow">Página não encontrada</p>
          <h1>Este caminho ainda não faz parte do site.</h1>
          <Link className="button button-gold" href="/">
            Voltar ao início <span aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
