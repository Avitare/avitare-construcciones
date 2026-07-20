import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./SocialIcons";
import { NAV_LINKS, SOCIAL_LINKS, WHATSAPP_DISPLAY, whatsappLink } from "../siteData";

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo variant="light" />
          <p>Gestión técnica y asesoría especializada para propietarios, inversionistas y empresas en Chiclayo.</p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>Chiclayo, Perú</li>
          </ul>
          <div className="social-links">
            {SOCIAL_LINKS.map(({ name, url, icon }) => {
              const Icon = SOCIAL_ICONS[icon];
              return (
                <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} className="social-icon">
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} Avitare Construcciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
