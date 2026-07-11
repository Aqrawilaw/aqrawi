"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalHelp from "@/components/LegalHelp";
import styles from "./page.module.css";

export default function CarAccidentsPage() {
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
      q: "What is a personal injury case?",
      a: "A personal injury case is a legal dispute that arises when someone is injured as a result of another party's negligence or intentional harm. This type of case may involve a car accident, slip and fall, medical malpractice, or any other incident that resulted in physical or emotional harm."
    },
    {
      q: "How is fault determined in a car accident case?",
      a: "Fault in a car accident case is determined based on the evidence collected at the scene of the accident, such as the accident report, witness statements, and photos or videos. An investigation may also be conducted to determine the cause of the accident and who was responsible."
    },
    {
      q: "How much compensation can I receive for a car accident?",
      a: "The amount of compensation you're eligible to receive for a car accident will depend on several factors, such as the severity of your injuries, the extent of your property damage, and the length of time you'll need to take off from work to recover. A personal injury lawyer can help you determine the amount of compensation you're entitled to."
    },
    {
      q: "Do I need a lawyer to handle my car accident case?",
      a: "While it's not necessary to have a lawyer to handle your car accident case, it's highly recommended. A personal injury lawyer can help you navigate the complexities of the legal process, negotiate with insurance companies, and represent you in court if necessary to ensure that you receive the maximum compensation you deserve."
    },
    {
      q: "How long do I have to file a claim after a car accident?",
      a: "The statute of limitations for filing a claim after a car accident varies from state to state. In general, it's best to file a claim as soon as possible to ensure that all relevant evidence is still available and to avoid missing the deadline for filing."
    },
    {
      q: "Can I still file a claim if I was partially at fault for the accident?",
      a: "In some states, if you were partially at fault for the accident, you may still be able to recover compensation. The amount of compensation you're eligible to receive will be reduced by the percentage of fault assigned to you."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Hero Banner Section */}
      <section className={styles.heroBanner}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>CAR ACCIDENTS</h1>
          <div className={styles.titleDivider}></div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.mainHeading}>Have You Been Involved in Car Accident?</h2>
            
            <h3 className={styles.subHeading}>What is a car accident?</h3>
            <p className={styles.paragraph}>
              Car accidents are a common occurrence on our roads and highways and can result in serious injuries, such as broken bones, head and neck trauma, internal injuries, and in severe cases, fatalities. They can also cause emotional and psychological trauma for the victims and their families.
            </p>

            <h3 className={styles.subHeading} style={{ marginTop: '3rem' }}>What should you do?</h3>
            
            <div className={styles.infoCard}>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                If you're involved in a car accident, it's important to take the necessary steps to protect your rights and ensure that you receive the compensation you deserve. A personal injury lawyer from <strong>Aqrawi and Associates Law Firm</strong> can help you navigate the complexities of a car accident case and ensure that your rights are protected.
              </p>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                Our experienced personal injury lawyers have a thorough understanding of the laws and regulations surrounding car accidents and can help you gather evidence, negotiate with insurance companies, and represent you in court if necessary. We are committed to providing personalized attention to each of our clients and will work tirelessly to secure a favorable outcome in your case.
              </p>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.paragraph} style={{ margin: 0 }}>
                If you've been involved in a car accident, contact <strong>Aqrawi and Associates</strong> today to learn more about how we can help. Our goal is to help alleviate the stress and financial burden caused by the accident and allow you to focus on your recovery.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.imageCard}>
              <img
                src="/images/services-page/img1.webp"
                alt="Car accident scene"
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.faqSection}>
              <h2 className={styles.faqHeading}>
                Frequently Asked Questions about Car Accidents.
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
                If you've been involved in a car accident, contact Aqrawi and Associates today to learn more about how we can help. Our goal is to help alleviate the stress and financial burden caused by the accident and allow you to focus on your recovery.
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
