import Hero from "@/app/components/sections/Hero";
import WaveSvg from "@/app/components/WaveSvg";
import Image from "next/image";
import Navigation from "@/app/components/Navigation";

import { motion } from "framer-motion"


export default function Home() {
  return (
      <main className="">
          {/* Background Wave */}
          <div className="absolute w-screen" style={{zIndex: -1}}>
              <Image src={"/wave-haikei.svg"} alt={"Wave"} width={2000} height={600} />
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Hero Section */}
          <section className="">
              <Hero />

          </section>

          {/* About Me Section */}
          <section className="relative">
              {/* About Me Content */}
              <div className="z-10">
                  <AboutMe />
              </div>

              {/* About Me Waves (Background) */}
              <div className="absolute w-screen z-0 bottom-0"
              style={{zIndex: -1}}>
                  <Image
                      src={"/about-me-waves.svg"}
                      alt={"wave background"}
                      width={2000}
                      height={500}
                  />
              </div>
          </section>
      </main>
  )



}


function AboutMe() {
    return(
        <>
            <div className={"rounded-3xl bg-neutral-700 bg-opacity-90 border border-pink-700 shadow-md shadow-pink-700 mx-auto"}
                 style={{
                     height: '60vh',
                     width: '80%',
                 }}
            >


            </div>
        </>
    )
}