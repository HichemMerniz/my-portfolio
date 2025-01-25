import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { cn } from "@/lib/utils"

interface ImageProps extends NextImageProps {
    aspectRatio?: 'square' | '4/3' | '16/9'
}

export function Image({ aspectRatio = '4/3', className, ...props }: ImageProps) {
    return (
        <div className={cn(
            "overflow-hidden",
            aspectRatio === 'square' && "aspect-square",
            aspectRatio === '4/3' && "aspect-[4/3]",
            aspectRatio === '16/9' && "aspect-video",
            className
        )}>
            <NextImage
                {...props}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
        </div>
    )
}

