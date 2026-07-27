import { useState } from "react";
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
  const [showBenefits, setShowBenefits] = useState(false);

  return (
    <div className="service-card card reveal" style={style}>
      <Link to={`/servicios/${service.slug}`} className="service-card-media">
        {photo ? (
          <img src={photo} alt={service.title} loading="lazy" />
        ) : (
          <span className="service-card-media-fallback" aria-hidden="true">
            <Icon />
          </span>
        )}
        <span className="badge">{String(index + 1).padStart(2, "0")}</span>
      </Link>
      <div className="service-card-body">
        <h3>
          <Link to={`/servicios/${service.slug}`}>{service.title}</Link>
        </h3>
        <p>{service.summary}</p>
        {service.benefits && (
          <>
            <button
              type="button"
              className="service-card-toggle"
              onClick={() => setShowBenefits((v) => !v)}
              aria-expanded={showBenefits}
            >
              {showBenefits ? "Ocultar beneficios" : "Ver beneficios"}
              <span className={`icon ${showBenefits ? "is-open" : ""}`} aria-hidden="true">
                +
              </span>
            </button>
            {showBenefits && (
              <>
                <p className="benefits-label">{service.benefitsLabel || "Beneficios"}</p>
                <ul>
                  {service.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
        <Link to={`/servicios/${service.slug}`} className="service-card-cta">
          Ver más
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
