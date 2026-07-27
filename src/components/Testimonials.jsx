import { TESTIMONIALS } from "../siteData";

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const QuoteMark = () => (
  <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M14.2 0 8.6 12.4H14v13.4H0V13.6L6.6 0h7.6Zm19.5 0-5.6 12.4h5.4v13.4H19.5V13.6L26.1 0h7.6Z"
      fill="currentColor"
    />
  </svg>
);

const Testimonials = () => (
  <section className="section testimonials-section">
    <div className="container">
      <div className="section-header reveal">
        <p className="eyebrow">Lo que dicen nuestros clientes</p>
        <h2>Confianza construida con resultados</h2>
        <p>Estas son experiencias reales de personas que ya protegieron su patrimonio con nosotros.</p>
      </div>
      <div className="testimonial-grid">
        {TESTIMONIALS.map((item, i) => (
          <div
            className="testimonial-card card reveal"
            key={`${item.name}-${i}`}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <span className="testimonial-quote-mark">
              <QuoteMark />
            </span>
            <div className="testimonial-stars" aria-label={`${item.rating} de 5 estrellas`}>
              {Array.from({ length: 5 }).map((_, star) => (
                <StarIcon key={star} filled={star < item.rating} />
              ))}
            </div>
            <p className="testimonial-text">“{item.quote}”</p>
            <div className="testimonial-author">
              <span className="testimonial-avatar" aria-hidden="true">
                {item.name.charAt(0)}
              </span>
              <div>
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-service">{item.service}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
