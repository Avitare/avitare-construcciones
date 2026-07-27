import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import { SERVICES, WHATSAPP_DISPLAY, whatsappLink } from "../siteData";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("servicio") || "";
  const initialService =
    requestedService === "Otro" || SERVICES.some((s) => s.title === requestedService)
      ? requestedService
      : "";

  const [form, setForm] = useState({ name: "", phone: "", email: "", service: initialService, message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Hola Avitare Construcciones, quisiera solicitar una asesoría.",
      `Nombre: ${form.name}`,
      `Teléfono: ${form.phone}`,
      form.email ? `Correo: ${form.email}` : null,
      form.service ? `Servicio de interés: ${form.service}` : null,
      form.message ? `Mensaje: ${form.message}` : null,
    ].filter(Boolean);

    setSent(true);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noreferrer");
  };

  return (
    <>
      <Seo
        title="Contacto"
        description="Contáctanos para solicitar una asesoría técnica y legal gratuita para tu propiedad en Chiclayo. WhatsApp y formulario de contacto disponibles."
      />

      <section className="page-hero">
        <div className="container">
          <h1>¿Necesitas asesoría técnica o legal para tu propiedad?</h1>
          <p>Nuestro equipo está listo para ayudarte.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info-card card reveal">
            <h3>Información de contacto</h3>

            <div className="contact-detail">
              <span className="icon-circle">☎</span>
              <div>
                <strong>WhatsApp</strong>
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="icon-circle">⌖</span>
              <div>
                <strong>Zona de cobertura</strong>
                <span>Atendemos en Chiclayo y alrededores. Trabajamos sin local físico, coordinando todo de forma remota y con visitas cuando el trámite lo requiere.</span>
              </div>
            </div>

            <div className="contact-detail">
              <span className="icon-circle">🕘</span>
              <div>
                <strong>Horario de atención</strong>
                <span>Lunes a sábado, coordinando cita previa por WhatsApp.</span>
              </div>
            </div>

            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: "100%", marginTop: 8 }}>
              Contáctanos por WhatsApp
            </a>
          </div>

          <div className="contact-form-card card">
            <h3>Solicita tu asesoría gratuita</h3>

            {sent && (
              <p className="form-success">
                ¡Gracias! Se abrió WhatsApp con tu mensaje listo para enviar. Si no se abrió,
                escríbenos directamente al {WHATSAPP_DISPLAY}.
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Nombre completo</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} />
              </div>

              <div className="form-field">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
              </div>

              <div className="form-field">
                <label htmlFor="service">Servicio de interés</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Selecciona un servicio</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Cuéntanos tu caso</label>
                <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                Solicitar Asesoría Gratuita
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
