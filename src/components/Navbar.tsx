"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/app/components/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState<boolean>(false);

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

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""} ${isMobileOpen ? styles.headerMobileOpen : ""}`}
    >
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="/">
            <Logo size={90} showText={true} centerText={true} />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className={styles.navLinks}>
          <a href="/" className={styles.navLink}>
            Home
          </a>
          <div className={styles.navItemDropdown}>
            <span className={`${styles.navLink} ${styles.navLinkTrigger}`}>
              About <span className={styles.chevronIcon}>▾</span>
            </span>
            <div className={styles.dropdownMenu}>
              <a href="/about" className={styles.dropdownItem}>
                About us
              </a>
              <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                <span>Our Team</span>
                <span className={styles.submenuChevron}>▸</span>
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

        {/* Desktop CTA Button */}
        <button
          className={styles.navBtn}
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Free Evaluation
        </button>

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
                  About us
                </a>

                <div className={styles.mobileSubDropdownContainer}>
                  <button
                    className={styles.mobileDropdownItemTrigger}
                    onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
                  >
                    <span>Our Team</span>
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

            <button
              className={styles.mobileNavBtn}
              onClick={() => {
                setIsMobileOpen(false);
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Free Evaluation
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
