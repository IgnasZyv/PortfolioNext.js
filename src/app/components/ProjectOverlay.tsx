import {MouseEventHandler, useEffect, useState} from "react";
import {any} from "prop-types";
import Image from "next/image";
import styled from "styled-components";
import {motion} from "framer-motion";
import State from "sucrase/dist/types/parser/tokenizer/state";

interface ProjectOverlayProps {
    project: {
        id: number,
        title: string,
        description: string,
        backgroundSrc: string,
    } | null,
    onClose: () => void;
}


const ProjectOverlay = ({ project, onClose }: ProjectOverlayProps) => {
    const [isImageOverlayOpen, setIsImageOverlayOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event: any) {
            // Check if the clicked element is not part of the overlay
            if (!event.target.closest('.rounded-lg')) {
                onClose(); // Call the onClose function when clicked outside
            }
        }

        // Add the event listener when the component mounts
        document.body.addEventListener('click', handleClickOutside);

        // Remove the event listener when the component unmounts
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);

    if (!project) {
        console.log("Project is null")
        return null;
    }

    const showImageOverlay = () => {
        setIsImageOverlayOpen(!isImageOverlayOpen)
    }

    const { title, description, backgroundSrc } = project;

    return (

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 text-neutral-800">

                <div className="overflow-auto w-4/5 h-4/5 md:h-fit bg-white p-4 rounded-lg">
                    <h2 className={"text-center font-bold"}>{title}</h2>

                    <div className={"flex flex-col sm:flex-row"}>
                        <p className={"w-fit text-center"}>{description}</p>

                        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
                            <div className="relative ">
                                <Image
                                    src={backgroundSrc}
                                    alt={"test"}
                                    width={200} // Set the width you desire
                                    height={200} // Set the height you desire
                                    className="w-full h-auto max-w-fit max-h-60 rounded-xl mx-auto"
                                    onClick={() => showImageOverlay()}
                                />
                            </div>
                            <div className="relative ">
                                <Image
                                    src={backgroundSrc}
                                    alt={"test"}
                                    width={200} // Set the width you desire
                                    height={200} // Set the height you desire
                                    className="w-full h-auto max-w-fit max-h-60"
                                />
                            </div>
                            <div className="relative ">
                                <Image
                                    src={backgroundSrc}
                                    alt={"test"}
                                    width={200} // Set the width you desire
                                    height={200} // Set the height you desire
                                    className="w-full h-auto max-w-fit max-h-60"
                                />
                            </div>
                            <div className="relative ">
                                <Image
                                    src={backgroundSrc}
                                    alt={"test"}
                                    width={200} // Set the width you desire
                                    height={200} // Set the height you desire
                                    className="w-full h-auto max-w-fit max-h-60"
                                />
                            </div>
                            <div className="relative ">
                                <Image
                                    src={backgroundSrc}
                                    alt={"test"}
                                    width={200} // Set the width you desire
                                    height={200} // Set the height you desire
                                    className="w-full h-auto max-w-fit max-h-60"
                                />
                            </div>



                        </div>

                    </div>

                    {isImageOverlayOpen && (
                        <FullImageView src={backgroundSrc} title={title} closeImage={showImageOverlay}/>
                    )}

                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </motion.div>

    );
};


const FullImageView = ( { src, title, closeImage }: { src: string, title: string, closeImage: Function }) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            // Check if the clicked element is not part of the overlay
            if (!event.target.closest('.image')) {
                closeImage(); // Call the onClose function when clicked outside
            }
        }

        // Add the event listener when the component mounts
        document.body.addEventListener('click', handleClickOutside);

        // Remove the event listener when the component unmounts
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [closeImage]);

    return (

        <div className={"fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 "}>
            <div className={" bg-neutral-600 p-3 rounded-2xl w-5/12 image" }>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className={""}
                >
                    <div className={" flex flex-row mx-auto"}>
                        <Image src={"/arrows/arrow-left.svg"} alt={"right arrow"} width={30} height={30} className={"my-auto"}/>
                        <Image
                            src={src}
                            alt={title + " image"}
                            layout="contain"
                            width={400} // Set the width you desire
                            height={100} // Set the height you desire
                            className={"w-3/6 h-auto max-h-96 mx-auto"}
                        />
                        <Image src={"/arrows/arrow-right.svg"} alt={"right arrow"} width={30} height={30} className={"my-auto"}/>

                    </div>

                </motion.div>

            </div>
        </div>
    )
}

export default ProjectOverlay;