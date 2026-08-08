"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalHelp from "@/components/LegalHelp";
import styles from "./page.module.css";

export default function ImmigrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      q: "What immigration services does Aqrawi & Associates provide?",
      a: "Our firm handles a full spectrum of immigration matters, including family-based green cards, employment and investor visas, deportation defense, naturalization and citizenship applications, asylum claims, and appeals."
    },
    {
      q: "How can I apply for permanent residency (Green Card) through a family member?",
      a: "U.S. citizens and lawful permanent residents can petition for certain qualifying family members (spouses, children, parents, and siblings). The exact process depends on whether the relative is currently inside the U.S. (Adjustment of Status) or abroad (Consular Processing)."
    },
    {
      q: "What should I do if I or a family member face deportation or removal proceedings?",
      a: "Immediate legal intervention is vital. An experienced immigration attorney can file for relief from removal, apply for bond hearings to secure release from detention, and represent you vigorously in immigration court."
    },
    {
      q: "How long does the naturalization process take to become a U.S. citizen?",
      a: "Naturalization timelines vary by jurisdiction and current USCIS processing times, typically ranging from 6 to 12 months from the date Form N-400 is submitted. We ensure all paperwork and documentation are complete to prevent avoidable delays."
    },
    {
      q: "Can your firm help with business and employment-based visas?",
      a: "Yes. We assist employers, investors, skilled professionals, and entrepreneurs with various non-immigrant and immigrant employment visas, including H-1B, L-1, O-1, E-2 investor visas, and PERM labor certifications."
    },
    {
      q: "Why should I hire an immigration lawyer instead of filing on my own?",
      a: "Immigration law is complex and constantly changing. Minor errors or missing documentation on USCIS petitions can result in severe delays, costly re-filings, or even application denials. Having an expert attorney ensures your case is built accurately and strategically."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Hero Banner Section */}
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>IMMIGRATION LAW</h1>
          <div className={styles.titleDivider}></div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.mainHeading}>Comprehensive Legal Solutions for Your Immigration Journey</h2>
            
            <h3 className={styles.subHeading}>Navigating U.S. Immigration Law</h3>
            <p className={styles.paragraph}>
              Navigating the United States immigration system can be daunting and emotionally taxing. Whether you are aiming to unite with loved ones, pursue career opportunities, seek protection, or fulfill your dream of becoming a U.S. citizen, having dedicated legal counsel by your side makes all the difference.
            </p>

            <h3 className={styles.subHeading} style={{ marginTop: '3rem' }}>How We Can Support You</h3>
            
            <div className={styles.infoCard}>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                At <strong>Aqrawi and Associates Law Firm</strong>, we provide compassionate, strategic, and results-driven representation in all areas of federal immigration law. We work closely with individuals, families, and businesses to overcome administrative hurdles and achieve their immigration goals.
              </p>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                Our experienced attorneys assist with <strong>Family-Based Immigration</strong>, <strong>Employment Visas & PERM</strong>, <strong>Green Cards & Adjustment of Status</strong>, <strong>Deportation & Removal Defense</strong>, and <strong>Naturalization & Citizenship</strong>. We closely track USCIS guidelines and immigration court decisions to give your application the strongest advantage.
              </p>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                If you or a loved one need immigration guidance, contact <strong>Aqrawi and Associates</strong> today for a confidential consultation. We are committed to standing by your side every step of the way.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.imageCard}>
              <img
                src="/images/services-page/immigration.png"
                alt="Immigration law legal documents and passport"
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.faqSection}>
              <h2 className={styles.faqHeading}>
                Frequently Asked Questions about Immigration Law.
              </h2>
              <div className={styles.faqDivider}></div>

              <div className={styles.accordionContainer}>
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div 
                      key={index} 
                      className={`${styles.accordionItem} ${isOpen ? styles.accordionItemActive : ''}`}
                    >
                      <button 
                        className={styles.accordionHeader} 
                        onClick={() => toggleFaq(index)}
                      >
                        <span className={styles.accordionQuestion}>{faq.q}</span>
                        <span className={styles.accordionIcon}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      <div className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ''}`}>
                        <div className={styles.accordionText}>
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>

        {/* CTA Banner Section */}
        <div className={styles.ctaBannerWrapper}>
          <div className={styles.ctaBanner}>
            <div className={styles.ctaBannerContent}>
              <h2 className={styles.ctaBannerHeading}>
                "GIVE US A CALL, WE GOT YOUR BACK."
              </h2>
              <p className={styles.ctaBannerSubtext}>
                Schedule a consultation with our experienced immigration attorneys today.
              </p>
            </div>
            <button 
              className={styles.ctaBtn}
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Get Legal Help Now
            </button>
          </div>
        </div>

      </main>

      <LegalHelp />
      <Footer />
    </div>
  );
}
