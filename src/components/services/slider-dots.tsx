interface SliderDotsProps {
    count: number
    active: number
}

export function SliderDots({ count, active }: SliderDotsProps) {
    return (
        <div className="flex justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    className={`h-2 w-2 rounded-full transition-all ${
                        i === active ? 'w-8 bg-sky-500' : 'bg-white/30'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>
    )
}

