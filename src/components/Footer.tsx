"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          Copyright © {new Date().getFullYear()} Aqrawi Law Firm | All Rights Reserved
        </div>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="#" className={styles.footerLink}>
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
