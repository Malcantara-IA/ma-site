import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Empresas familiares", href: "/atuacao/empresas-familiares" },
  { label: "Contratos", href: "/atuacao/contratos-empresariais" },
  { label: "Tributário", href: "/atuacao/tributario-reforma-tributaria" },
  { label: "Agronegócio", href: "/atuacao/agronegocio" },
  { label: "Recuperação judicial", href: "/atuacao/recuperacao-judicial" },
  { label: "Sucessão", href: "/atuacao/sucessao-patrimonial" },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="MA – Inteligência Jurídica">
      <Image
        src="/ma-logo.svg"
        alt=""
        width={1366}
        height={768}
        priority
      />
      <span>
        <strong>MA</strong>
        <small>Inteligência Jurídica</small>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <>
      <div className="review-bar">
        <div className="shell">
          <span>Versão reservada para revisão</span>
          <Link href="/revisao">Ver arquitetura e pendências</Link>
        </div>
      </div>
      <header className="site-header">
        <div className="shell nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <div className="nav-dropdown">
              <button type="button">
                Atuação <span aria-hidden="true">⌄</span>
              </button>
              <div className="dropdown-panel">
                {nav.map((item) => (
                  <Link href={item.href} key={item.href}>
                    {item.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/diagnostico">Método</Link>
            <Link href="/sobre">O MA</Link>
            <Link href="/insights">Insights</Link>
          </nav>
          <a
            className="nav-cta"
            href="https://wa.me/5538998658787?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20MA."
            target="_blank"
            rel="noreferrer"
          >
            Fale conosco <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menu">Menu</summary>
            <div className="mobile-panel">
              {nav.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/diagnostico">Método</Link>
              <Link href="/sobre">O MA</Link>
              <Link href="/insights">Insights</Link>
              <a
                href="https://wa.me/5538998658787?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20MA."
                target="_blank"
                rel="noreferrer"
              >
                Fale conosco ↗
              </a>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>
            Advocacia empresarial orientada por estratégia, clareza e visão de
            longo prazo.
          </p>
        </div>
        <div>
          <h3>Atuação</h3>
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contato</h3>
          <a href="mailto:mauricio@malcantara.adv.br">
            mauricio@malcantara.adv.br
          </a>
          <a
            href="https://wa.me/5538998658787"
            target="_blank"
            rel="noreferrer"
          >
            +55 38 99865-8787
          </a>
          <span>Montes Claros • Minas Gerais</span>
          <a
            href="https://instagram.com/mauricioalcantara_78"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
        </div>
        <div>
          <h3>Institucional</h3>
          <Link href="/sobre">O MA</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/revisao">Revisão do projeto</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 MA – Inteligência Jurídica</span>
        <span>Maurício Barbosa Alcântara • OAB/MG 110.352</span>
      </div>
    </footer>
  );
}
