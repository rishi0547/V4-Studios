import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "@/components/effects/SpotlightCard";
import { projects } from "@/lib/data";

const spotlightColors = [
  "rgba(242, 100, 27, 0.2)",
  "rgba(194, 53, 92, 0.2)",
  "rgba(242, 100, 27, 0.2)",
];

export default function WorkPage() {
  return (
    <div className="bg-obsidian">
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-14 lg:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-ember">
          Selected Work
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-bone sm:text-5xl">
          Projects, Coming Into Focus.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-smoke sm:text-base">
          We&apos;re building out our first case studies. Here&apos;s a preview of
          the kind of work we take on.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <SpotlightCard
              key={project.id}
              spotlightColor={spotlightColors[i % spotlightColors.length]}
              className="flex flex-col gap-4"
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-ember">
                {project.category}
              </span>
              <h2 className="font-display text-xl font-semibold text-bone">
                {project.title}
              </h2>
              <p className="text-sm leading-relaxed text-smoke">
                {project.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[10px] flex flex-col items-start justify-between gap-6 border border-hairline bg-charcoal px-8 py-10 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-semibold text-bone">
              Want to be our next case study?
            </h3>
            <p className="mt-1 text-sm text-smoke">
              Let&apos;s build something worth showing off.
            </p>
          </div>
          <Link
            href="/contact"
            className="gradient-brand rounded-[10px] flex shrink-0 items-center gap-2 px-5 py-2.5 text-sm font-medium text-bone hover:opacity-90"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
