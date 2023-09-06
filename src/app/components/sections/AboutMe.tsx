"use client"
import CardSection from "@/app/components/CardSection";
import SkillCard from "@/app/components/SkillCard";
import Image from "next/image";
import {motion} from "framer-motion";
import FloatingComponent from "@/app/components/FloatingComponent";

export default function AboutMe() {
    return(
        <CardSection direction={"right"}>
            <div className={"text-2xl text-teal-400 font-bold p-6 w-fit mx-auto bg-black rounded-full my-4"}>About Me</div>

            <div className={"mx-auto text-center text-white w-1/2"}>
                <div className={"text-xl p-3 font-bold"}>Hey, I am Ignas. Pleasure to see you here!</div>

                <div>With a first-class Software Engineering degree from the University of Bradford,
                    I have ventured into the dynamic world of development.
                    My journey includes mobile game creation using C# and .NET with Unity, Android app development using Java and Kotlin,
                    and web development experiences.
                </div>
                <div className={"p-5 mb-10"}>I am driven by the thrill of mastering new technologies and crafting innovative solutions.
                    Join me on this exciting coding expedition!
                </div>
            </div>

            <div className={"flex flex-col md:flex-row justify-center items-center space-x-20 text-white"}>
                <SkillCard>
                    <FloatingComponent>
                        <Image src={"/html-icon.svg"} alt={"html icon"} width={80} height={80} className={"mx-auto mb-5"} />
                        <div className={"mx-auto text-sm sm:text-xl text-center my-5"}>
                            Web Development
                        </div>
                    </FloatingComponent>



                    <div className={"text-center text-sm sm:text-md"}>
                        Continuously learning and evolving in the realm of web development,
                        I specialize in creating interactive and user-friendly digital experiences.
                    </div>

                    <div className={"text-teal-400 text-md sm:text-xl text-center my-10"}>
                        Web Development technologies
                    </div>

                    <ul className={"text-center"}>
                        <li className={"my-3"}>HTML</li>
                        <li className={"my-3"}>CSS</li>
                        <li className={"my-3"}>JavaScript</li>
                        <li className={"my-3"}>PHP</li>
                        <li className={"my-3"}>React</li>
                        <li className={"my-3"}>Next.js</li>
                        <li className={"my-3"}>django</li>
                        <li className={"my-3"}>TailWind</li>
                        <li className={"my-3"}>Bootstrap</li>
                    </ul>

                </SkillCard>
                <SkillCard>
                    <FloatingComponent>
                        <Image src={"/mobile-dev-icon.svg"} alt={"mobile icon"} width={80} height={80} className={"mx-auto mb-5"}/>
                        <div className={"mx-auto text-sm sm:text-xl text-center my-5"}>
                            Mobile Application Development
                        </div>
                    </FloatingComponent>



                    <div className={"text-center text-sm sm:text-md"}>
                        Passionate about mobile app development, I am on a journey of constant learning,
                        striving to create engaging and user-centric applications.
                    </div>

                    <div className={"text-teal-400 text-md sm:text-xl text-center my-10"}>
                        Mobile Development technologies
                    </div>

                    <ul className={"text-center"}>
                        <li className={"my-3"}>Android SDK</li>
                        <li className={"my-3"}>Android Studio</li>
                        <li className={"my-3"}>Unity</li>
                        <li className={"my-3"}>C#</li>
                        <li className={"my-3"}>Kotlin</li>
                        <li className={"my-3"}>Java</li>
                        <li className={"my-3"}>XML</li>
                        <li className={"my-3"}>Jetpack Compose</li>
                    </ul>


                </SkillCard>
                <SkillCard>
                    <FloatingComponent>
                        <Image src={"/unity-icon.svg"} alt={"unity icon"} width={80} height={80} className={"mx-auto mb-5"} />
                        <div className={"mx-auto text-sm sm:text-xl text-center"}>
                            Game Development
                        </div>
                    </FloatingComponent>



                </SkillCard>
            </div>
        </CardSection>
    )
}