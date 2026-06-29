import Link from "next/link";
import { navLinks, siteConfig, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-charcoal text-bone">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-display text-lg font-semibold">{siteConfig.name}</span>
            <p className="mt-1 font-mono text-xs text-smoke">{siteConfig.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-smoke transition-colors hover:text-bone"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm text-smoke transition-colors hover:text-bone"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-hairline pt-6">
          <p className="font-mono text-xs text-smoke">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
