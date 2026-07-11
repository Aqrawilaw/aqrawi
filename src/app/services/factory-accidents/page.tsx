"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalHelp from "@/components/LegalHelp";
import styles from "./page.module.css";

export default function FactoryAccidentsPage() {
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
      q: "What is considered a factory injury?",
      a: "A factory injury refers to any physical or mental harm that occurs to an individual while they are working in a factory setting. This can include injuries sustained from machinery, toxic substances, falls, or repetitive motion, among others."
    },
    {
      q: "What should I do if I sustain a factory injury?",
      a: "If you sustain a factory injury, it's important to seek medical attention, report the injury to your employer, gather evidence, and contact a personal injury lawyer. An experienced lawyer can help you understand your rights and guide you through the legal process."
    },
    {
      q: "Can I file a lawsuit if I sustained a factory injury?",
      a: "Yes, you may be able to file a lawsuit if you sustained a factory injury. This will depend on the circumstances of your case and the laws in your state. An experienced personal injury lawyer can help you determine your options for compensation."
    },
    {
      q: "What compensation can I receive if I sustained a factory injury?",
      a: "If you sustained a factory injury, you may be entitled to compensation for your medical expenses, lost wages, pain and suffering, and other damages. The exact compensation you can receive will depend on the circumstances of your case and the laws in your state. An experienced personal injury lawyer can help you determine your options for compensation."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Hero Banner Section */}
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>FACTORY ACCIDENTS</h1>
          <div className={styles.titleDivider}></div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.mainHeading}>Are You Hurt?</h2>
            
            <h3 className={styles.subHeading}>What is considered a factory injury?</h3>
            <p className={styles.paragraph}>
              A factory injury refers to any physical or mental harm that occurs to an individual while they are working in a factory setting. This can include injuries sustained from machinery, toxic substances, falls, or repetitive motion, among others.
            </p>
            <p className={styles.paragraph}>
              The key factor in determining whether an injury is considered a factory injury is that it must have arisen from the individual's employment in a factory environment. It's important to note that the injury does not have to occur on the factory floor, but can also occur in areas such as offices, parking lots, or during company-sponsored events.
            </p>
            <p className={styles.paragraph}>
              If you have been injured in a factory setting, it is recommended that you seek the assistance of a personal injury lawyer to explore your options for compensation.
            </p>

            <h3 className={styles.subHeading} style={{ marginTop: '3rem' }}>What should you do?</h3>
            <p className={styles.paragraph}>
              If you have sustained a factory injury, here are the steps you should take:
            </p>
            
            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Seek medical attention:</strong> Your health and well-being should be your top priority, so it's important to seek medical treatment as soon as possible.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Report the injury to your employer:</strong> Report the injury to your supervisor or human resources department as soon as possible. This will ensure that the incident is documented and that you receive the necessary medical treatment.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Gather evidence:</strong> This may include photographs of the injury, witnesses' contact information, and any other relevant documentation.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Contact a personal injury lawyer:</strong> An experienced personal injury lawyer can help you understand your rights and guide you through the legal process.
                </div>
              </div>
            </div>

            <p className={styles.paragraph} style={{ marginTop: '2rem' }}>
              <strong>Aqrawi and Associates</strong> law firm can assist you with your factory injury case by:
            </p>

            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Investigating the incident:</strong> Our lawyers will gather evidence, interview witnesses, and examine the circumstances surrounding your injury.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Navigating the legal process:</strong> We will handle all the legal aspects of your case, including filing a claim, negotiating with insurance companies, and representing you in court if necessary.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.imageCard}>
              <img
                src="/images/services-page/img5.webp"
                alt="Factory worker in safety gear"
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.faqSection}>
              <h2 className={styles.faqHeading}>
                Frequently Asked Questions about Factory Accidents.
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
                If you have sustained a factory injury, it's important to take prompt action to protect your rights. Contact Aqrawi and Associates law firm for a free consultation to discuss your case and explore your options.
              </p>
            </div>
            <button
              className={styles.ctaBtn}
              onClick={() => {
                const el = document.getElementById("contact-info");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else window.location.href = "/contact";
              }}
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </main>

      <LegalHelp />
      <Footer />
    </div>
  );
}
