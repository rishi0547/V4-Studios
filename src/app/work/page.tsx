import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-sm tracking-wide text-ember">Portfolio</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Our Work</h1>
        <p className="mt-4 max-w-xl text-lg text-mist">
          Case studies and projects that showcase what we build. More coming
          soon.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between border border-line bg-white p-8"
            >
              <div>
                <span className="font-mono text-xs text-ember">
                  {project.category}
                </span>
                <h2 className="mt-2 text-xl font-semibold">{project.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-canvas">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold">Want to be featured here?</h2>
          <p className="mx-auto mt-4 max-w-md text-mist">
            We&apos;re taking on new projects. Let&apos;s create something worth
            showing off.
          </p>
          <div className="mt-10">
            <Button asChild className="gradient-brand clip-corner text-white hover:opacity-90" size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
