import "./About.css";
import { useLanguage } from "../context/useLanguage";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about">
      {/* Background video */}
      <video className="about-video" autoPlay muted loop playsInline>
        <source src="/flag.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="about-overlay" />

      {/* Content */}
      <div className="about-content">
        <h1 className="about-title">{t("about.title")}</h1>

        <p className="about-text">{t("about.p1")}</p>
        <p className="about-text">{t("about.p2")}</p>
        <p className="about-text">{t("about.p3")}</p>

        <div className="about-divider" />

        <p className="about-emphasis">{t("about.closing")}</p>
      </div>
    </section>
  );
}
