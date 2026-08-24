"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { AlertCircle, CheckCircle2 } from "lucide-react"

interface FormInputProps {
    label: string
    type?: string
    placeholder: string
    required?: boolean
    value: string
    onChange: (value: string) => void
    onBlur?: () => void
    error?: string
    success?: boolean
}

export function FormInput({
    label,
    type = "text",
    placeholder,
    required = false,
    value,
    onChange,
    onBlur,
    error,
    success,
}: FormInputProps) {
    const [isFocused, setIsFocused] = useState(false)
    const isTextarea = type === "textarea"
    const hasError = !!error
    const showSuccess = success && value.length > 0

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                {isTextarea ? (
                    <textarea
                        rows={5}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => {
                            setIsFocused(false)
                            onBlur?.()
                        }}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                            hasError
                                ? 'border-red-500/50 focus:ring-red-500/50'
                                : showSuccess
                                ? 'border-green-500/50 focus:ring-green-500/50'
                                : 'border-white/10 focus:ring-brand-primary/50'
                        }`}
                        placeholder={placeholder}
                        required={required}
                    />
                ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => {
                            setIsFocused(false)
                            onBlur?.()
                        }}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all duration-300 ${
                            hasError
                                ? 'border-red-500/50 focus:ring-red-500/50'
                                : showSuccess
                                ? 'border-green-500/50 focus:ring-green-500/50'
                                : 'border-white/10 focus:ring-brand-primary/50'
                        }`}
                        placeholder={placeholder}
                        required={required}
                    />
                )}

                {/* Bottom accent line */}
                <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 ${
                        hasError
                            ? 'bg-red-500'
                            : showSuccess
                            ? 'bg-green-500'
                            : 'bg-gradient-to-r from-brand-primary to-brand-secondary'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: isFocused || hasError || showSuccess ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Success indicator */}
                {showSuccess && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute right-3 top-3"
                    >
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </motion.div>
                )}

                {/* Error indicator */}
                {hasError && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute right-3 top-3"
                    >
                        <AlertCircle className="w-5 h-5 text-red-500" />
                    </motion.div>
                )}
            </div>

            {/* Error message */}
            {hasError && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 flex items-center gap-1"
                >
                    <AlertCircle className="w-3 h-3" />
                    {error}
                </motion.p>
            )}
        </div>
    )
}
