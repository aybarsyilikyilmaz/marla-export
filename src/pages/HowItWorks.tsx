import "./HowItWorks.css";
import { useLanguage } from "../context/useLanguage";

export default function HowItWorks() {
  const { t, tl } = useLanguage();

  return (
    <section className="how">

      {/* ================= TITLE ================= */}
      <h1 className="how-title fade-up">
        {t("howItWorks.title")}
      </h1>

      {/* ================= INTRO ================= */}
      <div className="how-intro fade-up delay-1">
        {t("howItWorks.intro1")}
      </div>

      <div className="how-intro fade-up delay-2">
        {t("howItWorks.intro2")}
      </div>

      {/* ================= PROCESS TITLE ================= */}
      <h2 className="how-subtitle fade-up delay-3">
        {t("howItWorks.stepsTitle")}
      </h2>

      {/* ================= STEPS ================= */}
      <div className="how-steps">

        <div className="how-card fade-up delay-4">
          <h3>1. {t("howItWorks.step1Title")}</h3>
          <p>{t("howItWorks.step1Text")}</p>
        </div>

        <div className="how-card fade-up delay-5">
          <h3>2. {t("howItWorks.step2Title")}</h3>
          <p>{t("howItWorks.step2Text")}</p>
        </div>

        <div className="how-card fade-up delay-6">
          <h3>3. {t("howItWorks.step3Title")}</h3>
          <p>{t("howItWorks.step3Text")}</p>
        </div>

        <div className="how-card fade-up delay-7">
          <h3>4. {t("howItWorks.step4Title")}</h3>
          <p>{t("howItWorks.step4Text")}</p>
        </div>

        <div className="how-card fade-up delay-8">
          <h3>5. {t("howItWorks.step5Title")}</h3>
          <p>{t("howItWorks.step5Text")}</p>
        </div>

      </div>

      {/* ================= WHY US ================= */}
      <section className="why">

        <h2 className="why-title fade-up">
          {t("whyUs.title")}
        </h2>

        <ul className="why-list">
          {tl("whyUs.items").map((text, index) => (
            <li
              key={index}
              className="why-item fade-up"
              style={{ animationDelay: `${index * 0.12 + 0.3}s` }}
            >
              {text}
            </li>
          ))}
        </ul>

        <p
          className="why-closing fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          {t("whyUs.closing")}
        </p>

      </section>
    </section>
  );
}
