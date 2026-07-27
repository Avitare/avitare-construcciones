import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ServiceCard from "../components/ServiceCard";
import { SERVICES } from "../siteData";
import otrosServiciosPhoto from "../assets/images/servicios/otros-servicios-relacionados.png";

const Services = () => (
  <>
    <Seo
      title="Servicios"
      description="Independización de inmuebles, saneamiento físico legal, declaratoria de fábrica, regularización de edificaciones, subdivisiones e inscripción de predios en Chiclayo."
      keywords="servicios de saneamiento legal, independización de inmuebles Chiclayo, declaratoria de fábrica Chiclayo"
    />

    <section className="page-hero">
      <div className="container">
        <h1>Nuestros Servicios</h1>
        <p>
          Soluciones integrales para regularizar, sanear y formalizar tu propiedad, con
          acompañamiento técnico y legal en cada etapa.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={i}
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            />
          ))}

          <div className="service-card card reveal">
            <div className="service-card-media">
              <img src={otrosServiciosPhoto} alt="Otros Servicios Relacionados" loading="lazy" />
              <span className="badge">+</span>
            </div>
            <div className="service-card-body">
              <h3>Otros Servicios Relacionados</h3>
              <p>
                Además, ofrecemos apoyo en diversos procedimientos técnicos y legales relacionados
                con bienes inmuebles. Nuestro objetivo es brindarte una solución integral para
                cualquier gestión vinculada a tu propiedad.
              </p>
              <Link to="/contacto?servicio=Otro" className="service-card-cta">
                Cuéntanos tu caso
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-band">
      <div className="container">
        <div className="cta-band-panel">
          <h2>¿No sabes qué servicio necesitas?</h2>
          <p>Cuéntanos tu caso y te orientamos sin costo sobre el mejor camino a seguir.</p>
          <div className="cta-row">
            <Link to="/contacto" className="btn btn-primary">
              Solicitar Asesoría Gratuita
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Services;
