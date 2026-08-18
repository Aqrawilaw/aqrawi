"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import LegalHelp from "@/components/LegalHelp";

interface TestimonialItem {
  id?: string;
  name: string;
  email?: string;
  title: string;
  rating?: number;
  text: string;
  initials: string;
  img?: string;
}

export default function ServicesPage() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([
    {
      name: "Jessica Hernandez",
      initials: "JH",
      img: "/profile_jessica.png",
      text: "Aqrawi Law Firm represented me after my car accident and I couldn't be happier with the outcome. They were communicative, professional, and fought tirelessly to ensure all my medical bills were paid and I received a fair settlement. Highly recommend!",
      title: "Car Accident Client",
      rating: 5,
    },
    {
      name: "Olufemi Bamigboye",
      initials: "OB",
      img: "/profile_olufemi.png",
      text: "They handled my commercial truck accident case with absolute expertise. The team navigated the complex corporate litigation and secured a recovery that exceeded our expectations. Truly a professional and dedicated firm.",
      title: "Truck Accident Client",
      rating: 5,
    },
    {
      name: "Michael Ramirez",
      initials: "MR",
      text: "After my slip and fall injury at work, Aqrawi & Associates took over all communications with insurance adjusters. They got my medical treatment covered immediately and won my settlement. Outstanding legal team!",
      title: "Slip & Fall Client",
      rating: 5,
    },
  ]);

  // Modal Submission State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "Car Accident Client",
    rating: 5,
    testimonial: "",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Horizontal Tape Ref for Scroll Control
  const tapeRef = useRef<HTMLDivElement>(null);

  // Fetch approved testimonials on load
  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch("/api/testimonial");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setTestimonials(data);
          }
        }
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    }
    loadTestimonials();
  }, []);

  // Horizontal Scroll handlers
  const scrollTape = (direction: "left" | "right") => {
    if (tapeRef.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      tapeRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit testimonial.");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        title: "Car Accident Client",
        rating: 5,
        testimonial: "",
      });
    } catch (err: any) {
      setSubmitError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      desc: "Industrial plant accident with fire and emergency response.",
      img: "/images/services-page/plant-accident.jpg",
      alt: "Industrial plant accident with fire and emergency response",
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
      desc: "Dog bite and animal-related injury",
      img: "/images/services-page/dog-bite.jpg",
      alt: "Dog bite and animal-related injury",
    },
    {
      num: "09",
      title: "Immigration",
      desc: "Navigating U.S. immigration laws requires expertise and precision. Our firm assists individuals, families, and businesses with family petitions, employment visas, green cards, citizenship, asylum, and deportation defense.",
      img: "/images/services-page/immigration.png",
      alt: "Immigration Legal Documents and Passport",
    },
  ];

  // SVG Star renderer
  const renderStars = (count: number = 5) => (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < count ? "#F1C40F" : "#E0E0E0"}
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
                    } else {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      else window.location.href = "/contact";
                    }
                  }}
                  className={styles.serviceBtn}
                >
                  {["Slip and Fall", "Plant Accidents", "Factory Accidents", "Car Accidents", "Trucks and 18-Wheelers Accidents", "Motorcycle Accidents", "Medical Malpractice"].includes(service.title) ? "Learn More" : "Inquire Now"}
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

      {/* Client Testimonials Horizontal Tape Section (Hidden for now) */}
      {/*
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContent}>
          <div className={styles.testimonialsHeader}>
            <h2>Client Testimonials</h2>
            <button
              className={styles.addTestimonialBtn}
              onClick={() => {
                setIsModalOpen(true);
                setSubmitSuccess(false);
                setSubmitError("");
              }}
            >
              <span>+ Add Testimonial</span>
            </button>
          </div>

          <div className={styles.tapeTrackWrapper}>
            <button
              className={`${styles.scrollArrow} ${styles.scrollArrowLeft}`}
              onClick={() => scrollTape("left")}
              aria-label="Scroll Left"
            >
              ‹
            </button>

            <div className={styles.testimonialsTape} ref={tapeRef}>
              {testimonials.map((test, idx) => (
                <div key={test.id || idx} className={styles.testimonialCard}>
                  <div>
                    {renderStars(test.rating || 5)}
                    <p className={styles.quoteText}>"{test.text}"</p>
                  </div>
                  
                  <div className={styles.clientInfo}>
                    <div className={styles.clientAvatar}>
                      {test.img ? (
                        <img
                          src={test.img}
                          alt={test.name}
                          className={styles.avatarImg}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : null}
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

            <button
              className={`${styles.scrollArrow} ${styles.scrollArrowRight}`}
              onClick={() => scrollTape("right")}
              aria-label="Scroll Right"
            >
              ›
            </button>
          </div>
        </div>
      </section>
      */}

      {/* Submission Modal Dialog */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalCloseBtn}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              ×
            </button>

            <h3 className={styles.modalTitle}>Share Your Experience</h3>
            <p className={styles.modalSubtext}>
              Your feedback means everything to us. Submit your testimonial below to be reviewed by our team.
            </p>

            {submitSuccess ? (
              <div className={styles.successAlert}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✨</div>
                <strong>Thank you for your testimonial!</strong>
                <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem" }}>
                  Your submission has been sent to our team for approval and will be published once reviewed.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className={styles.formGrid}>
                {submitError && (
                  <div style={{ color: "#d9534f", fontSize: "0.9rem", fontWeight: "bold" }}>
                    {submitError}
                  </div>
                )}

                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    className={styles.formInput}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address * (Kept Confidential)</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    className={styles.formInput}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="e.g. 713-757-7777"
                    className={styles.formInput}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Service / Case Type</label>
                  <select
                    className={styles.formSelect}
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  >
                    <option value="Car Accident Client">Car Accident Client</option>
                    <option value="Truck Accident Client">Truck Accident Client</option>
                    <option value="Motorcycle Accident Client">Motorcycle Accident Client</option>
                    <option value="Slip and Fall Client">Slip and Fall Client</option>
                    <option value="Plant Accident Client">Plant Accident Client</option>
                    <option value="Medical Malpractice Client">Medical Malpractice Client</option>
                    <option value="Immigration Client">Immigration Client</option>
                    <option value="Client">General Legal Client</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Rating</label>
                  <div className={styles.starRatingRow}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={(hoverRating || formData.rating) >= star ? styles.starActive : ""}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setFormData({ ...formData, rating: star })}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Your Testimonial *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share your experience working with Aqrawi & Associates..."
                    className={styles.formTextarea}
                    value={formData.testimonial}
                    onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? "Submitting..." : "Submit Testimonial"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Contact Legal Help Info */}
      <LegalHelp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
