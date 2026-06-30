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
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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

        {/* Practice Areas Grid Section */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Practice Areas</h2>
            <p className={styles.sectionSubtitle}>
              Exceptional legal representation tailored to protect your rights, business, and family.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={`${styles.card} glass-card`}>
              <div className={styles.cardIcon}>🛡️</div>
              <h3 className={styles.cardTitle}>Criminal Defense</h3>
              <p className={styles.cardDesc}>
                Protecting your rights and liberty with skilled representation against state and federal allegations.
              </p>
            </div>

            <div className={`${styles.card} glass-card`}>
              <div className={styles.cardIcon}>⚖️</div>
              <h3 className={styles.cardTitle}>Personal Injury</h3>
              <p className={styles.cardDesc}>
                Fighter advocate representation securing full compensation for accident victims of negligence.
              </p>
            </div>

            <div className={`${styles.card} glass-card`}>
              <div className={styles.cardIcon}>📜</div>
              <h3 className={styles.cardTitle}>Civil Litigation</h3>
              <p className={styles.cardDesc}>
                Strategic resolution of complex corporate conflicts, contract breaches, and property disputes.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Details / Tabbed Section */}
        <section id="solutions" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Strategic Legal Counsel</h2>
            <p className={styles.sectionSubtitle}>
              Explore our core litigation strengths and representation standards.
            </p>
          </div>

          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className={`${styles.tabContent} glass`}>
              <div className={styles.tabHeader}>
                <h3 className={styles.tabTitle}>{activeService.title}</h3>
                <span className={styles.tabTag}>{activeService.tag}</span>
              </div>
              <p className={styles.tabDesc}>{activeService.description}</p>
              
              <div className={styles.tabFeatures}>
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className={styles.tabFeatureItem}>
                    <span className={styles.tabFeatureIcon}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Case Evaluation Section */}
        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Request A Free Case Evaluation</h2>
            <p className={styles.sectionSubtitle}>
              Describe your legal situation below. We review all submissions within 24 hours to schedule your free consultation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={`${styles.form} glass`}>
            {isSubmitted && (
              <div className={styles.submitSuccess}>
                ✓ Thank you! Your case evaluation request has been received. We will contact you shortly.
              </div>
            )}
            
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Your full name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="you@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Your phone number"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Case Details</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Briefly describe your situation, legal questions, and urgency..."
                required
                disabled={isSubmitting}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? "Submitting Case..." : "Request Case Evaluation"}
            </button>
          </form>
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

