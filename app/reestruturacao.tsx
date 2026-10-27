import { PerimeterInteractions } from "./perimeter-interactions";
import { Footer, Header } from "./components";
import { restructuringHtml } from "./reestruturacao-content";
import "./reestruturacao.css";

export function RestructuringPage() {
  return <><Header /><main className="lp" id="conteudo" dangerouslySetInnerHTML={{ __html: restructuringHtml }} /><PerimeterInteractions /><Footer /></>;
}
