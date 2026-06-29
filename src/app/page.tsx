import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import ServicesTeaser from "@/components/sections/ServicesTeaser";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="clip-wedge-bottom relative bg-ink text-canvas">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <p className="mb-4 font-mono text-sm tracking-wide text-ember">
            {siteConfig.tagline}
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            We build digital products that{" "}
            <span className="bg-gradient-to-r from-ember to-garnet bg-clip-text text-transparent">
              perform
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
            V4 Studios is a full-service digital agency specialising in web
            development, brand design, and video production.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              className="gradient-brand clip-corner text-white hover:opacity-90"
              size="lg"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-canvas hover:bg-white/10">
              <Link href="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Services teaser ── */}
      <ServicesTeaser />

      {/* ── CTA ── */}
      <section className="bg-ink text-canvas">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to build something great?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-mist">
            Let&apos;s talk about your project. We&apos;re ready when you are.
          </p>
          <div className="mt-10">
            <Button
              asChild
              className="gradient-brand clip-corner text-white hover:opacity-90"
              size="lg"
            >
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
