"use client";

import { useState, useEffect } from "react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(245, 241, 232, 0.96)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196, 185, 154, 0.4)" : "none",
        boxShadow: scrolled ? "0 1px 24px rgba(14,34,24,0.06)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Left: brand */}
        <div className="flex flex-col">
          <span
            className="text-xs font-semibold tracking-[0.22em] uppercase transition-colors duration-500"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: scrolled ? "#0e2218" : "rgba(245,241,232,0.6)",
            }}
          >
            CXG · DSG
          </span>
          <span
            className="text-[10px] tracking-widest uppercase transition-colors duration-500"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: scrolled ? "#4a6158" : "rgba(245,241,232,0.4)",
            }}
          >
            Prepared for Engen
          </span>
        </div>

        {/* Right: CTAs */}
        <nav className="flex items-center gap-3">
          <a
            href="#proposal"
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-300"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: scrolled ? "#0e2218" : "rgba(245,241,232,0.75)",
              border: scrolled
                ? "1px solid rgba(14,34,24,0.2)"
                : "1px solid rgba(245,241,232,0.25)",
            }}
          >
            Explore Proposal
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-300"
            style={{
              fontFamily: "var(--font-jakarta)",
              background: "#c59a28",
              color: "#0e2218",
            }}
          >
            Download PDF
          </a>
        </nav>
      </div>
    </header>
  );
}
