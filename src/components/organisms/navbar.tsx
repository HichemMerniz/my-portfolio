import Link from 'next/link'

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="mx-auto max-w-7xl">
                    <Link href="/" className="text-2xl font-bold text-black">
                        <span className="text-sky-500">Hichem</span> Merniz
                    </Link>
                </div>
        </nav>
    )
}

