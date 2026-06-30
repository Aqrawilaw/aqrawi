"use client";

import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import styles from "./page.module.css";

interface ServiceTab {
  id: string;
  label: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("defense");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const faqItems = [
    {
      question: "How to choose the right lawyer?",
      answer: "Our personal injury attorneys have recovered millions of dollars on verdicts and settlements. If you have been injured in Houston, contact our law firm for a free consultation."
    },
    {
      question: "What should I do if I have been injured in a car accident?",
      answer: "Seek medical attention immediately, report the accident to the police, collect witness information, document the scene with photos, and contact an experienced personal injury attorney before speaking with any insurance adjusters."
    },
    {
      question: "What can I get of my free consultation?",
      answer: "In your free consultation, we will review the details of your incident, analyze the liability and insurance coverage, estimate your case's potential value, and outline your legal options with no upfront fees."
    },
    {
      question: "How much does it cost to hire an attorney?",
      answer: "We work on a contingency fee basis. This means you pay nothing unless we recover compensation for you. Our fees are paid as a percentage of the final settlement or verdict."
    }
  ];

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceTabs: ServiceTab[] = [
    {
      id: "defense",
      label: "Criminal Defense",
      tag: "State & Federal Defense",
      title: "Aggressive Criminal Defense Advocacy",
      description: "When your freedom is on the line, you need aggressive representation. We provide experienced counsel for individuals facing federal, state, felony, or misdemeanor charges.",
      features: ["Federal & State Charges", "DUI & Traffic Violations", "Felony & Misdemeanor Defense", "Post-Conviction Advocacy"],
    },
    {
      id: "injury",
      label: "Personal Injury",
      tag: "Accidents & Negligence",
      title: "Securing the Settlement You Deserve",
      description: "We represent individuals injured due to the negligence of others. Our firm fights tirelessly to recover damages for medical expenses, lost earnings, and pain and suffering.",
      features: ["Automobile & Truck Accidents", "Slip, Trip, and Fall Incidents", "Wrongful Death Claims", "Premises Liability Cases"],
    },
    {
      id: "litigation",
      label: "Civil Litigation",
      tag: "Commercial & Property Claims",
      title: "Strategic Resolution of Legal Disputes",
      description: "Our legal team represents businesses and individuals in contract disagreements, partner disputes, property issues, and other high-stakes civil litigation matters.",
      features: ["Breach of Contract Claims", "Commercial Disputes", "Property & Real Estate Litigation", "Arbitration & Mediation Options"],
    },
  ];

  const activeService = serviceTabs.find((tab) => tab.id === activeTab) || serviceTabs[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Logo size={42} showText={true} centerText={true} />
          </div>
          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>Home</a>
            <div className={styles.navItemDropdown}>
              <span className={styles.navLink}>About ▫</span>
              <div className={styles.dropdownMenu}>
                <a href="#about" className={styles.dropdownItem}>About us</a>
                <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                  <span>Our Team</span>
                  <span>▫</span>
                  <div className={styles.submenu}>
                    <a href="#staff" className={styles.dropdownItem}>Staff</a>
                    <a href="#management" className={styles.dropdownItem}>Management</a>
                    <a href="#associates" className={styles.dropdownItem}>Assocites</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>
          <button 
            className={styles.navBtn}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Free Evaluation
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        
        {/* Centered Hero Section */}
        <section className={`${styles.hero} animate-fade-in`}>
          <Logo size={140} showText={true} centerText={true} />
          <h1 className={styles.heroTitle}>
            Free Consultation
          </h1>
          <p className={styles.heroQuote}>
            &ldquo;The first step to getting your life back on track? A free consultation with Aqrawi and Associates.&rdquo;
          </p>
          <p className={styles.heroAuthor}>
            - Aqrawi And Associates
          </p>
        </section>

        {/* Who We Are Section */}
        <section id="about" className={styles.whoWeAre}>
          <div className={styles.whoContainer}>
            <div className={styles.whoText}>
              <h2 className={styles.whoHeading}>Who We Are</h2>
              <div className={styles.whoDivider} />
              <p className={styles.whoParagraph}>
                Aqrawi and Associates is a leading personal injury law firm, dedicated to helping clients who have been hurt as a result of someone else's negligence or wrongdoing. Our experienced and compassionate attorneys have a proven track record of success in a variety of personal injury cases, including automobile accidents, slip and fall injuries, medical malpractice, and more. We are committed to pursuing maximum compensation for our clients, to help cover medical expenses, lost wages, and other damages they may have suffered as a result of their injury. With a deep understanding of the law and a commitment to our clients, we work tirelessly to achieve the best possible outcome in every case. At Aqrawi and Associates, we believe that everyone deserves justice, and we are dedicated to fighting for the rights of injury victims and their families.
              </p>
              <div className={styles.signatureContainer}>
                <span className={styles.signatureLabel}>Walat</span>
                <span className={styles.signatureName}>Walat Aqrawi</span>
                <div className={styles.signatureTitle}>WALAT AQRAWI</div>
              </div>
            </div>
            <div className={styles.whoImageContainer}>
              <div className={styles.whoImageWrapper}>
                <img 
                  src="/lawyers_meeting.png" 
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
          <svg className={styles.plexusBg} viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path 
              d="M100,50 L250,120 L400,80 L550,150 L700,90 L850,180 L1000,100 L1200,160 M250,120 L300,280 L450,320 L550,150 M700,90 L680,250 L850,300 L850,180 M1000,100 L1100,240 L1250,220 M300,280 L150,380 L350,450 L450,320 M680,250 L580,380 L750,420 L850,300 M1100,240 L1000,380 L1150,440 L1250,220 M150,380 L200,520 L400,550 M580,380 L620,530 L800,550 M1000,380 L1050,520 L1200,540" 
              stroke="#bf953f" 
              strokeWidth="0.6" 
              strokeOpacity="0.08" 
              fill="none" 
            />
            <circle cx="100" cy="50" r="3.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="250" cy="120" r="4" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="400" cy="80" r="3.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="550" cy="150" r="4.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="700" cy="90" r="3.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="850" cy="180" r="4" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="1000" cy="100" r="3.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="1200" cy="160" r="4" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="300" cy="280" r="3.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="450" cy="320" r="4.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="680" cy="250" r="4" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="850" cy="300" r="3.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="1100" cy="240" r="3.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="1250" cy="220" r="4" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="150" cy="380" r="3.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="350" cy="450" r="4" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="580" cy="380" r="4" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="750" cy="420" r="4.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="1000" cy="380" r="3.5" fill="#bf953f" fillOpacity="0.15" />
            <circle cx="1150" cy="440" r="4" fill="#bf953f" fillOpacity="0.15" />
          </svg>

          <div className={styles.servicesContent}>
            <h2 className={styles.servicesTitle}>Our Services</h2>
            
            <div className={styles.servicesGrid}>
              
              {/* Item 1: CAR ACCIDENTS */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Explosion / Impact */}
                    <path d="M22 25 L32 35 M12 35 L27 38 M16 18 L30 28 M30 12 L34 26" stroke="#bf953f" strokeWidth="3.5" strokeLinecap="round" />
                    {/* Car Body */}
                    <path d="M38 60 L45 42 Q47 38 52 38 L78 38 Q84 38 87 43 L94 60 L96 60 Q98 60 98 62 L98 70 Q98 72 96 72 L90 72 L90 68 Q90 64 85 64 Q80 64 80 68 L80 72 L50 72 L50 68 Q50 64 45 64 Q40 64 40 68 L40 72 L38 72 Z" fill="#bf953f" />
                    <circle cx="45" cy="72" r="5" fill="#ffffff" stroke="#bf953f" strokeWidth="2.5" />
                    <circle cx="85" cy="72" r="5" fill="#ffffff" stroke="#bf953f" strokeWidth="2.5" />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>Car Accidents</span>
              </div>

              {/* Item 2: TRUCK ACCIDENTS */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Truck Body */}
                    <path d="M15 30 L65 30 L65 70 L15 70 Z" fill="#bf953f" />
                    {/* Cabin */}
                    <path d="M65 42 L80 42 L90 55 L90 70 L65 70 Z" fill="#bf953f" />
                    {/* Wheels */}
                    <circle cx="30" cy="74" r="7" fill="#ffffff" stroke="#bf953f" strokeWidth="3" />
                    <circle cx="53" cy="74" r="7" fill="#ffffff" stroke="#bf953f" strokeWidth="3" />
                    <circle cx="78" cy="74" r="7" fill="#ffffff" stroke="#bf953f" strokeWidth="3" />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>Truck Accidents</span>
              </div>

              {/* Item 3: MOTOR CYCLES ACCIDENTS */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Wheels */}
                    <circle cx="25" cy="65" r="11" stroke="#bf953f" strokeWidth="4.5" />
                    <circle cx="75" cy="65" r="11" stroke="#bf953f" strokeWidth="4.5" />
                    {/* Body frame */}
                    <path d="M25 65 L45 45 L65 45 L75 65 M45 45 L35 30 L25 30 M65 45 L70 30 L80 30 M45 45 L55 65" stroke="#bf953f" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Seat */}
                    <path d="M40 40 L55 40" stroke="#bf953f" strokeWidth="4.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>Motor Cycles Accidents</span>
              </div>

              {/* Item 4: MEDICAL MALPRACTICE */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Briefcase */}
                    <rect x="20" y="32" width="60" height="46" rx="5" stroke="#bf953f" strokeWidth="4.5" />
                    {/* Handle */}
                    <path d="M40 32 L40 22 Q40 20 42 20 L58 20 Q60 20 60 22 L60 32" stroke="#bf953f" strokeWidth="4.5" strokeLinecap="round" />
                    {/* Red Cross */}
                    <path d="M50 43 L50 67 M38 55 L62 55" stroke="#bf953f" strokeWidth="5.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>Medical Malpractice</span>
              </div>

              {/* Item 5: SLIP AND FALL */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Head */}
                    <circle cx="55" cy="22" r="5.5" fill="#bf953f" />
                    {/* Spine */}
                    <path d="M52 28 L40 48" stroke="#bf953f" strokeWidth="4.5" strokeLinecap="round" />
                    {/* Left Leg */}
                    <path d="M40 48 L22 55 L15 48" stroke="#bf953f" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Right Leg */}
                    <path d="M40 48 L50 68 L65 72" stroke="#bf953f" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Arms */}
                    <path d="M48 34 L32 28 M48 34 L62 38" stroke="#bf953f" strokeWidth="4" strokeLinecap="round" />
                    {/* Slip marks */}
                    <path d="M15 62 Q25 65 35 60 M22 68 Q30 70 38 66" stroke="#bf953f" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>Slip And Fall</span>
              </div>

              {/* Item 6: WORK PLACE INJURY */}
              <div className={styles.serviceItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 100 100" width="48" height="48" fill="none">
                    {/* Building outline */}
                    <rect x="25" y="20" width="50" height="65" stroke="#bf953f" strokeWidth="4.5" />
                    {/* Windows */}
                    <rect x="35" y="30" width="10" height="10" fill="#bf953f" />
                    <rect x="55" y="30" width="10" height="10" fill="#bf953f" />
                    <rect x="35" y="48" width="10" height="10" fill="#bf953f" />
                    <rect x="55" y="48" width="10" height="10" fill="#bf953f" />
                    {/* Door */}
                    <rect x="44" y="66" width="12" height="19" fill="#bf953f" />
                  </svg>
                </div>
                <span className={styles.serviceLabel}>Work Place Injury</span>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Us FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <div className={styles.faqTitleContainer}>
              <div className={styles.faqTitleDivider} />
              <h2 className={styles.faqHeading}>Why<br />Choose Us</h2>
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
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </div>
                    <div className={`${styles.accordionContent} ${isOpen ? styles.accordionContentShow : ""}`}>
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
              <div className={styles.statNum}>5,000+</div>
              <div className={styles.statLabel}>Client Consultations</div>
            </div>
            <div className={styles.statCol}>
              <div className={styles.statNum}>90%</div>
              <div className={styles.statLabel}>Successful Cases</div>
            </div>
          </div>
        </section>

        {/* Badge Logos Section */}
        <section className={styles.badgeSection}>
          <div className={styles.badgeContainer}>
            {/* Seal 1: State Bar of Texas */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 100 100" width="70" height="70" fill="none">
                <circle cx="50" cy="50" r="46" stroke="#444444" strokeWidth="2" />
                <circle cx="50" cy="50" r="40" stroke="#444444" strokeWidth="1" />
                <polygon points="50,28 55,40 68,40 58,48 62,60 50,52 38,60 42,48 32,40 45,40" fill="#444444" />
                <circle cx="50" cy="50" r="43" stroke="#444444" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="18" stroke="#444444" strokeWidth="1" />
                <path d="M 50 16 A 34 34 0 0 1 84 50" stroke="none" id="texasTextPath" />
                <text fontSize="5.5" fontWeight="800" fill="#444444">
                  <textPath href="#texasTextPath" startOffset="50%" textAnchor="middle">
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
                <text x="50" y="42" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="900" fill="#ffffff" textAnchor="middle">TOP 10</text>
                <text x="50" y="52" fontFamily="var(--font-sans)" fontSize="5" fontWeight="800" fill="#ffffff" textAnchor="middle">ATTORNEY</text>
              </svg>
            </div>

            {/* Seal 3: Top 40 Under 40 */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 80 80" width="70" height="70" fill="none">
                <rect x="5" y="5" width="70" height="70" rx="3" fill="#0f2b4c" stroke="#bf953f" strokeWidth="3" />
                <rect x="8" y="8" width="64" height="64" fill="none" stroke="#d4af37" strokeWidth="1" />
                <text x="40" y="24" fontFamily="var(--font-sans)" fontSize="5.5" fontWeight="800" fill="#d4af37" textAnchor="middle" letterSpacing="0.3">AMERICAN ACADEMY</text>
                <text x="40" y="38" fontFamily="var(--font-sans)" fontSize="10.5" fontWeight="900" fill="#ffffff" textAnchor="middle">TOP 40</text>
                <text x="40" y="50" fontFamily="var(--font-sans)" fontSize="7" fontWeight="900" fill="#d4af37" textAnchor="middle">UNDER 40</text>
                <text x="40" y="62" fontFamily="var(--font-sans)" fontSize="5" fontWeight="700" fill="#ffffff" textAnchor="middle">ATTORNEYS</text>
              </svg>
            </div>

            {/* Seal 4: Saudi in Houston Circular Badge */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 100 100" width="70" height="70" fill="none">
                <circle cx="50" cy="50" r="40" fill="#1b5e20" stroke="#bf953f" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#ffffff" strokeWidth="1" />
                <path d="M50,22 L50,44 M47,27 Q41,23 37,25 Q44,28 48,31 M53,27 Q59,23 63,25 Q56,28 52,31 M48,34 Q42,31 36,35 Q44,37 48,39 M52,34 Q58,31 64,35 Q56,37 52,39" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M35,63 L65,63 M38,68 L42,58 L62,58 L66,68" stroke="#bf953f" strokeWidth="1.5" fill="none" />
                <path d="M36,65 C40,55 45,55 47,55 M64,65 C60,55 55,55 53,55" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <text x="50" y="78" fontFamily="var(--font-sans)" fontSize="4" fontWeight="800" fill="#ffffff" textAnchor="middle">HOUSTON</text>
              </svg>
            </div>

            {/* Seal 5: American Institute */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 100 100" width="75" height="75" fill="none">
                <circle cx="50" cy="50" r="42" fill="#0f2b4c" stroke="#bf953f" strokeWidth="2" />
                <path d="M25,50 Q28,30 42,26 M75,50 Q72,30 58,26" stroke="#bf953f" strokeWidth="2" strokeLinecap="round" fill="none" />
                <polygon points="50,16 52,21 57,21 53,24 55,29 50,26 45,29 47,24 43,21 48,21" fill="#bf953f" />
                <text x="50" y="42" fontFamily="var(--font-sans)" fontSize="5" fontWeight="800" fill="#ffffff" textAnchor="middle">AMERICAN INSTITUTE</text>
                <text x="50" y="56" fontFamily="var(--font-sans)" fontSize="12" fontWeight="900" fill="#bf953f" textAnchor="middle">10</text>
                <text x="50" y="66" fontFamily="var(--font-sans)" fontSize="4.5" fontWeight="800" fill="#ffffff" textAnchor="middle">BEST LAW FIRMS</text>
              </svg>
            </div>

            {/* Seal 6: NLA */}
            <div className={styles.badgeWrapper}>
              <svg viewBox="0 0 120 60" width="90" height="45" fill="none">
                <text x="5" y="38" fontFamily="var(--font-sans)" fontSize="32" fontWeight="900" fill="#888888" letterSpacing="-1">NLA</text>
                <text x="5" y="50" fontFamily="var(--font-sans)" fontSize="5.5" fontWeight="800" fill="#666666" letterSpacing="0.2">NATIONAL LAWYERS ASSOCIATION</text>
                <path d="M92,20 L112,20 M102,15 L102,38 M95,20 L95,30 M109,20 L109,30 M91,30 Q95,33 99,30 M105,30 Q109,33 113,30" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
        </section>

        {/* Call to Action (CTA) Banner Section */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaText}>
              &ldquo;Call us today for a FREE and confidential consultation. Our team are here to support you and fight for your rights.&rdquo;
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
            <h2 className={styles.attorneysHeading}>Attorneys</h2>
            <div className={styles.attorneysDivider} />

            <div className={styles.attorneysGrid}>
              
              {/* Profile 1: Walat Aqrawi */}
              <div className={styles.attorneyCard}>
                <h3 className={styles.attorneyName}>Walat Aqrawi</h3>
                <span className={styles.attorneyTitle}>Managing Partner</span>
                <div className={styles.attorneyPhoto}>
                  WA
                </div>
              </div>

              {/* Profile 2: Aaron Aiken */}
              <div className={styles.attorneyCard}>
                <h3 className={styles.attorneyName}>Aaron Aiken</h3>
                <span className={styles.attorneyTitle}>Partner</span>
                <div className={styles.attorneyPhoto}>
                  AA
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Contact/Case Evaluation Section */}
        <section id="contact" className={styles.contactSectionNew}>
          <div className={styles.contactGrid}>
            
            {/* Left Column: Form */}
            <div className={styles.contactText}>
              <h2 className={styles.infoHeading} style={{ color: '#d4af37' }}>Contact Us</h2>
              <p className={styles.whoParagraph} style={{ marginBottom: '32px' }}>
                At <strong>Aqrawi and Associates law firm</strong>, we understand the impact that a personal injury can have on your life. That's why we're here to help you get back on track. With years of experience and a dedicated team of personal injury lawyers, we know what it takes to win.
              </p>
              
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                {isSubmitted && (
                  <div className={styles.submitSuccess} style={{ marginBottom: '16px' }}>
                    ✓ Thank you! Your case details have been sent. We will reach out shortly.
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
                  Send ▫
                </button>
              </form>
            </div>

            {/* Right Column: Give Us A Call */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoHeading}>Give Us A Call</h2>
              <p className={styles.whoParagraph} style={{ marginBottom: '36px' }}>
                If you've been involved in a personal injury, the team at <strong>Aqrawi and Associates</strong> law firm is here to help. We understand that the aftermath of an accident can be overwhelming and stressful, which is why we offer free consultations to anyone in need of legal advice. During this consultation, you'll have the opportunity to discuss the details of your case with one of our knowledgeable personal injury lawyers. They'll listen to your story, answer any questions you may have, and help you understand your rights and options. Our goal is to provide you with the support and guidance you need during this difficult time, so don't hesitate to reach out to us. Call us today at <strong>713-757-7777</strong> to schedule your <strong>FREE CONSULTATION</strong>.
              </p>
              
              <span className={styles.phoneLabel}>Available at 9am to 6pm</span>
              <a href="tel:7137577777" className={styles.phoneNum}>713-757-7777</a>
              
              <div className={styles.socialLinks}>
                <div className={styles.socialBox} />
                <div className={styles.socialBox} />
                <div className={styles.socialBox} />
                <div className={styles.socialBox} />
                <div className={styles.socialBox} />
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Floating Translate Button */}
      <button 
        className={styles.translateBtn}
        onClick={() => alert("Language translation services are currently being configured.")}
      >
        Translate »
      </button>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerCopyright}>
            © {new Date().getFullYear()} Aqrawi & Associates Law Firm PLLC. All rights reserved.
          </div>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>Home</a>
            <a href="#services" className={styles.footerLink}>Practice Areas</a>
            <a href="#contact" className={styles.footerLink}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

