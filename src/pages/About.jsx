import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PROCESS_STEPS, AUDIENCE } from "../siteData";

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
          {PROCESS_STEPS.map((step, i) => (
            <div
              className="process-card card reveal"
              key={step.title}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">A quién atendemos</p>
          <h2>¿Quiénes pueden solicitar nuestros servicios?</h2>
          <p>Trabajamos con todo tipo de propietarios y organizaciones.</p>
        </div>
        <div className="audience-grid">
          {AUDIENCE.map((item, i) => (
            <div
              className="audience-chip card reveal"
              key={item}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="cta-band">
      <div className="container reveal">
        <h2>Construye con tranquilidad</h2>
        <p>Nosotros nos encargamos del resto.</p>
        <div className="cta-row">
          <Link to="/contacto" className="btn btn-primary">
            Solicitar Asesoría Gratuita
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default About;
