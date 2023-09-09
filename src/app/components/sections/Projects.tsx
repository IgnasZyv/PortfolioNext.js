"use client"
import CardSection from "@/app/components/CardSection";
import SectionHeaderTitle from "@/app/components/SectionHeaderTitle";
import Image from "next/image";
import GridItem from "@/app/components/GridItem";
import ProjectData from "@/app/models/ProjectData";
import {Variants, motion} from "framer-motion";



export default function Projects() {

    const parentVariant: Variants = {
        initial: { opacity: 0, y: -50 },
        whileInView: { opacity: 1, transition: { staggerChildren: 0.5 } },
    }

    const item = {
        initial: { opacity: 0, y: -50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

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

                </div>
                <SectionHeaderTitle title={"My Projects"} />

                <motion.div variants={parentVariant}
                            initial={"initial"}
                            whileInView={"whileInView"}
                            className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-16"}>

                    {ProjectData.map((project) => (

                        <motion.div variants={item} key={project.id}>
                            <GridItem {...project}/>
                        </motion.div>
                    ))}



                    {/*<GridItem title={"Android voting application"} description={"Android application"} backgroundSrc={"/projects/votingApp/polls3.jpg"}/>*/}
                    {/*<GridItem title={"voting app"} description={"test disc"} backgroundSrc={"/projects/votingApp/polls3.jpg"}/>*/}
                    {/*<GridItem title={"voting app"} description={"test disc"} backgroundSrc={"/projects/votingApp/polls3.jpg"}/>*/}
                    {/*<GridItem title={"voting app"} description={"test disc"} backgroundSrc={"/projects/votingApp/polls3.jpg"} />*/}
                    {/*<GridItem title={"voting app"} description={"test disc"} backgroundSrc={"/projects/votingApp/polls3.jpg"} />*/}


                </motion.div>
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

            </CardSection>
        </div>

    )
}