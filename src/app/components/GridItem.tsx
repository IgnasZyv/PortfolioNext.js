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
    images: Array<string>,
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
                <div className="relative aspect-video rounded-3xl">
                    <div className="absolute inset-0">
                        <Image src={backgroundSrc} alt="test" fill objectFit="cover" className={"rounded-3xl"} />
                    </div>
                    <div
                        className="absolute inset-0 flex flex-col justify-start
                         text-white text-center bg-black bg-opacity-60 rounded-3xl
                         
                         "
                    >
                        {!isHovered ? (
                            <motion.div
                                key="default"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <DefaultItem title={title}/>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="hovered"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
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
            <div className="absolute inset-0 flex justify-around bg-neutral-700 bg-opacity-90 p-4 rounded-3xl border border-teal-400">
                <Image src={src} alt={"name"} height={100} width={120} quality={100} />
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
            <h1 className="text-sm sm:text-xl m-5">{title}</h1>
        </>
    )
}