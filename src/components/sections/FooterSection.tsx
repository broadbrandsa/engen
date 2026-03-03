export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-6 py-20 lg:px-10"
      style={{ background: "#00113d" }}
    >
      {/* Engen red top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: "#e20613" }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Brand */}
          <div>
            <p
              className="text-xs font-bold tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-jakarta)", color: "#e20613" }}
            >
              CXG · Customer Experience Group · DSG
            </p>
            <h2
              className="mt-4 uppercase"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0em",
              }}
            >
              Ready to transform your customer experience?
            </h2>
          </div>

          {/* CTA — Engen red */}
          <a
            href="mailto:info@cxg.co.za"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            style={{
              fontFamily: "var(--font-jakarta)",
              background: "#e20613",
              color: "#ffffff",
              borderRadius: "2px",
            }}
          >
            Contact CXG
          </a>

          {/* Divider */}
          <div
            className="w-full max-w-xs h-px"
            style={{ background: "rgba(226,6,19,0.25)" }}
          />

          {/* Meta */}
          <div
            className="flex flex-col items-center gap-2 text-xs"
            style={{ fontFamily: "var(--font-jakarta)", color: "rgba(255,255,255,0.25)" }}
          >
            <p>Prepared for Engen · 25 February 2026</p>
            <p>
              Confidential — For review purposes only. ©{" "}
              {new Date().getFullYear()} CXG (Customer Experience Group). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
