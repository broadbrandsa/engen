import { AnimateIn } from "@/components/AnimateIn";

export function PartnershipSection() {
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
        04
      </span>

      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <AnimateIn>
          <p
            className="mb-5 text-xs font-semibold tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-jakarta)", color: "#c59a28" }}
          >
            Partnership
          </p>
        </AnimateIn>

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
            A model that delivers quality, value, and impact
          </h2>
        </AnimateIn>

        {/* Quote 1 */}
        <AnimateIn delay={200}>
          <figure className="mt-14">
            <span className="quote-mark">&ldquo;</span>
            <blockquote
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(245,241,232,0.88)",
              }}
            >
              CEO, Brandon Meszaros of CXG and Dr Taddy Blecher CEO of Maharishi Institute share a
              similar belief, and through this partnership with the Institute we have designed a
              business model that not only offers significant benefits, including delivering
              exceptional quality customer service and improved BEE benefits, but it also creates a
              safe environment where students can earn while they are learning.
            </blockquote>
            <figcaption
              className="mt-5 flex items-center gap-3 text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jakarta)", color: "#c59a28" }}
            >
              <span
                className="inline-block h-px w-6"
                style={{ background: "#c59a28" }}
              />
              Brandon Meszaros, CEO — CXG
            </figcaption>
          </figure>
        </AnimateIn>

        {/* Divider */}
        <div
          className="my-12 h-px"
          style={{ background: "rgba(197,154,40,0.15)" }}
        />

        {/* Quote 2 */}
        <AnimateIn delay={280}>
          <figure>
            <span className="quote-mark">&ldquo;</span>
            <blockquote
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(245,241,232,0.88)",
              }}
            >
              Our focus at the Maharishi Institute is to offer an effective learn-and-earn programme
              for bright young minds, who, despite their historically disadvantaged backgrounds,
              have the right attitudes towards learning and recognise the role their education can
              play in their own upliftment, families and communities too.
            </blockquote>
            <figcaption
              className="mt-5 flex items-center gap-3 text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jakarta)", color: "#c59a28" }}
            >
              <span
                className="inline-block h-px w-6"
                style={{ background: "#c59a28" }}
              />
              Dr Taddy Blecher, CEO — Maharishi Institute
            </figcaption>
          </figure>
        </AnimateIn>

        {/* Body paragraphs */}
        <AnimateIn delay={350}>
          <div
            className="mt-14 space-y-5 leading-[1.85]"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "1.0625rem",
              color: "rgba(245,241,232,0.65)",
              fontWeight: 300,
            }}
          >
            <p>
              The Institute offers a bursary solution where students only pay R200 a month, which
              is a fraction of the USD$112&thinsp;000 it costs per student to put them through the
              5-year programme.
            </p>
            <p>
              We have been very fortunate and are truly appreciative of the donor funding that we
              continue to receive, which enables us to do what we do. As the venture operates as a
              business, it empowers us to generate funds and help create long-term sustainability
              for the Institute — which in turn will enable us to expand our footprint and reach
              more youth and change their lives through education.
            </p>
            <p>
              Through the establishment of our Omni-Channel Contact Centre, and the business it
              will attract, the Institute has set a target of being able to grant access to
              education for 1,000 students to enter higher education by its next intake and further
              supports our Elevate &ldquo;Learn to Earn&rdquo; program which, in turn provides the
              ability to leverage skilled students, whom are on a four (4) year path, to truly meet
              demand cycles whilst doingsomethinggreat by changing people&apos;s lives.
            </p>
            <p>
              We are committed to delivering exceptional customer experiences. Our unique range of
              solutions encompasses Omni-channel support, CX, Customer Care, Social Media
              Engagement, IT Service Desk and Management, Contact Centre services, Workforce
              Management, Dynamics CRM, Cloud Solutions, Business Intelligence, and deep domain
              insights.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
