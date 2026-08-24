import { HTMLAttributes } from 'react'
import { cn } from "@/lib/utils"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6
    highlight?: string
    gradient?: boolean
}

export function Heading({ level = 2, highlight, gradient = false, className, children, ...props }: HeadingProps) {
    const Tag: React.ElementType = `h${level}`

    return (
        <Tag 
            className={cn(
                "font-bold tracking-tight",
                gradient && "gradient-text",
                className
            )} 
            {...props}
        >
            {children}
            {highlight && (
                <span className={cn(
                    "ml-2",
                    gradient ? "gradient-text" : "text-brand-primary"
                )}>
                    {highlight}
                </span>
            )}
        </Tag>
    )
}