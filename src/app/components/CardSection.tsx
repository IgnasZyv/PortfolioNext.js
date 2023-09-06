"use client"
import {ReactNode, useEffect, useState} from "react";
import {motion, useAnimation} from "framer-motion";

interface CardSectionProps {
    direction: string,
    children: ReactNode
}

export default function CardSection({ direction, children }: CardSectionProps) {
    const adjustedX = direction === "left" ? "-500" : "500"

    return (
        <motion.div initial={{ opacity: 0, x: adjustedX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
        >
            <section
                className={
                    "rounded-3xl bg-neutral-700 bg-opacity-90 border border-pink-700 shadow-md shadow-pink-700 mx-auto p-10"
                }
                style={{
                    width: "80%",
                }}
            >
                {children}
            </section>
        </motion.div>

    );
}