import { Code2, Palette, Film, ArrowRight } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "@/components/effects/SpotlightCard";
import { services } from "@/lib/data";

const icons = {
  "web-app-dev": Code2,
  "brand-design": Palette,
  "video-production": Film,
};

const spotlightColors = [
  "rgba(242, 100, 27, 0.22)", // ember
  "rgba(194, 53, 92, 0.22)", // garnet
  "rgba(242, 100, 27, 0.16)", // ember, dimmer
];

export default function ServicesTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-12 flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-ember">
          What We Do
        </span>
        <h2 className="font-display text-3xl font-semibold text-bone sm:text-4xl">
          Everything Your Brand Needs — Under One Roof.
        </h2>
        <p className="max-w-2xl text-sm text-smoke sm:text-base">
          From code to creative, we handle it all. Our team combines
          technical depth with design precision to deliver results that
          stand out.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.id as keyof typeof icons];
          return (
            <SpotlightCard
              key={service.id}
              spotlightColor={spotlightColors[i % spotlightColors.length]}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bone/5 text-ember">
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={
                    service.priority
                      ? "rounded-full border border-ember/30 bg-ember/10 px-3 py-1 font-mono text-[11px] text-ember"
                      : "font-mono text-[11px] uppercase tracking-wide text-smoke"
                  }
                >
                  {service.tag}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-bone">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-smoke">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[11px] text-smoke"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-mono text-sm text-bone underline decoration-hairline underline-offset-4 hover:text-ember"
        >
          All Services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
