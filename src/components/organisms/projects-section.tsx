"use client"

import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Github, Eye, Calendar, Users, Code, ArrowUpRight, Star, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image, { StaticImageData } from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { Link as ScrollLink } from 'react-scroll'
import { ScrollAnimation } from "@/components/ui/scroll-animations"
import { TerminalWindow } from "@/components/ui/terminal-window"
import { GlitchText } from "@/components/ui/glitch-text"
import efaciliti from "@/assets/projects/efaciliti.png"
import pospro from "@/assets/projects/pospro.png"
import oceanbridge from "@/assets/projects/oceanbridge.png"
import shoppey from "@/assets/projects/shoppey.png"

interface Project {
    id: string
    title: string
    description: string
    role: string
    technologies: string[]
    achievements: string
    link: string
    github?: string
    image: string | StaticImageData
    year: string
    teamSize: string
    duration: string
    rating?: number
    featured?: boolean
}

const projects: Project[] = [
    {
        id: "1",
        title: "E-faciliti",
        description: "Modern banking platform with an intuitive UI for clients to purchase financial products online. Modular frontend architecture with a custom design system per partner bank.",
        role: "Senior Frontend Developer & UI/UX Lead",
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand", "React Query"],
        achievements: "Designed a scalable frontend architecture with a reusable design system, cutting dev time by 40%. Smooth animations and optimized UX lifted conversion by 35%.",
        link: "https://e-faciliti.dz",
        image: efaciliti,
        year: "2023",
        teamSize: "8 people",
        duration: "6 months",
        rating: 5,
        featured: true
    },
    {
        id: "2",
        title: "POS Pro",
        description: "Cross-platform e-commerce mobile app with a modern admin web interface. Focused on UX and frontend performance.",
        role: "Senior Frontend Developer & Tech Lead",
        technologies: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "React Hook Form"],
        achievements: "Led a 5-dev frontend team to ship a 60fps mobile app with a reusable component system, cutting load time by 50%.",
        link: "https://play.google.com/store/apps/details?id=com.pospro.pospro&hl=fr",
        image: pospro,
        year: "2022",
        teamSize: "12 people",
        duration: "8 months",
        rating: 5,
        featured: true
    },
    {
        id: "3",
        title: "Shoppey",
        description: "Mobile e-commerce app with a modern UI and optimized checkout. Focused on accessibility and performance.",
        role: "Senior Frontend Developer",
        technologies: ["React Native", "TypeScript", "React Navigation", "React Query", "React Hook Form"],
        achievements: "Built an accessible, consistent design system and performance optimizations that cut load time by 45%.",
        link: "http://shoppey.appspot.com",
        image: shoppey,
        year: "2022",
        teamSize: "6 people",
        duration: "4 months",
        rating: 4
    },
    {
        id: "4",
        title: "Ocean Bridge",
        description: "Modern showcase site for an insurance broker with responsive design and smooth animations. Performant frontend with SEO optimizations.",
        role: "Senior Frontend Developer",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        achievements: "Delivered a 95+ Lighthouse site with fluid animations, boosting engagement by 60%.",
        link: "https://oceanbridges.fr",
        image: oceanbridge,
        year: "2023",
        teamSize: "3 people",
        duration: "3 months",
        rating: 5
    },
    {
        id: "5",
        title: "Design System Pro",
        description: "Complete, reusable design system with modern React components, interactive docs and dev tooling. Focused on consistency and accessibility.",
        role: "Senior Frontend Developer & Design System Architect",
        technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Radix UI", "Jest"],
        achievements: "Built a design system used by 15+ teams, reducing dev time by 60% with automated tests and docs.",
        link: "#",
        image: efaciliti,
        year: "2024",
        teamSize: "4 people",
        duration: "4 months",
        rating: 5,
        featured: true
    },
]

const ProjectCard = ({ project }: { project: Project }) => {
    const fileTitle = project.title.toLowerCase().replace(/\s+/g, "-") + ".app"

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="group relative"
            whileHover={{ y: -6 }}
        >
            <TerminalWindow
                title={`user@hichem:~/projects$ cat ${fileTitle}`}
                className="h-full"
                bodyClassName="p-0"
            >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video border-b border-brand-primary/20">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                    {project.featured && (
                        <Badge className="absolute top-3 left-3 bg-brand-primary/20 text-brand-primary border border-brand-primary/40 backdrop-blur-sm">
                            <Star className="w-3 h-3 mr-1" /> featured
                        </Badge>
                    )}
                    {project.rating && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded px-2 py-1 border border-brand-primary/20">
                            <Star className="w-3 h-3 text-brand-warning fill-current" />
                            <span className="text-xs text-brand-primary font-medium">{project.rating}</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-brand-primary transition-colors">
                            {project.title}
                        </h3>
                        <div className="flex gap-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{project.year}</span>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{project.teamSize}</span>
                        <span className="flex items-center gap-1"><Code className="w-3 h-3" />{project.duration}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 5).map((tech) => (
                            <span key={tech} className="text-[11px] px-2 py-0.5 rounded border border-brand-primary/20 bg-brand-primary/5 text-brand-secondary">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 5 && (
                            <span className="text-[11px] px-2 py-0.5 rounded border border-brand-primary/20 bg-brand-primary/5 text-muted-foreground">
                                +{project.technologies.length - 5}
                            </span>
                        )}
                    </div>

                    <div className="flex gap-2 pt-2">
                        <Button
                            size="sm"
                            variant="terminal"
                            className="flex-1"
                            onClick={() => window.open(project.link, "_blank")}
                        >
                            <Eye className="w-3.5 h-3.5" /> open
                        </Button>
                        {project.github && (
                            <Button
                                size="sm"
                                variant="glass"
                                onClick={() => window.open(project.github, "_blank")}
                            >
                                <Github className="w-3.5 h-3.5" />
                            </Button>
                        )}
                    </div>
                </div>
            </TerminalWindow>
        </motion.div>
    )
}

export function ProjectsSection() {
    const [selectedTech, setSelectedTech] = useState<string>("all")

    const allTechs = useMemo(() => {
        const set = new Set<string>()
        projects.forEach(p => p.technologies.forEach(t => set.add(t)))
        return Array.from(set).sort()
    }, [])

    const filteredProjects = selectedTech === "all"
        ? projects
        : projects.filter(p => p.technologies.includes(selectedTech))

    return (
        <section id="projects" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,102,0.06),transparent_50%)]" />

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <ScrollAnimation animation="slideUp" delay={0.2}>
                    <div className="text-center mb-12">
                        <Heading level={2} className="text-3xl md:text-4xl lg:text-5xl mb-4">
                            <GlitchText text="~/projects" className="gradient-text" trigger="hover" />
                        </Heading>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Selected work across web and mobile. Filter the repository by technology to inspect
                            specific parts of the stack.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Tech Filter */}
                <ScrollAnimation animation="slideUp" delay={0.4}>
                    <div className="flex flex-col items-center gap-3 mb-12">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Filter className="h-3.5 w-3.5 text-brand-primary" />
                            <span>grep --stack</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
                            <FilterChip label="all" active={selectedTech === "all"} onClick={() => setSelectedTech("all")} />
                            {allTechs.map((tech) => (
                                <FilterChip
                                    key={tech}
                                    label={tech}
                                    active={selectedTech === tech}
                                    onClick={() => setSelectedTech(tech)}
                                />
                            ))}
                        </div>
                        <p className="text-xs text-brand-secondary mt-1">
                            {filteredProjects.length} result{filteredProjects.length === 1 ? "" : "s"} for <span className="text-brand-primary">{selectedTech}</span>
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTech}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* CTA */}
                <ScrollAnimation animation="slideUp" delay={0.6}>
                    <div className="text-center mt-16">
                        <p className="text-muted-foreground mb-6">Interested in collaborating? Let&apos;s deploy something together.</p>
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <Button variant="terminal" size="lg">
                                ./start-project <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                        </ScrollLink>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded border px-3 py-1.5 text-xs font-medium transition-all duration-300",
                active
                    ? "border-brand-primary bg-brand-primary/10 text-brand-primary shadow-[0_0_15px_rgba(0,255,102,0.2)]"
                    : "border-brand-primary/20 bg-black/40 text-muted-foreground hover:border-brand-primary/50 hover:text-brand-primary"
            )}
        >
            {label}
        </button>
    )
}
