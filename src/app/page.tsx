import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const pillars = [
  {
    badge: "Strategy",
    title: "Integrated Experience",
    description:
      "A unified approach to aligning customer touchpoints, internal workflows, and brand expression into a cohesive system.",
  },
  {
    badge: "Execution",
    title: "Phased Delivery",
    description:
      "A structured rollout plan with clear milestones, accountability, and feedback loops built in at every stage.",
  },
  {
    badge: "Outcomes",
    title: "Measurable Impact",
    description:
      "Success defined upfront — with KPIs, conversion goals, and reporting cadences established before work begins.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Engen
          </span>
          <Button variant="outline" size="sm" asChild>
            <a href="mailto:hello@engen.com">Get in Touch</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Badge variant="secondary" className="mb-6">
          Proposal — February 2026
        </Badge>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          A proposal for an integrated experience
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Placeholder subheadline. This will describe the core value proposition
          and context for the engagement in one or two sentences.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg">View the Proposal</Button>
          <Button variant="outline" size="lg">
            Schedule a Call
          </Button>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Pillars Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Three pillars of the engagement
          </h2>
          <p className="mt-3 text-muted-foreground">
            Placeholder description. Explain what the three cards represent
            below.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="flex flex-col">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  {pillar.badge}
                </Badge>
                <CardTitle className="text-lg">{pillar.title}</CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="h-1 w-8 rounded-full bg-primary" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Ready to move forward?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Placeholder CTA description. Invite the reader to take the next step —
          schedule a call, ask a question, or review the full scope.
        </p>
        <Button size="lg" className="mt-8">
          Let&apos;s Talk
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Engen. All rights reserved.</span>
          <span>Confidential — For review purposes only</span>
        </div>
      </footer>
    </div>
  );
}
