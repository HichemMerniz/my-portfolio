import Link from 'next/link'

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="mx-auto max-w-7xl">
                {/*<div className="flex items-center justify-between rounded-full bg-black px-6 py-3">*/}
                {/*    <div className="flex items-center gap-8">*/}
                {/*        <Link*/}
                {/*            href="/"*/}
                {/*            className="rounded-full bg-sky-500 px-6 py-2 text-white"*/}
                {/*        >*/}
                {/*            Home*/}
                {/*        </Link>*/}
                {/*        <Link href="/about" className="text-white hover:text-sky-500">*/}
                {/*            About*/}
                {/*        </Link>*/}
                {/*        <Link href="/service" className="text-white hover:text-sky-500">*/}
                {/*            Service*/}
                {/*        </Link>*/}
                {/*    </div>*/}

                    <Link href="/" className="text-2xl font-bold text-black">
                        <span className="text-sky-500">Hichem</span> Merniz
                    </Link>

                    {/*<div className="flex items-center gap-8">*/}
                    {/*    <Link href="/resume" className="text-white hover:text-sky-500">*/}
                    {/*        Resume*/}
                    {/*    </Link>*/}
                    {/*    <Link href="/project" className="text-white hover:text-sky-500">*/}
                    {/*        Project*/}
                    {/*    </Link>*/}
                    {/*    <Link href="/contact" className="text-white hover:text-sky-500">*/}
                    {/*        Contact*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            {/*</div>*/}
        </nav>
    )
}

