"use client";

import React from "react";

interface LogoProps {
  size?: number; // Width of the logo
  showText?: boolean; // Maintained for prop compatibility
  centerText?: boolean; // Maintained for prop compatibility
  className?: string;
}

export default function Logo({
  size = 60,
  className = "",
}: LogoProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/images/logo.webp"
        alt="Aqrawi & Associates Logo"
        style={{
          width: size,
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}
