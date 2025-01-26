// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import { AnimatedBeam } from "@/components/ui/animated-beam";
// import hichemmerniz from "@/assets/hichem-merniz.png";
// import {
//
//     Github
// } from "lucide-react";
//
// const skillIcons = [
//     { icon: Github, name: "Docker" },
//     { icon: Github, name: "Jenkins" },
//     { icon: Github, name: "Node.js" },
//     { icon: Github, name: "MongoDB" },
//     { icon: Github, name: "MySQL" },
//     { icon: Github, name: "Next.js" },
//     { icon: Github, name: "Ansible" },
//     { icon: Github, name: "Git" }
// ];
//
// export function SkillsBeam() {
//     return (
//         <div className="container mx-auto px-4 py-16">
//             <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//                     Mes <span className="text-primary">Outils</span> Techniques
//                 </h2>
//                 <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-neutral-400">
//                     Un écosystème complet d'outils de développement et d'infrastructure, conçu pour créer des solutions robustes, évolutives et hautement performantes.
//                 </p>
//             </div>
//
//             <div className="relative mx-auto max-w-4xl">
//                 <div className="absolute inset-0 -z-10 bg-grid-slate-100 dark:bg-grid-slate-800"></div>
//
//                 <div className="relative flex items-center justify-center p-4">
//                     <div className="relative z-10 flex h-96 w-96 items-center justify-center">
//                         <div className="absolute h-60 w-60 rounded-full bg-white/10 blur-2xl dark:bg-black/10"></div>
//
//                         <div className="aspect-square overflow-hidden rounded-full border-4 border-white/50 shadow-2xl">
//                             <Image
//                                 src={hichemmerniz}
//                                 alt="Profile"
//                                 width={800}
//                                 height={800}
//                                 className="h-full w-full object-cover"
//                                 priority
//                             />
//                         </div>
//
//                         {skillIcons.map((skill, index) => (
//                             <AnimatedBeam
//                                 key={skill.name}
//                                 size={100}
//                                 duration={Math.random() * 7 + 3}
//                                 delay={index * 0.5}
//                                 className={cn(
//                                     "absolute z-[-1] opacity-50 dark:opacity-30",
//                                     index % 2 === 0 ? "rotate-45" : "-rotate-45"
//                                 )}
//                             >
//                                 <div className="flex items-center justify-center">
//                                     <skill.icon
//                                         className="text-2xl text-black/60 dark:text-white/60"
//                                     />
//                                 </div>
//                             </AnimatedBeam>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }