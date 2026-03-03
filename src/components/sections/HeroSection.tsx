export function HeroSection() {
  return (
    <section className="hero-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center lg:px-10">

      {/* Engen-branded decorative ring — echoes the logo's circular element */}
      <div
        className="hero-ring pointer-events-none absolute right-0 top-1/2 hidden lg:block"
        style={{
          width: "680px",
          height: "680px",
          borderRadius: "50%",
          border: "72px solid rgba(226, 6, 19, 0.13)",
          transform: "translateY(-50%)",
          right: "-220px",
        }}
        aria-hidden="true"
      />
      {/* Second, smaller inner ring */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden lg:block"
        style={{
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          border: "2px solid rgba(226, 6, 19, 0.18)",
          transform: "translateY(-50%)",
          right: "-80px",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      {/* Top metadata badge */}
      <div className="hero-badge absolute top-24 left-1/2 -translate-x-1/2">
        <span
          className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase"
          style={{
            fontFamily: "var(--font-jakarta)",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <span
            className="h-px w-8 inline-block"
            style={{ background: "rgba(226,6,19,0.55)" }}
          />
          Engen · 25 February 2026
          <span
            className="h-px w-8 inline-block"
            style={{ background: "rgba(226,6,19,0.55)" }}
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
        {/* Overline — Engen red */}
        <p
          className="hero-badge mb-4 text-xs font-bold tracking-[0.35em] uppercase"
          style={{
            fontFamily: "var(--font-jakarta)",
            color: "#e20613",
          }}
        >
          Unified Communication
        </p>

        {/* Red accent line */}
        <div
          className="gold-line mx-auto mb-10 h-[3px] w-16"
          style={{ background: "#e20613", transformOrigin: "center" }}
        />

        {/* Main headline — Barlow Condensed, ultra-bold, Engen-style */}
        <h1
          className="hero-headline leading-[1.0] tracking-tight uppercase"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.01em",
          }}
        >
          Integrated Experiences
          <br />
          <span style={{ color: "#e20613" }}>&amp; Loyalty</span>
          <br />
          Programme Proposal
        </h1>

        {/* Subheadline */}
        <p
          className="hero-sub mx-auto mt-8 max-w-2xl leading-relaxed"
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            color: "rgba(255,255,255,0.6)",
            fontWeight: 400,
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
            fontSize: "0.75rem",
            color: "rgba(226,6,19,0.65)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Engen Unified Communication as a Service.
        </p>

        {/* CTA buttons — Engen red primary, white outline secondary */}
        <div className="hero-buttons mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#proposal"
            className="inline-flex items-center gap-2 px-9 py-3.5 text-sm font-bold tracking-[0.12em] uppercase transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            style={{
              fontFamily: "var(--font-jakarta)",
              background: "#e20613",
              color: "#ffffff",
              borderRadius: "2px",
            }}
          >
            Explore Proposal
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-9 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-300 hover:bg-white/10"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.3)",
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
        style={{ color: "rgba(226,6,19,0.5)" }}
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase font-semibold"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Scroll
        </span>
        <div
          className="h-8 w-px"
          style={{ background: "rgba(226,6,19,0.4)" }}
        />
      </div>
    </section>
  );
}
