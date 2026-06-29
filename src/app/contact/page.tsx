"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm tracking-wide text-ember">
              Get in touch
            </p>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
              Let&apos;s build something together
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
              Have a project in mind? Fill out the form and we&apos;ll get back
              to you within 24 hours.
            </p>

            <div className="mt-10 space-y-4">
              <div>
                <p className="font-mono text-xs text-mist">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-base font-medium text-ink hover:text-ember transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          <div className="border border-line bg-white p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="font-mono text-4xl text-ember">✓</span>
                <h2 className="mt-4 text-2xl font-bold">Message sent</h2>
                <p className="mt-2 text-mist">
                  We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project type or brief" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="gradient-brand clip-corner w-full text-white hover:opacity-90"
                  size="lg"
                >
                  <span className="flex items-center gap-2">
                    Send Message <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
