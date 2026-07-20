import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const NotFound = () => (
  <>
    <Seo title="Página no encontrada" description="La página que buscas no existe." />
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container">
        <h1>Página no encontrada</h1>
        <p>La página que buscas no existe o fue movida.</p>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </section>
  </>
);

export default NotFound;
