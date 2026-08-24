"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
    { name: '~/home', href: 'hero' },
    { name: '~/skills', href: 'skills' },
    { name: '~/projects', href: 'projects' },
    { name: '~/contact', href: 'contact' }
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'glass shadow-soft backdrop-blur-md border-b border-brand-primary/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.03 }} className="flex items-center">
                        <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer group">
                            <h1 className="text-lg sm:text-xl font-bold">
                                <span className="text-brand-primary neon-text">hichem</span>
                                <span className="text-muted-foreground">@dev</span>
                                <span className="text-brand-secondary">:~$</span>
                            </h1>
                        </ScrollLink>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <motion.div key={item.name} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                                <ScrollLink
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    className="group cursor-pointer px-3 py-2 rounded text-sm font-medium text-muted-foreground transition-colors hover:text-brand-primary relative"
                                >
                                    <span className="text-brand-primary/50 group-hover:text-brand-primary">cd </span>
                                    {item.name}
                                    <span className="absolute -bottom-0.5 left-3 right-3 h-px bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                                </ScrollLink>
                            </motion.div>
                        ))}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-2">
                            <ScrollLink to="contact" smooth={true} duration={500}>
                                <Button variant="terminal" size="sm">
                                    ./contact
                                </Button>
                            </ScrollLink>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative z-50 text-brand-primary"
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <X className="h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <Menu className="h-6 w-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass border-t border-brand-primary/20"
                    >
                        <div className="px-4 py-6 space-y-3">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <ScrollLink
                                        to={item.href}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-brand-primary transition-colors cursor-pointer"
                                    >
                                        <span className="text-brand-primary">cd</span>
                                        {item.name}
                                    </ScrollLink>
                                </motion.div>
                            ))}
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navItems.length * 0.08 }} className="pt-3">
                                <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button variant="terminal" className="w-full">
                                        ./contact <ArrowRight className="ml-1 h-4 w-4" />
                                    </Button>
                                </ScrollLink>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
