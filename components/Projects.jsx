import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import webImg from '../public/assets/website.png' 
import podcasterImg from '../public/assets/beige2.jpg' 
import coachImg from '../public/assets/beige2.jpg' 
import coachImg2 from '../public/assets/trend.jpeg' 
import texterImg from '../public/assets/trend.jpeg' 
import ProjectItem from './ProjectItem'

// 1:13h
//Change pictures of Work


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-40 py-16'>
            <p className='text-xl tracking-widest uppercase text-gray-600'>My Projects</p>
            <h2 className='py-4 text-[#126068]'>What I CAN</h2>
            <div className='grid md:grid-cols-2 gap-4'>


                       <ProjectItem 
                      title='Coach'
                        backgroundImg={webImg}
                        projectUrl='/coach' 
                      /> 

                      <ProjectItem  
                      title='Web Designer' 
                      backgroundImg={webImg} 
                      projectUrl='/coder' 
                      />
                    
                      <ProjectItem  
                      title='(Podcaster/Video) Creator' 
                      backgroundImg={webImg} 
                      projectUrl='/creator' 
                      />


                     

                      <ProjectItem 
                      title='Learner'
                        backgroundImg={webImg}
                        projectUrl='/writer' 
                      />


            </div>
        </div>
    </div>
  )
}

export default Projects