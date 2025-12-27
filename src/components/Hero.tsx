import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  // Başlıkta satır kırmak için: çeviride "\n" kullanıyoruz
  const title = t("home.heroTitle");
  const lines = title.split("\n");

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>
          {lines.map((line: string, i: number) => (
            <span key={i}>
              {line}
              {i !== lines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <p>{t("home.heroDesc")}</p>

        <div className="hero-actions">
          <NavLink to="/how-it-works" className="btn primary">
            {t("home.btnHow")}
          </NavLink>

          <NavLink to="/contact" className="btn outline">
            {t("home.btnContact")}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
