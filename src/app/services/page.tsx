import { Code2, Palette, Film } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/effects/ScrollStack";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { services } from "@/lib/data";

const icons = {
  "web-app-dev": Code2,
  "brand-design": Palette,
  "video-production": Film,
};

export default function ServicesPage() {
  return (
    <div className="bg-obsidian">
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-6 lg:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-ember">
          What We Do
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-bone sm:text-5xl">
          Everything Your Brand Needs — Under One Roof.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-smoke sm:text-base">
          From code to creative, we handle it all. Scroll to see how each
          piece fits together.
        </p>
      </section>

      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <ScrollStack useWindowScroll itemDistance={140} blurAmount={1}>
          {services.map((service) => {
            const Icon = icons[service.id as keyof typeof icons];
            return (
              <ScrollStackItem key={service.id}>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bone/5 text-ember">
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

                <h2 className="mt-6 font-display text-2xl font-semibold text-bone sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-smoke sm:text-base">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[11px] text-smoke"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="clip-corner flex flex-col items-start justify-between gap-6 border border-hairline bg-charcoal px-8 py-10 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-semibold text-bone">
              Not sure which service fits?
            </h3>
            <p className="mt-1 text-sm text-smoke">
              Tell us what you&apos;re trying to build — we&apos;ll point you in the
              right direction.
            </p>
          </div>
          <AnimatedButton label="Start a Project" href="/contact" variant="primary" />
        </div>
      </section>
    </div>
  );
}
