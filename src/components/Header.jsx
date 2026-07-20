import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { NAV_LINKS, whatsappLink } from "../siteData";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <Logo variant="light" />
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${open ? "is-open" : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary nav-cta"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar asesoría
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
