"use client";

import AnimatedSection from "./AnimatedSection";

const row1 = ["Node.js", ".NET Core", "PHP", "Python", "Java", "Ruby on Rails", "Go"];
const row2 = ["React", "Angular", "Vue.js", "iOS", "Android", "Unity"];
const row3 = ["MongoDB", "Redis", "Firebase", "AWS", "Azure", "DevOps"];

function MarqueeRow({
    items,
    direction = "left",
    speed = 30,
}: {
    items: string[];
    direction?: "left" | "right";
    speed?: number;
}) {
    const doubled = [...items, ...items];
    const animationClass =
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

    return (
        <div className="relative flex overflow-hidden py-2 group">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            <div
                className={`flex gap-4 ${animationClass}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {doubled.map((tech, i) => (
                    <span
                        key={`${tech}-${i}`}
                        className="flex-shrink-0 inline-flex items-center px-5 py-2.5 rounded-full bg-brand-offwhite border border-slate-200 text-sm font-medium text-slate-700 shadow-sm hover:border-brand-navy/30 hover:text-brand-navy transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div
                className={`flex gap-4 ${animationClass}`}
                style={{ animationDuration: `${speed}s` }}
                aria-hidden
            >
                {doubled.map((tech, i) => (
                    <span
                        key={`${tech}-dup-${i}`}
                        className="flex-shrink-0 inline-flex items-center px-5 py-2.5 rounded-full bg-brand-offwhite border border-slate-200 text-sm font-medium text-slate-700 shadow-sm hover:border-brand-navy/30 hover:text-brand-navy transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function TechMarquee() {
    return (
        <section id="resources" className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <AnimatedSection className="text-center mb-14">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase mb-4">
                        Technologies
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
                        Our Tech Stack
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We work with industry-leading technologies to deliver cutting-edge
                        solutions for our clients.
                    </p>
                </AnimatedSection>
            </div>

            <div className="space-y-4">
                <MarqueeRow items={row1} direction="left" speed={35} />
                <MarqueeRow items={row2} direction="right" speed={30} />
                <MarqueeRow items={row3} direction="left" speed={40} />
            </div>
        </section>
    );
}
