import { Link } from "react-router-dom";
import { SERVICE_ICONS, DefaultServiceIcon } from "./ServiceIcons";

const photoModules = import.meta.glob("../assets/images/servicios/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const photosBySlug = Object.keys(photoModules).reduce((map, path) => {
  const name = path.split("/").pop().replace(/\.[^.]+$/, "");
  map[name] = photoModules[path];
  return map;
}, {});

const ServiceCard = ({ service, index, style }) => {
  const photo = photosBySlug[service.slug];
  const Icon = SERVICE_ICONS[service.slug] || DefaultServiceIcon;

  return (
    <div className="service-card card reveal" style={style}>
      <div className="service-card-media">
        {photo ? (
          <img src={photo} alt={service.title} loading="lazy" />
        ) : (
          <span className="service-card-media-fallback" aria-hidden="true">
            <Icon />
          </span>
        )}
        <span className="badge">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="service-card-body">
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        {service.benefits && (
          <>
            <p className="benefits-label">{service.benefitsLabel || "Beneficios"}</p>
            <ul>
              {service.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </>
        )}
        <Link to={`/contacto?servicio=${encodeURIComponent(service.title)}`} className="service-card-cta">
          Solicitar este servicio
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
