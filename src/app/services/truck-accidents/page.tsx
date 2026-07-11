"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalHelp from "@/components/LegalHelp";
import styles from "./page.module.css";

export default function TruckAccidentsPage() {
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
      q: "What should I do if I'm involved in a truck accident?",
      a: "If you're involved in a truck accident, it's important to seek medical attention for any injuries, even if they appear minor. You should also report the accident to the authorities and obtain a copy of the accident report. Take pictures or videos of the scene of the accident and any damage to the vehicles, and obtain contact information from any witnesses. Do not speak with the insurance company of the trucking company or admit fault for the accident."
    },
    {
      q: "How is fault determined in a truck accident case?",
      a: "Fault in a truck accident case is determined based on the evidence collected at the scene of the accident, such as the accident report, witness statements, and photos or videos. An investigation may also be conducted to determine the cause of the accident and who was responsible."
    },
    {
      q: "Can I still file a claim if I was partially at fault for the accident?",
      a: "In some states, if you were partially at fault for the accident, you may still be able to recover compensation. The amount of compensation you're eligible to receive will be reduced by the percentage of fault assigned to you."
    },
    {
      q: "How long do I have to file a claim after a truck accident?",
      a: "The statute of limitations for filing a claim after a truck accident varies from state to state. In general, it's best to file a claim as soon as possible to ensure that all relevant evidence is still available and to avoid missing the deadline for filing."
    },
    {
      q: "How much compensation can I receive for a truck accident?",
      a: "The amount of compensation you're eligible to receive for a truck accident will depend on several factors, such as the severity of your injuries, the extent of your property damage, and the length of time you'll need to take off from work to recover. A personal injury lawyer can help you determine the amount of compensation you're entitled to."
    },
    {
      q: "Do I need a lawyer to handle my truck accident case?",
      a: "While it's not necessary to have a lawyer to handle your truck accident case, it's highly recommended. A personal injury lawyer can help you navigate the complexities of the legal process, negotiate with insurance companies, and represent you in court if necessary to ensure that you receive the maximum compensation you deserve."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Hero Banner Section */}
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>TRUCK ACCIDENTS</h1>
          <div className={styles.titleDivider}></div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.mainHeading}>Have You Been Involved in Truck Accident?</h2>
            
            <p className={styles.paragraph}>
              Trucks and 18-wheelers are common sights on our roads and highways, but the accidents involving these large commercial vehicles can have devastating consequences. Due to their size and weight, truck and 18-wheeler accidents often result in serious injuries or fatalities.
            </p>
            <p className={styles.paragraph}>
              If you or a loved one has been affected by a truck or 18-wheeler accident, it's essential to seek the help of a personal injury lawyer. A knowledgeable and experienced attorney can help you navigate the complexities of these cases and ensure that your rights are protected.
            </p>

            <div className={styles.infoCard} style={{ marginTop: '2rem' }}>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                At <strong>Aqrawi and Associates</strong>, our team of personal injury lawyers has extensive experience handling truck and 18-wheeler accidents. We understand the unique challenges these cases present and have the skills and resources to gather all the necessary evidence to build a strong case on your behalf.
              </p>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                Our goal is to help our clients recover the maximum compensation they deserve, covering expenses such as medical bills, lost wages, and pain and suffering. We believe that you deserve to get back on your feet and move forward with your life after a devastating accident.
              </p>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                If you're looking to open a case for a truck or 18-wheeler accident, don't hesitate to reach out to <strong>Aqrawi and Associates</strong>. Our team is here to listen to your story, answer your questions, and guide you through the legal process every step of the way.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.imageCard}>
              <img
                src="/images/services-page/img2.webp"
                alt="Truck accident scene"
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.faqSection}>
              <h2 className={styles.faqHeading}>
                Frequently Asked Questions about Truck Accidents.
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
                If you're looking to open a case for a truck or 18-wheeler accident, don't hesitate to reach out to Aqrawi and Associates. Our team is here to listen to your story, answer your questions, and guide you through the legal process every step of the way.
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
