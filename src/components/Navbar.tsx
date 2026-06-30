"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/app/components/Logo";
import styles from "./Navbar.module.css";

// Declare global for Google Translate properties
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

type Language = "en" | "es" | "ar";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  // Translation state
  const [lang, setLang] = useState<Language>("en");
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Load language state and inject Google Translate Element
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "es" || savedLang === "ar")) {
      setLang(savedLang);
    }

    // Google Translate callback initialization
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "es,ar",
          layout: window.google?.translate?.TranslateElement?.InlineLayout?.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Load Google Translate script dynamically if not present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Auto-apply saved language once Google Translate dropdown mounts
    if (savedLang && savedLang !== "en") {
      const interval = setInterval(() => {
        const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (select) {
          select.value = savedLang;
          select.dispatchEvent(new Event("change"));
          clearInterval(interval);
        }
      }, 150);
      
      // Clear interval after 10s to prevent memory leaks
      setTimeout(() => clearInterval(interval), 10000);
    }
  }, []);

  const selectLang = (newLang: Language) => {
    localStorage.setItem("lang", newLang);
    setLang(newLang);
    setLangMenuOpen(false);

    // Set Google Translate cookie
    if (newLang === "en") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname + ";";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.localhost;";
    } else {
      document.cookie = `googtrans=/en/${newLang}; path=/;`;
      document.cookie = `googtrans=/en/${newLang}; path=/; domain=${window.location.hostname};`;
      document.cookie = `googtrans=/en/${newLang}; path=/; domain=.localhost;`;
    }

    // Dispatch languageChange custom event for layout direction sync
    const event = new CustomEvent("languageChange", { detail: newLang });
    window.dispatchEvent(event);

    // Try to trigger translation instantly without page reload
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = newLang === "en" ? "" : newLang;
      select.dispatchEvent(new Event("change"));
    } else {
      // Fallback: reload if script isn't fully mounted in DOM
      window.location.reload();
    }
  };

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileOpen(false);
    router.push("/contact");
  };

  const handleFreeEvaluationClick = () => {
    setIsMobileOpen(false);
    if (pathname === "/") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/contact");
    }
  };

  const isRtl = lang === "ar";

  return (
    <>
      {/* Hidden Google Translate mount element - placed off-screen */}
      <div 
        id="google_translate_element" 
        style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} 
      />

      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""} ${isMobileOpen ? styles.headerMobileOpen : ""}`}
        dir={isRtl ? "rtl" : "ltr"}
      >
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="/">
              <Logo size={90} showText={true} centerText={true} />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className={`${styles.navLinks} ${isRtl ? styles.rtlLinks : ""}`}>
            <a href="/" className={styles.navLink}>
              Home
            </a>
            <div className={styles.navItemDropdown}>
              <span className={`${styles.navLink} ${styles.navLinkTrigger}`}>
                About <span className={styles.chevronIcon}>▾</span>
              </span>
              <div className={styles.dropdownMenu}>
                <a href="/about" className={styles.dropdownItem}>
                  About Us
                </a>
                <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                  <span>Our Team</span>
                  <span className={styles.submenuChevron}>{isRtl ? "◂" : "▸"}</span>
                  <div className={styles.submenu}>
                    <a href="/about/staff" className={styles.dropdownItem}>
                      Staff
                    </a>
                    <a href="/about/management" className={styles.dropdownItem}>
                      Management
                    </a>
                    <a href="/about/associates" className={styles.dropdownItem}>
                      Associates
                    </a>
                    <a href="/about/partners" className={styles.dropdownItem}>
                      Partners
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/services" className={styles.navLink}>
              Services
            </a>
            <a
              href="/contact"
              className={`${styles.navLink} ${pathname === "/contact" ? styles.navLinkActive : ""}`}
              onClick={handleContactClick}
            >
              Contact
            </a>
          </div>

          {/* Desktop Actions (CTA Button + Language Selector) */}
          <div className={styles.desktopActions}>
            <button className={styles.navBtn} onClick={handleFreeEvaluationClick}>
              Free Evaluation
            </button>

            {/* Language Selector Dropdown */}
            <div className={`${styles.langSelector} notranslate`}>
              <button
                className={styles.langBtn}
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                aria-label="Select Language"
              >
                <span>{lang.toUpperCase()}</span>
              </button>
              {langMenuOpen && (
                <div className={styles.langDropdown}>
                  <button
                    onClick={() => selectLang("en")}
                    className={lang === "en" ? styles.langActive : ""}
                  >
                    English
                  </button>
                  <button
                    onClick={() => selectLang("es")}
                    className={lang === "es" ? styles.langActive : ""}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => selectLang("ar")}
                    className={lang === "ar" ? styles.langActive : ""}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Toggle Button for Mobile */}
          <button
            className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerActive : ""}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>

          {/* Mobile Navigation Drawer */}
          <div
            className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileMenuOpen : ""}`}
            dir={isRtl ? "rtl" : "ltr"}
          >
            <div className={styles.mobileMenuLinks}>
              <a
                href="/"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileOpen(false)}
              >
                Home
              </a>

              <div className={styles.mobileDropdownContainer}>
                <button
                  className={styles.mobileNavLinkTrigger}
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                >
                  <span>About</span>
                  <span className={`${styles.mobileChevron} ${mobileAboutOpen ? styles.rotated : ""}`}>▾</span>
                </button>

              <div
                className={`${styles.mobileDropdownMenu} ${mobileAboutOpen ? styles.mobileSubmenuOpen : ""}`}
              >
                <a
                  href="/about"
                  className={styles.mobileDropdownItem}
                  onClick={() => setIsMobileOpen(false)}
                >
                  About Us
                </a>

                <div className={styles.mobileSubDropdownContainer}>
                  <button
                    className={styles.mobileDropdownItemTrigger}
                    onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
                  >
                    <span>Our Team</span>
                    <span className={`${styles.mobileChevron} ${mobileTeamOpen ? styles.rotated : ""}`}>▸</span>
                  </button>

                  <div
                    className={`${styles.mobileSubSubmenu} ${mobileTeamOpen ? styles.mobileSubmenuOpen : ""}`}
                  >
                    <a
                      href="/about/staff"
                      className={styles.mobileSubDropdownItem}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Staff
                    </a>
                    <a
                      href="/about/management"
                      className={styles.mobileSubDropdownItem}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Management
                    </a>
                    <a
                      href="/about/associates"
                      className={styles.mobileSubDropdownItem}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Associates
                    </a>
                    <a
                      href="/about/partners"
                      className={styles.mobileSubDropdownItem}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Partners
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/services"
              className={styles.mobileNavLink}
              onClick={() => setIsMobileOpen(false)}
            >
              Services
            </a>

            <a
              href="/contact"
              className={`${styles.mobileNavLink} ${pathname === "/contact" ? styles.mobileNavLinkActive : ""}`}
              onClick={(e) => {
                handleContactClick(e);
                setIsMobileOpen(false);
              }}
            >
              Contact
            </a>

            <button className={styles.mobileNavBtn} onClick={handleFreeEvaluationClick}>
              Free Evaluation
            </button>

            {/* Mobile Language Selector Widget */}
            <div className={`${styles.mobileLangSelector} notranslate`}>
              <button
                onClick={() => selectLang("en")}
                className={`${styles.mobileLangBtn} ${lang === "en" ? styles.mobileLangBtnActive : ""}`}
              >
                EN
              </button>
              <button
                onClick={() => selectLang("es")}
                className={`${styles.mobileLangBtn} ${lang === "es" ? styles.mobileLangBtnActive : ""}`}
              >
                ES
              </button>
              <button
                onClick={() => selectLang("ar")}
                className={`${styles.mobileLangBtn} ${lang === "ar" ? styles.mobileLangBtnActive : ""}`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </>
  );
}
