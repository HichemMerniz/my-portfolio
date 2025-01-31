"use client"

import { motion } from "framer-motion";
import { Hero } from "@/components/organisms/hero";
import { Navbar } from "@/components/organisms/navbar";
import { ProjectsSection } from "@/components/organisms/projects-section";
import { SkillsMarquee } from "@/components/organisms/skills-card";
import ContactSection from "@/components/organisms/contact-sections";
// import {SkillsBeam} from "@/components/organisms/animated-skills";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
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
            className="min-h-screen bg-background text-foreground overflow-hidden"
        >
            <main>
                <Navbar />
                <motion.div variants={sectionVariants}>
                    <Hero />
                </motion.div>
                <motion.div variants={sectionVariants}>
                    <SkillsMarquee />
                </motion.div>
                <motion.div variants={sectionVariants}>
                    <ProjectsSection />
                </motion.div>
                <motion.div variants={sectionVariants}>
                    <ContactSection />
                </motion.div>
            </main>
        </motion.div>
    )
}