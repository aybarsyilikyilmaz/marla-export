import "./Chairman.css";
import { useLanguage } from "../context/useLanguage";

export default function Chairman() {
  const { t } = useLanguage();

  return (
    <section className="chairman">
      <div className="chairman-container">
        
        {/* LEFT – TEXT */}
        <div className="chairman-text">
          <h1 className="chairman-title fade-up">
            {t("chairman.title")}
          </h1>

          <p className="fade-up delay-1">{t("chairman.p1")}</p>
          <p className="fade-up delay-2">{t("chairman.p2")}</p>
          <p className="fade-up delay-3">{t("chairman.p3")}</p>
          <p className="fade-up delay-4">{t("chairman.p4")}</p>

          <p className="chairman-closing fade-up delay-5">
            {t("chairman.closing")}
          </p>

          <div className="chairman-signature fade-up delay-6">
            {t("chairman.signature")}
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="chairman-image fade-up delay-2">
          <img
            src="ataturk.png"
            alt="Mustafa Kemal Atatürk"
          />
        </div>

      </div>
    </section>
  );
}
