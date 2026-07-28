"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import styles from "./page.module.css";
import CountUp from "@/components/CountUp";
import { TEAM_MEMBERS, TeamMember } from "@/constants/team";

type Language = "en" | "es" | "ar";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sync language selection for RTL layout direction toggling
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (
      savedLang &&
      (savedLang === "en" || savedLang === "es" || savedLang === "ar")
    ) {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
        alert("There was an issue submitting the form. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("There was an issue submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems: FAQItem[] = [
    {
      question: "How to choose the right lawyer?",
      answer:
        "Our personal injury attorneys have recovered millions of dollars on verdicts and settlements. If you have been injured in Houston, contact our law firm for a free consultation.",
    },
    {
      question: "What should I do if I have been injured in a car accident?",
      answer:
        "Seek medical attention immediately, report the accident to the police, collect witness information, document the scene with photos, and contact an experienced personal injury attorney before speaking with any insurance adjusters.",
    },
    {
      question: "What can I get of my free consultation?",
      answer:
        "In your free consultation, we will review the details of your incident, analyze the liability and insurance coverage, estimate your case's potential value, and outline your legal options with no upfront fees.",
    },
    {
      question: "How much does it cost to hire an attorney?",
      answer:
        "We work on a contingency fee basis. This means you pay nothing unless we recover compensation for you. Our fees are paid as a percentage of the final settlement or verdict.",
    },
  ];

  const isRtl = lang === "ar";

  return (
    <div className={styles.container} dir={isRtl ? "rtl" : "ltr"}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className={styles.main}>
        {/* Cinematic Hero Section */}
        <HeroSection />

        {/* Who We Are Section */}
        <section id="about" className={styles.whoWeAre}>
          <div className={styles.whoContainer}>
            <div className={styles.whoText}>
              <h2 className={styles.whoHeading}>Who We Are</h2>
              <div className={styles.whoDivider} />
              <p className={styles.whoParagraph}>
                <strong>Aqrawi & Associates</strong> is a trusted personal injury and litigation law firm dedicated to protecting the rights of individuals and families who have been harmed by the negligence or wrongdoing of others.
                <br /><br />
                Our experienced attorneys handle a wide range of personal injury cases, including automobile accidents, workplace injuries, slip-and-fall incidents, medical malpractice, and other serious injury claims. We represent clients throughout every stage of the legal process, from the initial investigation and settlement negotiations to filing lawsuits and representing clients in court.
                <br /><br />
                Our firm is fully prepared to litigate cases when a fair settlement cannot be reached. Our attorneys develop strong legal strategies, gather and present evidence, take depositions, negotiate with insurance companies, and advocate for our clients before judges and juries. We are committed to pursuing the maximum compensation available for medical expenses, lost wages, pain and suffering, and other damages.
                <br /><br />
                Aqrawi & Associates is also proud of the diversity of our team. Our multilingual employees assist clients in English, Arabic, Spanish, Kurdish, Urdu, and other languages. This allows us to serve clients from many cultural backgrounds and ensures that they clearly understand their legal rights, options, and the progress of their cases.
                <br /><br />
                We believe every client deserves clear communication, personalized attention, and strong legal representation from a law firm they can trust.
                <br /><br />
                <strong>There are no upfront attorney’s fees for personal injury cases. You do not pay attorney’s fees unless we win your case.</strong>
                <br /><br />
                <span style={{ color: "#bf953f", fontWeight: 700 }}>Integrity. Compassion. Results.</span>
                <br />
                <strong>No Fees Unless We Win. We Got Your Back!</strong>
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
                <div className={styles.signatureTitle}>
                  <div>WALAT AQRAWI</div>
                  <div className={styles.signatureSub}>Founder</div>
                </div>
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
            <h2 className={styles.servicesTitle}>Our Services</h2>

            <div className={styles.servicesGrid}>
              {/* Item 1: CAR ACCIDENTS */}
              <a href="/services#01" className={styles.serviceItem}>
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
                <span className={styles.serviceLabel}>Car Accidents</span>
              </a>

              {/* Item 2: TRUCK ACCIDENTS */}
              <a href="/services#02" className={styles.serviceItem}>
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
                <span className={styles.serviceLabel}>Truck Accidents</span>
              </a>

              {/* Item 3: MOTOR CYCLES ACCIDENTS */}
              <a href="/services#03" className={styles.serviceItem}>
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
                  Motorcycle Accidents
                </span>
              </a>

              {/* Item 4: MEDICAL MALPRACTICE */}
              <a href="/services#06" className={styles.serviceItem}>
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
                <span className={styles.serviceLabel}>Medical Malpractice</span>
              </a>

              {/* Item 5: SLIP AND FALL */}
              <a href="/services#04" className={styles.serviceItem}>
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
                <span className={styles.serviceLabel}>Slip And Fall</span>
              </a>

              {/* Item 6: PLANT ACCIDENTS */}
              <a href="/services#05" className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Industrial Plant / Factory outline */}
                    <rect
                      x="25"
                      y="20"
                      width="50"
                      height="65"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                    />
                    <rect x="35" y="30" width="10" height="10" fill="#bf953f" />
                    <rect x="55" y="30" width="10" height="10" fill="#bf953f" />
                    <rect x="35" y="48" width="10" height="10" fill="#bf953f" />
                    <rect x="55" y="48" width="10" height="10" fill="#bf953f" />
                    <rect x="44" y="66" width="12" height="19" fill="#bf953f" />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>Plant Accidents</span>
              </a>

              {/* Item 7: WORKPLACE-RELATED INJURIES */}
              <a href="/services#07" className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Hard hat / Safety Helmet */}
                    <path
                      d="M22 55 C22 35, 78 35, 78 55 Z"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                      fill="none"
                    />
                    <rect
                      x="16"
                      y="55"
                      width="68"
                      height="8"
                      rx="3"
                      fill="#bf953f"
                    />
                    <path d="M50 35 L50 55" stroke="#bf953f" strokeWidth="4" />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>
                  Workplace-Related Injuries
                </span>
              </a>

              {/* Item 8: ANIMAL-RELATED INJURIES, INCLUDING DOG BITES */}
              <a href="/services#08" className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Shield with Paw icon */}
                    <path
                      d="M50 18 L78 32 L78 60 C78 74 50 86 50 86 C50 86 22 74 22 60 L22 32 Z"
                      stroke="#bf953f"
                      strokeWidth="4.5"
                      fill="none"
                    />
                    <circle cx="50" cy="46" r="6" fill="#bf953f" />
                    <circle cx="38" cy="38" r="3.5" fill="#bf953f" />
                    <circle cx="62" cy="38" r="3.5" fill="#bf953f" />
                    <circle cx="34" cy="52" r="3.5" fill="#bf953f" />
                    <circle cx="66" cy="52" r="3.5" fill="#bf953f" />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>
                  Animal-Related Injuries
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <div className={styles.faqTitleContainer}>
              <div className={styles.faqTitleDivider} />
              <h2 className={styles.faqHeading}>
                Why
                <br />
                Choose Us
              </h2>
              <div className={styles.faqTitleDivider} />
            </div>

            <div className={styles.accordionList}>
              {faqItems.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={styles.accordionItem}>
                    <div
                      className={`${styles.accordionHeader} ${isOpen ? styles.accordionHeaderActive : ""}`}
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                    >
                      <span>{item.question}</span>
                      <span className={styles.accordionIcon}>
                        {isOpen ? "▴" : "▾"}
                      </span>
                    </div>
                    <div
                      className={`${styles.accordionContent} ${isOpen ? styles.accordionContentShow : ""}`}
                    >
                      <p>{item.answer}</p>
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
                <CountUp end={10000} suffix="+" />
              </div>
              <div className={styles.statLabel}>Client Consultations</div>
            </div>
            <div className={styles.statCol}>
              <div className={styles.statNum}>
                <CountUp end={7000} suffix="+" />
              </div>
              <div className={styles.statLabel}>Clients Served</div>
            </div>
            <div className={styles.statCol}>
              <div className={styles.statNum}>$0</div>
              <div className={styles.statLabel}>Consultation Cost</div>
            </div>
          </div>
        </section>

        {/* Badge Logos Section */}
        <section className={styles.badgeSection}>
          <div className={styles.badgeContainer}>
            <div className={styles.affLogosWrapper}>
              <img
                src="/images/home-page/afflogos.webp"
                alt="Aqrawi & Associates Affiliations and Memberships"
                className={styles.affLogosImg}
              />
              <img
                src="/images/home-page/newaffiliation.jpeg"
                alt="Aqrawi & Associates New Affiliation Logo"
                className={styles.newAffLogoImg}
              />
            </div>
          </div>
        </section>

        {/* Call to Action (CTA) Banner Section */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaText}>
              &ldquo;Call us today for a FREE and confidential consultation. Our
              team are here to support you and fight for your rights.&rdquo;
            </h2>
            <button
              className={styles.ctaBtn}
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </button>
          </div>
        </section>

        {/* Attorneys Profile Section */}
        <section id="about-us" className={styles.attorneysSection}>
          <div className={styles.attorneysContainer}>
            <h2 className={styles.attorneysHeading}>Partners</h2>
            <div className={styles.attorneysDivider} />

            <div className={styles.attorneysGrid}>
              {TEAM_MEMBERS.filter(
                (member) => member.category === "partners",
              ).map((member) => (
                <div
                  key={member.id}
                  className={styles.attorneyCard}
                  onClick={() => setSelectedMember(member)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={styles.attorneyPhoto}
                    style={{ overflow: "hidden" }}
                  >
                    <img
                      src={member.image}
                      alt={`${member.name} headshot`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition:
                          member.id === "walat-aqrawi"
                            ? "center 12%"
                            : "center top",
                      }}
                    />
                  </div>
                  <h3 className={styles.attorneyName}>{member.name}</h3>
                  <span className={styles.attorneyTitle}>
                    {member.position}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Settlement Results Section */}
        <section className={styles.settlementsSection}>
          <div className={styles.settlementsContainer}>
            <h2 className={styles.settlementsHeading}>
              Major Settlement Results
            </h2>
            <p className={styles.settlementsSubtitle}>
              Our experienced personal injury attorneys have recovered millions
              of dollars for injury victims across Texas through aggressive
              trial representation and strategic negotiation.
            </p>

            <div className={styles.settlementsGrid}>
              {/* Result 1 */}
              <div className={styles.settlementCard}>
                <span className={styles.settlementBadge}>
                  Individual Settlement
                </span>
                <div className={styles.settlementAmount}>
                  Exceeding $4 Million
                </div>
                <h3 className={styles.settlementCategory}>
                  Medical Malpractice & Severe Injury
                </h3>
                <p className={styles.settlementDesc}>
                  Achieved as co-counsel in a complex medical malpractice trial
                  verdict representing an injured client against corporate
                  healthcare providers.
                </p>
              </div>

              {/* Result 2 */}
              <div className={styles.settlementCard}>
                <span className={styles.settlementBadge}>
                  Individual Settlement
                </span>
                <div className={styles.settlementAmount}>
                  Exceeding $3 Million
                </div>
                <h3 className={styles.settlementCategory}>
                  Catastrophic Personal Injury
                </h3>
                <p className={styles.settlementDesc}>
                  Secured in high-stakes personal injury litigation to cover
                  lifetime medical expenses, lost earnings, and recovery
                  damages.
                </p>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className={styles.disclaimerBox}>
              <p className={styles.disclaimerText}>
                * <strong>Legal Disclaimer:</strong> The case results and
                settlement amounts displayed above represent past individual
                results achieved by our attorneys. Previous results do not
                guarantee, warrant, or predict a similar outcome in any future
                legal matter. Every case is unique and must be evaluated on its
                own factual and legal merits.
              </p>
            </div>
          </div>
        </section>

        {/* Contact/Case Evaluation Section */}
        <section id="contact" className={styles.contactSectionNew}>
          <div className={styles.contactGrid}>
            {/* Left Column: Form */}
            <div className={styles.contactText}>
              <h2 className={styles.infoHeading} style={{ color: "#d4af37" }}>
                Contact Us
              </h2>
              <p
                className={styles.whoParagraph}
                style={{ marginBottom: "32px" }}
              >
                At <strong>Aqrawi and Associates law firm</strong>, we
                understand the impact that a personal injury can have on your
                life. That's why we're here to help you get back on track. With
                years of experience and a dedicated team of personal injury
                lawyers, we know what it takes to win.
              </p>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                {isSubmitted && (
                  <div
                    className={styles.submitSuccess}
                    style={{ marginBottom: "16px" }}
                  >
                    ✓ Thank you! Your case details have been sent. We will reach
                    out shortly.
                  </div>
                )}

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="Your name"
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
                  placeholder="Your email"
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
                  placeholder="Your phone"
                  disabled={isSubmitting}
                />

                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  placeholder="Your message"
                  required
                  disabled={isSubmitting}
                />

                <button type="submit" className={styles.formSubmitBtn}>
                  {isSubmitting ? "..." : "Send →"}
                </button>
              </form>
            </div>

            {/* Right Column: Give Us A Call */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoHeading}>Give Us A Call</h2>
              <p
                className={styles.whoParagraph}
                style={{ marginBottom: "36px" }}
              >
                If you've been involved in a personal injury, the team at{" "}
                <strong>Aqrawi and Associates</strong> law firm is here to help.
                We understand that the aftermath of an accident can be
                overwhelming and stressful, which is why we offer free
                consultations to anyone in need of legal advice. During this
                consultation, you'll have the opportunity to discuss the details
                of your case with one of our knowledgeable personal injury
                lawyers. They'll listen to your story, answer any questions you
                may have, and help you understand your rights and options. Our
                goal is to provide you with the support and guidance you need
                during this difficult time, so don't hesitate to reach out to
                us. Call us today at <strong>713-757-7777</strong> to schedule
                your <strong>FREE CONSULTATION</strong>.
              </p>

              <span className={styles.phoneLabel}>Available at 9am to 6pm</span>
              <a href="tel:7137577777" className={styles.phoneNum}>
                713-757-7777
              </a>

              <div className={styles.socialLinks}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBox}
                  aria-label="Facebook"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBox}
                  aria-label="Instagram"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBox}
                  aria-label="LinkedIn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBox}
                  aria-label="Twitter / X"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Attorney Bio Modal Overlay */}
      {selectedMember && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedMember(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseBtn}
              onClick={() => setSelectedMember(null)}
              aria-label="Close bio"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className={styles.modalBody}>
              <div className={styles.modalPhotoContainer}>
                <div className={styles.modalPhoto}>
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className={styles.modalInfo}>
                <h3 className={styles.modalName}>{selectedMember.name}</h3>
                <span className={styles.modalTitle}>
                  {selectedMember.position}
                </span>
                <div className={styles.modalDivider} />
                <div className={styles.modalBio}>
                  {selectedMember.bio.split("\n\n").map((para, index) => (
                    <p key={index} className={styles.modalBioParagraph}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
