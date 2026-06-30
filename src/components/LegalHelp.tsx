"use client";

import React from "react";
import styles from "./LegalHelp.module.css";

export default function LegalHelp() {
  return (
    <section id="contact-info" className={styles.legalHelpSection}>
      <div className={styles.legalHelpContent}>
        <h2 className={styles.legalHelpTitle}>Do You Need Legal Help?</h2>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactCol}>
            <h3>Free Consultation</h3>
            <p>
              <a href="tel:18001234567" className={styles.contactLink}>
                +1 (800) 123-4567
              </a>
            </p>
          </div>
          
          <div className={styles.contactCol}>
            <h3>Email Us At</h3>
            <p>
              <a href="mailto:info@aqrawilaw.com" className={styles.contactLink}>
                info@aqrawilaw.com
              </a>
            </p>
          </div>
          
          <div className={styles.contactCol}>
            <h3>Visit Us At</h3>
            <p>
              123 Main Street, Suite 400<br />
              New York, NY 10001
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
