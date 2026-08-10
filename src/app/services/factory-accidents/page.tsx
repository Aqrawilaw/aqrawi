"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalHelp from "@/components/LegalHelp";
import styles from "./page.module.css";

export default function PlantAccidentsPage() {
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
      q: "What is considered a plant injury?",
      a: "A plant injury refers to any physical or mental harm that occurs to an individual while they are working in a plant or industrial facility setting. This can include injuries sustained from machinery, toxic substances, chemical leaks, explosions, or equipment failure."
    },
    {
      q: "What should I do if I sustain a plant injury?",
      a: "If you sustain a plant injury, it's important to seek immediate medical attention, report the incident to your supervisor, document the scene, and contact an experienced personal injury lawyer."
    },
    {
      q: "Can I file a lawsuit if I sustained a plant accident injury?",
      a: "Yes, you may be able to file a lawsuit or third-party claim depending on the circumstances of your case and the laws in your state. A personal injury lawyer can evaluate liability and navigate your legal options."
    },
    {
      q: "What compensation can I receive for a plant accident?",
      a: "If you sustained a plant accident injury, you may be entitled to compensation for medical bills, lost wages, vocational rehabilitation, pain and suffering, and permanent disability."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Hero Banner Section */}
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>PLANT ACCIDENTS</h1>
          <div className={styles.titleDivider}></div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.mainHeading}>Are You Hurt?</h2>
            
            <h3 className={styles.subHeading}>What is considered a plant injury?</h3>
            <p className={styles.paragraph}>
              A plant injury refers to any physical or mental harm that occurs to an individual while working in an industrial plant, refinery, processing facility, or manufacturing site. This can include injuries sustained from heavy machinery, chemical exposure, electrical failures, or industrial fires.
            </p>
            <p className={styles.paragraph}>
              The key factor in determining whether an injury is considered a plant accident claim is that it arose from employment or conditions within a plant environment.
            </p>
            <p className={styles.paragraph}>
              If you have been injured in a plant or refinery setting, seek the assistance of our personal injury lawyers to explore your options for maximum compensation.
            </p>

            <h3 className={styles.subHeading} style={{ marginTop: '3rem' }}>What should you do?</h3>
            <p className={styles.paragraph}>
              If you have sustained a plant injury, here are the steps you should take:
            </p>
            
            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Seek medical attention:</strong> Your health and well-being should be your top priority, so seek emergency or medical care right away.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Report the injury to your employer:</strong> Report the incident to your supervisor or HR department immediately to ensure formal documentation.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Gather evidence:</strong> Take photos of the scene, machinery, safety gear, and gather witness contacts.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Contact a personal injury lawyer:</strong> An experienced lawyer will protect your rights and investigate third-party liability.
                </div>
              </div>
            </div>

            <p className={styles.paragraph} style={{ marginTop: '2rem' }}>
              <strong>Aqrawi and Associates</strong> law firm can assist you with your plant injury case by:
            </p>

            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Investigating the incident:</strong> Our lawyers will gather evidence, interview witnesses, and examine safety logs surrounding your injury.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Navigating the legal process:</strong> We handle all aspects of your claim, including negotiating with insurance companies and litigating in court.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.imageCard}>
              <img
                src="/images/services-page/plant-accident.jpg"
                alt="Industrial plant accident with fire and emergency response"
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.faqSection}>
              <h2 className={styles.faqHeading}>
                Frequently Asked Questions about Plant Accidents.
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
                If you have sustained a plant injury, it's important to take prompt action to protect your rights. Contact Aqrawi and Associates law firm for a free consultation to discuss your case and explore your options.
              </p>
            </div>
            <button
              className={styles.ctaBtn}
              onClick={() => {
                const el = document.getElementById("contact");
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
