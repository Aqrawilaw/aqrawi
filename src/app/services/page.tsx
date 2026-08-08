"use client";

import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import LegalHelp from "@/components/LegalHelp";

export default function ServicesPage() {
  const services = [
    {
      num: "01",
      title: "Car Accidents",
      desc: "If you have been injured in a car accident, our experienced personal injury attorneys can help you navigate complex insurance claims, negotiate with adjusters, and secure full compensation for medical bills, lost wages, and pain and suffering.",
      img: "/images/services-page/img1.webp",
      alt: "Car Accident Scene",
    },
    {
      num: "02",
      title: "Trucks and 18-Wheelers Accidents",
      desc: "Collisions involving commercial trucks often cause severe, life-altering injuries and require specialized legal knowledge. We thoroughly investigate corporate trucking logs, maintenance records, and safety violations to build a powerful case against negligent carriers.",
      img: "/images/services-page/img2.webp",
      alt: "Commercial Truck Collision Scene",
    },
    {
      num: "03",
      title: "Motorcycle Accidents",
      desc: "Motorcyclists face exceptionally high risks on the road due to a lack of protection. Our firm represents injured riders aggressively, combating insurance biases and fighting to recover maximum damages for severe injuries and motorcycle repairs.",
      img: "/images/services-page/img3.webp",
      alt: "Motorcycle on Road Scene",
    },
    {
      num: "04",
      title: "Slip and Fall",
      desc: "Property owners have a legal duty to keep their premises safe. If you slipped on a wet floor, tripped on uneven pavement, or fell due to poor lighting, our premise liability lawyers hold negligent owners accountable to secure your recovery.",
      img: "/images/services-page/img4.webp",
      alt: "Wet Floor Sign Slip Hazard",
    },
    {
      num: "05",
      title: "Plant Accidents",
      desc: "If you have sustained an injury at a plant or industrial facility, it's important to take prompt action to protect your rights. We can help you understand your options for compensation and guide you through the legal process.",
      img: "/images/services-page/img5.webp",
      alt: "Plant and Industrial Facility Worker",
    },
    {
      num: "06",
      title: "Medical Malpractice",
      desc: "When healthcare providers fail to meet professional standards of care, the results can be catastrophic. We represent victims of surgical errors, misdiagnoses, birth injuries, and medication mistakes, fighting to secure justice for your pain.",
      img: "/images/services-page/img6.webp",
      alt: "Surgeon in Operating Room",
    },
    {
      num: "07",
      title: "Workplace-Related Injuries",
      desc: "On-the-job accidents can involve workers' compensation claims, third-party liability, and employer safety violations. Our legal team fights to ensure injured workers receive full compensation, medical coverage, and financial recovery.",
      img: "/images/services-page/img5.webp",
      alt: "Workplace Injury Construction Site",
    },
    {
      num: "08",
      title: "Animal-Related Injuries, Including Dog Bites",
      desc: "Dog bites and animal attacks cause severe physical trauma, infection risks, and emotional scarring. We hold negligent pet owners accountable under Texas law to recover full compensation for emergency care, surgery, and suffering.",
      img: "/images/services-page/img4.webp",
      alt: "Safety and Warning Hazards",
    },
    {
      num: "09",
      title: "Immigration",
      desc: "Navigating U.S. immigration laws requires expertise and precision. Our firm assists individuals, families, and businesses with family petitions, employment visas, green cards, citizenship, asylum, and deportation defense.",
      img: "/images/services-page/immigration.png",
      alt: "Immigration Legal Documents and Passport",
    },
  ];

  const testimonials = [
    {
      name: "Jessica Hernandez",
      initials: "JH",
      img: "/profile_jessica.png",
      text: "Aqrawi Law Firm represented me after my car accident and I couldn't be happier with the outcome. They were communicative, professional, and fought tirelessly to ensure all my medical bills were paid and I received a fair settlement. Highly recommend!",
      title: "Car Accident Client",
    },
    {
      name: "Olufemi Bamigboye",
      initials: "OB",
      img: "/profile_olufemi.png",
      text: "They handled my commercial truck accident case with absolute expertise. The team navigated the complex corporate litigation and secured a recovery that exceeded our expectations. Truly a professional and dedicated firm.",
      title: "Truck Accident Client",
    },
  ];

  // SVG Star definition for testimonials
  const renderStars = () => (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className={styles.servicesPage}>
      {/* Navbar Header */}
      <Navbar />

      {/* Services Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Services We Offer</h1>
          <p className={styles.heroSubtitle}>
            Dedicated and aggressive legal representation to protect your rights, secure your medical needs, and get you the maximum compensation you deserve.
          </p>
        </div>
      </section>

      {/* Practice Areas List */}
      <section className={styles.servicesContainer}>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.num}
              id={service.num}
              className={isEven ? styles.serviceRow : styles.serviceRowReverse}
              style={{ scrollMarginTop: "100px" }}
            >
              <div className={styles.serviceText}>
                <span className={styles.serviceNum}>{service.num} / Practice Area</span>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <button
                  onClick={() => {
                    if (service.title === "Slip and Fall") {
                      window.location.href = "/services/slip-and-fall";
                    } else if (service.title === "Plant Accidents" || service.title === "Factory Accidents") {
                      window.location.href = "/services/plant-accidents";
                    } else if (service.title === "Car Accidents") {
                      window.location.href = "/services/car-accidents";
                    } else if (service.title === "Trucks and 18-Wheelers Accidents") {
                      window.location.href = "/services/truck-accidents";
                    } else if (service.title === "Motorcycle Accidents") {
                      window.location.href = "/services/motorcycle-accidents";
                    } else if (service.title === "Medical Malpractice") {
                      window.location.href = "/services/medical-malpractice";
                    } else if (service.title === "Immigration") {
                      window.location.href = "/services/immigration";
                    } else {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      else window.location.href = "/contact";
                    }
                  }}
                  className={styles.serviceBtn}
                >
                  {["Slip and Fall", "Plant Accidents", "Factory Accidents", "Car Accidents", "Trucks and 18-Wheelers Accidents", "Motorcycle Accidents", "Medical Malpractice", "Immigration"].includes(service.title) ? "Learn More" : "Inquire Now"}
                </button>
              </div>

              <div className={styles.serviceImageWrapper}>
                <img
                  src={service.img}
                  alt={service.alt}
                  className={styles.serviceImg}
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* Call to Action Banner */}
      <CtaBanner />

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContent}>
          <div className={styles.testimonialsHeader}>
            <h2>Client Testimonials</h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((test) => (
              <div key={test.name} className={styles.testimonialCard}>
                <div>
                  {renderStars()}
                  <p className={styles.quoteText}>"{test.text}"</p>
                </div>
                
                <div className={styles.clientInfo}>
                  <div className={styles.clientAvatar}>
                    {/* Render standard image fallback gracefully if profile picture doesn't load */}
                    <img
                      src={test.img}
                      alt={test.name}
                      className={styles.avatarImg}
                      onError={(e) => {
                        // If file not found, hide img and display fallback
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className={styles.avatarFallback}>{test.initials}</div>
                  </div>
                  <div>
                    <h3 className={styles.clientName}>{test.name}</h3>
                    <span className={styles.clientSubtitle}>{test.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Legal Help Info */}
      <LegalHelp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
