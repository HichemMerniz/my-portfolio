"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string | string[];
  className?: string;
  speed?: number;
  startDelay?: number;
  showCursor?: boolean;
  cursorClassName?: string;
}

export function Typewriter({
  text,
  className,
  speed = 45,
  startDelay = 0,
  showCursor = true,
  cursorClassName,
}: TypewriterProps) {
  const full = Array.isArray(text) ? text[0] : text;
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < full.length) {
      const t = setTimeout(() => {
        setDisplayed(full.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(t);
    }
  }, [started, displayed, full, speed]);

  return (
    <span className={cn("inline-block", className)}>
      <span className="text-foreground">{displayed}</span>
      {showCursor && (
        <span
          className={cn(
            "ml-1 inline-block text-brand-primary animate-[blink_1s_steps(2,start)_infinite]",
            cursorClassName
          )}
        >
          ▋
        </span>
      )}
    </span>
  );
}
