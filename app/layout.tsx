import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://malcantara.adv.br"),
  title: {
    default: "MA – Inteligência Jurídica",
    template: "%s | MA – Inteligência Jurídica",
  },
  description:
    "Advocacia empresarial estratégica para empresas familiares, contratos, tributário e reforma tributária, agronegócio, recuperação judicial e sucessão patrimonial.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MA – Inteligência Jurídica",
    title: "MA – Inteligência Jurídica",
    description:
      "Advocacia empresarial estratégica para empresas familiares, contratos, tributário e reforma tributária, agronegócio, recuperação judicial e sucessão patrimonial.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
