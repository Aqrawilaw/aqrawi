"use client";

import React from "react";

interface LogoProps {
  size?: number; // Size of the icon
  showText?: boolean;
  centerText?: boolean;
  className?: string;
}

export default function Logo({
  size = 60,
  showText = true,
  centerText = true,
  className = "",
}: LogoProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: centerText ? "center" : "flex-start",
        justifyContent: "center",
      }}
    >
      {/* SVG Monogram */}
      <svg
        viewBox="0 0 200 150"
        width={size}
        height={size * 0.75}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#bf953f" />
            <stop offset="25%" stopColor="#fcf6ba" />
            <stop offset="50%" stopColor="#b38728" />
            <stop offset="75%" stopColor="#fbf5b7" />
            <stop offset="100%" stopColor="#aa771c" />
          </linearGradient>
        </defs>

        {/* Top peak triangle of A */}
        <polygon
          points="68,20 84,76 52,76"
          fill="url(#goldGrad)"
        />

        {/* Bottom portion of A with triangular cutout */}
        <polygon
          points="50,82 86,82 108,130 83,130 68,98 53,130 28,130"
          fill="url(#goldGrad)"
        />

        {/* Column 1 of M */}
        <polygon
          points="116,130 130,130 159,50 145,50"
          fill="url(#goldGrad)"
        />

        {/* Column 2 of M */}
        <polygon
          points="137,130 151,130 171,75 157,75"
          fill="url(#goldGrad)"
        />

        {/* Column 3 of M (Small triangle at the end) */}
        <polygon
          points="158,130 172,130 169,100"
          fill="url(#goldGrad)"
        />
      </svg>

      {/* Underneath Text */}
      {showText && (
        <div
          style={{
            marginTop: "6px",
            textAlign: centerText ? "center" : "left",
            display: "flex",
            flexDirection: "column",
            alignItems: centerText ? "center" : "flex-start",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              color: "#d4af37",
              textTransform: "uppercase",
              lineHeight: "1.2",
            }}
          >
            Aqrawi & Associates
          </span>
          {/* Divider line */}
          <div
            style={{
              width: "100%",
              height: "0.5px",
              background: "linear-gradient(90deg, transparent, #bf953f, transparent)",
              margin: "3px 0",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "6px",
              fontWeight: "600",
              letterSpacing: "2.5px",
              color: "#bf953f",
              textTransform: "uppercase",
              lineHeight: "1",
              paddingLeft: "2.5px", // offset for letter spacing
            }}
          >
            Law Firm PLLC
          </span>
        </div>
      )}
    </div>
  );
}
