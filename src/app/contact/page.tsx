"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import LegalHelp from "@/components/LegalHelp";
import { CONTACT_INFO, BRANCHES } from "@/constants/contact";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      // Reset success notification after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div className={styles.contactPage}>
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact</h1>
        </div>
      </section>

      {/* Contact Cards Row */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          {/* Card 1: Address */}
          <div className={styles.contactCard}>
            <div className={styles.cardIcon}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Address</h3>
            <p className={styles.cardText}>
              {CONTACT_INFO.addressLine1}
              <br />
              {CONTACT_INFO.addressLine2}
            </p>
          </div>

          {/* Card 2: Phone */}
          <div className={styles.contactCard}>
            <div className={styles.cardIcon}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Phone</h3>
            <p className={styles.cardText}>
              <a href={`tel:${CONTACT_INFO.phone}`} className={styles.cardLink}>
                {CONTACT_INFO.phoneFormatted}
              </a>
            </p>
          </div>

          {/* Card 3: Fax */}
          <div className={styles.contactCard}>
            <div className={styles.cardIcon}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Fax</h3>
            <p className={styles.cardText}>{CONTACT_INFO.fax}</p>
          </div>

          {/* Card 4: Email */}
          <div className={styles.contactCard}>
            <div className={styles.cardIcon}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Email</h3>
            <p className={styles.cardText}>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className={styles.cardLink}
              >
                {CONTACT_INFO.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className={styles.branchesSection}>
        <div className={styles.branchesContent}>
          <div className={styles.branchesHeader}>
            <h2 className={styles.branchesHeaderTitle}>Our Branches</h2>
            <div className={styles.branchesDivider} />
          </div>

          <div className={styles.branchesGrid}>
            {/* US Offices */}
            <div className={styles.branchCategoryCard}>
              <h3 className={styles.branchCategoryTitle}>US Offices</h3>
              <div className={styles.branchList}>
                {BRANCHES.us.map((branch) => (
                  <div key={branch.id} className={styles.branchItem}>
                    <div className={styles.branchMainInfo}>
                      <span className={styles.branchType}>{branch.type}</span>
                      <h4 className={styles.branchCity}>{branch.city}</h4>
                      <p className={styles.branchAddress}>{branch.address}</p>
                      <p className={styles.branchPhone}>
                        <strong>Tel: </strong>
                        <a
                          href={`tel:${branch.phone}`}
                          className={styles.branchPhoneLink}
                        >
                          {branch.phone}
                        </a>
                      </p>
                    </div>
                    <div className={styles.branchServices}>
                      <span className={styles.servicesTitle}>
                        Quick List of Services:
                      </span>
                      <ul className={styles.servicesList}>
                        {branch.services.map((service, idx) => (
                          <li key={idx} className={styles.serviceItem}>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* International Offices */}
            <div className={styles.branchCategoryCard}>
              <h3 className={styles.branchCategoryTitle}>
                International Offices
              </h3>
              <div className={styles.branchList}>
                {BRANCHES.international.map((branch) => (
                  <div key={branch.id} className={styles.branchItem}>
                    <div className={styles.branchMainInfo}>
                      <span className={styles.branchType}>{branch.type}</span>
                      <h4 className={styles.branchCity}>{branch.city}</h4>
                      {branch.note && (
                        <span className={styles.branchNote}>{branch.note}</span>
                      )}
                      <p className={styles.branchAddress}>{branch.address}</p>
                      <p className={styles.branchPhone}>
                        <strong>Tel: </strong>
                        <a
                          href={`tel:${branch.phone}`}
                          className={styles.branchPhoneLink}
                        >
                          {branch.phone}
                        </a>
                      </p>
                    </div>
                    <div className={styles.branchServices}>
                      <span className={styles.servicesTitle}>
                        Quick List of Services:
                      </span>
                      <ul className={styles.servicesList}>
                        {branch.services.map((service, idx) => (
                          <li key={idx} className={styles.serviceItem}>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Message Section */}
      <section className={styles.messageSection}>
        <div className={styles.messageContent}>
          <div className={styles.messageHeader}>
            <span className={styles.messageHeaderRed}>Free Consultation</span>
            <h2 className={styles.messageHeaderTitle}>Send us a Message</h2>
            <div className={styles.messageDivider} />
          </div>

          <div className={styles.formGrid}>
            <form onSubmit={handleSubmit} className={styles.formCard}>
              {isSubmitted && (
                <div className={styles.submitSuccess}>
                  ✓ Message Sent! We will reach out to you shortly.
                </div>
              )}

              <div className={styles.formRow}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className={styles.input}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className={styles.textarea}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className={styles.infoColumn}>
              <h3 className={styles.infoColumnTitle}>
                Why would you want to contact us?
              </h3>
              <div className={styles.infoColumnDivider} />
              <p className={styles.infoColumnText}>
                At Aqrawi and Associates, we are dedicated to securing the
                maximum compensation for personal injury victims. With a proven
                track record of success and personalized attention, we will
                fight for your rights and support you every step of the way.
                Contact us today for a free consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBanner />

      {/* Map Embed Section */}
      <section className={styles.mapSection}>
        <iframe
          title="Aqrawi & Associates Location Map"
          className={styles.iframeMap}
          src="https://maps.google.com/maps?q=1706%20S%20Texas%206,%20Houston,%20TX%2077077&t=&z=15&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
        />
      </section>

      {/* Legal Help Info Section */}
      <LegalHelp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
