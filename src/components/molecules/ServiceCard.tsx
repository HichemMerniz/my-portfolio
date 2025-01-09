import {LucideIcon } from 'lucide-react'
import { Text } from '../ui/text'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <Card>
            <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-muted">
                    <Icon className="w-6 h-6" />
                </div>
            </CardHeader>
            <CardContent>
                <Text variant="subheading" className="!text-lg font-semibold">
                    {title}
                </Text>
                <Text variant="body" className="text-muted-foreground">
                    {description}
                </Text>
            </CardContent>
        </Card>
    )
}

