"use client";

import React, { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import LegalHelp from "@/components/LegalHelp";
import { TEAM_MEMBERS, TeamMember } from "@/constants/team";

const CATEGORY_TITLES: Record<string, string> = {
  partners: "Partners",
  management: "Management",
  associates: "Associates",
  staff: "Staff",
};

export default function TeamCategoryPage() {
  const params = useParams();
  const category = params?.category as string;
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (memberId: string) => {
    setImageErrors((prev) => ({ ...prev, [memberId]: true }));
  };

  // Validate category route parameter
  const title = CATEGORY_TITLES[category];
  if (!title) {
    notFound();
  }

  // Filter members belonging to this category and sort those with images to show up first
  const members = TEAM_MEMBERS.filter((member) => member.category === category).sort(
    (a, b) => {
      const hasImgA = a.image ? 1 : 0;
      const hasImgB = b.image ? 1 : 0;
      return hasImgB - hasImgA; // 1 (has image) comes before 0 (no image)
    }
  );

  const openBio = (member: TeamMember) => {
    if (!member.bio) return;
    setSelectedMember(member);
    // Disable body scrolling when drawer is open
    document.body.style.overflow = "hidden";
  };

  const closeBio = () => {
    setSelectedMember(null);
    // Restore body scrolling
    document.body.style.overflow = "unset";
  };

  // Cleanup body scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Helper to extract initials from name
  const getInitials = (name: string) => {
    const parts = name.split(" ");
    return parts.map((p) => p[0]).join("").toUpperCase().slice(0, 2);
  };

  return (
    <div className={styles.teamPage}>
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className={styles.gridSection}>
        <div className={styles.teamGrid}>
          {members.map((member, index) => {
            const hasNoImage = !member.image || imageErrors[member.id];
            return (
              <div 
                key={member.id} 
                className={styles.memberCard}
                style={{ animationDelay: `${index * 0.07}s` }}
              >
                <div 
                  className={styles.imageWrapper}
                  onClick={() => openBio(member)}
                  style={{ cursor: member.bio ? "pointer" : "default" }}
                >
                  {member.image && !imageErrors[member.id] && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className={styles.memberImg}
                      onError={() => handleImageError(member.id)}
                    />
                  )}
                  <div className={styles.avatarFallback}>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      className={styles.fallbackIcon}
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span className={styles.fallbackInitials}>
                      {getInitials(member.name)}
                    </span>
                  </div>
                </div>
                <h2 className={styles.memberName}>{member.name}</h2>
                <span className={styles.memberPosition}>{member.position}</span>
                {member.bio && (
                  <button onClick={() => openBio(member)} className={styles.bioBtn}>
                    Bio
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Slide-out Biography Drawer Overlay & Panel */}
      <div
        className={`${styles.drawerOverlay} ${
          selectedMember ? styles.drawerOverlayActive : ""
        }`}
        onClick={closeBio}
      />
      <div
        className={`${styles.drawer} ${
          selectedMember ? styles.drawerOpen : ""
        }`}
      >
        <button
          className={styles.closeBtn}
          onClick={closeBio}
          aria-label="Close bio panel"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {selectedMember && (
          <div className={styles.drawerContent}>
            <div className={styles.drawerImageContainer}>
              <div className={styles.drawerImage}>
                {selectedMember.image && (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className={styles.drawerImg}
                    style={{
                      objectPosition:
                        selectedMember.id === "walat-aqrawi"
                          ? "center 18%"
                          : "center top",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
                <div className={styles.drawerAvatarFallback}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className={styles.fallbackIcon}
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className={styles.fallbackInitials}>
                    {getInitials(selectedMember.name)}
                  </span>
                </div>
              </div>
              <svg className={styles.circleSvg} viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  className={styles.circlePath}
                />
              </svg>
            </div>
            
            <h2 className={styles.drawerName}>{selectedMember.name}</h2>
            <span className={styles.drawerPosition}>
              {selectedMember.position}
            </span>
            <div className={styles.drawerDivider} />
            
            <div className={styles.drawerBio}>
              {selectedMember.bio.split("\n\n").map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Banner */}
      <CtaBanner />

      {/* Legal Help Info Section */}
      <LegalHelp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
