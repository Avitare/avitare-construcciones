import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { FAQS } from "../siteData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Seo
        title="Preguntas Frecuentes"
        description="Resuelve tus dudas sobre saneamiento físico legal, independización de inmuebles, regularización de construcciones y plazos de trámite en Chiclayo."
      />

      <section className="page-hero">
        <div className="container">
          <h1>Preguntas Frecuentes</h1>
          <p>Resolvemos las dudas más comunes sobre nuestros trámites y servicios.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  className={`faq-item card reveal ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <span className="icon">+</span>
                  </button>
                  {isOpen && <p className="faq-answer">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band-panel reveal">
            <h2>¿Tienes otra pregunta?</h2>
            <p>Escríbenos y te responderemos a la brevedad.</p>
            <div className="cta-row">
              <Link to="/contacto" className="btn btn-primary">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
