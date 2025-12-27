import "./Policies.css";
import { useLanguage } from "../context/useLanguage";

export default function Policies() {
  const { t } = useLanguage();

  return (
    <section className="policies">
      <h1 className="policies-title fade-up">
        {t("policies.title")}
      </h1>

      <div className="policies-list">
        <div className="policy-item fade-up delay-1">
          <h2>{t("policies.transparencyTitle")}</h2>
          <p>{t("policies.transparencyText")}</p>
        </div>

        <div className="policy-item fade-up delay-2">
          <h2>{t("policies.confidentialityTitle")}</h2>
          <p>{t("policies.confidentialityText")}</p>
        </div>

        <div className="policy-item fade-up delay-3">
          <h2>{t("policies.independenceTitle")}</h2>
          <p>{t("policies.independenceText")}</p>
        </div>

        <div className="policy-item fade-up delay-4">
          <h2>{t("policies.partnershipTitle")}</h2>
          <p>{t("policies.partnershipText")}</p>
        </div>

        <div className="policy-item fade-up delay-5">
          <h2>{t("policies.ethicsTitle")}</h2>
          <p>{t("policies.ethicsText")}</p>
        </div>
      </div>

      <div className="policies-signature fade-up delay-6">
        {t("policies.signature")}
      </div>
    </section>
  );
}
