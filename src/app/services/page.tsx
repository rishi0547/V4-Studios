import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-sm tracking-wide text-ember">What we do</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Services</h1>
        <p className="mt-4 max-w-xl text-lg text-mist">
          From concept to launch — we handle development, design, and production
          so you can focus on growing your business.
        </p>

        <div className="mt-16 space-y-12">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="grid gap-8 border-t border-line pt-12 md:grid-cols-2"
            >
              <div>
                <span className="font-mono text-sm text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  {service.title}
                </h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-mist">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mist"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-canvas">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-md text-mist">
            Tell us what you need — we&apos;ll handle the rest.
          </p>
          <div className="mt-10">
            <Button asChild className="gradient-brand clip-corner text-white hover:opacity-90" size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
