import SpotlightCard from "@/components/effects/SpotlightCard";
import { team, process } from "@/lib/data";

const spotlightColors = [
  "rgba(242, 100, 27, 0.2)",
  "rgba(194, 53, 92, 0.2)",
  "rgba(242, 100, 27, 0.2)",
  "rgba(194, 53, 92, 0.2)",
];

export default function AboutPage() {
  return (
    <div className="bg-obsidian">
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-14 lg:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-ember">
          Who We Are
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-bone sm:text-5xl">
          Four Specialists. One Focused Studio.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-smoke sm:text-base">
          V4 Studios is a tight-knit team of four digital specialists —
          developers, designers, and creative producers who believe great
          work comes from genuine collaboration. We operate with the
          agility of a startup and the quality standards of a top-tier
          agency, delivering work that&apos;s on time, on brand, and built to
          last.
        </p>

        <div className="rounded-[10px] mt-8 max-w-2xl border border-hairline bg-charcoal px-6 py-5">
          <p className="font-mono text-xs uppercase tracking-wide text-ember">
            Our Mission
          </p>
          <p className="mt-2 font-display text-lg text-bone">
            Help ambitious brands launch, grow, and stand out — digitally,
            visually, and creatively.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <h2 className="font-display text-2xl font-semibold text-bone">
          The Team
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <SpotlightCard
              key={member.name}
              spotlightColor={spotlightColors[i % spotlightColors.length]}
              className="flex flex-col items-start gap-4"
            >
              <span className="gradient-brand rounded-[10px] flex h-12 w-12 items-center justify-center font-display text-lg font-semibold text-bone">
                {member.initials}
              </span>
              <div>
                <p className="font-display text-base font-semibold text-bone">
                  {member.name}
                </p>
                <p className="font-mono text-xs text-smoke">{member.role}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-ember">
          How We Work
        </span>
        <h2 className="mt-3 font-display text-2xl font-semibold text-bone">
          A clear, collaborative process.
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-smoke">
          From first call to final delivery — no surprises, no scope creep.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden border border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <div key={step.number} className="bg-charcoal px-6 py-8">
              <span className="font-mono text-sm text-ember">{step.number}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-bone">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-smoke">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
