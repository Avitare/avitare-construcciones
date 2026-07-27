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

const ServiceCardCompact = ({ service, style }) => {
  const photo = photosBySlug[service.slug];
  const Icon = SERVICE_ICONS[service.slug] || DefaultServiceIcon;

  return (
    <Link to={`/servicios/${service.slug}`} className="service-card-compact card reveal" style={style}>
      <div className="service-card-compact-media">
        {photo ? (
          <img src={photo} alt={service.title} loading="lazy" />
        ) : (
          <span className="service-card-media-fallback" aria-hidden="true">
            <Icon />
          </span>
        )}
      </div>
      <div className="service-card-compact-body">
        <h3>{service.title}</h3>
      </div>
    </Link>
  );
};

export default ServiceCardCompact;
