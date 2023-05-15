import Image from 'next/image'
import { Inter } from 'next/font/google'
import About from './about/page'
import Hero from './compontents/Hero'
import ProjectCard from './compontents/ProjectCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <section className=''>
       <Hero></Hero>
      </section>
      <section id='about-section'>
        <About></About>
      </section>
      <section className="mb-32 my-6  max-w-[80%] h-fit mx-auto text-gray-800 text-center px-6 lg:text-left">
      <h1 className="font-bold mb-12 text-center text-white">Projects</h1>
      <div className="h-fit grid lg:grid-cols-3 gap-y-6 gap-x-10">
      <ProjectCard></ProjectCard>
      </div>
      </section>

      
    </main>
  )
}
