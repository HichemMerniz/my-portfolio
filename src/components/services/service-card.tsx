import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCardProps {
    title: string
    image: string
    href: string
}

export function ServiceCard({ title, image, href }: ServiceCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-semibold text-white">{title}</h3>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <Link
                href={href}
                className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1f2d] text-white transition-transform duration-300 hover:scale-110"
            >
                <ArrowUpRight className="h-6 w-6" />
            </Link>
        </div>
    )
}

