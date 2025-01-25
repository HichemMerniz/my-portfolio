export function BackgroundEffects() {
    return (
        <>
            <div className="absolute left-0 top-0 h-[500px] w-[500px] opacity-30 blur-3xl">
                <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-sky-500 to-sky-500/50 transform-gpu" />
            </div>
            <div className="absolute right-0 top-1/2 h-[600px] w-[600px] opacity-30 blur-3xl">
                <div className="absolute h-full w-full rounded-full bg-gradient-to-l from-sky-500 to-sky-500/50 transform-gpu" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,.2)_25%,transparent_25%,transparent_50%,rgba(0,0,0,.2)_50%,rgba(0,0,0,.2)_75%,transparent_75%,transparent)] bg-[length:4px_4px]" />
        </>
    )
}

