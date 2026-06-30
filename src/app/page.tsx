"use client";

import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import CountUp from "@/components/CountUp";
import { TRANSLATIONS, Language } from "@/constants/translations";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Translation State
  const [lang, setLang] = useState<Language>("en");

  // Sync language with localStorage and navbar changes
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "es" || savedLang === "ar")) {
      setLang(savedLang);
    }

    const handleLangChange = (e: any) => {
      setLang(e.detail);
    };
    window.addEventListener("languageChange" as any, handleLangChange);
    return () => {
      window.removeEventListener("languageChange" as any, handleLangChange);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", phone: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert(t.contactError);
      }
    } catch (err) {
      console.error(err);
      alert(t.contactError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const t = TRANSLATIONS[lang].home;
  const isRtl = TRANSLATIONS[lang].dir === "rtl";

  return (
    <div className={styles.container} dir={isRtl ? "rtl" : "ltr"}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className={styles.main}>
        {/* Centered Hero Section */}
        <section className={`${styles.hero} animate-fade-in`}>
          <Logo size={240} showText={true} centerText={true} />
          <h1 className={styles.heroTitle}>{t.heroTitle}</h1>
          <p className={styles.heroQuote}>
            {t.heroQuote}
          </p>
          <p className={styles.heroAuthor}>{t.heroAuthor}</p>
        </section>

        {/* Who We Are Section */}
        <section id="about" className={styles.whoWeAre}>
          <div className={styles.whoContainer}>
            <div className={styles.whoText}>
              <h2 className={styles.whoHeading}>{t.whoTitle}</h2>
              <div className={styles.whoDivider} />
              <p className={styles.whoParagraph}>
                {t.whoParagraph}
              </p>
              <div className={styles.signatureContainer}>
                <span className={styles.signatureLabel}>Walat</span>
                <img
                  src="/images/home-page/signature.webp"
                  alt="Walat Aqrawi Signature"
                  style={{
                    position: "absolute",
                    left: isRtl ? "auto" : "10px",
                    right: isRtl ? "10px" : "auto",
                    top: "30px",
                    height: "75px",
                    width: "auto",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
                <div className={styles.signatureTitle}>{t.whoSignatureTitle}</div>
              </div>
            </div>
            <div className={styles.whoImageContainer}>
              <div className={styles.whoImageWrapper}>
                <img
                  src="/images/home-page/who-we-are.webp"
                  alt="Aqrawi & Associates attorneys"
                  className={styles.whoImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className={styles.ourServices}>
          {/* Plexus Network Background */}
          <svg
            className={styles.plexusBg}
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
          >
            <path
              d="M100,50 L250,120 L400,80 L550,150 L700,90 L850,180 L1000,100 L1200,160 M250,120 L300,280 L450,320 L550,150 M700,90 L680,250 L850,300 L850,180 M1000,100 L1100,240 L1250,220 M300,280 L150,380 L350,450 L450,320 M680,250 L580,380 L750,420 L850,300 M1100,240 L1000,380 L1150,440 L1250,220 M150,380 L200,520 L400,550 M580,380 L620,530 L800,550 M1000,380 L1050,520 L1200,540"
              stroke="#bf953f"
              strokeWidth="0.6"
              strokeLinecap="round"
              strokeDasharray="5 5"
              fill="none"
              opacity="0.25"
            />
          </svg>

          <div className={styles.servicesContainer}>
            <h2 className={styles.servicesTitle}>{t.servicesTitle}</h2>

            <div className={styles.servicesGrid}>
              {/* Item 1: CAR ACCIDENTS */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Road line */}
                    <path
                      d="M10 68 L90 68"
                      stroke="#bf953f"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    {/* Car Body */}
                    <path
                      d="M38 60 L45 42 Q47 38 52 38 L78 38 Q84 38 87 43 L94 60 L96 60 Q98 60 98 62 L98 70 Q98 72 96 72 L90 72 L90 68 Q90 64 85 64 Q80 64 80 68 L80 72 L50 72 L50 68 Q50 64 45 64 Q40 64 40 68 L40 72 L38 72 Z"
                      fill="#bf953f"
                    />
                    <circle
                      cx="45"
                      cy="72"
                      r="5"
                      fill="#ffffff"
                      stroke="#bf953f"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx="85"
                      cy="72"
                      r="5"
                      fill="#ffffff"
                      stroke="#bf953f"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>{t.servicesList.car}</span>
              </div>

              {/* Item 2: TRUCK ACCIDENTS */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Truck Body */}
                    <path d="M15 30 L65 30 L65 70 L15 70 Z" fill="#bf953f" />
                    {/* Cabin */}
                    <path
                      d="M65 42 L80 42 L90 55 L90 70 L65 70 Z"
                      fill="#bf953f"
                    />
                    {/* Wheels */}
                    <circle
                      cx="30"
                      cy="74"
                      r="7"
                      fill="#ffffff"
                      stroke="#bf953f"
                      strokeWidth="3"
                    />
                    <circle
                      cx="53"
                      cy="74"
                      r="7"
                      fill="#ffffff"
                      stroke="#bf953f"
                      strokeWidth="3"
                    />
                    <circle
                      cx="78"
                      cy="74"
                      r="7"
                      fill="#ffffff"
                      stroke="#bf953f"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>{t.servicesList.truck}</span>
              </div>

              {/* Item 3: MOTOR CYCLES ACCIDENTS */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Wheels */}
                    <circle
                      cx="25"
                      cy="65"
                      r="11"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                    />
                    <circle
                      cx="75"
                      cy="65"
                      r="11"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                    />
                    {/* Body frame */}
                    <path
                      d="M25 65 L45 45 L65 45 L75 65 M45 45 L35 30 L25 30 M65 45 L70 30 L80 30 M45 45 L55 65"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Seat */}
                    <path
                      d="M40 40 L55 40"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>
                  {t.servicesList.motorcycle}
                </span>
              </div>

              {/* Item 4: MEDICAL MALPRACTICE */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Briefcase */}
                    <rect
                      x="20"
                      y="32"
                      width="60"
                      height="46"
                      rx="5"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                    />
                    {/* Handle */}
                    <path
                      d="M40 32 L40 22 Q40 20 42 20 L58 20 Q60 20 60 22 L60 32"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    {/* Red Cross */}
                    <path
                      d="M50 43 L50 67 M38 55 L62 55"
                      stroke="#bf953f"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>{t.servicesList.medical}</span>
              </div>

              {/* Item 5: SLIP AND FALL */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Head */}
                    <circle cx="55" cy="22" r="5.5" fill="#bf953f" />
                    {/* Spine */}
                    <path
                      d="M52 28 L40 48"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    {/* Left Leg */}
                    <path
                      d="M40 48 L22 55 L15 48"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Right Leg */}
                    <path
                      d="M40 48 L50 68 L65 72"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Arms */}
                    <path
                      d="M48 34 L32 28 M48 34 L62 38"
                      stroke="#bf953f"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    {/* Slip marks */}
                    <path
                      d="M15 62 Q25 65 35 60 M22 68 Q30 70 38 66"
                      stroke="#bf953f"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>{t.servicesList.slip}</span>
              </div>

              {/* Item 6: WORK PLACE INJURY */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Building outline */}
                    <rect
                      x="25"
                      y="20"
                      width="50"
                      height="65"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                    />
                    {/* Windows */}
                    <rect x="35" y="30" width="10" height="10" fill="#bf953f" />
                    <rect x="55" y="30" width="10" height="10" fill="#bf953f" />
                    <rect x="35" y="48" width="10" height="10" fill="#bf953f" />
                    <rect x="55" y="48" width="10" height="10" fill="#bf953f" />
                    {/* Door */}
                    <rect x="44" y="66" width="12" height="19" fill="#bf953f" />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>{t.servicesList.work}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <div className={styles.faqTitleContainer}>
              <div className={styles.faqTitleDivider} />
              <h2 className={styles.faqHeading}>
                {t.faqTitle}
                <br />
                {t.faqTitleSub}
              </h2>
              <div className={styles.faqTitleDivider} />
            </div>

            <div className={styles.accordionList}>
              {t.faqs.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={styles.accordionItem}>
                    <div
                      className={`${styles.accordionHeader} ${isOpen ? styles.accordionHeaderActive : ""}`}
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                    >
                      <span>{item.q}</span>
                      <span className={styles.accordionIcon}>
                        {isOpen ? "▴" : "▾"}
                      </span>
                    </div>
                    <div
                      className={`${styles.accordionContent} ${isOpen ? styles.accordionContentShow : ""}`}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsContainer}>
            <div className={styles.statCol}>
              <div className={styles.statNum}>
                <CountUp end={5000} suffix="+" />
              </div>
              <div className={styles.statLabel}>{t.statsConsultations}</div>
            </div>
            <div className={styles.statCol}>
              <div className={styles.statNum}>
                <CountUp end={90} suffix="%" />
              </div>
              <div className={styles.statLabel}>{t.statsSuccess}</div>
            </div>
          </div>
        </section>

        {/* Badge Logos Section */}
        <section className={styles.badgeSection}>
          <div className={styles.badgeContainer}>
            {/* Seal 1: State Bar of Texas */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 100 100" width="70" height="70" fill="none">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="#444444"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#444444"
                  strokeWidth="1"
                />
                <polygon
                  points="50,28 55,40 68,40 58,48 62,60 50,52 38,60 42,48 32,40 45,40"
                  fill="#444444"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="43"
                  stroke="#444444"
                  strokeWidth="0.5"
                  strokeDasharray="3 3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="18"
                  stroke="#444444"
                  strokeWidth="1"
                />
                <path
                  d="M 50 16 A 34 34 0 0 1 84 50"
                  stroke="none"
                  id="texasTextPath"
                />
                <text fontSize="5.5" fontWeight="800" fill="#444444">
                  <textPath
                    href="#texasTextPath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    STATE BAR OF TEXAS
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Seal 2: Top 10 Attorney */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 100 100" width="75" height="75" fill="none">
                <path d="M35,65 L30,90 L50,80 L70,90 L65,65" fill="#a03030" />
                <path d="M40,65 L35,88 L50,79 L65,88 L60,65" fill="#c04040" />
                <circle cx="50" cy="45" r="32" fill="#bf953f" />
                <circle cx="50" cy="45" r="28" fill="#ffffff" />
                <circle cx="50" cy="45" r="26" fill="#bf953f" />
                <text
                  x="50"
                  y="42"
                  fontFamily="var(--font-sans)"
                  fontSize="8.5"
                  fontWeight="900"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  TOP 10
                </text>
                <text
                  x="50"
                  y="52"
                  fontFamily="var(--font-sans)"
                  fontSize="5"
                  fontWeight="800"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  ATTORNEY
                </text>
              </svg>
            </div>

            {/* Seal 3: Top 40 Under 40 */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 80 80" width="70" height="70" fill="none">
                <rect
                  x="5"
                  y="5"
                  width="70"
                  height="70"
                  rx="3"
                  fill="#0f2b4c"
                  stroke="#bf953f"
                  strokeWidth="3"
                />
                <rect
                  x="8"
                  y="8"
                  width="64"
                  height="64"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="1"
                />
                <text
                  x="40"
                  y="24"
                  fontFamily="var(--font-sans)"
                  fontSize="5.5"
                  fontWeight="800"
                  fill="#d4af37"
                  textAnchor="middle"
                  letterSpacing="0.3"
                >
                  AMERICAN ACADEMY
                </text>
                <text
                  x="40"
                  y="38"
                  fontFamily="var(--font-sans)"
                  fontSize="10.5"
                  fontWeight="900"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  TOP 40
                </text>
                <text
                  x="40"
                  y="50"
                  fontFamily="var(--font-sans)"
                  fontSize="7"
                  fontWeight="900"
                  fill="#d4af37"
                  textAnchor="middle"
                >
                  UNDER 40
                </text>
                <text
                  x="40"
                  y="62"
                  fontFamily="var(--font-sans)"
                  fontSize="5"
                  fontWeight="700"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  ATTORNEYS
                </text>
              </svg>
            </div>

            {/* Seal 4: Saudi in Houston Circular Badge */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 100 100" width="70" height="70" fill="none">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="#1b5e20"
                  stroke="#bf953f"
                  strokeWidth="2.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
                <path
                  d="M50,22 L50,44 M47,27 Q41,23 37,25 Q44,28 48,31 M53,27 Q59,23 63,25 Q56,28 52,31 M48,34 Q42,31 36,35 Q44,37 48,39 M52,34 Q58,31 64,35 Q56,37 52,39"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M35,63 L65,63 M38,68 L42,58 L62,58 L66,68"
                  stroke="#bf953f"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M36,65 C40,55 45,55 47,55 M64,65 C60,55 55,55 53,55"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <text
                  x="50"
                  y="78"
                  fontFamily="var(--font-sans)"
                  fontSize="4"
                  fontWeight="800"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  HOUSTON
                </text>
              </svg>
            </div>

            {/* Seal 5: American Institute */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 100 100" width="75" height="75" fill="none">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="#0f2b4c"
                  stroke="#bf953f"
                  strokeWidth="2"
                />
                <path
                  d="M25,50 Q28,30 42,26 M75,50 Q72,30 58,26"
                  stroke="#bf953f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <polygon
                  points="50,16 52,21 57,21 53,24 55,29 50,26 45,29 47,24 43,21 48,21"
                  fill="#bf953f"
                />
                <text
                  x="50"
                  y="42"
                  fontFamily="var(--font-sans)"
                  fontSize="5"
                  fontWeight="800"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  AMERICAN INSTITUTE
                </text>
                <text
                  x="50"
                  y="56"
                  fontFamily="var(--font-sans)"
                  fontSize="12"
                  fontWeight="900"
                  fill="#bf953f"
                  textAnchor="middle"
                >
                  10
                </text>
                <text
                  x="50"
                  y="66"
                  fontFamily="var(--font-sans)"
                  fontSize="4.5"
                  fontWeight="800"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  BEST LAW FIRMS
                </text>
              </svg>
            </div>

            {/* Seal 6: NLA */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 120 60" width="90" height="45" fill="none">
                <text
                  x="5"
                  y="38"
                  fontFamily="var(--font-sans)"
                  fontSize="32"
                  fontWeight="900"
                  fill="#888888"
                  letterSpacing="-1"
                >
                  NLA
                </text>
                <text
                  x="5"
                  y="50"
                  fontFamily="var(--font-sans)"
                  fontSize="5.5"
                  fontWeight="800"
                  fill="#666666"
                  letterSpacing="0.2"
                >
                  NATIONAL LAWYERS ASSOCIATION
                </text>
                <path
                  d="M92,20 L112,20 M102,15 L102,38 M95,20 L95,30 M109,20 L109,30 M91,30 Q95,33 99,30 M105,30 Q109,33 113,30"
                  stroke="#888888"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Call to Action (CTA) Banner Section */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaText}>
              {t.ctaText}
            </h2>
            <button
              className={styles.ctaBtn}
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.ctaBtn}
            </button>
          </div>
        </section>

        {/* Attorneys Profile Section */}
        <section id="about-us" className={styles.attorneysSection}>
          <div className={styles.attorneysContainer}>
            <h2 className={styles.attorneysHeading}>{t.attorneysTitle}</h2>
            <div className={styles.attorneysDivider} />

            <div className={styles.attorneysGrid}>
              {/* Profile 1: Walat Aqrawi */}
              <div className={styles.attorneyCard}>
                <div className={styles.attorneyPhoto} style={{ overflow: "hidden" }}>
                  <img
                    src="/images/headshots/Walat Aqrawi.webp"
                    alt="Walat Aqrawi headshot"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h3 className={styles.attorneyName}>Walat Aqrawi</h3>
                <span className={styles.attorneyTitle}>{t.attorneysWalatRole}</span>
              </div>

              {/* Profile 2: Aaron Aiken */}
              <div className={styles.attorneyCard}>
                <div className={styles.attorneyPhoto} style={{ overflow: "hidden" }}>
                  <img
                    src="/images/headshots/Aaron Aiken.webp"
                    alt="Aaron Aiken headshot"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h3 className={styles.attorneyName}>Aaron Aiken</h3>
                <span className={styles.attorneyTitle}>{t.attorneysAaronRole}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Case Evaluation Section */}
        <section id="contact" className={styles.contactSectionNew}>
          <div className={styles.contactGrid}>
            {/* Left Column: Form */}
            <div className={styles.contactText}>
              <h2 className={styles.infoHeading} style={{ color: "#d4af37" }}>
                {t.contactTitle}
              </h2>
              <p
                className={styles.whoParagraph}
                style={{ marginBottom: "32px" }}
              >
                {t.contactParagraph}
              </p>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                {isSubmitted && (
                  <div
                    className={styles.submitSuccess}
                    style={{ marginBottom: "16px" }}
                  >
                    {t.contactSuccess}
                  </div>
                )}

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder={t.contactFormName}
                  required
                  disabled={isSubmitting}
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder={t.contactFormEmail}
                  required
                  disabled={isSubmitting}
                />

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder={t.contactFormPhone}
                  disabled={isSubmitting}
                />

                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  placeholder={t.contactFormMessage}
                  required
                  disabled={isSubmitting}
                />

                <button type="submit" className={styles.formSubmitBtn}>
                  {isSubmitting ? "..." : t.contactFormBtn}
                </button>
              </form>
            </div>

            {/* Right Column: Give Us A Call */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoHeading}>{t.giveCallTitle}</h2>
              <p
                className={styles.whoParagraph}
                style={{ marginBottom: "36px" }}
              >
                {t.giveCallParagraph}
              </p>

              <span className={styles.phoneLabel}>{t.availableLabel}</span>
              <a href="tel:7137577777" className={styles.phoneNum}>
                713-757-7777
              </a>

              <div className={styles.socialLinks}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialBox} aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialBox} aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialBox} aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialBox} aria-label="Twitter / X">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
