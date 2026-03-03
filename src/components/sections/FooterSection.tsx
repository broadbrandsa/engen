export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-6 py-20 lg:px-10"
      style={{ background: "#071710" }}
    >
      {/* Gold top border */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #c59a28 30%, #c59a28 70%, transparent)" }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Brand */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-jakarta)", color: "#c59a28" }}
            >
              CXG · Customer Experience Group · DSG
            </p>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 300,
                color: "rgba(245,241,232,0.7)",
                letterSpacing: "-0.01em",
              }}
            >
              Ready to transform your customer experience?
            </h2>
          </div>

          {/* CTA */}
          <a
            href="mailto:info@cxg.co.za"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            style={{
              fontFamily: "var(--font-jakarta)",
              background: "#c59a28",
              color: "#0e2218",
              borderRadius: "2px",
            }}
          >
            Contact CXG
          </a>

          {/* Divider */}
          <div
            className="w-full max-w-xs h-px"
            style={{ background: "rgba(197,154,40,0.2)" }}
          />

          {/* Meta */}
          <div
            className="flex flex-col items-center gap-2 text-xs"
            style={{ fontFamily: "var(--font-jakarta)", color: "rgba(245,241,232,0.25)" }}
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
