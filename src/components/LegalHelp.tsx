"use client";

import React from "react";
import styles from "./LegalHelp.module.css";
import { CONTACT_INFO } from "@/constants/contact";

export default function LegalHelp() {
  return (
    <section id="contact-info" className={styles.legalHelpSection}>
      <div className={styles.legalHelpContent}>
        <h2 className={styles.legalHelpTitle}>Do You Need Legal Help?</h2>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactCol}>
            <h3>Free Consultation</h3>
            <p>
              <a href={`tel:${CONTACT_INFO.phone}`} className={styles.contactLink}>
                {CONTACT_INFO.phoneFormatted}
              </a>
            </p>
          </div>
          
          <div className={styles.contactCol}>
            <h3>Email Us At</h3>
            <p>
              <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactLink}>
                {CONTACT_INFO.email}
              </a>
            </p>
          </div>
          
          <div className={styles.contactCol}>
            <h3>Visit Us At</h3>
            <p>
              {CONTACT_INFO.addressLine1}<br />
              {CONTACT_INFO.addressLine2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
