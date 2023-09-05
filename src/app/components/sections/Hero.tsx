"use client"
import Image from "next/image";
import BreathingArrow from "@/app/components/BreathingArrow";

import { motion } from "framer-motion"
import WaveSvg from "@/app/components/WaveSvg";
import FloatingComponent from "@/app/components/FloatingComponent";

export default function Hero() {
    return (
        <motion.div initial={{ x: -3000 }} animate={{ x: 0 }}>
            <div
                className={"mb-20 relative flex space-x-20 items-center justify-center rounded-3xl bg-neutral-700 bg-opacity-90 border border-pink-700 shadow-md shadow-pink-700 mx-auto"}
                style={{
                    height: '60vh',
                    width: '80%',
                }}
            >
                <div className={"absolute top-0 mx-auto text-center text-2xl text-white pt-10"}>Welcome to my Portfolio!</div>
                <div className={""}>
                    <HeroText />
                </div>

                <div className={"mt-auto"}>
                    <BreathingArrow />
                </div>
                <div className={"-mb-52"}>
                    <FloatingComponent>
                        <Image
                            src={"/hero-image.svg"}
                            alt={"programmer illustration"}
                            width={400}
                            height={400}
                        />
                    </FloatingComponent>

                </div>
            </div>


        </motion.div>


    )
}

function HeroText() {
    return (
        <div className={"flex-col items-center justify-center mx-auto text-center"}>
            <div className={"w-2/4 aspect-auto relative mx-auto"}>
                <Image className={"mx-auto border-2 border-teal-400 rounded-full w-full h-full object-cover "}
                       src={"/avatar-transformed.jpeg"}
                       alt={"avatar"}
                       width={150}
                       height={150}

                />

            </div>

            <div className={"text-3xl text-pink-700 font-bold p-3"}>Ignas Žyvatkauskas</div>

            <div className={"text-center text-white"}>
                <div>
                    Software Engineer, Game, Web and Android Developer
                </div>
            </div>
        </div>




    )
}