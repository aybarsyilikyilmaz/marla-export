import { useEffect, useRef, useState } from "react";
import "./Section3.css";
import { useLanguage } from "../context/useLanguage";

export default function Section3() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);

  const [refCount, setRefCount] = useState(0);
  const [partnerCount, setPartnerCount] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let r = 0, p = 0, s = 0;

    const interval = setInterval(() => {
      if (r < 70) setRefCount(++r);
      if (p < 50) setPartnerCount(++p);
      if (s < 97) setSatisfaction(++s);

      if (r >= 70 && p >= 50 && s >= 97) {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <section ref={sectionRef} className="section3">
      <div className="section3-left">
        <h2 className="section3-title">
          {lang === "tr" ? "Sizi neler bekliyor?" : "What Awaits You?"}
        </h2>
      </div>

      <div className="section3-right">
        <div className="stat-box">
          <span className="stat-value glow">{refCount}+</span>
          <span className="stat-label">
            {lang === "tr" ? "Referans" : "References"}
          </span>
        </div>

        <div className="stat-box">
          <span className="stat-value glow">{partnerCount}+</span>
          <span className="stat-label">
            {lang === "tr" ? "Ortaklık" : "Partnerships"}
          </span>
        </div>

        <div className="stat-box">
          <span className="stat-value glow">%{satisfaction}</span>
          <span className="stat-label">
            {lang === "tr" ? "Memnuniyet Oranı" : "Satisfaction Rate"}
          </span>
        </div>
      </div>
    </section>
  );
}
