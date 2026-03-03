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
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,44,143,0.12)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,17,61,0.08)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Left: brand */}
        <div className="flex flex-col">
          <span
            className="text-xs font-bold tracking-[0.22em] uppercase transition-colors duration-500"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: scrolled ? "#002c8f" : "rgba(255,255,255,0.9)",
            }}
          >
            CXG · DSG
          </span>
          <span
            className="text-[10px] tracking-widest uppercase transition-colors duration-500"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: scrolled ? "#4d5b82" : "rgba(255,255,255,0.45)",
            }}
          >
            Prepared for Engen
          </span>
        </div>

        {/* Right: CTAs */}
        <nav className="flex items-center gap-3">
          <a
            href="#proposal"
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-300 hover:opacity-80"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: scrolled ? "#002c8f" : "rgba(255,255,255,0.8)",
              border: scrolled
                ? "1px solid rgba(0,44,143,0.3)"
                : "1px solid rgba(255,255,255,0.3)",
            }}
          >
            Explore Proposal
          </a>
          <a
            href="#"
            className="inline-flex items-center px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-sm transition-all duration-300 hover:opacity-90"
            style={{
              fontFamily: "var(--font-jakarta)",
              background: "#e20613",
              color: "#ffffff",
            }}
          >
            Download PDF
          </a>
        </nav>
      </div>
    </header>
  );
}
