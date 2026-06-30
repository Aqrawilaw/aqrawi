"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/app/components/Logo";
import styles from "./Navbar.module.css";
import { TRANSLATIONS, Language } from "@/constants/translations";

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

  // Load language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (
      savedLang &&
      (savedLang === "en" || savedLang === "es" || savedLang === "ar")
    ) {
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

  const selectLang = (newLang: Language) => {
    localStorage.setItem("lang", newLang);
    setLang(newLang);
    setLangMenuOpen(false);

    // Dispatch custom event to notify other components (Footer, Page, etc.)
    const event = new CustomEvent("languageChange", { detail: newLang });
    window.dispatchEvent(event);
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

  const t = TRANSLATIONS[lang].nav;
  const isRtl = TRANSLATIONS[lang].dir === "rtl";

  return (
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
            {t.home}
          </a>
          <div className={styles.navItemDropdown}>
            <span className={`${styles.navLink} ${styles.navLinkTrigger}`}>
              {t.about} <span className={styles.chevronIcon}>▾</span>
            </span>
            <div className={styles.dropdownMenu}>
              <a href="/about" className={styles.dropdownItem}>
                {t.aboutUs}
              </a>
              <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                <span>{t.ourTeam}</span>
                <span className={styles.submenuChevron}>
                  {isRtl ? "◂" : "▸"}
                </span>
                <div className={styles.submenu}>
                  <a href="/about/staff" className={styles.dropdownItem}>
                    {t.staff}
                  </a>
                  <a href="/about/management" className={styles.dropdownItem}>
                    {t.management}
                  </a>
                  <a href="/about/associates" className={styles.dropdownItem}>
                    {t.associates}
                  </a>
                  <a href="/about/partners" className={styles.dropdownItem}>
                    {t.partners}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="/services" className={styles.navLink}>
            {t.services}
          </a>
          <a
            href="/contact"
            className={`${styles.navLink} ${pathname === "/contact" ? styles.navLinkActive : ""}`}
            onClick={handleContactClick}
          >
            {t.contact}
          </a>
        </div>

        {/* Desktop Actions (CTA Button + Language Selector) */}
        <div className={styles.desktopActions}>
          <button
            className={styles.navBtn}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.freeEvaluation}
          </button>

          {/* Language Selector Dropdown */}
          <div className={styles.langSelector}>
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
              {t.home}
            </a>

            <div className={styles.mobileDropdownContainer}>
              <button
                className={styles.mobileNavLinkTrigger}
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
                <span>{t.about}</span>
                <span
                  className={`${styles.mobileChevron} ${mobileAboutOpen ? styles.rotated : ""}`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`${styles.mobileDropdownMenu} ${mobileAboutOpen ? styles.mobileSubmenuOpen : ""}`}
              >
                <a
                  href="/about"
                  className={styles.mobileDropdownItem}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {t.aboutUs}
                </a>

                <div className={styles.mobileSubDropdownContainer}>
                  <button
                    className={styles.mobileDropdownItemTrigger}
                    onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
                  >
                    <span>{t.ourTeam}</span>
                    <span
                      className={`${styles.mobileChevron} ${mobileTeamOpen ? styles.rotated : ""}`}
                    >
                      ▸
                    </span>
                  </button>

                  <div
                    className={`${styles.mobileSubSubmenu} ${mobileTeamOpen ? styles.mobileSubmenuOpen : ""}`}
                  >
                    <a
                      href="/about/staff"
                      className={styles.mobileSubDropdownItem}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {t.staff}
                    </a>
                    <a
                      href="/about/management"
                      className={styles.mobileSubDropdownItem}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {t.management}
                    </a>
                    <a
                      href="/about/associates"
                      className={styles.mobileSubDropdownItem}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {t.associates}
                    </a>
                    <a
                      href="/about/partners"
                      className={styles.mobileSubDropdownItem}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {t.partners}
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
              {t.services}
            </a>

            <a
              href="/contact"
              className={`${styles.mobileNavLink} ${pathname === "/contact" ? styles.mobileNavLinkActive : ""}`}
              onClick={(e) => {
                handleContactClick(e);
                setIsMobileOpen(false);
              }}
            >
              {t.contact}
            </a>

            <button
              className={styles.mobileNavBtn}
              onClick={() => {
                setIsMobileOpen(false);
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.freeEvaluation}
            </button>

            {/* Mobile Language Selector Widget */}
            <div className={styles.mobileLangSelector}>
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
  );
}
