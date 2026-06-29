import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { team, whyChooseUs, process as processSteps } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-sm tracking-wide text-ember">About us</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-bold sm:text-5xl">
          A small team with a development-first mindset
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
          V4 Studios was founded by four builders who believe great digital
          products start with great engineering. We design, develop, and deliver
          — end to end.
        </p>
      </section>

      {/* ── Team ── */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-bold">The Team</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="border border-line bg-white p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink text-canvas font-display text-xl font-bold">
                  {member.initials}
                </div>
                <h3 className="mt-4 text-base font-semibold">{member.name}</h3>
                <p className="mt-1 font-mono text-xs text-mist">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-ink text-canvas">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-bold">Why V4?</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-canvas">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold">Our Process</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.number}>
              <span className="font-mono text-3xl font-bold text-ember">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild className="gradient-brand clip-corner text-white hover:opacity-90" size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              Work With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
