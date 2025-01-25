"use client"

import * as React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import useEmblaCarousel from "embla-carousel-react"
// import {type EmblaOptionsType} from "embla-carousel-react"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>[0]

interface CarouselProps {
    opts?: UseCarouselParameters
    // plugins?: EmblaOptionsType["plugins"]
    orientation?: "horizontal" | "vertical"
    setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
    selectedIndex: number
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />")
    }
    return context
}

export function Carousel({
                             orientation = "horizontal",
                             opts,
                             setApi,
                             // plugins,
                             className,
                             children,
                             ...props
                         }: React.HTMLAttributes<HTMLDivElement> & CarouselProps) {
    const [carouselRef, api] = useEmblaCarousel(
        {
            ...opts,
            axis: orientation === "horizontal" ? "x" : "y",
        },
        // plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const onSelect = React.useCallback((api: CarouselApi) => {
        if (!api) return

        setSelectedIndex(api.selectedScrollSnap())
        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault()
                scrollPrev()
            } else if (event.key === "ArrowRight") {
                event.preventDefault()
                scrollNext()
            }
        },
        [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
        if (!api || !setApi) return
        setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
        if (!api) return

        onSelect(api)
        api.on("reInit", onSelect)
        api.on("select", onSelect)

        return () => {
            api?.off("select", onSelect)
        }
    }, [api, onSelect])

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api: api,
                opts,
                orientation: orientation || "horizontal",
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
                selectedIndex,
            }}
        >
            <div
                ref={carouselRef}
                onKeyDownCapture={handleKeyDown}
                className={cn("relative", className)}
                role="region"
                aria-roledescription="carousel"
                {...props}
            >
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

export function CarouselContent({
                                    className,
                                    ...props
                                }: React.HTMLAttributes<HTMLDivElement>) {
    const { orientation } = useCarousel()

    return (
        <div
            className={cn(
                "flex",
                orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                className
            )}
            {...props}
        />
    )
}

export function CarouselItem({
                                 className,
                                 ...props
                             }: React.HTMLAttributes<HTMLDivElement>) {
    const { orientation } = useCarousel()

    return (
        <div
            role="group"
            aria-roledescription="slide"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className
            )}
            {...props}
        />
    )
}

export function CarouselPrevious() {
    const { scrollPrev, canScrollPrev } = useCarousel()

    return (
        <Button
            variant="secondary"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
                "absolute left-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full p-0 opacity-70 transition-opacity hover:opacity-100 disabled:opacity-30",
            )}
            aria-label="Previous slide"
        >
            <ArrowLeftIcon className="h-6 w-6" />
        </Button>
    )
}

export function CarouselNext() {
    const { scrollNext, canScrollNext } = useCarousel()

    return (
        <Button
            variant="secondary"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
                "absolute right-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full p-0 opacity-70 transition-opacity hover:opacity-100 disabled:opacity-30",
            )}
            aria-label="Next slide"
        >
            <ArrowRightIcon className="h-6 w-6" />
        </Button>
    )
}

export function CarouselDots() {
    const { api, selectedIndex } = useCarousel()
    const [slideCount, setSlideCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) return
        setSlideCount(api.scrollSnapList().length)
    }, [api])

    return (
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: slideCount }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                        "h-2 rounded-full transition-all",
                        selectedIndex === index ? "w-8 bg-sky-500" : "w-2 bg-white/30"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    )
}

