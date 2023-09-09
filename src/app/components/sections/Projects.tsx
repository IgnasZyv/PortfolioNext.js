import CardSection from "@/app/components/CardSection";
import SectionHeaderTitle from "@/app/components/SectionHeaderTitle";
import Image from "next/image";
import GridItem from "@/app/components/GridItem";



export default function Projects() {

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
                <SectionHeaderTitle title={"My Projects"} />

                <div className={"grid grid-cols-1 md:grid-cols-3 text-center"}>
                    <GridItem title={"Android voting application"} description={"Android application"} backgroundSrc={"/projects/votingApp/polls3.jpg"} images={["none"]}/>
                    <GridItem title={"voting app"} description={"test disc"} backgroundSrc={"/projects/votingApp/polls3.jpg"} images={["none"]}/>
                    <GridItem title={"voting app"} description={"test disc"} backgroundSrc={"/projects/votingApp/polls3.jpg"} images={["none"]}/>
                    <GridItem title={"voting app"} description={"test disc"} backgroundSrc={"/projects/votingApp/polls3.jpg"} images={["none"]}/>
                    <GridItem title={"voting app"} description={"test disc"} backgroundSrc={"/projects/votingApp/polls3.jpg"} images={["none"]}/>


                </div>
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