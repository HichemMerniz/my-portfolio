import {HTMLAttributes} from 'react'
import {cn} from "@/lib/utils"
import {Heading} from '@/components/ui/heading'
import {Image} from '@/components/ui/image'
import {Button} from '@/components/ui/button'
import {ArrowUpRight} from 'lucide-react'
import {StaticImageData} from "next/image";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    title: string
    description: string
    image: string | StaticImageData
}

export function Card({title, description, image, className, ...props}: CardProps) {
    return (
        <div className={cn("group relative overflow-hidden rounded-3xl bg-white/10 p-6 backdrop-blur-sm", className)} {...props}>
            <Heading level={3} className="mb-6 text-2xl text-white">{title}</Heading>
            <p className="text-gray-300 py-2">{description}</p>
            <Image src={image} alt={title} width={400} height={300} className="rounded-2xl" />
            <Button
                variant="secondary"
                className="absolute bottom-6 right-6 h-12 w-12 p-0"
                // onClick={() => window.open(, '_blank')}
            >
                <ArrowUpRight className="h-6 w-6" />
            </Button>
        </div>
    )
}
