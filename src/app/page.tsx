"use client"

import { motion } from "framer-motion";
import { Hero } from "@/components/organisms/hero";
import { Navbar } from "@/components/organisms/navbar";
import { ProjectsSection } from "@/components/organisms/projects-section";
import { SkillsMarquee } from "@/components/organisms/skills-card";
import ContactSection from "@/components/organisms/contact-sections";
import { Scanlines } from "@/components/ui/scanlines";
// import {SkillsBeam} from "@/components/organisms/animated-skills";

const pageVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2
        }
    }
};

const sectionVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export default function Home() {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={pageVariants}
            className="min-h-screen bg-background text-foreground overflow-x-hidden"
        >
            {/* Navigation */}
            <Navbar />
            
            {/* Hero Section */}
            <motion.div variants={sectionVariants}>
                <Hero />
            </motion.div>
            
            {/* Skills Section */}
            <motion.div variants={sectionVariants}>
                <SkillsMarquee />
            </motion.div>
            
            {/* Projects Section */}
            <motion.div variants={sectionVariants}>
                <ProjectsSection />
            </motion.div>
            
            {/* Contact Section */}
            <motion.div variants={sectionVariants}>
                <ContactSection />
            </motion.div>
            
            {/* Footer */}
            <motion.footer 
                className="relative py-10 border-t border-brand-primary/20 bg-background"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4">
                    <div className="terminal-window max-w-3xl mx-auto">
                        <div className="terminal-bar">
                            <span className="terminal-dot bg-brand-error/80" />
                            <span className="terminal-dot bg-brand-warning/80" />
                            <span className="terminal-dot bg-brand-primary/80" />
                            <span className="terminal-title text-brand-primary">user@hichem:~$ exit</span>
                        </div>
                        <div className="p-5 text-sm text-muted-foreground space-y-1">
                            <p><span className="text-brand-primary">$</span> echo <span className="text-foreground">"session closed — thanks for visiting"</span></p>
                            <p><span className="text-brand-secondary">›</span> © {new Date().getFullYear()} Hichem Merniz — built with Next.js &amp; React</p>
                            <p className="text-brand-primary/70">// EOF</p>
                        </div>
                    </div>
                </div>
            </motion.footer>

            <Scanlines />
        </motion.div>
    )
}