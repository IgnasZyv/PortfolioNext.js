import Hero from "@/app/components/sections/Hero";
import WaveSvg from "@/app/components/WaveSvg";
import Image from "next/image";
import Navigation from "@/app/components/Navigation";

import { motion } from "framer-motion"
import CardSection from "@/app/components/CardSection";
import SkillCard from "@/app/components/SkillCard";
import AboutMe from "@/app/components/sections/AboutMe";
import Projects from "@/app/components/sections/Projects";


export default function Home() {
  return (
      <main className="">
          {/* Background Wave */}
          <div className="absolute w-screen" style={{zIndex: -1}}>
              <Image src={"/wave-haikei.svg"} alt={"Wave"} width={2000} height={600} priority={true} />
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Hero Section */}
          <Hero />

          {/* About Me Section */}
          <div className="relative my-10">
              {/* About Me Content */}
              <div className="z-10">
                  <AboutMe />
              </div>

              {/* About Me Waves (Background) */}
              <div className="absolute w-screen -bottom-10"
              style={{zIndex: -1}}>
                  <Image
                      src={"/about-me-waves.svg"}
                      alt={"wave background"}
                      width={2000}
                      height={500}
                  />
              </div>
          </div>


          <Projects/>


      </main>
  )
}
