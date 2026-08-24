"use client";

import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  showPrompt?: boolean;
  scanlines?: boolean;
  flicker?: boolean;
}

export function TerminalWindow({
  title = "user@hichem:~$",
  children,
  className,
  bodyClassName,
  showPrompt = true,
  scanlines = true,
  flicker = false,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "terminal-window",
        scanlines && "scanlines",
        flicker && "crt-flicker",
        className
      )}
    >
      <div className="terminal-bar">
        <span className="terminal-dot bg-brand-error/80" />
        <span className="terminal-dot bg-brand-warning/80" />
        <span className="terminal-dot bg-brand-primary/80" />
        <span className="terminal-title">
          {showPrompt && <span className="text-brand-primary">{title}</span>}
        </span>
      </div>
      <div className={cn("p-5", bodyClassName)}>{children}</div>
    </div>
  );
}
