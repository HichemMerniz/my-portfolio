"use client";

import { cn } from "@/lib/utils";

export function Scanlines({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-[100] crt-flicker",
        className
      )}
      style={{
        background:
          "repeating-linear-gradient(to bottom, transparent 0, transparent 2px, rgba(0,0,0,0.18) 3px, rgba(0,0,0,0.18) 3px)",
      }}
    />
  );
}
