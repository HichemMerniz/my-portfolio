"use client"

import {useState} from 'react'
import {Button} from '../ui/button'
import {SocialLinks} from '../molecules/SocialLinks'
import {Input} from "@/components/ui/input"
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip"
import {ClipboardCopy, FileText, Github, Linkedin,} from 'lucide-react'
import {motion} from 'framer-motion'

const socialLinks = [
    {label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile', icon: Linkedin},
    {label: 'Dribbble', href: 'https://dribbble.com/your-profile', icon: Github},
]

export function Header() {
    const [copied, setCopied] = useState<boolean>(false)

    const copyEmail = () => {
        navigator.clipboard.writeText("hichemmerniz3@gmail.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <header
            className="flex flex-col sm:flex-row items-center justify-between py-8 px-6 md:px-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
        >
            <div className="flex w-full sm:w-auto flex-wrap items-center gap-4 mb-6 sm:mb-0">
                <motion.div
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className="relative w-full"
                >
                    <Input
                        value="hichemmerniz3@gmail.com"
                        readOnly
                        className="w-auto px-4 py-2 pl-12 bg-white border border-gray-300 rounded-lg text-sm shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <ClipboardCopy size={18}/>
                    </div>
                </motion.div>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <motion.button
                            initial={false}
                            animate={copied ? "visible" : "hidden"}
                            variants={{
                                visible: {scale: 1.1},
                                hidden: {scale: 1},
                            }}
                            transition={{duration: 0.2}}
                            // variant="outline"
                            // size="sm"
                            onClick={copyEmail}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-blue-500 text-blue-500 hover:bg-blue-100 focus:ring focus:ring-blue-400 focus:outline-none transition-all"
                        >
                            <ClipboardCopy size={16}/>
                            Copy
                        </motion.button>
                    </TooltipTrigger>
                    <TooltipContent className="animate-fade-in transition-opacity duration-300">
                        {copied ? "Copied!" : "Copy email"}
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-purple-500 text-purple-500 hover:bg-purple-100 focus:ring focus:ring-purple-400 focus:outline-none transition-all"
                        >
                            <FileText size={16}/>
                            CV
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent className="animate-fade-in transition-opacity duration-300">
                        Download CV
                    </TooltipContent>
                </Tooltip>
            </div>

            <motion.div
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5, ease: 'easeInOut'}}
                className="flex items-center gap-4"
            >
                <SocialLinks
                    links={socialLinks}
                />
            </motion.div>
        </header>
    )
}