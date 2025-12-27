import "./Contact.css";
import { useLanguage } from "../context/useLanguage";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact">
      <h1 className="contact-title fade-up">
        {t("contact.title")}
      </h1>

      <p className="contact-intro fade-up delay-1">
        {t("contact.intro")}
      </p>

      <div className="contact-cards">
        <div className="contact-card fade-up delay-2">
          <span className="contact-label">
            {t("contact.phoneLabel")}
          </span>
          <a href="tel:+905306683143" className="contact-value">
            +90 530 668 31 43
          </a>
        </div>

        <div className="contact-card fade-up delay-3">
          <span className="contact-label">
            {t("contact.emailLabel")}
          </span>
          <a
            href="mailto:info@marlaexport.com"
            className="contact-value"
          >
            info@marlaexport.com
          </a>
        </div>

        <div className="contact-card fade-up delay-4">
          <span className="contact-label">
            {t("contact.locationLabel")}
          </span>
          <span className="contact-value muted">
            İstanbul, Türkiye
          </span>
        </div>
      </div>
    </section>
  );
}
