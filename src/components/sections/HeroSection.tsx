export function HeroSection() {
  return (
    <section className="hero-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center lg:px-10">
      {/* Top metadata badge */}
      <div className="hero-badge absolute top-24 left-1/2 -translate-x-1/2">
        <span
          className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase"
          style={{
            fontFamily: "var(--font-jakarta)",
            color: "rgba(229, 191, 92, 0.7)",
          }}
        >
          <span
            className="h-px w-8 gold-line inline-block"
            style={{ background: "rgba(197,154,40,0.5)" }}
          />
          Engen · 25 February 2026
          <span
            className="h-px w-8 inline-block"
            style={{ background: "rgba(197,154,40,0.5)" }}
          />
        </span>
      </div>

      {/* Watermark number */}
      <span
        className="section-num absolute right-4 bottom-12 lg:right-12 select-none"
        aria-hidden="true"
      >
        01
      </span>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Overline */}
        <p
          className="hero-badge mb-6 text-xs font-semibold tracking-[0.3em] uppercase"
          style={{
            fontFamily: "var(--font-jakarta)",
            color: "#c59a28",
          }}
        >
          Unified Communication
        </p>

        {/* Gold divider line */}
        <div
          className="gold-line mx-auto mb-10 h-px w-16"
          style={{ background: "#c59a28", transformOrigin: "center" }}
        />

        {/* Main headline */}
        <h1
          className="hero-headline font-display leading-[1.05] tracking-tight"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            fontWeight: 300,
            color: "#f5f1e8",
            letterSpacing: "-0.01em",
          }}
        >
          Integrated Experiences
          <br />
          <em style={{ color: "#e5bf5c", fontStyle: "italic" }}>
            &amp; Loyalty Programme
          </em>
          <br />
          Proposal
        </h1>

        {/* Subheadline */}
        <p
          className="hero-sub mx-auto mt-8 max-w-2xl leading-relaxed"
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(245, 241, 232, 0.65)",
            fontWeight: 300,
          }}
        >
          A fully managed, omni-channel customer engagement platform and contact
          centre solution for Engen.
        </p>

        {/* Support line */}
        <p
          className="hero-support mt-3"
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "0.8rem",
            color: "rgba(197, 154, 40, 0.6)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Engen Unified Communication as a Service.
        </p>

        {/* CTA buttons */}
        <div className="hero-buttons mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#proposal"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            style={{
              fontFamily: "var(--font-jakarta)",
              background: "#c59a28",
              color: "#0e2218",
              borderRadius: "2px",
            }}
          >
            Explore Proposal
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-white/10"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: "rgba(245, 241, 232, 0.75)",
              border: "1px solid rgba(245, 241, 232, 0.25)",
              borderRadius: "2px",
            }}
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(197, 154, 40, 0.5)" }}
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Scroll
        </span>
        <div
          className="h-8 w-px"
          style={{ background: "rgba(197, 154, 40, 0.35)" }}
        />
      </div>
    </section>
  );
}
