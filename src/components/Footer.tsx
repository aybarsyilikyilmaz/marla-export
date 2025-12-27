import "./Footer.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      {/* ================= MAIN CONTENT ================= */}
      <div className="footer-inner">
        {/* BRAND */}
        <div className="footer-brand">
          <h3 className="footer-logo">MARLA EXPORT</h3>
          <p className="footer-slogan">
            {t("footer.slogan")}
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>{t("footer.linksTitle")}</h4>
          <ul>
            <li>
              <Link to="/about">{t("footer.about")}</Link>
            </li>
            <li>
              <Link to="/how-it-works">{t("footer.howItWorks")}</Link>
            </li>
            <li>
              <Link to="/chairman">{t("footer.chairman")}</Link>
            </li>
            <li>
              <Link to="/policies">{t("footer.policies")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("footer.contact")}</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-contact">
          <a href="mailto:info@marlaexport.com">
            info@marlaexport.com
          </a>
          <span>{t("footer.location")}</span>
          <span>{t("footer.business")}</span>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="footer-bottom">
  <span className="footer-copy">
    © {new Date().getFullYear()} Marla Export. All rights reserved.
  </span>

  <span className="footer-dev">
    Developed & Designed by{" "}
    <a
      href="https://www.wetase.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Wetase Yazılım
    </a>
  </span>
</div>

    </footer>
  );
}
