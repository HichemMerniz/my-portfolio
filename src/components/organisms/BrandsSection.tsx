"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import Safari from "@/components/ui/safari";
import image from "@/assets/projects/test.png"
import type { StaticImageData } from 'next/image';


interface Brand {
    name: string;
    logoGris: string;
    logoColor: string;
    image: StaticImageData;

}

export function BrandsSection({ brands }: { brands: Brand[] }) {
    return (
        <section className="relative py-12 overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/20 via-transparent to-transparent" />

            {/* Content Container */}
            <div className="relative container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Partnering with forward-thinking companies to create exceptional digital experiences
                    </p>
                </motion.div>

                {/* Brands Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16 items-center max-w-7xl mx-auto">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={`${brand.name}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className="relative group"
                        >
                            <div
                                className="relative flex items-center justify-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/50"
                            >
                                {/* Logo Container */}
                                <div className="relative w-full h-12 flex items-center justify-center">
                                    {/* Gray Logo */}
                                    <Image
                                        src={brand.logoGris}
                                        alt={`${brand.name} logo grayscale`}
                                        width={120}
                                        height={40}
                                        className="absolute h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    {/* Color Logo */}
                                    <Image
                                        src={brand.logoColor}
                                        alt={`${brand.name} logo color`}
                                        width={120}
                                        height={40}
                                        className="absolute h-8 w-auto object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-gray-50/50 to-white/50" />
                            </div>

                            {/* Brand Name Tooltip */}
                            <div
                                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  {brand.name}
                </span>
                            </div>

                            {/* Safari Preview */}
                            <div className="relative">
                                <Safari url="https://e-faciliti.dz" imageSrc={brand.image} className="size-full"/>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-30" />

        </section>
    );
}
