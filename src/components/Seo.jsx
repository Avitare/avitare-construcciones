import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Avitare Construcciones";
const SITE_URL = "https://avitareconstrucciones.grupoavitare.com";
const DEFAULT_KEYWORDS =
  "Avitare Construcciones, construcción en Chiclayo, saneamiento físico legal Chiclayo, regularización de edificaciones, declaratoria de fábrica, independización de inmuebles, inscripción de predios, asesoría técnica inmobiliaria";

const Seo = ({ title, description, keywords }) => {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  return (
    <Helmet>
      <title>{title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Gestión técnica y asesoría especializada`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ? `${keywords}, ${DEFAULT_KEYWORDS}` : DEFAULT_KEYWORDS} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title ? `${title} | ${SITE_NAME}` : SITE_NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default Seo;
