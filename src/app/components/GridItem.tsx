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

export default function GridItem({}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const delayHover = (func: any) => {
        let timeout;
        // return function (args) {
        //
        // }
    }

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
                onClick={handleCardClick}
                className="rounded-2xl"
            >
                <div className="relative aspect-video rounded-2xl">
                    <div className="absolute inset-0">
                        <Image src="/html-icon.svg" alt="test" fill objectFit="cover" />
                    </div>
                    <div
                        className="absolute inset-0 flex flex-col justify-center
                         text-white text-center bg-black bg-opacity-40 rounded-2xl
                         hover:cursor-pointer
                         "
                    >
                        <AnimatePresence mode={"wait"}>
                            {!isHovered ? (
                                <motion.div
                                    key="default"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <DefaultItem />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="hovered"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <HoveredItem />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
            {isOverlayOpen && <ProjectOverlay onClose={handleCloseOverlay} />}
        </div>
    )
}

function HoveredItem() {
    return (
        <>
            <div className="">
                Hovered
            </div>
        </>
    )
}

function DefaultItem() {
    return (
        <>
            <p className="text-sm sm:text-md">Not</p>
        </>
    )
}