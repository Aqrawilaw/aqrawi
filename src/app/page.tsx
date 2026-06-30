"use client";

import { useState, useEffect } from "react";
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
  const [activeTab, setActiveTab] = useState<string>("web");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
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
      id: "web",
      label: "Engineering",
      tag: "Full-Stack Development",
      title: "High-Performance Web Solutions",
      description: "We engineer modern, fast, and secure web applications using state-of-the-art technologies. From robust databases to responsive frontend architectures, we deliver polished user experiences.",
      features: ["Next.js & React Specialists", "Edge-Ready Infrastructure", "Performant Database Architectures", "Optimized Web Vitals"],
    },
    {
      id: "ai",
      label: "Intelligence",
      tag: "AI & Automation",
      title: "Next-Generation Intelligent Systems",
      description: "Leverage the power of modern machine learning and large language models. We build automated workflows, intelligent agents, and custom search integrations tailored to your business needs.",
      features: ["Custom LLM Integration", "Agentic Workflow Automation", "Semantic Search & Vector DBs", "Structured Output Parsing"],
    },
    {
      id: "design",
      label: "Brand Identity",
      tag: "UI/UX & Branding",
      title: "Visually Stunning User Experiences",
      description: "Design that commands attention. We create clean, modern, and accessible user interfaces that tell your brand's story. Every micro-interaction is optimized to increase user engagement and delight.",
      features: ["Premium Interactive Interfaces", "Bespoke Design Systems", "Responsive & Mobile-First", "High-fidelity Prototypes"],
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
      setFormState({ name: "", email: "", message: "" });
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
            Aqrawi<span className={styles.logoDot}></span>
          </div>
          <div className={styles.navLinks}>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#solutions" className={styles.navLink}>Solutions</a>
            <a href="#contact" className={styles.navLink}>Inquire</a>
          </div>
          <button 
            className={styles.navBtn}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in touch
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        
        {/* Hero Section */}
        <section className={`${styles.hero} animate-fade-in`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Now booking projects for Q3 2026
          </div>
          <h1 className={styles.title}>
            Building <span className={styles.gradientText}>State-of-the-Art</span> Digital Systems
          </h1>
          <p className={styles.subtitle}>
            Aqrawi is a premier development and design consultancy crafting high-performance web applications, intelligent integrations, and premium brand experiences.
          </p>
          <div className={styles.ctas}>
            <button 
              className={styles.btnPrimary}
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Your Project
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
            <button 
              className={styles.btnSecondary}
              onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Services
            </button>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Bespoke Digital Services</h2>
            <p className={styles.sectionSubtitle}>
              Tailored software engineering and architectural expertise built with modern workflows.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={`${styles.card} glass-card`}>
              <div className={styles.cardIcon}>💻</div>
              <h3 className={styles.cardTitle}>Full-Stack Apps</h3>
              <p className={styles.cardDesc}>
                Responsive web applications built with Next.js, optimized React architectures, and robust backend integrations.
              </p>
            </div>

            <div className={`${styles.card} glass-card`}>
              <div className={styles.cardIcon}>⚡</div>
              <h3 className={styles.cardTitle}>Cloud Architectures</h3>
              <p className={styles.cardDesc}>
                Serverless setups, databases, edge deployment, and cloud infrastructure engineered for scaling and security.
              </p>
            </div>

            <div className={`${styles.card} glass-card`}>
              <div className={styles.cardIcon}>✨</div>
              <h3 className={styles.cardTitle}>Interactive UI/UX</h3>
              <p className={styles.cardDesc}>
                Crafted layouts with smooth micro-animations, tailored color systems, and modern typography configurations.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions / Tabbed Section */}
        <section id="solutions" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Engineered Core Competencies</h2>
            <p className={styles.sectionSubtitle}>
              Select a solution track below to see how we deliver value to complex tech projects.
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

        {/* Contact/Inquiry Section */}
        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Inquire About Your Project</h2>
            <p className={styles.sectionSubtitle}>
              Tell us about your digital needs. We typically respond with a project outline and estimate within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={`${styles.form} glass`}>
            {isSubmitted && (
              <div className={styles.submitSuccess}>
                ✓ Thank you! Your inquiry has been received. We will reach out shortly.
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
              <label htmlFor="message" className={styles.label}>Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                className={`${styles.input} styles.textarea`}
                placeholder="Describe your timeline, features, and budget goals..."
                required
                disabled={isSubmitting}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerCopyright}>
            © {new Date().getFullYear()} Aqrawi. All rights reserved.
          </div>
          <div className={styles.footerLinks}>
            <a href="#services" className={styles.footerLink}>Services</a>
            <a href="#solutions" className={styles.footerLink}>Solutions</a>
            <a href="#contact" className={styles.footerLink}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
