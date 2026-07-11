"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalHelp from "@/components/LegalHelp";
import styles from "./page.module.css";

export default function MedicalMalpracticePage() {
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
      q: "What is considered medical malpractice?",
      a: "Medical malpractice is a type of professional negligence by a healthcare provider, such as a doctor, nurse, or hospital, that results in harm to a patient. In order to be considered medical malpractice, the healthcare provider must have breached the standard of care owed to the patient and that breach must have caused harm to the patient."
    },
    {
      q: "How do I know if I have a medical malpractice case?",
      a: "If you believe that you or a loved one has been the victim of medical malpractice, it's important to seek the assistance of a personal injury lawyer. An experienced lawyer can help you understand your rights and guide you through the legal process. They can also help you gather evidence, negotiate with insurance companies, and represent you in court if necessary."
    },
    {
      q: "What compensation can I receive for medical malpractice?",
      a: "If you have been the victim of medical malpractice, you may be entitled to compensation for your medical expenses, lost wages, pain and suffering, and other damages. The exact compensation you can receive will depend on the circumstances of your case and the laws in your state."
    },
    {
      q: "How long do I have to file a medical malpractice claim?",
      a: "The time frame for filing a medical malpractice claim, also known as the statute of limitations, varies by state. It's important to contact a personal injury lawyer as soon as possible to ensure that you meet the deadline for filing a claim. An experienced lawyer can help you understand the statute of limitations in your state and guide you through the legal process."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Hero Banner Section */}
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>MEDICAL MALPRACTICE</h1>
          <div className={styles.titleDivider}></div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.mainHeading}>Are You Hurt?</h2>
            
            <h3 className={styles.subHeading}>What is Medical Malpractice?</h3>
            <p className={styles.paragraph}>
              Medical malpractice is a type of professional negligence by a healthcare provider, such as a doctor, nurse, or hospital, that results in harm to a patient. In order to be considered medical malpractice, the healthcare provider must have breached the standard of care owed to the patient and that breach must have caused harm to the patient.
            </p>
            <p className={styles.paragraph}>
              Examples of medical malpractice can include misdiagnosis, failure to diagnose, surgical errors, birth injuries, anesthesia errors, and medication errors, among others.
            </p>
            <p className={styles.paragraph}>
              If you believe that you or a loved one has been the victim of medical malpractice, it's important to seek the assistance of a personal injury lawyer. An experienced lawyer can help you understand your rights and guide you through the legal process. They can also help you gather evidence, negotiate with insurance companies, and represent you in court if necessary.
            </p>

            <h3 className={styles.subHeading} style={{ marginTop: '3rem' }}>What should you do?</h3>
            <p className={styles.paragraph}>
              If you have sustained a medical malpractice injury, here are the steps you should take:
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
                  <strong>Gather evidence:</strong> This may include medical records, receipts, witness statements, and any other relevant documentation.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Contact a personal injury lawyer:</strong> An experienced personal injury lawyer can help you understand your rights and guide you through the legal process.
                </div>
              </div>
            </div>

            <p className={styles.paragraph} style={{ marginTop: '2.5rem' }}>
              <strong>Aqrawi and Associates</strong> law firm can assist you with your medical malpractice case by:
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

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Maximizing your compensation:</strong> Our lawyers will work to ensure that you receive the maximum compensation possible for your injury and other damages.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.imageCard}>
              <img
                src="/images/services-page/img6.webp"
                alt="Surgeon in Operating Room"
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.faqSection}>
              <h2 className={styles.faqHeading}>
                Frequently Asked Questions about Medical Malpractice.
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
                If you have sustained a medical malpractice injury, it's important to take prompt action to protect your rights. Contact Aqrawi and Associates law firm for a free consultation to discuss your case and explore your options.
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
