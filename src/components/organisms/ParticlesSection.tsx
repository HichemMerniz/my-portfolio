// ParticlesSection.tsx

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";

export function ParticlesDemo({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useTheme();

    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);

    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            {children}
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
        </div>
    );
}

export default ParticlesDemo;