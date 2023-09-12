import {MouseEventHandler, useEffect} from "react";
import {any} from "prop-types";

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

    const { title, description, backgroundSrc } = project;


    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
                {/* Add detailed project information here */}
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ProjectOverlay;