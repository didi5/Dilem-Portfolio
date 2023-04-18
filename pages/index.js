// https://www.youtube.com/watch?v=CMx51wpd7g4 29:44

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Main } from '@/components/Main'

import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dilem | My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />

     
    </>
  )
}
