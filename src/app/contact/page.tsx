import { siteConfig } from "@/lib/data";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-obsidian">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-ember">
            Get in Touch
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-bone sm:text-5xl">
            Ready to Build Something Great?
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-smoke sm:text-base">
            Whether you need a high-performance website, a complete brand
            identity, or compelling video content — V4 Studios is ready to
            bring your vision to life. Let&apos;s talk.
          </p>

          <div className="mt-10">
            <p className="font-mono text-xs uppercase tracking-wide text-smoke">
              Email
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 inline-block font-display text-lg font-semibold text-bone hover:text-ember"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
