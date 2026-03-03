import { AnimateIn } from "@/components/AnimateIn";

const awards = [
  { year: "1998", name: "digitalmall.com best eCommerce Enabler" },
  { year: "1999", name: "Best Online Grocery Store Click and Pay" },
  { year: "2000", name: "Best Online Mall & Retail Site" },
  { year: "2001", name: "Finalist: Age of Innovation" },
  { year: "2001", name: "Best of Use of Technology Contact Centre" },
  { year: "2002", name: "Age of Innovation Award" },
  { year: "2004", name: "Mobile WASP Award" },
  { year: "2004", name: "Public Sector IEC Award" },
  { year: "2005", name: "COJ Innovation Award" },
  { year: "2005", name: "Service Solution Award" },
  { year: "2005", name: "Technology Top 100" },
  { year: "2006", name: "PMT Service Excellence Award" },
  { year: "2006", name: "Technology Top 100" },
  { year: "2007", name: "Customer Service Delight" },
  { year: "2007", name: "Gold: Service Excellence" },
  { year: "2007", name: "MMA Mobile Marketing Award" },
  { year: "2008", name: "Best WASP Customer Service" },
  { year: "2008", name: "Best Service and Non-Innovation Award" },
  { year: "2008", name: "Technical Innovation Award" },
  { year: "2009", name: "Exporter of the Year Award" },
  { year: "2010", name: "Innovation Finalist" },
  { year: "2013", name: "Mobile App of the Year" },
  { year: "2014", name: "Mobile App Finalist of the Year" },
  { year: "2015", name: "Outsourced Contact Centre Regional/National Winner" },
  { year: "2015", name: "CCMG Best Outsourced Partnership Finalist" },
  { year: "2015", name: "MMA Smarties Award Mobile App Award winner (PPC & TransUnion)" },
  { year: "2016", name: "Mobile App of the Year Finalist" },
  { year: "2016", name: "CCMG Best Outsourced Partnership Winner" },
  { year: "2016", name: "Finalist Best Outsourced Contact Centre in South Africa" },
  { year: "2016", name: "BpeSA Best Contact Centre use of Social Media Finalist" },
  { year: "2016", name: "BpeSA Best Outsourced Contact Centre Winner" },
  { year: "2017", name: "Silver Award Best Outsourced Contact Centre" },
  { year: "2017", name: "Gold Awards for Best Technical Innovation and Best Use of Social Media" },
  { year: "2018", name: "Best National Outsourced Contact Centre Finalist" },
  { year: "2019", name: "Engage Awards Best Service Provider UK Finalist" },
  { year: "2019", name: "BPESA Best National Service Provider Winner" },
  { year: "2021", name: "Contact Centre World Winner (Ranked #1) – Best Outsourced Partnership Europe, Middle East and Africa" },
  { year: "2022", name: "Contact Centre World Global Finalist (Ranked #2) – Best Outsourced Partnership" },
  { year: "2023", name: "CapeBPO Top Technical Innovation Finalist" },
  { year: "2023", name: "BPESA Top Technical Innovation Finalist and Top Service Provider Award Winner" },
  { year: "2024", name: "CCMG Top Technical Innovation and Best Outsource Provider Finalist" },
  { year: "2024", name: "CEM CXA Team of the Year Winner" },
  { year: "2024", name: "CAPEBPO Top Technical Innovation Finalist, Top Service Provider Winner & Top BPO Quality Professional Finalists" },
  { year: "2024", name: "BPESA Top Service Provider Winner & Top Technical Innovation Finalist" },
  { year: "2025", name: "BPESA Top BPO Operator – Medium Finalist and Runner Up" },
  { year: "2025", name: "CapeBPO BPESA Top Service Provider Finalist and Runner Up" },
];

export function TrackRecordSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
      style={{ background: "#0e2218" }}
    >
      {/* Watermark */}
      <span
        className="section-num absolute -left-4 top-8 select-none"
        aria-hidden="true"
      >
        02
      </span>

      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <AnimateIn>
          <p
            className="mb-5 text-xs font-semibold tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-jakarta)", color: "#c59a28" }}
          >
            Track Record
          </p>
        </AnimateIn>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          {/* Title */}
          <AnimateIn delay={100}>
            <h2
              className="gold-underline leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 400,
                color: "#f5f1e8",
                letterSpacing: "-0.01em",
              }}
            >
              Track Record and Awards
            </h2>
          </AnimateIn>

          {/* Intro badge */}
          <AnimateIn delay={200}>
            <p
              className="pb-4 text-sm font-medium lg:text-right"
              style={{ fontFamily: "var(--font-jakarta)", color: "rgba(229,191,92,0.7)" }}
            >
              28 years of digital{" "}
              <span style={{ color: "#e5bf5c" }}>#♥DoingSomethingGreat</span>
            </p>
          </AnimateIn>
        </div>

        {/* Stat callouts */}
        <AnimateIn delay={250}>
          <div
            className="mt-12 mb-14 grid grid-cols-2 gap-px lg:grid-cols-4"
            style={{ border: "1px solid rgba(197,154,40,0.18)", borderRadius: "2px" }}
          >
            {[
              { num: "28", label: "Years of Excellence" },
              { num: "100+", label: "Premier Brands" },
              { num: "R1.6B+", label: "Sales Managed" },
              { num: "6M+", label: "Calls Handled" },
            ].map((stat) => (
              <div
                key={stat.num}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                style={{ background: "rgba(197,154,40,0.05)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 300,
                    color: "#e5bf5c",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </span>
                <span
                  className="mt-2 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-jakarta)", color: "rgba(245,241,232,0.45)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Awards grid */}
        <AnimateIn delay={300}>
          <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {awards.map((award, i) => (
              <div
                key={i}
                className="flex items-baseline gap-4 py-2.5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  className="w-10 shrink-0 text-xs font-semibold"
                  style={{ fontFamily: "var(--font-jakarta)", color: "#c59a28" }}
                >
                  {award.year}
                </span>
                <span
                  className="text-sm leading-snug"
                  style={{ fontFamily: "var(--font-jakarta)", color: "rgba(245,241,232,0.72)" }}
                >
                  {award.name}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
