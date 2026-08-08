"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./HeroSection.module.css";

const FLOATING_WORDS = [
  "Justice", "Integrity", "Victory", "Rights", "Truth",
  "Advocacy", "Law", "Equity", "Honor", "Trust",
  "Defense", "Counsel", "Due Process", "Liberty",
];

interface Particle {
  id: number;
  word: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
}

function createParticle(id: number): Particle {
  return {
    id,
    word: FLOATING_WORDS[Math.floor(Math.random() * FLOATING_WORDS.length)],
    x: Math.random() * 100,
    y: 100 + Math.random() * 20,
    size: 10 + Math.random() * 8,
    opacity: 0.04 + Math.random() * 0.1,
    speed: 0.03 + Math.random() * 0.05,
    drift: (Math.random() - 0.5) * 0.02,
  };
}

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [particles, setParticles] = useState<Particle[]>([]);

  const [titleVisible, setTitleVisible] = useState(false);
  const rafRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const heroRef = useRef<HTMLElement>(null);

  // Initialize particles
  useEffect(() => {
    const initial = Array.from({ length: 18 }, (_, i) => {
      const p = createParticle(i);
      p.y = Math.random() * 100; // spread across screen on init
      return p;
    });
    particlesRef.current = initial;
    setParticles([...initial]);

    // Trigger title animation
    const t = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  // Animate particles
  useEffect(() => {
    let frame = 0;
    const animate = () => {
      frame++;
      timeRef.current += 0.016;

      // Update particles every 2 frames
      if (frame % 2 === 0) {
        particlesRef.current = particlesRef.current.map((p) => {
          let newY = p.y - p.speed;
          let newX = p.x + p.drift;
          let newOpacity = p.opacity;

          // Fade in when rising from bottom
          if (newY > 80) newOpacity = Math.max(0, p.opacity * ((100 - newY) / 20));
          // Fade out at top
          if (newY < 10) newOpacity = Math.max(0, p.opacity * (newY / 10));

          // Reset when off screen
          if (newY < -5) {
            return createParticle(p.id);
          }

          return { ...p, x: newX, y: newY, opacity: newOpacity };
        });
        setParticles([...particlesRef.current]);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Mouse parallax
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const parallaxX = (mousePos.x - 0.5) * 30;
  const parallaxY = (mousePos.y - 0.5) * 15;

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      onMouseMove={handleMouseMove}
    >
      {/* Deep layered background */}
      <div className={styles.bgLayer1} />
      <div className={styles.bgLayer2} />
      <div
        className={styles.bgOrb}
        style={{
          transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
        }}
      />

      {/* Floating legal words */}
      <div className={styles.particleContainer} aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className={styles.floatingWord}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              fontSize: `${p.size}px`,
              opacity: p.opacity,
            }}
          >
            {p.word}
          </span>
        ))}
      </div>

      {/* Animated grid lines */}
      <div className={styles.gridLines} aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.gridLine} />
        ))}
      </div>

      {/* Main content */}
      <div
        className={styles.content}
        style={{
          transform: `translate(${parallaxX * 0.15}px, ${parallaxY * 0.1}px)`,
        }}
      >
        {/* LEFT — Text */}
        <div className={styles.textSide}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Personal Injury Law Firm</span>
          </div>

          <h1 className={`${styles.title} ${titleVisible ? styles.titleVisible : ""}`}>
            <span className={styles.titleLine1}>
              <span className={styles.titleWord}>Fighting</span>
            </span>
            <span className={styles.titleLine2}>
              <span className={styles.titleWordGold}>For Your</span>
            </span>
            <span className={styles.titleLine3}>
              <span className={styles.titleWord}>Rights.</span>
            </span>
          </h1>

          <p className={styles.subtitle}>
            Aqrawi &amp; Associates — Houston&apos;s premier personal injury
            attorneys. We fight tirelessly to recover what you&apos;re owed,
            with zero upfront costs.
          </p>

          <div className={styles.ctas}>
            <a href="#contact" className={styles.ctaPrimary}>
              <span>Free Evaluation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="tel:7137577777" className={styles.ctaSecondary}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call Today: 713-757-7777</span>
            </a>
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              <span className={styles.badgeNum}>10,000+</span>
              <span className={styles.badgeLabel}>Client Consultations</span>
            </div>
            <div className={styles.badgeDivider} />
            <div className={styles.badge}>
              <span className={styles.badgeNum}>7,000+</span>
              <span className={styles.badgeLabel}>Clients Served</span>
            </div>
            <div className={styles.badgeDivider} />
            <div className={styles.badge}>
              <span className={styles.badgeNum}>$0</span>
              <span className={styles.badgeLabel}>Consultation Cost</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Animated Logo */}
        <div className={styles.logoSide} aria-hidden="true">
          <div
            className={styles.logoWrapper}
            style={{
              transform: `translate(${parallaxX * -0.2}px, ${parallaxY * -0.1}px)`,
            }}
          >
            {/* Orbital ring behind logo */}
            <div className={styles.logoOrbitRing} />
            <div className={styles.logoOrbitRing2} />

            {/* Logo SVG — inline for per-shape animation */}
            <svg
              viewBox="0 0 545.92 331.28"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.logoSvg}
              aria-label="Aqrawi &amp; Associates Logo"
            >
              <defs>
                <linearGradient id="hg1" x1="102.85" y1="64.64" x2="350.29" y2="312.08" gradientUnits="userSpaceOnUse">
                  <stop offset=".08" stopColor="#cca655" stopOpacity=".7"/>
                  <stop offset=".16" stopColor="#d9bd71" stopOpacity=".81"/>
                  <stop offset=".25" stopColor="#e6d48d" stopOpacity=".91"/>
                  <stop offset=".32" stopColor="#efe19d" stopOpacity=".98"/>
                  <stop offset=".37" stopColor="#f2e7a4"/>
                  <stop offset=".49" stopColor="#efe39f"/>
                  <stop offset=".62" stopColor="#e9d993"/>
                  <stop offset=".75" stopColor="#dfc87e"/>
                  <stop offset=".89" stopColor="#d1b061"/>
                  <stop offset=".93" stopColor="#cca655"/>
                </linearGradient>
                <linearGradient id="hg2" x1="209.1"  y1="64.77"  x2="456.52" y2="312.2"  gradientUnits="userSpaceOnUse" href="#hg1"/>
                <linearGradient id="hg3" x1="315.85" y1="65.05"  x2="563.34" y2="312.54" gradientUnits="userSpaceOnUse" href="#hg1"/>
                <linearGradient id="hg4" x1="142.02" y1="274.53" x2="211.66" y2="344.17" gradientUnits="userSpaceOnUse" href="#hg1"/>
                <linearGradient id="hg5" x1="12.81"  y1="272.02" x2="86.14"  y2="345.35" gradientUnits="userSpaceOnUse" href="#hg1"/>
                <linearGradient id="hg6" x1="73.17"  y1="145.51" x2="152.58" y2="224.93" gradientUnits="userSpaceOnUse" href="#hg1"/>
              </defs>

              {/* ── LARGE shapes rendered first (bottom z-layer) ── */}
              {/* Wipe top-to-bottom one by one after small triangles appear */}
              <polygon className={`${styles.svgLarge} ${styles.svgLarge1}`}
                points="120.44 90.36 166.36 1.12 331.95 330.42 241.61 330.42 120.44 90.36"
                fill="url(#hg1)" stroke="#000" strokeMiterlimit="10"/>
              <polygon className={`${styles.svgLarge} ${styles.svgLarge2}`}
                points="272.75 1.12 438.3 330.42 347.44 330.42 227.22 91.54 272.75 1.12"
                fill="url(#hg2)" stroke="#000" strokeMiterlimit="10"/>
              <polygon className={`${styles.svgLarge} ${styles.svgLarge3}`}
                points="335.02 91.58 379.78 1.12 545.11 330.78 453.72 330.78 335.02 91.58"
                fill="url(#hg3)" stroke="#000" strokeMiterlimit="10"/>

              {/* ── SMALL triangles rendered last (top z-layer) ── */}
              {/* Pop in first — bottom-left, bottom-center, middle */}
              <polygon className={`${styles.svgSmall} ${styles.svgSmall1}`}
                points=".81 330.42 101.07 330.42 48.01 236.82 .81 330.42"
                fill="url(#hg5)" stroke="#000" strokeMiterlimit="10"/>
              <polygon className={`${styles.svgSmall} ${styles.svgSmall2}`}
                points="124.39 330.42 178.78 237.77 225.41 330.42 124.39 330.42"
                fill="url(#hg4)" stroke="#000" strokeMiterlimit="10"/>
              <polygon className={`${styles.svgSmall} ${styles.svgSmall3}`}
                points="112.64 106.04 60.14 211.42 166.08 211.42 112.64 106.04"
                fill="url(#hg6)" stroke="#000" strokeMiterlimit="10"/>
            </svg>


            {/* Sparkle dots */}
            <span className={`${styles.logoSpark} ${styles.logoSpark1}`} />
            <span className={`${styles.logoSpark} ${styles.logoSpark2}`} />
            <span className={`${styles.logoSpark} ${styles.logoSpark3}`} />
            <span className={`${styles.logoSpark} ${styles.logoSpark4}`} />

            {/* Glow beneath logo */}
            <div className={styles.logoGlow} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
