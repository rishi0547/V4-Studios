"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wiring this to a real endpoint comes in a later week — confirming locally for now.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="clip-corner flex flex-col items-center justify-center border border-hairline bg-charcoal px-8 py-16 text-center">
        <p className="font-display text-xl font-semibold text-bone">
          Message sent.
        </p>
        <p className="mt-2 text-sm text-smoke">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="clip-corner border border-hairline bg-charcoal p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-smoke">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            required
            className="border-hairline bg-obsidian text-bone placeholder:text-smoke/60"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-smoke">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            required
            className="border-hairline bg-obsidian text-bone placeholder:text-smoke/60"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <Label htmlFor="subject" className="text-smoke">
          Subject
        </Label>
        <Input
          id="subject"
          placeholder="Project type or brief"
          required
          className="border-hairline bg-obsidian text-bone placeholder:text-smoke/60"
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <Label htmlFor="message" className="text-smoke">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          required
          rows={5}
          className="border-hairline bg-obsidian text-bone placeholder:text-smoke/60"
        />
      </div>

      <Button
        type="submit"
        className="gradient-brand clip-corner mt-8 w-full py-2.5 text-sm font-medium text-bone hover:opacity-90"
      >
        <span className="flex items-center justify-center gap-2">
          Send Message <Send className="h-4 w-4" />
        </span>
      </Button>
    </form>
  );
}
