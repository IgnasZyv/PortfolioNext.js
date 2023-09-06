"use client"
import {ReactNode} from "react";
import {motion} from "framer-motion";

interface CardSectionProps { children: ReactNode }


export default function CardSection({ children }: CardSectionProps) {

    return (
        <section
            className={
                "rounded-3xl bg-neutral-700 bg-opacity-90 border border-pink-700 shadow-md shadow-pink-700 mx-auto p-10"
            }
            style={{
                height: "fit-content",
                width: "80%",
            }}
        >
            {children}
        </section>
    );
}