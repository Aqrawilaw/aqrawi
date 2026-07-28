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
  const [scalesAngle, setScalesAngle] = useState(0);
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

  // Animate particles and scales
  useEffect(() => {
    let frame = 0;
    const animate = () => {
      frame++;
      timeRef.current += 0.016;
      const t = timeRef.current;

      // Perpetual pendulum — two overlapping frequencies for organic feel
      const angle = Math.sin(t * 0.7) * 10 + Math.sin(t * 0.4) * 4;
      setScalesAngle(angle);

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

        {/* RIGHT — Animated Scales of Justice */}
        <div className={styles.scalesSide} aria-hidden="true">
          <div
            className={styles.scalesWrapper}
            style={{
              transform: `translate(${parallaxX * -0.2}px, ${parallaxY * -0.1}px)`,
            }}
          >
            <svg
              className={styles.scalesSvg}
              viewBox="0 0 400 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Glow defs */}
              <defs>
                <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f0d060" />
                  <stop offset="50%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#aa771c" />
                </linearGradient>
                <linearGradient id="beamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Background glow circle */}
              <circle cx="200" cy="220" r="160" fill="url(#goldGlow)" />

              {/* Base / pedestal */}
              <rect x="180" y="440" width="40" height="10" rx="5" fill="url(#goldGrad)" />
              <rect x="170" y="448" width="60" height="8" rx="4" fill="url(#goldGrad)" opacity="0.8" />

              {/* Vertical pillar */}
              <rect x="197" y="100" width="6" height="345" rx="3" fill="url(#beamGrad)" />

              {/* Top ornament */}
              <circle cx="200" cy="98" r="10" fill="url(#goldGrad)" filter="url(#glow)" />
              <circle cx="200" cy="98" r="5" fill="#fff8e1" />

              {/* The pivot / fulcrum ring */}
              <circle cx="200" cy="165" r="8" fill="none" stroke="url(#goldGrad)" strokeWidth="3" />
              <circle cx="200" cy="165" r="2" fill="url(#goldGrad)" />

              {/* Animated beam + suspended pans — all pivot around fulcrum */}
              <g transform={`rotate(${scalesAngle}, 200, 165)`}>

                {/* Horizontal beam */}
                <rect x="58" y="161" width="284" height="8" rx="4" fill="url(#goldGrad)" />

                {/* ── LEFT SIDE ── */}
                {/* Three suspension strings from beam end down to pan rim */}
                {/* Left string  (beam-end x=75, pan-rim left x=48) */}
                <line x1="75"  y1="169" x2="48"  y2="240" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" />
                {/* Center string (beam-end x=80, pan-rim center x=80) */}
                <line x1="80"  y1="169" x2="80"  y2="240" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" />
                {/* Right string  (beam-end x=85, pan-rim right x=112) */}
                <line x1="85"  y1="169" x2="112" y2="240" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" />

                {/* Left pan dish */}
                {/* Bowl rim */}
                <ellipse cx="80" cy="240" rx="36" ry="7" fill="url(#goldGrad)" opacity="0.95" />
                {/* Bowl curve — gives depth */}
                <path d="M44 240 Q80 258 116 240" fill="url(#goldGrad)" opacity="0.55" />



                {/* ── RIGHT SIDE ── */}
                {/* Three suspension strings */}
                <line x1="315" y1="169" x2="288" y2="240" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="320" y1="169" x2="320" y2="240" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="325" y1="169" x2="352" y2="240" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" />

                {/* Right pan dish */}
                <ellipse cx="320" cy="240" rx="36" ry="7" fill="url(#goldGrad)" opacity="0.95" />
                <path d="M284 240 Q320 258 356 240" fill="url(#goldGrad)" opacity="0.55" />


              </g>

              {/* Decorative ring at base of pillar */}
              <ellipse cx="200" cy="440" rx="30" ry="6" fill="url(#goldGrad)" opacity="0.6" />

              {/* Star sparkles around scales */}
              <g className={styles.sparkle} style={{ animationDelay: "0s" }}>
                <circle cx="130" cy="120" r="2" fill="#d4af37" opacity="0.8" />
                <line x1="130" y1="114" x2="130" y2="126" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
                <line x1="124" y1="120" x2="136" y2="120" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
              </g>
              <g className={styles.sparkle} style={{ animationDelay: "0.8s" }}>
                <circle cx="285" cy="140" r="1.5" fill="#f0d060" opacity="0.9" />
                <line x1="285" y1="135" x2="285" y2="145" stroke="#f0d060" strokeWidth="1" opacity="0.5" />
                <line x1="280" y1="140" x2="290" y2="140" stroke="#f0d060" strokeWidth="1" opacity="0.5" />
              </g>
              <g className={styles.sparkle} style={{ animationDelay: "1.6s" }}>
                <circle cx="155" cy="320" r="1.5" fill="#d4af37" opacity="0.7" />
                <line x1="155" y1="315" x2="155" y2="325" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
                <line x1="150" y1="320" x2="160" y2="320" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
              </g>
              <g className={styles.sparkle} style={{ animationDelay: "2.4s" }}>
                <circle cx="330" cy="300" r="2" fill="#f0d060" opacity="0.8" />
                <line x1="330" y1="294" x2="330" y2="306" stroke="#f0d060" strokeWidth="1" opacity="0.6" />
                <line x1="324" y1="300" x2="336" y2="300" stroke="#f0d060" strokeWidth="1" opacity="0.6" />
              </g>
            </svg>

            {/* Glow beneath scales */}
            <div className={styles.scalesGlow} />
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
