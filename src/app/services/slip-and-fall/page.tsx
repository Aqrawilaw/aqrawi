"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalHelp from "@/components/LegalHelp";
import styles from "./page.module.css";

export default function SlipAndFallPage() {
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
      q: "What is a slip and fall accident?",
      a: "A slip and fall accident is a type of personal injury that occurs when an individual slips, trips, or falls on someone else's property as a result of dangerous or hazardous conditions, such as a wet floor or broken step."
    },
    {
      q: "Who can be held responsible for a slip and fall accident?",
      a: "The owner or occupier of the property where the accident took place can be held responsible for a slip and fall accident if they failed to take reasonable steps to address the hazard or warn of its presence."
    },
    {
      q: "What kind of compensation can be recovered in a slip and fall case?",
      a: "In a slip and fall case, the individual who was injured may be able to recover compensation for damages such as medical expenses, lost wages, pain and suffering, and other out-of-pocket expenses."
    },
    {
      q: "What evidence is needed to prove a slip and fall case?",
      a: "To prove a slip and fall case, the individual must demonstrate that the owner or occupier of the property knew about the hazard or should have known about it, and failed to take reasonable steps to address it. Evidence may include photographs of the scene, witness statements, and medical records documenting the individual's injuries."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Hero Banner Section */}
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>SLIP AND FALL ACCIDENTS</h1>
          <div className={styles.titleDivider}></div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.mainHeading}>Are You Hurt?</h2>
            
            <h3 className={styles.subHeading}>What is a Slip and Fall Case?</h3>
            <p className={styles.paragraph}>
              A <strong>slip and fall</strong> case refers to a type of personal
              injury lawsuit that arises when an individual slips, trips, or falls
              on someone else's property as a result of dangerous or hazardous
              conditions, such as a wet floor or broken step.
            </p>
            <p className={styles.paragraph}>
              These accidents can result in serious injuries, such as broken
              bones, head injuries, or back injuries, and can lead to substantial
              medical bills, lost wages, and other damages.
            </p>
            <p className={styles.paragraph}>
              In a slip and fall case, the individual who was injured may{" "}
              <strong>file a lawsuit</strong> against the owner or occupier of the
              property where the accident took place, alleging that they failed to
              take reasonable steps to address the hazard or warn of its presence.
            </p>
            <p className={styles.paragraph}>
              <strong>The goal</strong> of a slip and fall case is to hold the
              responsible party accountable for their actions and obtain
              compensation for the damages suffered by the individual who was
              injured.
            </p>

            <h3 className={styles.subHeading} style={{ marginTop: '3rem' }}>What should you do?</h3>
            <p className={styles.paragraph}>
              If someone experiences a slip and fall that results in personal
              injury, the following steps are recommended:
            </p>
            
            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Seek medical attention:</strong> If the individual is
                  injured, it is important for them to seek prompt medical
                  attention. This will ensure that any injuries are properly
                  diagnosed and treated, and it will also create a record of the
                  incident and the individual's injuries, which can be important
                  evidence in a personal injury case.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Document the scene:</strong> If possible, the individual
                  should take photos or videos of the hazardous condition that
                  caused their fall, as well as any injuries they sustained. They
                  should also try to gather information from witnesses and make note
                  of the details of the incident.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Report the incident:</strong> The individual should report
                  the incident to the owner or manager of the property where the fall
                  occurred, and make sure that it is documented in writing.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Preserve evidence:</strong> The individual should keep any
                  clothing or shoes worn during the fall, as well as any other items
                  that may be relevant to the case.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Contact a personal injury lawyer:</strong> A personal
                  injury lawyer can help the individual understand their rights and
                  evaluate the potential value of their personal injury case. They
                  can also represent the individual in negotiations with insurance
                  companies or in court, if necessary.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Follow medical advice:</strong> The individual should
                  follow the advice of their doctor and comply with any recommended
                  treatments, as this will help to ensure a full and complete
                  recovery, which is essential for a successful personal injury case.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.imageCard}>
              <img
                src="/images/services-page/img4.webp"
                alt="Warning sign slippery"
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.faqSection}>
              <h2 className={styles.faqHeading}>
                Frequently Asked Questions about Slip and Fall Accidents.
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
                Don't wait. Schedule your free consultation today to secure your rights.
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
