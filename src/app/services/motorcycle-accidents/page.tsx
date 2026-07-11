"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalHelp from "@/components/LegalHelp";
import styles from "./page.module.css";

export default function MotorcycleAccidentsPage() {
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
      a: "A personal injury case is a legal dispute that arises when someone is injured as a result of another party's negligence or intentional harm. This type of case may involve a motorcycle accident, car accident, slip and fall, medical malpractice, or any other incident that resulted in physical or emotional harm."
    },
    {
      q: "How is fault determined in a motorcycle accident case?",
      a: "Fault in a motorcycle accident case is determined based on the evidence collected at the scene of the accident, such as the accident report, witness statements, and photos or videos. An investigation may also be conducted to determine the cause of the accident and who was responsible."
    },
    {
      q: "How much compensation can I receive for a motorcycle accident?",
      a: "The amount of compensation you're eligible to receive for a motorcycle accident will depend on several factors, such as the severity of your injuries, the extent of your property damage, and the length of time you'll need to take off from work to recover. A personal injury lawyer can help you determine the amount of compensation you're entitled to."
    },
    {
      q: "Do I need a lawyer to handle my motorcycle accident case?",
      a: "While it's not necessary to have a lawyer to handle your motorcycle accident case, it's highly recommended. A personal injury lawyer can help you navigate the complexities of the legal process, negotiate with insurance companies, and represent you in court if necessary to ensure that you receive the maximum compensation you deserve."
    },
    {
      q: "How long do I have to file a claim after a motorcycle accident?",
      a: "The statute of limitations for filing a claim after a motorcycle accident varies from state to state. In general, it's best to file a claim as soon as possible to ensure that all relevant evidence is still available and to avoid missing the deadline for filing."
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
          <h1 className={styles.pageTitle}>MOTORCYCLE ACCIDENTS</h1>
          <div className={styles.titleDivider}></div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.mainHeading}>Have You Been Involved in a Motorcycle Accident?</h2>
            
            <h3 className={styles.subHeading}>What is a motorcycle accident?</h3>
            <p className={styles.paragraph}>
              Motorcycle accidents are often severe and can result in serious injuries or death. Due to the lack of protection offered by motorcycles, riders are at a higher risk of sustaining serious injuries in the event of an accident. Injuries sustained in motorcycle accidents can include broken bones, road rash, head trauma, and spinal cord injuries, among others.
            </p>
            <p className={styles.paragraph}>
              In the event of a motorcycle accident, the victim may be entitled to compensation for their injuries and damages sustained. This can include compensation for medical expenses, lost wages, pain and suffering, and other related expenses.
            </p>
            <p className={styles.paragraph}>
              In a personal injury case involving a motorcycle accident, it's important to establish fault in order to determine who is liable for the victim's injuries and damages. This can involve gathering and analyzing evidence such as eyewitness statements, traffic camera footage, and accident reports.
            </p>
            <p className={styles.paragraph}>
              An experienced personal injury lawyer can help the victim navigate the legal process, negotiate with insurance companies, and fight for the compensation they deserve. If you or a loved one has been involved in a motorcycle accident, it's important to seek legal representation as soon as possible to ensure that your rights are protected.
            </p>

            <h3 className={styles.subHeading} style={{ marginTop: '3rem' }}>What should you do?</h3>
            <p className={styles.paragraph}>
              If you've been involved in a motorcycle accident, it's important to take certain steps to protect your rights and ensure that you receive the compensation you deserve. Some of the things you should do include:
            </p>

            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Seek medical attention:</strong> Even if you feel okay, it's important to seek medical attention right away to ensure that any injuries are documented and treated.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Report the accident:</strong> Report the accident to the police and make sure to obtain a copy of the accident report.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Gather evidence:</strong> If possible, take photos of the scene and get the contact information of any witnesses.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Contact a personal injury lawyer:</strong> An experienced personal injury lawyer can help you navigate the legal process and protect your rights.
                </div>
              </div>
            </div>

            <p className={styles.paragraph} style={{ marginTop: '2.5rem' }}>
              <strong>Aqrawi and Associates</strong> is a law firm that specializes in personal injury cases. If you've been involved in a motorcycle accident, our lawyers can help you by:
            </p>

            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Investigating your case:</strong> Our lawyers will thoroughly investigate your case to gather evidence and determine who is liable for your injuries.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Negotiating with insurance companies:</strong> We will negotiate with the insurance company to ensure that you receive the compensation you deserve.
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <strong>Representing you in court:</strong> If necessary, we will represent you in court and fight for your rights.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.imageCard}>
              <img
                src="/images/services-page/img3.webp"
                alt="Motorcycle accident scene"
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.faqSection}>
              <h2 className={styles.faqHeading}>
                Frequently Asked Questions about Motorcycle Accidents.
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
                At Aqrawi and Associates, we understand how difficult it can be to deal with the aftermath of a motorcycle accident. Our lawyers will work tirelessly to ensure that you receive the compensation you deserve, so that you can focus on your recovery.
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
