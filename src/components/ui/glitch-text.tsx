"use client";

import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  trigger?: "hover" | "always";
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export function GlitchText({
  text,
  className,
  trigger = "hover",
  as: Tag = "span",
}: GlitchTextProps) {
  const triggerClass = trigger === "always" ? "glitch-active" : "group-hover:glitch-active";

  return (
    <span className={cn("relative inline-block group", className)} data-text={text}>
      <Tag className="relative z-10">{text}</Tag>
      <Tag
        aria-hidden
        className={cn(
          "absolute inset-0 z-0 text-brand-secondary opacity-0 glitch-layer glitch-cyan",
          triggerClass
        )}
      >
        {text}
      </Tag>
      <Tag
        aria-hidden
        className={cn(
          "absolute inset-0 z-0 text-brand-error opacity-0 glitch-layer glitch-red",
          triggerClass
        )}
      >
        {text}
      </Tag>
      <style jsx>{`
        .glitch-layer {
          clip-path: inset(0 0 0 0);
        }
        .glitch-active.glitch-cyan {
          opacity: 0.8;
          animation: glitch-cyan 0.4s steps(2, end) infinite;
        }
        .glitch-active.glitch-red {
          opacity: 0.8;
          animation: glitch-red 0.4s steps(2, end) infinite;
        }
        @keyframes glitch-cyan {
          0% { transform: translate(0); clip-path: inset(0 0 60% 0); }
          50% { transform: translate(-2px, -1px); clip-path: inset(40% 0 20% 0); }
          100% { transform: translate(2px, 1px); clip-path: inset(70% 0 0 0); }
        }
        @keyframes glitch-red {
          0% { transform: translate(0); clip-path: inset(60% 0 0 0); }
          50% { transform: translate(2px, 1px); clip-path: inset(20% 0 40% 0); }
          100% { transform: translate(-2px, -1px); clip-path: inset(0 0 70% 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .glitch-active.glitch-cyan,
          .glitch-active.glitch-red {
            animation: none;
          }
        }
      `}</style>
    </span>
  );
}
