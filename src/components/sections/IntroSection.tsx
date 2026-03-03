import { AnimateIn } from "@/components/AnimateIn";

export function IntroSection() {
  return (
    <section
      id="proposal"
      className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
      style={{ background: "#f4f6fa" }}
    >
      {/* Watermark */}
      <span
        className="section-num section-num-dark absolute -right-8 top-8 select-none"
        aria-hidden="true"
      >
        01
      </span>

      <div className="mx-auto max-w-4xl">
        {/* Section label */}
        <AnimateIn>
          <p
            className="mb-5 text-xs font-bold tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-jakarta)", color: "#e20613" }}
          >
            Introduction
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
            A strategic approach to modern customer experience
          </h2>
        </AnimateIn>

        {/* Body paragraphs */}
        <AnimateIn delay={200}>
          <div
            className="mt-12 space-y-6 leading-[1.85]"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "1.0625rem",
              color: "#1e2d5c",
              fontWeight: 400,
            }}
          >
            <p>
              Many companies have successfully used outsourcing as a strategic concept to bring
              their organisations into the 21st century. By doing those activities they do best
              and outsourcing many of the remaining ones, progressive companies have transformed
              themselves from mere producers of products and commodities to intelligent, intuitive
              organisations that are able to take their good ideas to market quickly and efficiently.
            </p>
            <p>
              In addition, by outsourcing setup and support of your Contact Centre Platform,
              organisations have the time to devote to strategic and long-term development of
              &ldquo;Your Core Business&rdquo;.
            </p>
            <p>
              Today, Customer Relationship Strategy, Customer Experience Management and Technical
              Support Outsourcing are emerging as one of the most important components of corporate
              strategy. A well-executed customer relationship strategy can result in a number of
              quantitative benefits including an improved ability to up-sell and cross-sell,
              improved customer retention and a reduced cost to serve.
            </p>
            <p>
              CXG utilise Customer Journey Maps to understand how Customers accomplish their goals.
              These efforts provide a Customer-Centric view that cuts across channels, functional
              teams and spans over time including the uncovering of key Customer activities that
              don&apos;t involve the company at all.
            </p>
            <p>
              It&apos;s a well-established fact that Contact Centres and Technical Helpdesk play
              an increasingly important role in Service, Marketing and Sales delivery, including
              direct communication strategies for many organisations.
            </p>
            <p>
              Properly enabled, allows customers to interact and transact across multiple channels
              (Social Media, Email, Voice, Web, IVR, etc.), across multiple functions (marketing,
              sales and service) at a time and in a manner convenient to them, either with an agent
              or through self-service.
            </p>
            <p>
              We started CXG specifically to assist brands such as yours in pursuing service, sales
              and marketing excellence across Omni-channels in an affordable yet comprehensive
              manner. Your Integrated Customer Experience requirements represents our core
              business focus.
            </p>
            <p>
              Our management team&apos;s collective decades of experience, our established track
              record and our intimate understanding of the on-demand services space means that we
              can confidently claim that we&apos;re ideally positioned to assist you.
            </p>
          </div>
        </AnimateIn>

        {/* Callout block — Engen blue left border */}
        <AnimateIn delay={300}>
          <div
            className="mt-14 border-l-4 py-6 pl-8"
            style={{
              borderColor: "#e20613",
              background: "rgba(226,6,19,0.04)",
            }}
          >
            <p
              className="font-bold leading-snug uppercase"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.35rem, 2.5vw, 1.8rem)",
                color: "#00113d",
                letterSpacing: "0.01em",
              }}
            >
              This document sets out our QContact proposal for Engen consideration.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
