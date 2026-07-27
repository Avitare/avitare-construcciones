import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PROCESS_STEPS, AUDIENCE, TEAM } from "../siteData";
import { PROCESS_ICONS } from "../components/ProcessIcons";
import { AUDIENCE_ICONS } from "../components/AudienceIcons";

const PROCESS_COLORS = ["var(--accent)", "var(--ink)", "var(--accent)", "var(--ink)"];

const teamPhotoModules = import.meta.glob("../assets/images/equipo/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const teamPhotosBySlug = Object.keys(teamPhotoModules).reduce((map, path) => {
  const name = path.split("/").pop().replace(/\.[^.]+$/, "");
  map[name] = teamPhotoModules[path];
  return map;
}, {});

const initialsOf = (fullName) =>
  fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join("")
    .toUpperCase();

const About = () => (
  <>
    <Seo
      title="Nosotros"
      description="Conoce el proceso de trabajo de Avitare Construcciones y a quiénes acompañamos: propietarios, empresas, constructoras e inversionistas inmobiliarios en Chiclayo."
    />

    <section className="page-hero">
      <div className="container">
        <h1>Confía en profesionales</h1>
        <p>
          En Avitare Construcciones trabajamos para que cada cliente pueda proteger su
          patrimonio y realizar sus proyectos con seguridad, confianza y respaldo profesional.
        </p>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2>Nuestro proceso de trabajo</h2>
        </div>
        <div className="process-grid">
          {PROCESS_STEPS.map((step, i) => {
            const StepIcon = PROCESS_ICONS[i];
            const color = PROCESS_COLORS[i % PROCESS_COLORS.length];
            return (
              <div
                className="process-card card reveal"
                key={step.title}
                style={{ transitionDelay: `${i * 90}ms`, "--step-color": color }}
              >
                <div className="step-icon">
                  <StepIcon />
                </div>
                <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Nuestro equipo</p>
          <h2>Las personas detrás de cada trámite</h2>
          <p>Un equipo multidisciplinario que combina gestión, diseño y respaldo legal.</p>
        </div>
        <div className="team-grid">
          {TEAM.map((member, i) => {
            const photo = teamPhotosBySlug[member.slug];
            return (
              <div
                className="team-card card reveal"
                key={member.slug}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="team-photo">
                  {photo ? (
                    <img src={photo} alt={member.name} loading="lazy" />
                  ) : (
                    <span aria-hidden="true">{initialsOf(member.name)}</span>
                  )}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">A quién atendemos</p>
          <h2>¿Quiénes pueden solicitar nuestros servicios?</h2>
          <p>Trabajamos con todo tipo de propietarios y organizaciones.</p>
        </div>
        <div className="audience-grid">
          {AUDIENCE.map((item, i) => {
            const AudienceIcon = AUDIENCE_ICONS[item.icon];
            return (
              <div
                className="audience-chip card reveal"
                key={item.label}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="audience-icon">
                  <AudienceIcon />
                </div>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="cta-band">
      <div className="container">
        <div className="cta-band-panel reveal">
          <h2>Construye con tranquilidad</h2>
          <p>Nosotros nos encargamos del resto.</p>
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

export default About;
