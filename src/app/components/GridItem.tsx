"use client"
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import ProjectOverlay from "@/app/components/ProjectOverlay";
import {func} from "prop-types";

interface GridItemProps {
    backgroundSrc: string,
    title: string,
    description: string,

}

export default function GridItem({ backgroundSrc, title, description, }: GridItemProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCardClick = () => {
        setIsOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        setIsOverlayOpen(false);
    };

    return (
        <div>
            <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                // onClick={handleCardClick}
                className="rounded-2xl"
            >
                <div className="relative aspect-square rounded-3xl">
                    <div className="absolute inset-0 rounded-3xl">
                        <Image src={backgroundSrc} alt="test" fill objectFit={"contain"}  quality={100} className={"rounded-3xl opacity-90 "} />
                    </div>
                    <div
                        className="absolute inset-0 flex flex-col justify-center
                         text-white text-center bg-neutral-800 bg-opacity-30 rounded-3xl
                         shadow-xl shadow-neutral-800
                         "
                    >
                            {!isHovered ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <DefaultItem title={title}/>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <HoveredItem src={backgroundSrc} title={title} description={description} onClick={handleCardClick}/>
                                </motion.div>
                            )}

                    </div>
                </div>
            </motion.div>
            {isOverlayOpen && <ProjectOverlay onClose={handleCloseOverlay} />}
        </div>
    )
}

function HoveredItem({ src, title, description, onClick }: { src: string, title: string, description: string, onClick: any }) {
    return (
        <>
            <div className="absolute inset-0  flex justify-around bg-neutral-700 bg-opacity-90 p-5 rounded-3xl border-2 border-pink-600">
                <div className={"flex-col justify-center items-center my-auto"}>
                    <h2 className={"text-center mx-auto m-5"}>{title}</h2>
                    <p className={"text-center mx-auto"}>{description}</p>
                    <button className={"bg-pink-700 p-2 rounded-full mt-10"} onClick={onClick}>Click for more information!</button>
                </div>


            </div>
        </>
    )
}

function DefaultItem({ title }: { title: string}) {
    return (
        <>
            <h1 className="text-sm sm:text-xl m-5 p-2 bg-neutral-800 bg-opacity-90 w-fit rounded mx-auto">{title}</h1>
        </>
    )
}