import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import hichemmerniz from "@/assets/profile-pic.png"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <div className="relative min-h-screen bg-white">
            <div className="mx-auto max-w-7xl px-4 pt-20 lg:pt-32">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-xl font-medium">Hi I am</p>
                            <h1 className="space-y-4 text-3xl font-bold lg:text-4xl">
                                <span className="block text-sky-500">Expert MERN Stack Developer</span>
                                <span className="relative inline-block">
                                    & DevOps Professional
                                    <span className="absolute -bottom-2 left-0 h-1 w-full bg-sky-500" />
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                            Développeur full-stack expérimenté et designer UI/UX spécialisé dans la création des applications web intuitives et réactives. Passionné par la combinaison de l'expertise technique et des principes de conception centrés sur l'utilisateur.
                        </p>

                        <ScrollLink to="contact-section" smooth={true} duration={500}>
                            <Button
                                className="rounded-lg bg-sky-500 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-sky-500/90 hover:shadow-lg"
                            >
                                Contact Me
                            </Button>
                        </ScrollLink>
                    </div>

                    {/* Right Column - Image and Social Links */}
                    <div className="relative">
                        <div className="relative mx-auto max-w-md">
                            {/* Circular Image */}
                            <motion.div
                                className="aspect-square overflow-hidden rounded-full border-4 border-white shadow-2xl"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, -5, 0],
                                    borderColor: [
                                        "rgba(255,255,255,1)",
                                        "rgba(59, 130, 246, 0.5)",
                                        "rgba(255,255,255,1)"
                                    ]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut"
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            duration: 0.8,
                                            type: "spring",
                                            stiffness: 120
                                        }
                                    }}
                                >
                                    <Image
                                        src={hichemmerniz}
                                        alt="Profile"
                                        width={800}
                                        height={800}
                                        className="h-full w-full object-cover"
                                        priority
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Social Links */}
                            <div className="mt-8 flex justify-center gap-6">
                                <Link href="https://www.facebook.com/hichem.merniz/" className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900">
                                    <Facebook className="h-6 w-6" />
                                </Link>
                                <Link href="https://github.com/HichemMerniz" className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900">
                                    <Github className="h-6 w-6" />
                                </Link>
                                <Link href="https://www.instagram.com/hichem.m__/" className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900">
                                    <Instagram className="h-6 w-6" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/hichem-merniz-26809b154/" className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900">
                                    <Linkedin className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}