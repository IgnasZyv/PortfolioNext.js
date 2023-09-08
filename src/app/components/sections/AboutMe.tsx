"use client"
import CardSection from "@/app/components/CardSection";
import SkillCard from "@/app/components/SkillCard";
import {motion, Variants} from "framer-motion";
import SectionHeaderTitle from "@/app/components/SectionHeaderTitle";

export default function AboutMe() {
    const skillCardData = [
        {
            id: 1,
            src: "/html-icon.svg",
            title: "Web Development",
            description: "Continuously learning and evolving in the realm of web development, " +
                "I specialize in creating interactive and user-friendly digital experiences.",
            tech: ["HTML", "CSS", "JavaScript", "PHP", "React", "Next.js", "django", "TailWind", "Bootstrap"]
        },
        {
            id: 2,
            src: "/mobile-dev-icon.svg",
            title: "Mobile Application Development",
            description: "Passionate about mobile app development, I am on a journey of constant learning, " +
                "striving to create engaging and user-centric applications.",
            tech: ["Android SDK", "Android Studio", "Unity", "C#", "Kotlin", "Java", "XML", "Jetpack Compose"]
        },
        {
            id: 3,
            src: "/unity-icon.svg",
            title: "Game Development",
            description: "Drawing from hands-on experience in game development with the Unity game engine, " +
                "I am continuously inspired by the art of crafting immersive and entertaining digital worlds.",
            tech: ["Unity", "Unity3D", "C#", "JavaScript"]
        }
    ]

    const parentVariant: Variants = {
        initial: { opacity: 0, y: -50 },
        whileInView: { opacity: 1, transition: { staggerChildren: 0.5 } },
    }

    const item = {
        initial: { opacity: 0, y: -50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

    return(
        <CardSection direction={"right"}>
            <SectionHeaderTitle title={"About Me"} />
            {/*<h1 className={"text-2xl text-pink-700 font-bold p-4 w-fit mx-auto bg-black rounded-full my-4"}>About Me</h1>*/}

            <article className={"mx-auto text-center text-white w-1/2"}>
                <h2 className={"text-xl p-3 font-bold"}>Hey, I am Ignas. Pleasure to see you here!</h2>

                <p>With a first-class Software Engineering degree from the University of Bradford,
                    I have ventured into the dynamic world of development.
                    My journey includes mobile game creation using C# and .NET with Unity, Android app development using Java and Kotlin,
                    and web development experiences.
                </p>
                <p className={"p-5 mb-20"}>I am driven by the thrill of mastering new technologies and crafting innovative solutions.
                    Join me on this exciting coding expedition!
                </p>
            </article>

            <motion.div variants={parentVariant}
                        initial={"initial"}
                        whileInView={"whileInView"}
                        className={"flex flex-col md:flex-row justify-center items-center space-x-20 text-white"}>
                {/* use the skill card data to create the skill cards */}
                {skillCardData.map((card) => (
                    <motion.div variants={item} key={card.id}>
                        <SkillCard {...card} />
                    </motion.div>
                ))}
            </motion.div>
        </CardSection>
    )
}