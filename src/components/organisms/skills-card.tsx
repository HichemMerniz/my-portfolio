import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Heading } from "@/components/ui/heading";
import { LucideCode, LucideCloud, LucideBrainCircuit } from "lucide-react";

const skillReviews = [
    {
        name: "Azure DevOps",
        username: "@devops",
        body: "Maîtrise de la gestion de projet et des pipelines CI/CD pour rationaliser les flux de développement.",
        img: "https://avatar.vercel.sh/azure",
        icon: LucideCloud,
    },
    {
        name: "Docker",
        username: "@containerization",
        body: "Compétences en conteneurisation avec Docker pour un déploiement et une mise à l'échelle efficaces, y compris l'expérience avec Docker Swarm et MinIO.",
        img: "https://avatar.vercel.sh/docker",
        icon: LucideBrainCircuit,
    },
    {
        name: "Développement Agile",
        username: "@agile",
        body: "Expérience dans l'application de méthodologies agiles garantissant des projets itératifs et collaboratifs.",
        img: "https://avatar.vercel.sh/agile",
        icon: LucideCode,
    },
    {
        name: "Développement Logiciel",
        username: "@fullstack",
        body: "Expertise en développement de bout en bout, maîtrisant C#, TypeScript et JavaScript pour des solutions backend et frontend.",
        img: "https://avatar.vercel.sh/code",
        icon: LucideCode,
    },
    {
        name: "UX/UI Design",
        username: "@design",
        body: "Création d'interfaces intuitives et visuellement attrayantes qui améliorent significativement l'expérience utilisateur.",
        img: "https://avatar.vercel.sh/design",
        icon: LucideBrainCircuit,
    },
    {
        name: "DevOps & Infrastructure",
        username: "@infrastructure",
        body: "Gestion complète de l'infrastructure avec compétences en surveillance, optimisation et déploiement sur site et cloud.",
        img: "https://avatar.vercel.sh/devops",
        icon: LucideCloud,
    }
];

// const firstRow = skillReviews.slice(0, skillReviews.length / 2);
// const secondRow = skillReviews.slice(skillReviews.length / 2);

const SkillCard = ({
                       img,
                       name,
                       username,
                       body,
                       icon: Icon,
                   }: {
    img: string;
    name: string;
    username: string;
    body: string;
    icon: React.ComponentType;
}) => {
    return (
        <figure
            className={cn(
                "relative w-72 cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300",
                "border-gray-200 bg-white shadow-sm hover:shadow-md",
                "dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
        >
            <div className="absolute top-4 right-4">
                <Icon  />
            </div>
            <div className="flex flex-row items-center gap-3 mb-3">
                <img
                    className="rounded-full border-2 border-primary/20"
                    width="40"
                    height="40"
                    alt={name}
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-base font-semibold text-gray-800 dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs text-gray-500 dark:text-neutral-400">{username}</p>
                </div>
            </div>
            <blockquote className="text-sm text-gray-600 dark:text-neutral-300 leading-relaxed">
                {body}
            </blockquote>
        </figure>
    );
};

const SkillsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={cn(
                "container mx-auto px-4 py-16 relative",
                "before:absolute before:inset-0 before:-z-10",
                "before:bg-gradient-to-br before:from-gray-100 before:via-white before:to-gray-100",
                "before:dark:from-neutral-900 before:dark:via-neutral-950 before:dark:to-neutral-900",
                "before:rounded-3xl before:shadow-2xl before:shadow-gray-200/50",
                "before:dark:shadow-neutral-800/50",
                "border border-gray-200 dark:border-neutral-800 rounded-3xl overflow-hidden"
            )}
        >
            {children}
        </div>
    );
};

export function SkillsMarquee() {
    const firstRow = skillReviews.slice(0, skillReviews.length / 2);
    const secondRow = skillReviews.slice(skillReviews.length / 2);

    return (
        <SkillsContainer>
            <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <Heading
                    level={2}
                    className="text-4xl md:text-5xl text-gray-900 dark:text-white"
                    highlight="Compétences"
                >
                    Mes
                </Heading>
                <p className="max-w-xl text-base md:text-lg text-gray-600 dark:text-neutral-400 text-center md:text-left">
                    Ingénieur logiciel expérimenté, je développe des applications web et mobiles robustes en maîtrisant
                    JavaScript, Python, C#, JAVA, Azure DevOps, CI/CD (Jenkins, GitLab, Docker). Spécialisé en solutions
                    d&#39;entreprise sur mesure pour des environnements DevOps.
                </p>
            </div>
            <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-white/30 dark:bg-neutral-900/30 backdrop-blur-md">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((skill) => (
                        <SkillCard key={skill.username} {...skill} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((skill) => (
                        <SkillCard key={skill.username} {...skill} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/30 dark:from-neutral-900/30"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/30 dark:from-neutral-900/30"></div>
            </div>
        </SkillsContainer>
    );
}