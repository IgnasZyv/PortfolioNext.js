"use client"
import Image from "next/image";
import {animate, AnimatePresence, motion} from "framer-motion";
import {MouseEventHandler, useEffect, useRef, useState} from "react";


interface GridItemProps {
    id: number,
    backgroundSrc: string,
    title: string,
    shortDescription: string,
    onOpenOverlay: any,
}

const variantValues = {
    initialScale: { scale: 0.9 },
    animatedScale: { scale: 1 },
    transitionDuration: { duration: 0.3 },
    initialOpacity: { opacity: 0.4 },
    animatedOpacity: { opacity: 1 },
}

export default function GridItem({ id, backgroundSrc, title, shortDescription, onOpenOverlay}: GridItemProps) {
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
            setIsHovered(!isHovered)
            console.log("clicked!" + isClicked);
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
                // initial={ variantValues.initialScale }
                whileHover={ variantValues.initialScale }
                animate={ !isClicked ? variantValues.initialScale : variantValues.animatedScale }
                transition={ variantValues.transitionDuration }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="rounded-2xl"
                onClick={handleMobileClick}

            >
                <div className="relative aspect-square rounded-3xl">
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                        <Image
                            src={backgroundSrc} alt="test"
                            fill={true}
                            quality={100}
                            className={"rounded-3xl opacity-90 object-cover "}
                            sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                        />
                    </div>
                    <div
                        className="absolute inset-0 flex flex-col justify-center
                         text-white text-center bg-neutral-800 bg-opacity-30 rounded-3xl
                         shadow-xl shadow-neutral-800
                         "
                    >
                        <motion.div
                            initial={ variantValues.initialOpacity }
                            whileHover={ variantValues.animatedOpacity }
                            animate={ !isClicked ? variantValues.initialOpacity : variantValues.animatedOpacity }
                            transition={ variantValues.transitionDuration }
                            onClick={(event: any) => {
                                event.stopPropagation()
                                handleMobileClick()
                            }}
                        >
                            {!isHovered ? (
                                <DefaultItem title={title} />
                            ) : (
                                <HoveredItem
                                    id={id}
                                    src={backgroundSrc}
                                    title={title}
                                    shortDescription={shortDescription}
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

function HoveredItem({ id, src, title, shortDescription, onClick }: { id: number, src: string, title: string, shortDescription: string, onClick: any }) {
    return (
        <>
            <div className="absolute inset-0  flex justify-around bg-neutral-700 bg-opacity-90 p-5 rounded-3xl border-2 border-pink-600">
                <div className={"flex-col justify-center items-center my-auto"}>
                    <h2 className={"text-center mx-auto md:m-5 text-sm sm:text-md lg:text-xl font-bold"}>{title}</h2>
                    <p className={"text-center mx-auto"}>{shortDescription}</p>
                    <button className={"bg-pink-700 p-2 rounded-full mt-10 text-white text-xs sm:text-md lg:text-xl"}
                            onClick={() => onClick(id)}
                    >
                        Click for more information!
                    </button>
                </div>

            </div>
        </>
    )
}

function DefaultItem({ title }: { title: string, }) {
    return (
        <>
            <h1 className="text-sm sm:text-2xl m-5 p-2 bg-neutral-800 bg-opacity-90 w-fit rounded mx-auto">{title}</h1>
        </>
    )
}