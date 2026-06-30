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
          <h1 className={styles.heroTitle}>About Us</h1>
        </div>
      </section>

      {/* Our History Section */}
      <section className={styles.section}>
        <div className={styles.historyGrid}>
          <div className={styles.historyText}>
            <h2>Our History</h2>
            <p>
              Aqrawi Law Firm was founded on the principles of integrity, excellence, and unwavering dedication to our clients. For over two decades, our attorneys have provided premier legal representation across multiple practice areas, earning a reputation for aggressive advocacy and sophisticated counsel. We believe that every client deserves dedicated, personalized attention.
            </p>
            <p>
              Our firm began as a small boutique practice committed to delivering high-caliber results. Over the years, we have expanded our reach and capabilities, successfully handling complex, high-stakes litigation while maintaining the close-knit, client-first approach that has defined us from day one.
            </p>
            <p>
              Today, we continue to build on this legacy, representing individuals, businesses, and organizations in their most critical legal matters. We understand the stress and complexity of legal challenges, and our team is here to support you, protect your interests, and fight for your rights at every step.
            </p>
          </div>

          <div className={styles.portraitWrapper}>
            <img
              src="/portrait_lawyer.png"
              alt="Senior Attorney Portrait"
              className={styles.portraitImg}
            />
          </div>
        </div>
      </section>

      {/* Landscape Image Banner */}
      <div className={styles.bannerContainer}>
        <div className={styles.meetingBanner}>
          <img
            src="/office_meeting.png"
            alt="Lawyers discussing case in office"
            className={styles.meetingImg}
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
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
              {/* Scales of Justice Icon */}
              <svg
                width="48"
                height="48"
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
              {/* Card / Document Price Tag Icon */}
              <svg
                width="48"
                height="48"
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
              {/* Briefcase Icon */}
              <svg
                width="48"
                height="48"
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
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>5,000+</div>
            <div className={styles.statLabel}>Client Consultations</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>99%</div>
            <div className={styles.statLabel}>Success Rate</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$50M</div>
            <div className={styles.statLabel}>Client Recoveries</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>4,000</div>
            <div className={styles.statLabel}>Cases Won</div>
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
