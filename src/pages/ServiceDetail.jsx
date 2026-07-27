import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { SERVICE_ICONS, DefaultServiceIcon } from "../components/ServiceIcons";
import { SERVICES } from "../siteData";

const photoModules = import.meta.glob("../assets/images/servicios/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const photosBySlug = Object.keys(photoModules).reduce((map, path) => {
  const name = path.split("/").pop().replace(/\.[^.]+$/, "");
  map[name] = photoModules[path];
  return map;
}, {});

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const photo = photosBySlug[service.slug];
  const Icon = SERVICE_ICONS[service.slug] || DefaultServiceIcon;

  return (
    <>
      <Seo title={service.title} description={service.summary} />

      <section className="service-detail-hero">
        {photo ? (
          <img src={photo} alt={service.title} className="service-detail-hero-img" />
        ) : (
          <div className="service-detail-hero-fallback" aria-hidden="true">
            <Icon />
          </div>
        )}
        <div className="service-detail-hero-overlay" aria-hidden="true" />
        <div className="container service-detail-hero-content">
          <Link to="/servicios" className="service-detail-back">
            ← Volver a servicios
          </Link>
          <h1>{service.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail-body">
            <p className="service-detail-summary">{service.summary}</p>

            {service.details && <p className="service-detail-details">{service.details}</p>}

            {service.benefits && (
              <>
                <p className="benefits-label">{service.benefitsLabel || "Beneficios"}</p>
                <ul className="service-detail-benefits">
                  {service.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band-panel">
            <h2>¿Listo para avanzar con {service.title}?</h2>
            <p>Cuéntanos tu caso y te ayudamos a resolverlo con total respaldo profesional.</p>
            <div className="cta-row">
              <Link
                to={`/contacto?servicio=${encodeURIComponent(service.title)}`}
                className="btn btn-primary"
              >
                Solicitar este servicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
