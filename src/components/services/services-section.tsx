"use client"

import { ServiceCard } from './service-card'
import { BackgroundEffects } from './background-effects'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselDots
} from '@/components/ui/carousel'

const services = [
    {
        title: 'UI/UX Design',
        image: '/placeholder.svg?height=300&width=400',
        href: '/services/ui-ux'
    },
    {
        title: 'Web Design',
        image: '/placeholder.svg?height=300&width=400',
        href: '/services/web-design'
    },
    {
        title: 'Landing Page',
        image: '/placeholder.svg?height=300&width=400',
        href: '/services/landing-page'
    },
    {
        title: 'Mobile App Design',
        image: '/placeholder.svg?height=300&width=400',
        href: '/services/mobile-app'
    }
]

export function ServicesSection() {
    return (
        <section className="relative overflow-hidden bg-[#1a1f2d] py-24">
            <BackgroundEffects />
            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mb-16 flex flex-wrap items-start justify-between gap-8">
                    <h2 className="text-5xl font-bold text-white">
                        My <span className="text-sky-500">Services</span>
                    </h2>
                    <p className="max-w-xl text-lg text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true
                    }}
                >
                    <CarouselContent>
                        {services.map((service) => (
                            <CarouselItem key={service.title} className="md:basis-1/2 lg:basis-1/3">
                                <ServiceCard {...service} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselDots />
                </Carousel>
            </div>
        </section>
    )
}

