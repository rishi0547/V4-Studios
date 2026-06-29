"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-obsidian/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-bone p-1.5">
            <Image src="/images/Logo-C.webp" alt={siteConfig.name} width={28} height={28} priority />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-bone">{siteConfig.name}</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-wide text-smoke sm:block">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive ? "text-bone" : "text-smoke hover:text-bone"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="gradient-brand absolute -bottom-1 left-0 h-[2px] w-full rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 md:block">
          <AnimatedButton label="Start a Project" href="/contact" variant="primary" />
        </div>

        <button
          className="text-bone md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-hairline transition-[max-height] duration-300 md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium ${pathname === link.href ? "text-bone" : "text-smoke"}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2" onClick={() => setIsOpen(false)}>
            <AnimatedButton label="Start a Project" href="/contact" variant="primary" className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
