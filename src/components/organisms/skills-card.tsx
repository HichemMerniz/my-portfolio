"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/heading"
import { motion, AnimatePresence } from "framer-motion"
import { TerminalWindow } from "@/components/ui/terminal-window"
import { GlitchText } from "@/components/ui/glitch-text"
import {
    Box, GitBranch, Cloud, Boxes, Activity, Container, Ship, CloudCog,
    Network, Gauge, ShieldCheck, Workflow, Layers, Database,
    LineChart, Bug, Cpu, Terminal, ChevronRight
} from "lucide-react"

type Category = "all" | "containers" | "cicd" | "cloud" | "iac" | "orchestration" | "monitoring"

const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay },
})

const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
}
const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}

interface Tool {
    name: string
    level: number
    description: string
    category: Exclude<Category, "all">
    icon: React.ComponentType<{ className?: string }>
}

const tools: Tool[] = [
    // Containers
    { name: "Docker", level: 95, category: "containers", icon: Container, description: "Containerization, multi-stage builds, Compose, image optimization and registry management." },
    { name: "Docker Swarm", level: 82, category: "containers", icon: Ship, description: "Orchestrating container clusters with overlays, secrets and rolling updates." },
    { name: "Podman", level: 70, category: "containers", icon: Box, description: "Daemonless, rootless container engine — drop-in Docker alternative." },
    { name: "MinIO", level: 75, category: "containers", icon: Database, description: "High-performance S3-compatible object storage for on-prem workloads." },

    // CI/CD
    { name: "Jenkins", level: 92, category: "cicd", icon: Gauge, description: "Pipeline-as-code, shared libraries, distributed agents and automated gating." },
    { name: "GitLab CI", level: 88, category: "cicd", icon: GitBranch, description: "End-to-end pipelines, caching, artifacts and environment promotion." },
    { name: "GitHub Actions", level: 85, category: "cicd", icon: Workflow, description: "Reusable workflows, matrix builds and OIDC cloud auth." },
    { name: "Azure DevOps", level: 90, category: "cicd", icon: CloudCog, description: "Repos, Boards, Pipelines and Artifacts across the delivery lifecycle." },

    // Cloud
    { name: "AWS", level: 80, category: "cloud", icon: Cloud, description: "EC2, EKS, S3, IAM, VPC and CloudWatch for resilient cloud-native systems." },
    { name: "Azure", level: 88, category: "cloud", icon: Cloud, description: "AKS, App Services, Container Registry and Entra ID integration." },
    { name: "GCP", level: 68, category: "cloud", icon: Cloud, description: "GKE, Cloud Run and Cloud Storage for scalable managed workloads." },

    // IaC
    { name: "Terraform", level: 90, category: "iac", icon: Layers, description: "Modular, state-managed infrastructure across cloud and on-prem providers." },
    { name: "Ansible", level: 84, category: "iac", icon: Cpu, description: "Idempotent configuration management and zero-downtime rollouts." },
    { name: "Pulumi", level: 65, category: "iac", icon: Code2Icon, description: "Infrastructure defined in general-purpose languages with type safety." },

    // Orchestration
    { name: "Kubernetes", level: 90, category: "orchestration", icon: Boxes, description: "Operators, autoscaling, networking, security policies and GitOps delivery." },
    { name: "Helm", level: 85, category: "orchestration", icon: Ship, description: "Packaging, templating and release management for cluster workloads." },
    { name: "Nomad", level: 60, category: "orchestration", icon: Network, description: "Lightweight scheduler for diverse workloads across the fleet." },

    // Monitoring
    { name: "Prometheus", level: 88, category: "monitoring", icon: Activity, description: "Metrics scraping, PromQL, alerting rules and long-term retention." },
    { name: "Grafana", level: 86, category: "monitoring", icon: LineChart, description: "Dashboards, SLO panels and unified observability across sources." },
    { name: "ELK Stack", level: 78, category: "monitoring", icon: Bug, description: "Centralized logging, ingest pipelines and fast full-text search." },
    { name: "Datadog", level: 72, category: "monitoring", icon: ShieldCheck, description: "APM, synthetics and infrastructure monitoring as a managed service." },
]

const categories: { id: Category; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "all", label: "all", icon: Terminal },
    { id: "containers", label: "containers", icon: Container },
    { id: "cicd", label: "ci/cd", icon: GitBranch },
    { id: "cloud", label: "cloud", icon: Cloud },
    { id: "iac", label: "iac", icon: Layers },
    { id: "orchestration", label: "orchestration", icon: Boxes },
    { id: "monitoring", label: "monitoring", icon: Activity },
]

function CliMeter({ level }: { level: number }) {
    const filled = Math.round(level / 10)
    const blocks = Array.from({ length: 10 }, (_, i) => i < filled)
    return (
        <div className="flex items-center gap-2">
            <span className="text-brand-primary">[</span>
            <span className="tracking-tight">
                {blocks.map((on, i) => (
                    <span key={i} className={on ? "text-brand-primary" : "text-brand-primary/25"}>█</span>
                ))}
            </span>
            <span className="text-brand-primary">]</span>
            <span className="text-xs text-brand-secondary tabular-nums">{level}%</span>
        </div>
    )
}

const ToolCard = ({ tool, onSelect, active }: { tool: Tool; onSelect: () => void; active: boolean }) => {
    const Icon = tool.icon
    return (
        <motion.button
            layout
            onClick={onSelect}
            whileHover={{ y: -4 }}
            className={cn(
                "group relative w-full text-left rounded-lg border p-4 transition-all duration-300",
                active
                    ? "border-brand-primary bg-brand-primary/10 shadow-[0_0_20px_rgba(0,255,102,0.2)]"
                    : "border-brand-primary/20 bg-black/40 hover:border-brand-primary/50"
            )}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-brand-secondary" />
                    <span className="font-semibold text-foreground">{tool.name}</span>
                </div>
                <ChevronRight className={cn("h-4 w-4 text-muted-foreground transition-transform", active && "rotate-90 text-brand-primary")} />
            </div>
            <div className="mt-3">
                <CliMeter level={tool.level} />
            </div>
            <AnimatePresence initial={false}>
                {active && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <p className="pt-3 text-xs leading-relaxed text-muted-foreground border-t border-brand-primary/10 mt-3">
                            {tool.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    )
}

export function SkillsMarquee() {
    const [activeCategory, setActiveCategory] = useState<Category>("all")
    const [selected, setSelected] = useState<string | null>(null)

    const filtered = activeCategory === "all" ? tools : tools.filter(t => t.category === activeCategory)

    const stats = [
        { number: "5+", label: "years experience", icon: Activity },
        { number: "50+", label: "pipelines shipped", icon: GitBranch },
        { number: "20+", label: "tools mastered", icon: Boxes },
        { number: "99.9%", label: "deploy success", icon: ShieldCheck },
    ]

    return (
        <section id="skills" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,255,102,0.07),transparent_50%)]" />

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <motion.div {...reveal(0.1)}>
                    <div className="mb-12">
                        <TerminalWindow title="user@hichem:~$ ./skill_explorer --toolchain=devops" className="max-w-3xl mx-auto">
                            <div className="space-y-1 text-sm">
                                <p><span className="text-brand-primary">$</span> <span className="text-muted-foreground">scanning toolchain...</span></p>
                                <p><span className="text-brand-secondary">›</span> <span className="text-foreground">found {tools.length} technologies across {categories.length - 1} domains</span></p>
                                <p><span className="text-brand-primary">$</span> <span className="text-muted-foreground">select a category to inspect proficiency</span></p>
                            </div>
                        </TerminalWindow>
                        <div className="text-center mt-8">
                            <Heading level={2} className="text-3xl md:text-4xl lg:text-5xl mb-4">
                                Interactive <GlitchText text="Skill Explorer" className="gradient-text" trigger="hover" />
                            </Heading>
                            <p className="max-w-2xl mx-auto text-muted-foreground">
                                An interactive view of my DevOps toolchain. Click any tool to reveal details,
                                or filter by domain to narrow the stack.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Category Filter */}
                <motion.div {...reveal(0.2)}>
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {categories.map((cat) => {
                            const Icon = cat.icon
                            const isActive = activeCategory === cat.id
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => { setActiveCategory(cat.id); setSelected(null) }}
                                    className={cn(
                                        "flex items-center gap-1.5 rounded border px-3 py-1.5 text-xs font-medium transition-all duration-300",
                                        isActive
                                            ? "border-brand-primary bg-brand-primary/10 text-brand-primary shadow-[0_0_15px_rgba(0,255,102,0.2)]"
                                            : "border-brand-primary/20 bg-black/40 text-muted-foreground hover:border-brand-primary/50 hover:text-brand-primary"
                                    )}
                                >
                                    <Icon className="h-3.5 w-3.5" />
                                    <span>cat {cat.label}</span>
                                </button>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Tools Grid */}
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((tool) => (
                            <ToolCard
                                key={tool.name}
                                tool={tool}
                                active={selected === tool.name}
                                onSelect={() => setSelected(selected === tool.name ? null : tool.name)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Stats */}
                <motion.div {...reveal(0.3)} className="mt-16">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    >
                        {stats.map((stat) => (
                            <motion.div key={stat.label} variants={staggerItem} className="text-center group" whileHover={{ y: -4 }}>
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.number}</div>
                                <div className="text-xs text-muted-foreground mb-2">{stat.label}</div>
                                <stat.icon className="h-5 w-5 mx-auto text-brand-primary group-hover:scale-110 transition-transform" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

function Code2Icon(props: { className?: string }) {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
}
