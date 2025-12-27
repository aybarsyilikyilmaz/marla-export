import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import { useLanguage } from "../context/useLanguage";

export default function Header() {
  const { isEnglish, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <div className="header-logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Marla Export" className="logo" />
          </NavLink>
        </div>

        {/* HAMBURGER (MOBILE ONLY) */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/how-it-works" onClick={closeMenu}>
            {isEnglish ? "How It Works?" : "Nasıl Çalışıyoruz?"}
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            {isEnglish ? "About Us" : "Hakkımızda"}
          </NavLink>

          <NavLink to="/chairman" onClick={closeMenu}>
            {isEnglish ? "Chairman’s Message" : "Başkanın Mesajı"}
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            {isEnglish ? "Contact" : "İletişim"}
          </NavLink>

          <NavLink to="/policies" onClick={closeMenu}>
            {isEnglish ? "Policies" : "Politikalarımız"}
          </NavLink>

          {/* LANGUAGE SWITCH */}
          <div
            className={`lang-switch ${isEnglish ? "en" : "tr"}`}
            onClick={toggleLanguage}
          >
            <span>TR</span>
            <span>EN</span>
          </div>
        </nav>

      </div>
    </header>
  );
}
