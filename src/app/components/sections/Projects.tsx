"use client"
import CardSection from "@/app/components/CardSection";
import SectionHeaderTitle from "@/app/components/SectionHeaderTitle";
import Image from "next/image";
import GridItem from "@/app/components/GridItem";
import ProjectData, {FindProjectById} from "@/app/models/ProjectData";
import {Variants, motion} from "framer-motion";
import {useState} from "react";
import ProjectOverlay from "@/app/components/ProjectOverlay";
import {id} from "postcss-selector-parser";
import {set} from "zod";



export default function Projects() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [id, setId] = useState(0);

    const parentVariant: Variants = {
        initial: { opacity: 0, y: -50 },
        whileInView: { opacity: 1, transition: { staggerChildren: 0.5 } },
    }

    const item = {
        initial: { opacity: 0, y: -50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }


    const handleCardClick = (projectId: number) => {
        console.log(projectId)
        setId(projectId);
        setIsOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        setIsOverlayOpen(false);
        setId(0);
    };

    return(
        <div
            className={"w-full"}
            style={{
                backgroundImage: "url('/project-waves.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <CardSection direction={"left"}>
                <div>
                    <SectionHeaderTitle title={"My Projects"} />

                    <motion.div variants={parentVariant}
                                initial={"initial"}
                                whileInView={"whileInView"}
                                className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-16"}
                    >
                        {ProjectData.map((project) => (
                            <motion.div variants={item} key={project.id}>
                                <GridItem {...project} onOpenOverlay={handleCardClick}/>
                            </motion.div>
                        ))}


                    </motion.div>

                    {isOverlayOpen && (
                        <ProjectOverlay project={FindProjectById(id)} onClose={handleCloseOverlay} />
                    )}
                    <div className={"my-10"}>test</div>
                    <div className={"my-10"}>test</div>
                    <div className={"my-10"}>test</div>
                    <div className={"my-10"}>test</div>
                    <div className={"my-10"}>test</div>
                    <div className={"my-10"}>test</div>
                    <div className={"my-10"}>test</div>
                    <div className={"my-10"}>test</div>
                    <div className={"my-10"}>test</div>
                    <div className={"my-10"}>test</div>
                </div>


            </CardSection>
        </div>

    )
}