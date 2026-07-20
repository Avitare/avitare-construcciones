import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ProjectGallery from "../components/ProjectGallery";
import ServiceCard from "../components/ServiceCard";
import { SERVICES, WHY_US, whatsappLink } from "../siteData";

const heroModules = import.meta.glob("../assets/images/hero/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});
const heroImage = Object.values(heroModules)[0];

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M8.7 12.2l2.2 2.2 4.4-4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.653 4.526 1.786 6.393L4 29l7.79-1.746A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 2c5.52 0 9.996 4.478 9.996 10s-4.476 10-9.996 10a9.94 9.94 0 0 1-5.06-1.376l-.363-.213-4.62 1.036 1.06-4.5-.238-.375A9.93 9.93 0 0 1 6.008 15c0-5.522 4.476-10 9.996-10Zm-3.5 4.86c-.196 0-.514.074-.784.37-.27.295-1.03 1.006-1.03 2.454 0 1.447 1.055 2.845 1.202 3.04.147.196 2.04 3.11 4.947 4.24 2.417.94 2.91.752 3.435.705.526-.048 1.696-.693 1.936-1.362.24-.67.24-1.243.168-1.362-.073-.12-.27-.196-.564-.343-.294-.147-1.696-.837-1.96-.932-.264-.098-.457-.147-.65.146-.196.295-.75.933-.92 1.124-.17.196-.34.22-.633.074-.294-.147-1.24-.457-2.362-1.457-.873-.778-1.463-1.74-1.634-2.034-.17-.294-.018-.454.128-.6.132-.13.294-.343.44-.514.147-.17.196-.294.294-.49.098-.196.05-.368-.024-.514-.074-.147-.65-1.582-.905-2.164-.238-.55-.482-.475-.65-.483-.17-.008-.363-.01-.556-.01Z" />
  </svg>
);

const GraduateIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M6.5 10.7v4.3c0 1.6 2.46 3 5.5 3s5.5-1.4 5.5-3v-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 8.5v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="3" y="13" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
    <rect x="17" y="13" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M19 19v.5A3.5 3.5 0 0 1 15.5 23H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.5 11.5 6 8h3.5l3 2.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.5 11.5 18 8h-2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 11 12 13l1.4-1.2c.7-.6 1.8-.5 2.3.2.5.7.4 1.7-.3 2.2L12 16.8l-1-.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 11.5 5 16.5l2.3 1.7M21.5 11.5 19 16.5l-2.3 1.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DocumentCheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M14 3.5v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M8.5 14 11 16.5l4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BoltIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13 2.5 4.5 14h5.5l-1.2 7.5L19.5 10H14l1-7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const WHY_US_ICONS = [GraduateIcon, HeadsetIcon, HandshakeIcon, ShieldIcon, DocumentCheckIcon, BoltIcon];

const Home = () => (
  <>
    <Seo
      title="Inicio"
      description="Avitare Construcciones brinda gestión técnica y asesoría legal para regularizar, sanear e independizar inmuebles en Chiclayo. Construye y protege tu inversión con respaldo profesional."
    />

    <section className="hero-section">
      <div
        className="hero-bg"
        style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container">
        <div className="hero-content reveal">
          <h1>
            Construye y protege
            <br />
            <span className="hero-highlight">tu inversión</span>
          </h1>
          <div className="hero-trust">
            <span className="hero-trust-icon">
              <ShieldIcon />
            </span>
            <span>
              Con la confianza y
              <br />
              el respaldo que necesitas
            </span>
          </div>
          <p className="lead">
            Soluciones técnicas y legales para que tu propiedad esté{" "}
            <span className="hero-accent-text">segura, en regla</span> y con{" "}
            <span className="hero-accent-text">respaldo profesional</span>.
          </p>
          <div className="cta-row">
            <Link to="/contacto" className="btn btn-primary">
              <CalendarIcon />
              Solicitar asesoría
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <span className="btn-whatsapp-icon">
                <WhatsAppIcon />
              </span>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="why-band">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow eyebrow-light">¿Por qué elegirnos?</p>
          <h2>¿Por qué elegir Avitare Construcciones?</h2>
          <p className="why-band-lead">
            Combinamos criterio técnico y respaldo legal para que cada trámite avance sin
            sorpresas, con un equipo que conoce a fondo los procesos registrales de Chiclayo.
          </p>
        </div>
        <div className="why-grid">
          {WHY_US.map((item, i) => {
            const Icon = WHY_US_ICONS[i % WHY_US_ICONS.length];
            return (
              <div
                className="why-card reveal"
                key={item}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="why-card-icon">
                  <Icon />
                </span>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Lo que hacemos</p>
          <h2>Nuestros Servicios</h2>
          <p>Soluciones integrales para cada etapa de la vida legal de tu propiedad.</p>
        </div>
        <div className="services-grid">
          {SERVICES.slice(0, 6).map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={i}
              style={{ transitionDelay: `${i * 70}ms` }}
            />
          ))}
        </div>
        <div className="cta-row" style={{ justifyContent: "center", marginTop: 40 }}>
          <Link to="/servicios" className="btn btn-dark-outline">
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>

    <ProjectGallery />

    <section className="cta-band">
      <div className="container reveal">
        <h2>¿Necesitas asesoría técnica o legal para tu propiedad?</h2>
        <p>Nuestro equipo está listo para ayudarte a proteger tu patrimonio con total respaldo profesional.</p>
        <div className="cta-row">
          <Link to="/contacto" className="btn btn-primary">
            Solicitar Asesoría Gratuita
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
