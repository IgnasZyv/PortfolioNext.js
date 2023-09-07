"use client";
import {ReactNode} from "react";
import {motion} from "framer-motion";
import FloatingComponent from "@/app/components/FloatingComponent";

interface SkillCardProps { children: ReactNode }

export default function SkillCard({ children }: SkillCardProps) {
    const variants = {
        hidden: { opacity: 0, y: -150 },
        visible: { opacity: 1, y: 0 }
    }

    return(
            <section className={"rounded-3xl bg-neutral-700 bg-opacity-90 border border-pink-700 shadow-md shadow-pink-700 mx-auto p-10"}
                 style={{
                     height: '45rem',
                     width: '20rem',
                 }}
            >
                {children}
            </section>


    )
}