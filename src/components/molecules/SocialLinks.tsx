import Link from 'next/link'
import { Button } from '../ui/button'
import { Icon } from '../ui/icon' // Assuming Icon component is defined elsewhere

interface SocialLink {
    label: string
    href: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>> // Assuming Icon components are SVG components
}

interface SocialLinksProps {
    links: SocialLink[]
}

export function SocialLinks({ links }: SocialLinksProps) {

    return (
        <div className="flex items-center gap-2">
            {links.map((link) => (
                <Button key={link.label} variant="ghost" asChild >
                    <Link href={link.href} target="_blank">
                        <Icon as={link.icon} className="w-4 h-4 mr-1" />
                        {link.label}
                    </Link>
                </Button>
            ))}
        </div>
    )
}