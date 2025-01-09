import { cn } from "@/lib/utils"

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: 'heading' | 'subheading' | 'body' | 'small'
}

export function Text({
                         children,
                         variant = 'body',
                         className,
                         ...props
                     }: TextProps) {
    return (
        <p
            className={cn(
                {
                    'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl': variant === 'heading',
                    'scroll-m-20 text-2xl font-semibold tracking-tight': variant === 'subheading',
                    'leading-7 [&:not(:first-child)]:mt-6': variant === 'body',
                    'text-sm text-muted-foreground': variant === 'small',
                },
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

