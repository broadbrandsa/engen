import { AnimateIn } from "@/components/AnimateIn";

const highlights = [
  {
    icon: "◎",
    title: "Every channel",
    description:
      "Call, email, WhatsApp, live chat, and social media, all effortlessly managed in one place, never lose a conversation again.",
  },
  {
    icon: "◈",
    title: "Every detail",
    description:
      "Access detailed customer information, from orders and payments to policy and transaction history.",
  },
  {
    icon: "◉",
    title: "Every touchpoint",
    description:
      "Understand the full scope of your customers' experience, from marketing and sales to service and support.",
  },
  {
    icon: "◆",
    title: "Every insight",
    description:
      "Discover in-depth, rich insights and analytics that can shape, optimise, and inform your future business decisions.",
  },
];

export function QContactSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
      style={{ background: "#f5f1e8" }}
    >
      {/* Watermark */}
      <span
        className="section-num section-num-dark absolute -right-8 top-8 select-none"
        aria-hidden="true"
      >
        05
      </span>

      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <AnimateIn>
          <p
            className="mb-5 text-xs font-semibold tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-jakarta)", color: "#c59a28" }}
          >
            QContact Platform
          </p>
        </AnimateIn>

        {/* Title */}
        <AnimateIn delay={100}>
          <h2
            className="gold-underline max-w-3xl leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
              color: "#0e2218",
              letterSpacing: "-0.01em",
            }}
          >
            Unified and Integrated Single Customer View
          </h2>
        </AnimateIn>

        {/* Body */}
        <AnimateIn delay={200}>
          <div
            className="mt-12 max-w-3xl space-y-5 leading-[1.85]"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "1.0625rem",
              color: "#2d3d38",
              fontWeight: 300,
            }}
          >
            <p>
              Our solution is a fully omni-channel customer engagement platform which provides
              access to multiple communication channels (inbound/outbound voice, SMS, WhatsApp,
              Chat, Email) in a single interface.
            </p>
            <p>
              Our Platform remains significant in enabling Agent Interaction that is blended and
              underpinned with CRM that is supportive in managing customers, interactions channels
              and business processes. In summary our solution provides key functionality and CRM
              to enhance engagements.
            </p>
          </div>
        </AnimateIn>

        {/* Highlight cards */}
        <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <AnimateIn key={item.title} delay={280 + i * 80}>
              <div
                className="group flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#0e2218",
                  borderTop: "2px solid #c59a28",
                }}
              >
                <span
                  className="mb-5 text-2xl"
                  style={{ color: "#c59a28", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "#f5f1e8",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "0.875rem",
                    color: "rgba(245,241,232,0.6)",
                    fontWeight: 300,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
