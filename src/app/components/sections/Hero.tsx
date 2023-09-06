"use client"
import Image from "next/image";
import BreathingArrow from "@/app/components/BreathingArrow";
import { motion } from "framer-motion"
import FloatingComponent from "@/app/components/FloatingComponent";
import CardSection from "@/app/components/CardSection";

export default function Hero() {
    return (
        <CardSection direction={"left"}>
            <div
                className={"relative flex-col items-center justify-center mx-auto"}
                style={{
                }}
            >
                <div className={"text-center text-2xl text-white my-10"}>Welcome to my Portfolio!</div>
                <div className={""}>
                    <HeroText />
                </div>


                <FloatingComponent>
                    <div
                        className={"w-3/12 aspect-auto  invisible xl:visible absolute left-0 "}
                        style={{
                            bottom: "-140px",
                        }}
                    >
                        <Image
                            src={"/hero-image.svg"}
                            alt={"programmer illustration"}
                            width={400}
                            height={400}
                            className={"w-auto h-auto"}
                            style={{ zIndex: -3 }}
                        />
                    </div>
                </FloatingComponent>


                <div className={"mt-10"} >
                    <BreathingArrow />
                </div>
            </div>
        </CardSection>
    )
}

function HeroText() {
    return (
        <div className={"flex-col items-center justify-center mx-auto text-center"}>

            <div className={"w-2/4 aspect-auto relative mx-auto"}>
                <Image className={"mx-auto border-2 border-teal-400 rounded-full  "}
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