import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./compontents/Hero";
import ProjectCard from "./compontents/ProjectCard";
import Footer from "./compontents/Footer";
import About from "./compontents/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <section className="">
        <Hero></Hero>
      </section>
      <section id="about-section" className="pt-[8rem]">
        <About></About>
      </section>
      <section id="project-section" className="pb-12 pt-[4rem] m-auto bg-base-200 text-center px-6 lg:text-left">
        <h1 className="font-bold pt-6 mb-12 text-center">Projects</h1>
        <div className="h-fit max-w-[80%] m-auto grid lg:grid-cols-3 gap-y-6 gap-x-10">
          <ProjectCard></ProjectCard>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
