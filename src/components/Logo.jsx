import icono from "../assets/images/logo/icono.png";
import logoBlanco from "../assets/images/logo/logoblanco.png";

const Logo = ({ variant = "dark", className = "" }) => {
  const isLight = variant === "light";

  if (isLight) {
    return (
      <span className={`logo ${className}`}>
        <img src={logoBlanco} alt="Avitare Construcciones" className="logo-full-img" />
      </span>
    );
  }

  return (
    <span className={`logo ${className}`}>
      <img src={icono} alt="" className="logo-icon-img" aria-hidden="true" />
      <span className="logo-text">
        <strong style={{ color: "#10203a" }}>AVITARE</strong>
        <span style={{ color: "#f5821f" }}>CONSTRUCCIONES</span>
      </span>
    </span>
  );
};

export default Logo;
