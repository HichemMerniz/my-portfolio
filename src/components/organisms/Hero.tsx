"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Text } from '../ui/text'
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import image from '@/assets/profile-pic.png'

const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
    { icon: Twitter, href: "https://twitter.com/yourusername" },
]

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 md:px-6 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/20 -z-10" />
            
            {/* Animated circles in background */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-100/20 blur-3xl -top-48 -left-48 animate-blob" />
                <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-100/20 blur-3xl -bottom-48 -right-48 animate-blob animation-delay-2000" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto"
            >
                {/* Profile Image with Animation */}
                <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="relative inline-block">
                        <Image
                            src={image}
                            alt="Profile"
                            width={120}
                            height={120}
                            className="rounded-full border-4 border-white shadow-lg"
                            priority
                        />
                        <Badge 
                            variant="secondary" 
                            className="absolute bottom-1 right-1 w-6 h-6 rounded-full p-0 border-2 border-white bg-green-400"
                        >
                            <span className="sr-only">Online</span>
                        </Badge>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Text variant="heading" className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                            Building digital products, brands, and experience.
                        </Text>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        I'm a full-stack developer passionate about creating beautiful and functional digital experiences that make a difference.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Button 
                            size="lg"
                            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Latest Work
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                                >
                                    <link.icon className="w-5 h-5 text-gray-700" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

