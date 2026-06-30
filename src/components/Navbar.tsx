"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/app/components/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Determine the scroll target based on page
    if (pathname === "/") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, scroll to contact info section at bottom
      const el = document.getElementById("contact-info");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback: redirect to homepage contact section
        router.push("/#contact");
      }
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <Logo size={45} showText={true} centerText={false} />
        </a>

        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}>
          <a
            href="/"
            className={`${styles.navLink} ${pathname === "/" ? styles.navLinkActive : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className={`${styles.navLink} ${pathname === "/about" ? styles.navLinkActive : ""}`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <a
            href="/services"
            className={`${styles.navLink} ${pathname === "/services" ? styles.navLinkActive : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className={styles.navLink}
            onClick={handleContactClick}
          >
            Contact
          </a>
        </div>

        <button onClick={handleContactClick} className={styles.consultationBtn}>
          Free Consultation
        </button>
      </nav>
    </header>
  );
}
