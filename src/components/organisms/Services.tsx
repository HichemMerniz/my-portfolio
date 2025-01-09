import { Monitor, Smartphone, Palette, Code } from 'lucide-react'
import { Text } from '../ui/text'
import { ServiceCard } from '../molecules/ServiceCard'

export function Services() {
    return (
        <section className="py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                <Text variant="heading" className="!text-4xl">
                    Collaborate with brands and agencies
                </Text>
                <Text variant="subheading" className="text-muted-foreground">
                    to create impactful results.
                </Text>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <ServiceCard
                    icon={Monitor}
                    title="UX & UI"
                    description="Designing interfaces that are intuitive, efficient, and enjoyable to use"
                />
                <ServiceCard
                    icon={Smartphone}
                    title="Web & Mobile App"
                    description="Transforming ideas into exceptional web and mobile applications"
                />
                <ServiceCard
                    icon={Palette}
                    title="Design & Creative"
                    description="Crafting visually stunning designs that connect with your audience"
                />
                <ServiceCard
                    icon={Code}
                    title="Development"
                    description="Bringing your vision to life with the latest technology and best practices"
                />
            </div>
        </section>
    )
}

