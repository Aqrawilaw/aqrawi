"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/app/components/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    router.push("/contact");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Logo size={42} showText={true} centerText={true} />
        </div>
        <div className={styles.navLinks}>
          <a href="/" className={styles.navLink}>
            Home
          </a>
          <div className={styles.navItemDropdown}>
            <span className={styles.navLink}>About ▫</span>
            <div className={styles.dropdownMenu}>
              <a href="/about" className={styles.dropdownItem}>
                About us
              </a>
              <div className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
                <span>Our Team</span>
                <span>▫</span>
                <div className={styles.submenu}>
                  <a href="/about/staff" className={styles.dropdownItem}>
                    Staff
                  </a>
                  <a href="/about/management" className={styles.dropdownItem}>
                    Management
                  </a>
                  <a href="/about/associates" className={styles.dropdownItem}>
                    Assocites
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
        <button
          className={styles.navBtn}
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Free Evaluation
        </button>
      </nav>
    </header>
  );
}
