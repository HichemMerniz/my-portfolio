"use client"

import Link from 'next/link'
import { Github, Linkedin, Instagram, Download, ArrowRight, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { Button } from "@/components/ui/button"
import { ThreeDBackground } from "@/components/ui/3d-background"
import { TerminalWindow } from "@/components/ui/terminal-window"
import { Typewriter } from "@/components/ui/typewriter"
import { ScrollAnimation } from "@/components/ui/scroll-animations"

const socialLinks = [
    { icon: Github, href: "https://github.com/HichemMerniz", label: "github", handle: "github.com/HichemMerniz" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hichem-merniz-26809b154/", label: "linkedin", handle: "in/hichem-merniz" },
    { icon: Instagram, href: "https://www.instagram.com/hichem.m__/", label: "instagram", handle: "@hichem.m__" },
]

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden isolate">
            <ThreeDBackground />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background z-10" />

            <div className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left Column - Terminal Content */}
                    <ScrollAnimation animation="slideLeft" delay={0.2}>
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-sm text-brand-secondary">
                                <span className="text-brand-primary">●</span>
                                <span className="text-muted-foreground">system online</span>
                                <span className="text-brand-primary">—</span>
                                <span>ready to execute</span>
                            </div>

                            <TerminalWindow title="user@hichem:~$ whoami" className="w-full">
                                <div className="space-y-1 text-sm leading-relaxed">
                                    <p><span className="text-brand-primary">$</span> <span className="text-muted-foreground">cat identity.txt</span></p>
                                    <p className="text-foreground">
                                        <Typewriter
                                            text="Hichem Merniz"
                                            speed={55}
                                            className="text-2xl sm:text-3xl font-bold text-brand-primary neon-text"
                                            cursorClassName="text-brand-secondary"
                                        />
                                    </p>
                                    <p className="pt-1 text-base text-foreground">
                                        <Typewriter
                                            text="DevOps Engineer & Full Stack Developer"
                                            speed={35}
                                            startDelay={1200}
                                        />
                                    </p>
                                    <div className="pt-3 space-y-1">
                                        <p><span className="text-brand-primary">$</span> <span className="text-muted-foreground">./status</span></p>
                                        <p><span className="text-brand-secondary">›</span> automating infrastructure &amp; shipping reliable software</p>
                                        <p><span className="text-brand-secondary">›</span> CI/CD · Cloud · Containers · Observability</p>
                                    </div>
                                </div>
                            </TerminalWindow>

                            <p className="text-muted-foreground leading-relaxed max-w-xl">
                                I build robust pipelines and developer platforms — turning manual releases into
                                one-command deploys and fragile systems into observable, self-healing infrastructure.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <ScrollLink to="contact" smooth={true} duration={500}>
                                    <Button
                                        variant="terminal"
                                        size="lg"
                                        className="group"
                                    >
                                        ./contact --me
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </ScrollLink>

                                <Button
                                    variant="glass"
                                    size="lg"
                                    className="group"
                                    onClick={() => window.open("/resume.pdf", "_blank")}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    download_cv.sh
                                </Button>
                            </div>

                            {/* Social Links */}
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <span className="text-xs text-muted-foreground">~/social:</span>
                                {socialLinks.map((social) => (
                                    <motion.div
                                        key={social.label}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 rounded border border-brand-primary/20 bg-black/40 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:border-brand-primary/60 hover:text-brand-primary hover:shadow-[0_0_15px_rgba(0,255,102,0.2)]"
                                        >
                                            <social.icon className="h-3.5 w-3.5" />
                                            <span>{social.handle}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Right Column - ASCII Avatar / Terminal */}
                    <ScrollAnimation animation="slideRight" delay={0.4}>
                        <div className="relative flex justify-center lg:justify-end">
                            <TerminalWindow title="user@hichem:~$ neofetch" className="w-full max-w-md" scanlines>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <pre className="text-[10px] leading-[1.1] text-brand-primary/90 select-none hidden sm:block">{`  ___________
 |  _______  |
 | |       | |
 | |  ###  | |
 | |_______| |
 |  _______  |
 | |       | |
 | |  ###  | |
 | |_______| |
 |___________|`}
                                    </pre>
                                    <div className="flex-1 space-y-1 text-xs">
                                        <p className="text-brand-primary font-bold">{"> hichem@merniz"}</p>
                                        <p className="text-muted-foreground">----------------</p>
                                        <Line k="OS" v="Linux / Cloud-Native" />
                                        <Line k="Role" v="DevOps Engineer" />
                                        <Line k="Shell" v="bash / zsh" />
                                        <Line k="Editor" v="neovim" />
                                        <Line k="Lang" v="TS, Python, Go, C#" />
                                        <Line k="Infra" v="k8s, terraform" />
                                        <Line k="Uptime" v="5+ years" />
                                        <div className="pt-1">
                                            <p className="text-muted-foreground">$ <span className="text-brand-primary">availability</span></p>
                                            <p className="text-brand-secondary">› open to freelance / full-time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                                    <Terminal className="h-3.5 w-3.5 text-brand-primary" />
                                    <span>type a command — scroll to explore</span>
                                </div>
                            </TerminalWindow>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ScrollLink to="skills" smooth={true} duration={500}>
                    <div className="flex flex-col items-center gap-1 cursor-pointer group">
                        <span className="text-xs text-muted-foreground group-hover:text-brand-primary transition-colors">scroll</span>
                        <div className="w-6 h-10 border-2 border-brand-primary/40 rounded-full flex justify-center group-hover:border-brand-primary transition-colors">
                            <motion.div
                                className="w-1 h-3 bg-brand-primary rounded-full mt-2"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </ScrollLink>
            </motion.div>
        </section>
    )
}

function Line({ k, v }: { k: string; v: string }) {
    return (
        <p>
            <span className="text-brand-secondary">{k}</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-foreground">{v}</span>
        </p>
    )
}
