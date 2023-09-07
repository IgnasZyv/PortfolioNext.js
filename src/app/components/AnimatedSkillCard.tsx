import {ReactNode} from "react";
import {motion} from "framer-motion"
interface AnimatedSkillCardProps {
    key: number,
    children: ReactNode
}

export default function AnimatedSkillCard({ key, children }: AnimatedSkillCardProps) {


    return (

            <motion.div
                key={key}
                initial={{ opacity: 0, y: -150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -150 }}
                transition={{ duration: 1.5 }}
            >
                {children}
            </motion.div>

    )
}