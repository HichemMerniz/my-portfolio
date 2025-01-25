"use client"

import { Heading } from "@/components/ui/heading"
import { Card } from "@/components/molecules/card"
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/organisms/carousel"
import service1 from '@/assets/services/Service1.png'
// import azureDevOpsIcon from "@/assets/skills/azure-devops.png"
// import dockerIcon from "@/assets/skills/docker.png"
// import agileIcon from "@/assets/skills/agile.png"
// import softwareDevelopmentIcon from "@/assets/skills/software-development.png"
// import uiUxIcon from "@/assets/skills/ui-ux.png"
// import devOpsIcon from "@/assets/skills/devops.png"

const competencies = [
    {
        title: "Azure DevOps & CI/CD",
        description: "Maîtrise d'Azure DevOps pour la gestion de projet et des pipelines CI/CD.",
        image: service1,
    },
    {
        title: "Docker et conteneurisation",
        description: "Compétences en conteneurisation avec Docker, Docker Swarm et MinIO.",
        image: service1,
    },
    {
        title: "Développement agile",
        description: "Expérience dans l'application de méthodologies agiles aux processus de développement.",
        image: service1,
    },
    {
        title: "Développement de logiciels",
        description: "Expertise en développement backend et frontend (C#, TypeScript, JavaScript).",
        image: service1,
    },
    {
        title: "UI/UX Design",
        description: "Création d'interfaces intuitives et visuellement attrayantes.",
        image: service1,
    },
    {
        title: "Infrastructure et DevOps",
        description: "Gestion de l'infrastructure, pratiques DevOps, et utilisation d'outils comme Jenkins.",
        image: service1,
    },
]

export function ServicesSection() {

    return (
        <section className="relative overflow-hidden bg-[#1a1f2d] py-24 rounded-3xl">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] opacity-30 blur-3xl">
                <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-sky-500 to-sky-500/50 transform-gpu" />
            </div>
            <div className="absolute right-0 top-1/2 h-[600px] w-[600px] opacity-30 blur-3xl">
                <div className="absolute h-full w-full rounded-full bg-gradient-to-l from-sky-500 to-sky-500/50 transform-gpu" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,.2)_25%,transparent_25%,transparent_50%,rgba(0,0,0,.2)_50%,rgba(0,0,0,.2)_75%,transparent_75%,transparent)] bg-[length:4px_4px]" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mb-16 flex flex-wrap items-start justify-between gap-8">
                    <Heading level={2} className="text-5xl text-white" highlight="Compétences">
                        Mes
                    </Heading>
                    <p className="max-w-xl text-lg text-gray-300">
                        Ingénieur logiciel expérimenté, je développe des applications web et mobiles robustes en maîtrisant
                        JavaScript, Python, C#, JAVA, Azure DevOps, CI/CD (Jenkins, GitLab, Docker). Spécialisé en solutions
                        d&#39;entreprise sur mesure pour des environnements DevOps.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {competencies.map((competency) => (
                            <CarouselItem key={competency.title} className="md:basis-1/2 lg:basis-1/3">
                                <Card {...competency} />
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

