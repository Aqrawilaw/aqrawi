"use client";

import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import LegalHelp from "@/components/LegalHelp";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Who We Are</h1>
        </div>
      </section>

      {/* Who We Are Main Section */}
      <section className={styles.section}>
        <div className={styles.historyGrid}>
          <div className={styles.historyText}>
            <h2>Who We Are</h2>
            <p>
              <strong>Aqrawi & Associates</strong> is a trusted personal injury and litigation law firm dedicated to protecting the rights of individuals and families who have been harmed by the negligence or wrongdoing of others.
            </p>
            <p>
              Our experienced attorneys handle a wide range of personal injury cases, including automobile accidents, workplace injuries, slip-and-fall incidents, medical malpractice, and other serious injury claims. We represent clients throughout every stage of the legal process, from the initial investigation and settlement negotiations to filing lawsuits and representing clients in court.
            </p>
            <p>
              Our firm is fully prepared to litigate cases when a fair settlement cannot be reached. Our attorneys develop strong legal strategies, gather and present evidence, take depositions, negotiate with insurance companies, and advocate for our clients before judges and juries. We are committed to pursuing the maximum compensation available for medical expenses, lost wages, pain and suffering, and other damages.
            </p>
            <p>
              Aqrawi & Associates is also proud of the diversity of our team. Our multilingual employees assist clients in English, Arabic, Spanish, Kurdish, Urdu, and other languages. This allows us to serve clients from many cultural backgrounds and ensures that they clearly understand their legal rights, options, and the progress of their cases.
            </p>
            <p>
              We believe every client deserves clear communication, personalized attention, and strong legal representation from a law firm they can trust.
            </p>
            <p>
              <strong>There are no upfront attorney’s fees for personal injury cases. You do not pay attorney’s fees unless we win your case.</strong>
            </p>
            <p style={{ fontWeight: 600, color: "#bf953f", marginTop: "1rem" }}>
              Integrity. Compassion. Results.
            </p>
            <p style={{ fontWeight: 700, color: "#111111", fontSize: "1.1rem" }}>
              No Fees Unless We Win. We Got Your Back!
            </p>
          </div>

          <div className={styles.portraitWrapper}>
            <img
              src="/images/about-page/who we are.jpeg"
              alt="Walat Aqrawi Standing Portrait"
              className={styles.portraitImg}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us & Image Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseContainer}>
          {/* LEFT: Picture */}
          <div className={styles.whyChooseImageWrapper}>
            <img
              src="/images/headshots/headshotwalat.jpeg"
              alt="Walat Aqrawi Headshot"
              className={styles.whyChooseImg}
            />
          </div>

          {/* RIGHT: Why Choose Us Content */}
          <div className={styles.whyChooseContent}>
            <div className={styles.whyChooseHeader}>
              <h2>Why Choose Us</h2>
              <p>
                At Aqrawi Law Firm, we combine the experience and resources of a large firm with the personal attention and responsiveness of a boutique practice. We are committed to achieving the best possible outcome for our clients through meticulous preparation, aggressive representation, and strategic advocacy. Your success is our sole focus.
              </p>
            </div>

            <div className={styles.pillarsGrid}>
              {/* Pillar 1: Highly Experienced */}
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v17" />
                    <path d="M12 5l-8 3 8 3 8-3-8-3Z" />
                    <path d="M4 8v5c0 3.3 2.7 6 6 6" />
                    <path d="M20 8v5c0 3.3-2.7 6-6 6" />
                    <path d="M3 21h18" />
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Highly Experienced</h3>
              </div>

              {/* Pillar 2: Transparent Fees */}
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M16 14h2" />
                    <path d="M12 14h2" />
                    <path d="M6 14h4" />
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Transparent Fees</h3>
              </div>

              {/* Pillar 3: Great Track Record */}
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Great Track Record</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>10,000+</div>
            <div className={styles.statLabel}>Client Consultations</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>7,000+</div>
            <div className={styles.statLabel}>Clients Served</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$0</div>
            <div className={styles.statLabel}>Consultation Cost</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>25+ Years</div>
            <div className={styles.statLabel}>Legal Experience</div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <CtaBanner />

      {/* Legal Help Info Section */}
      <LegalHelp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
