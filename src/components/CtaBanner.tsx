"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  const pathname = usePathname();
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      const el = document.getElementById("contact-info");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#contact");
      }
    }
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <p className={styles.ctaText}>
          "Call us today for a FREE and confidential consultation. Our team are here to support you and fight for your rights."
        </p>
        <button onClick={handleContactClick} className={styles.ctaBtn}>
          Contact Us
        </button>
      </div>
    </section>
  );
}
