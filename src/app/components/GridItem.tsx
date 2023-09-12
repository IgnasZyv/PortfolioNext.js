"use client"
import Image from "next/image";
import {animate, AnimatePresence, motion} from "framer-motion";
import {MouseEventHandler, useEffect, useRef, useState} from "react";


interface GridItemProps {
    id: number,
    backgroundSrc: string,
    title: string,
    description: string,
    onOpenOverlay: any,
}

export default function GridItem({ id, backgroundSrc, title, description, onOpenOverlay}: GridItemProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const componentRef = useRef<HTMLDivElement | null>(null); // Explicitly specify the type

    const isMobile = () => {
        return "ontouchstart" in window
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                if (isMobile()) {
                    setIsHovered(false);
                    setIsClicked(false)
                }
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, []);


    const handleMobileClick = () => {
        // Toggle the clicked state for this component
        if (isMobile()) {
            setIsClicked(!isClicked);
            console.log(isClicked);
        }

    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsHovered(!isHovered)
    }




    return (
        <div ref={componentRef}>
            <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
                animate={{ scale: !isClicked ? 0.9 : 1}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
                        {/*<motion.div*/}
                        {/*    initial={{ opacity: 0.4 }}*/}
                        {/*    whileHover={{ opacity: 1 }}*/}
                        {/*    whileTap={{ opacity: 1 }} // Adjust the scale for a subtle animation*/}
                        {/*>*/}
                        {/*    {!isHovered ? (*/}
                        {/*        <DefaultItem title={title} />*/}
                        {/*    ) : (*/}
                        {/*        <HoveredItem id={id} src={backgroundSrc} title={title} description={description} onClick={onOpenOverlay} />*/}
                        {/*    )}*/}
                        {/*</motion.div>*/}


                        <motion.div
                            initial={{ opacity: 0.4 }}
                            whileHover={{ opacity: 1 }}
                            animate={{ opacity: !isClicked ? 0.4 : 1 }}
                            transition={{ duration: 0.3 }}
                            onClick={handleMobileClick}
                        >
                            {!isHovered || !isClicked ? (
                                <DefaultItem title={title} />
                            ) : (
                                <HoveredItem
                                    id={id}
                                    src={backgroundSrc}
                                    title={title}
                                    description={description}
                                    onClick={onOpenOverlay}
                                />
                            )}
                        </motion.div>


                    </div>
                </div>
            </motion.div>
        </div>
    )
}

function HoveredItem({ id, src, title, description, onClick }: { id: number, src: string, title: string, description: string, onClick: any }) {
    return (
        <>
            <div className="absolute inset-0  flex justify-around bg-neutral-700 bg-opacity-90 p-5 rounded-3xl border-2 border-pink-600">
                <div className={"flex-col justify-center items-center my-auto"}>
                    <h2 className={"text-center mx-auto m-5"}>{title}</h2>
                    <p className={"text-center mx-auto"}>{description}</p>
                    <button className={"bg-pink-700 p-2 rounded-full mt-10"} onClick={() => onClick(id)}>Click for more information!</button>
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