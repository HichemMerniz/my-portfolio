import { HTMLAttributes } from 'react'
import { cn } from "@/lib/utils"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6
    highlight?: string
}

export function Heading({ level = 2, highlight, className, children, ...props }: HeadingProps) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements

    return (
        <Tag className={cn("font-bold", className)} {...props}>
            {children}
            {highlight && <span className="text-sky-500"> {highlight}</span>}
        </Tag>
    )
}