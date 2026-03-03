import { AnimateIn } from "@/components/AnimateIn";

const bullets = [
  "The implementation of complex customer experience strategies underpinned by robust, economic, and scalable technology solutions.",
  "The identification of and reporting on bespoke critical success factors and performance indicators.",
  "Comprising balanced sets of metrics that support customer value with associated customer focused processes.",
  "The consistent provision of a seamless customer experience across omni channels.",
  "Consistent delivery against our EEQ framework which focuses on meeting your Efficiency, Effectiveness and Quality Targets.",
  "True On-Demand scalability where our People, Process and Technology seamlessly scale to meet the demand requirements per hour, day, week, and month.",
];

export function DoingSomethingGreatSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
      style={{ background: "#f4f6fa" }}
    >
      {/* Watermark */}
      <span
        className="section-num section-num-dark absolute -right-8 top-8 select-none"
        aria-hidden="true"
      >
        03
      </span>

      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <AnimateIn>
          <p
            className="mb-5 text-xs font-bold tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-jakarta)", color: "#e20613" }}
          >
            Our Story
          </p>
        </AnimateIn>

        {/* Title */}
        <AnimateIn delay={100}>
          <h2
            className="gold-underline leading-tight uppercase"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 800,
              color: "#00113d",
              letterSpacing: "-0.01em",
            }}
          >
            #♥DoingSomethingGreat
          </h2>
        </AnimateIn>

        {/* Intro paragraphs */}
        <AnimateIn delay={200}>
          <div
            className="mt-12 space-y-5 leading-[1.85]"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "1.0625rem",
              color: "#1e2d5c",
              fontWeight: 400,
            }}
          >
            <p>
              With a track record spanning 28 years, we remain a leading South African On-Demand
              Integrated Customer Experience provider serving over 100+ premier and larger
              corporate brands.
            </p>
            <p>
              Other regions include the United Kingdom, North America, Australia, and New Zealand.
              We possess the skills, experience, and industry expertise to offer a comprehensive
              on-demand and fully managed Contact Centre solution that cost effectively provides:
            </p>
          </div>
        </AnimateIn>

        {/* Bullets */}
        <AnimateIn delay={280}>
          <ul className="mt-8 space-y-2">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-4 py-3 px-5"
                style={{
                  background: i % 2 === 0 ? "rgba(0,44,143,0.05)" : "transparent",
                  borderLeft: "3px solid rgba(226,6,19,0.4)",
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.9375rem",
                  color: "#1e2d5c",
                  fontWeight: 400,
                  lineHeight: 1.7,
                }}
              >
                <span
                  className="mt-0.5 shrink-0 text-sm font-black"
                  style={{ color: "#e20613" }}
                >
                  ¾
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </AnimateIn>

        {/* Empowerment paragraphs */}
        <AnimateIn delay={350}>
          <div
            className="mt-14 space-y-5 leading-[1.85]"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "1.0625rem",
              color: "#1e2d5c",
              fontWeight: 400,
            }}
          >
            <p>
              Key to our offering and differentiation is our commitment to true Empowerment. We are
              proud of our partnership with the Maharishi Institute, which significantly expands our
              Contact Centre capacity and further supports our sustainable &lsquo;learn-and-earn&rsquo;
              approach with unemployed students in South Africa.
            </p>
            <p>
              As a business, we have always advocated and stand for &lsquo;Doing Something
              Great&rsquo;, and this partnership provides us with a unique platform to positively
              impact students, communities, and impact lives. To this end we have over the course of
              the last six (6) years managed and deployed our model with large listed corporate local
              and global brands where we have managed over R1,6 billion in sales and over 6 million
              calls utilizing both core Contact Centre agents and services, underpinned with trained
              Student Contact Centre agents that support demand with our educational pipeline and supply.
            </p>
          </div>
        </AnimateIn>

        {/* Quote block — Engen navy */}
        <AnimateIn delay={420}>
          <figure
            className="mt-14 px-8 py-8"
            style={{
              background: "#00113d",
              borderRadius: "2px",
              borderTop: "4px solid #e20613",
            }}
          >
            <span className="quote-mark">&ldquo;</span>
            <blockquote
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                fontWeight: 600,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.88)",
              }}
            >
              When delivering the annual Nelson Mandela lecture at the University of Pretoria in July,
              Bill Gates outlined his blueprint for a thriving Africa. As part of his presentation,
              Gates stressed the importance of education and infrastructure to creating job opportunities
              for the youth – which would ultimately enable the youth to become economically sound and
              innovators that will change the face of Africa&apos;s future.
            </blockquote>
            <figcaption
              className="mt-5 text-xs tracking-widest uppercase font-bold"
              style={{ fontFamily: "var(--font-jakarta)", color: "#e20613" }}
            >
              Bill Gates — Annual Nelson Mandela Lecture, University of Pretoria
            </figcaption>
          </figure>
        </AnimateIn>
      </div>
    </section>
  );
}
