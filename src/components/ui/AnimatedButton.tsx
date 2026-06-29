"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type AnimatedButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
};

const VARIANTS = {
  primary: { bg: "var(--color-ember)", accent: "var(--color-obsidian)" },
  ghost: { bg: "var(--color-charcoal)", accent: "var(--color-bone)" },
};

export default function AnimatedButton({
  label,
  href,
  variant = "primary",
  className = "",
  onClick,
}: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const { bg, accent } = VARIANTS[variant];

  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const content = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={onClick}
      className={`relative inline-flex h-[50px] min-w-[190px] cursor-pointer select-none items-center font-display text-sm font-medium ${className}`}
      style={{
        clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
        transform: pressed ? "scale(0.98)" : "scale(1)",
        transition: "transform 0.15s ease",
        background: bg,
        border: variant === "ghost" ? "1px solid var(--color-hairline)" : "none",
        overflow: "hidden",
      }}
    >
      {/* expanding circle reveal */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: hovered ? -80 : -16,
          top: "50%",
          width: hovered ? 420 : 16,
          height: hovered ? 420 : 16,
          marginTop: hovered ? -210 : -8,
          borderRadius: "50%",
          background: accent,
          transition:
            "width 0.55s cubic-bezier(0.34, 1.1, 0.64, 1), height 0.55s cubic-bezier(0.34, 1.1, 0.64, 1), left 0.55s cubic-bezier(0.34, 1.1, 0.64, 1), margin-top 0.55s cubic-bezier(0.34, 1.1, 0.64, 1)",
          zIndex: 1,
        }}
      />

      {/* label */}
      <span
        style={{
          position: "relative",
          zIndex: 2,
          paddingLeft: 22,
          color: hovered ? bg : accent,
          transform: hovered ? "translateX(6px)" : "translateX(0px)",
          transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>

      {/* sliding arrow box */}
      <span
        style={{
          position: "absolute",
          right: 6,
          top: 6,
          height: "calc(100% - 12px)",
          width: 42,
          overflow: "hidden",
          background: hovered ? bg : accent,
          transition: "background 0.3s ease",
          zIndex: 2,
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: 0,
            transform: hovered ? "translateX(40px)" : "translateX(0px)",
            transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <ArrowRight
            className="absolute left-[12px] top-1/2 h-4 w-4 -translate-y-1/2"
            style={{ color: hovered ? accent : bg }}
          />
          <ArrowRight
            className="absolute -left-[28px] top-1/2 h-4 w-4 -translate-y-1/2"
            style={{ color: hovered ? accent : bg }}
          />
        </span>
      </span>
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
