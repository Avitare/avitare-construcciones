import { Helmet } from "react-helmet-async";

const SITE_NAME = "Avitare Construcciones";
const DEFAULT_KEYWORDS =
  "Avitare Construcciones, construcción en Chiclayo, saneamiento físico legal Chiclayo, regularización de edificaciones, declaratoria de fábrica, independización de inmuebles, inscripción de predios, asesoría técnica inmobiliaria";

const Seo = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Gestión técnica y asesoría especializada`}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords ? `${keywords}, ${DEFAULT_KEYWORDS}` : DEFAULT_KEYWORDS} />
    <meta property="og:title" content={title ? `${title} | ${SITE_NAME}` : SITE_NAME} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default Seo;
