"use client";
import {ReactNode} from "react";
import {motion} from "framer-motion";
import FloatingComponent from "@/app/components/FloatingComponent";
import Image from "next/image";
import {list} from "postcss";
import {List} from "postcss/lib/list";

interface SkillCardProps {
    src: string,
    title: string,
    description: string,
    tech: Array<String>,
}

export default function SkillCard({ src, title, description, tech }: SkillCardProps) {
    const variants = {
        hidden: { opacity: 0, y: -150 },
        visible: { opacity: 1, y: 0 }
    }

    return(
        <section className={"rounded-3xl bg-neutral-700 bg-opacity-90 border border-teal-400 shadow-md mx-auto p-10"}
             style={{
                 height: '80vh',
                 width: '20vw',
             }}
        >
            <FloatingComponent>
                <Image src={src} alt={`${title} icon`} width={80} height={80} className={"mx-auto mb-5"}></Image>
            </FloatingComponent>
            <h2 className={"mx-auto text-sm sm:text-xl text-center my-5"}>{title}</h2>
            <p className={"text-center text-sm sm:text-md"}>{description}</p>
            <h3 className={"text-pink-700 text-sm sm:text-lg font-bold text-center my-5"}>{title} Technologies</h3>
            <ul className={"text-center"}>
                {tech.map((item) => (
                    <li key={tech.indexOf(item)} className={"my-5"}>{item}</li>
                ))}
            </ul>
        </section>
    )
}