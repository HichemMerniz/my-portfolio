"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, MessageCircle, Send, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { ScrollAnimation, StaggeredAnimation } from "@/components/ui/scroll-animations"
import { TerminalWindow } from "@/components/ui/terminal-window"
import { GlitchText } from "@/components/ui/glitch-text"
import { useState } from "react"
import { FormInput } from "@/components/ui/form-input"

const contactMethods = [
    {
        icon: Mail,
        title: "email",
        value: "hichemmerniz3@gmail.com",
        href: "mailto:hichemmerniz3@gmail.com",
        description: "response within 24h",
    },
    {
        icon: Phone,
        title: "whatsapp",
        value: "+213 669 525 900",
        href: "https://wa.me/00213669525900",
        description: "instant reply",
    },
    {
        icon: Linkedin,
        title: "linkedin",
        value: "Hichem Merniz",
        href: "https://www.linkedin.com/in/hichem-merniz-26809b154/",
        description: "professional profile",
    }
]

const ContactRow = ({ method }: { method: typeof contactMethods[0] }) => {
    const Icon = method.icon
    return (
        <motion.a
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="group flex items-start gap-3 rounded-lg border border-brand-primary/20 bg-black/40 p-4 transition-all duration-300 hover:border-brand-primary/60 hover:shadow-[0_0_15px_rgba(0,255,102,0.15)]"
        >
            <div className="p-2.5 rounded border border-brand-primary/30 bg-brand-primary/5 text-brand-secondary group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="text-brand-primary">$</span> {method.title}
                </div>
                <p className="text-foreground group-hover:text-brand-primary transition-colors">{method.value}</p>
                <p className="text-xs text-muted-foreground">{method.description}</p>
            </div>
        </motion.a>
    )
}

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', subject: '', message: ''
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const validate = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.firstName.trim()) newErrors.firstName = 'first name is required'
        if (!formData.lastName.trim()) newErrors.lastName = 'last name is required'
        if (!formData.email.trim()) newErrors.email = 'email is required'
        else if (!validateEmail(formData.email)) newErrors.email = 'enter a valid email'
        if (!formData.subject.trim()) newErrors.subject = 'subject is required'
        if (!formData.message.trim()) newErrors.message = 'message is required'
        else if (formData.message.trim().length < 10) newErrors.message = 'message must be at least 10 characters'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
            setErrors({}); setTouched({})
        }, 3000)
    }

    const handleFieldChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (touched[field]) setErrors(prev => ({ ...prev, [field]: '' }))
    }
    const handleFieldBlur = (field: string) => setTouched(prev => ({ ...prev, [field]: true }))

    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-muted/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,102,0.06),transparent_50%)]" />

            <div className="relative z-10 container mx-auto px-4">
                <ScrollAnimation animation="slideUp" delay={0.2}>
                    <div className="text-center mb-12">
                        <Heading level={2} className="text-3xl md:text-4xl lg:text-5xl mb-4">
                            <GlitchText text="./contact --me" className="gradient-text" trigger="hover" />
                        </Heading>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Ready to turn ideas into reliable systems? Send a message or reach me directly on any channel.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Channels */}
                    <ScrollAnimation animation="slideLeft" delay={0.4}>
                        <TerminalWindow title="user@hichem:~$ ./list-channels" className="h-full">
                            <div className="space-y-3">
                                <StaggeredAnimation stagger={0.1}>
                                    {contactMethods.map((method) => (
                                        <ContactRow key={method.title} method={method} />
                                    ))}
                                </StaggeredAnimation>

                                <motion.div
                                    className="rounded-lg border border-brand-primary/20 bg-black/40 p-4"
                                    whileHover={{ y: -2 }}
                                >
                                    <div className="flex items-center gap-2 mb-2 text-brand-secondary">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm">$ status --availability</span>
                                    </div>
                                    <div className="space-y-1 text-xs text-muted-foreground">
                                        <p><span className="text-brand-primary">›</span> response within 24h</p>
                                        <p><span className="text-brand-primary">›</span> open to freelance engagements</p>
                                        <p><span className="text-brand-primary">›</span> open to full-time roles</p>
                                        <p><span className="text-brand-primary">›</span> remote collaboration welcome</p>
                                    </div>
                                </motion.div>
                            </div>
                        </TerminalWindow>
                    </ScrollAnimation>

                    {/* Form */}
                    <ScrollAnimation animation="slideRight" delay={0.6}>
                        <TerminalWindow title="user@hichem:~$ ./send-message" className="h-full">
                            {isSubmitted ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}>
                                        <CheckCircle className="h-14 w-14 text-brand-primary mx-auto mb-4 drop-shadow-[0_0_15px_rgba(0,255,102,0.5)]" />
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-foreground mb-1">message transmitted ✔</h4>
                                    <p className="text-muted-foreground text-sm">I&apos;ll get back to you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                    <p className="text-xs text-muted-foreground mb-1"><span className="text-brand-primary">$</span> fill fields and press enter to transmit</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FormInput label="first_name" placeholder="Jane" required value={formData.firstName}
                                            onChange={(v) => handleFieldChange('firstName', v)} onBlur={() => handleFieldBlur('firstName')}
                                            error={touched.firstName ? errors.firstName : undefined}
                                            success={touched.firstName && !errors.firstName && formData.firstName.length > 0} />
                                        <FormInput label="last_name" placeholder="Doe" required value={formData.lastName}
                                            onChange={(v) => handleFieldChange('lastName', v)} onBlur={() => handleFieldBlur('lastName')}
                                            error={touched.lastName ? errors.lastName : undefined}
                                            success={touched.lastName && !errors.lastName && formData.lastName.length > 0} />
                                    </div>
                                    <FormInput label="email" type="email" placeholder="jane@email.com" required value={formData.email}
                                        onChange={(v) => handleFieldChange('email', v)} onBlur={() => handleFieldBlur('email')}
                                        error={touched.email ? errors.email : undefined}
                                        success={touched.email && !errors.email && formData.email.length > 0} />
                                    <FormInput label="subject" placeholder="what is this about?" required value={formData.subject}
                                        onChange={(v) => handleFieldChange('subject', v)} onBlur={() => handleFieldBlur('subject')}
                                        error={touched.subject ? errors.subject : undefined}
                                        success={touched.subject && !errors.subject && formData.subject.length > 0} />
                                    <FormInput label="message" type="textarea" placeholder="describe your project or request..." required value={formData.message}
                                        onChange={(v) => handleFieldChange('message', v)} onBlur={() => handleFieldBlur('message')}
                                        error={touched.message ? errors.message : undefined}
                                        success={touched.message && !errors.message && formData.message.length > 0} />

                                    <Button type="submit" size="lg" variant="terminal" disabled={isSubmitting}
                                        className="w-full disabled:opacity-50 disabled:cursor-not-allowed">
                                        {isSubmitting ? (
                                            <>
                                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full mr-2" />
                                                transmitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" /> ./send --message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </TerminalWindow>
                    </ScrollAnimation>
                </div>

                {/* Footer CTA */}
                <ScrollAnimation animation="slideUp" delay={0.8}>
                    <div className="text-center mt-14">
                        <p className="text-muted-foreground mb-4">Prefer to talk directly?</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button variant="glass" size="lg" className="group" onClick={() => window.open("https://wa.me/00213669525900", "_blank")}>
                                <MessageCircle className="mr-2 h-4 w-4" /> whatsapp
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="glass" size="lg" className="group" onClick={() => window.open("https://www.linkedin.com/in/hichem-merniz-26809b154/", "_blank")}>
                                <Linkedin className="mr-2 h-4 w-4" /> linkedin
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
