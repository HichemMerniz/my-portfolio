"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Category = "All" | "Mobile" | "Web"

interface Project {
    id: string
    title: string
    description: string
    role: string
    technologies: string[]
    category: Exclude<Category, "All">
    achievements: string
    link: string
    image: string
}

const projects: Project[] = [
    {
        id: "1",
        title: "E-faciliti",
        description:
            "Application permettant aux utilisateurs finaux d'acheter facilement des produits sur la plateforme, par le biais d'une interface bancaire où chaque banque dispose de son propre portail pour présenter ses produits",
        role: "Développeur Full Stack",
        technologies: ["ASP.NET Core", "C#", "ReactJS", "SQL Server"],
        category: "Web",
        achievements:
            "Rationalisation du processus d'achat, éliminant la nécessité de se rendre dans une banque physique, ce qui a entraîné une augmentation significative des commandes. L'interface conviviale et les fonctionnalités améliorées ont suscité des réactions positives de la part des utilisateurs.",
        link: "https://e-faciliti.dz",
        image: "/placeholder.svg?height=600&width=800",
    },
    {
        id: "2",
        title: "POS Pro",
        description: "Développement d'une application mobile de commerce électronique.",
        role: "Chef d'équipe",
        technologies: ["Express.js", "TypeScript", "MongoDB", "SQL Server"],
        category: "Mobile",
        achievements:
            "A dirigé le développement d'une solution complète de commerce électronique, gérant à la fois les applications web (Backoffice) et les applications mobiles. A mis en œuvre avec succès des interfaces de communication qui ont facilité la synchronisation transparente des données entre Sales Buzz et WMS.",
        link: "https://play.google.com/store/apps/details?id=com.pospro.pospro&hl=fr",
        image: "/placeholder.svg?height=600&width=800",
    },
    {
        id: "3",
        title: "Shoppey",
        description:
            "Collaboration avec les développeurs pour créer une application mobile de commerce électronique intuitive, en donnant la priorité à l'interface utilisateur intuitive et à l'expérience de paiement transparente.",
        role: "Développeur Backend",
        technologies: ["Odoo", "Express.js", "TypeScript", "MongoDB", "React Native"],
        category: "Mobile",
        achievements:
            "Conception d'une solution permettant au personnel des points de vente de commander facilement des produits directement à partir de l'application. Établissement d'une connexion solide avec Odoo pour un échange de données transparent.",
        link: "http://shoppey.appspot.com",
        image: "/placeholder.svg?height=600&width=800",
    },
    {
        id: "4",
        title: "Ocean Bridge",
        description:
            "Conception et développement d'un site web vitrine pour un courtier en assurances basé à Loctudy, en France.",
        role: "Développeur Full Stack",
        technologies: ["Laravel", "ReactJS", "MySQL", "Nginx", "GitHub Actions", "AWS EC2"],
        category: "Web",
        achievements:
            "A fourni une plateforme professionnelle et visuellement attrayante qui a amélioré la présence en ligne du courtier. Mise en œuvre réussie d'un pipeline CI/CD automatisé utilisant les actions GitHub pour des déploiements rationalisés.",
        link: "https://oceanbridges.fr",
        image: "/placeholder.svg?height=600&width=800",
    },
]

const categories: Category[] = ["All", "Mobile", "Web"]

export function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("All")

    const filteredProjects = projects.filter((project) =>
        selectedCategory === "All" ? true : project.category === selectedCategory,
    )

    return (
        <section className="py-24 bg-gray-50">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <Heading level={2} className="text-5xl mb-6">
                        Mes Projets
                    </Heading>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Une sélection de mes projets les plus récents et les plus significatifs, démontrant mon expertise en
                        développement full-stack et mobile.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category)}
                            className={cn("rounded-full px-6", selectedCategory === category && "bg-orange-500 hover:bg-orange-600")}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <Button
                                        variant="outline"
                                        className="text-white border-white hover:bg-white/20"
                                        onClick={() => window.open(project.link, "_blank")}
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Voir le projet
                                    </Button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <Badge variant="secondary">{project.category}</Badge>
                                </div>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2">Rôle</h4>
                                    <p className="text-gray-600">{project.role}</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Réalisations</h4>
                                    <p className="text-gray-600">{project.achievements}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

