"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/app/components/Logo";
import styles from "./Footer.module.css";
import { TRANSLATIONS, Language } from "@/constants/translations";

export default function Footer() {
  const [lang, setLang] = useState<Language>("en");

  // Sync language with localStorage and navbar changes
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "es" || savedLang === "ar")) {
      setLang(savedLang);
    }

    const handleLangChange = (e: any) => {
      setLang(e.detail);
    };
    window.addEventListener("languageChange" as any, handleLangChange);
    return () => {
      window.removeEventListener("languageChange" as any, handleLangChange);
    };
  }, []);

  const t = TRANSLATIONS[lang].footer;
  const nav = TRANSLATIONS[lang].nav;
  const isRtl = TRANSLATIONS[lang].dir === "rtl";

  return (
    <footer className={styles.footer} dir={isRtl ? "rtl" : "ltr"}>
      <div className={styles.footerContainer}>
        {/* Top footer sections */}
        <div className={styles.footerGrid}>
          {/* Column 1: Branding & Tagline */}
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <Logo size={180} />
            </div>
            <p className={styles.footerTagline}>
              {t.tagline}
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialBox} aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialBox} aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialBox} aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialBox} aria-label="Twitter / X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={styles.footerCol}>
            <h3 className={styles.colHeading}>{t.quickLinks}</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/" className={styles.footerLink}>{nav.home}</a>
              </li>
              <li>
                <a href="/about" className={styles.footerLink}>{nav.aboutUs}</a>
              </li>
              <li>
                <a href="/services" className={styles.footerLink}>{nav.services}</a>
              </li>
              <li>
                <a href="/contact" className={styles.footerLink}>{nav.contact}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className={styles.footerCol}>
            <h3 className={styles.colHeading}>{t.hq}</h3>
            <p className={styles.contactText}>
              1706 S Texas 6<br />
              Houston, TX 77077
            </p>
            <p className={styles.contactText}>
              <strong>{t.phone}:</strong> <a href="tel:7137577777" className={styles.inlineLink}>713-757-7777</a><br />
              <strong>{t.email}:</strong> <a href="mailto:info@aqrawilaw.com" className={styles.inlineLink}>info@aqrawilaw.com</a><br />
              <strong>{t.fax}:</strong> 281-605-5805
            </p>
            <p className={styles.contactText}>
              <strong>{t.hours}:</strong> {t.hoursVal}
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className={styles.footerDivider} />

        {/* Bottom footer copyright and policies */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Aqrawi Law Firm | {t.copyright}
          </div>
          <div className={styles.policyLinks}>
            <a href="#" className={styles.policyLink}>{t.privacy}</a>
            <span className={styles.policySeparator}>•</span>
            <a href="#" className={styles.policyLink}>{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
