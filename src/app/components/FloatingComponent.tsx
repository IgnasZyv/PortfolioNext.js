import {ReactNode, useEffect} from "react";
import {motion, useAnimation} from "framer-motion";


interface FloatingComponentProps {
    children: ReactNode
}

export default function FloatingComponent({ children }: FloatingComponentProps) {
    const controls = useAnimation()

    useEffect(() => {
        const animation = async () => {
            await controls.start({
                y: -10,
                transition: { repeat: Infinity, duration: 1, repeatType: "reverse" },
            });
        };
        animation().then(r => animation());
    }, [controls]);


    return(
        <motion.div
            initial={{ y: 0 }}
            animate={controls}
        >
            {children}
        </motion.div>
    )
}