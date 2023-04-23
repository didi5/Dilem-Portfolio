import React from 'react'
import Image from 'next/image';
import webImg from '../public/assets/website.png' 
import Link from 'next/link';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';


// Link to projetcs page

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-3'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-gray-600'>About </p>
                <h2 className='py-4 text-[#126068]'> Who am I</h2>
                <br/>

                <h2>Growth Mindset</h2>
                <p className='py-4 text-gray-600  m-auto'>
                    Optimism leads me. I love to encourage and motivate others to commit to their goals.
            
                </p>
                

                <br/>
                <h2>Health</h2>
                <p className='py-4 text-gray-600  m-auto'>
                    As a former professional basketball player, 
                    I  have a affinity for sports and health.{'\n'} Brain and Body Health! 
               </p>

               <br/>

               <h2>
                   Life Long Learning
               </h2>
               <p className='py-4 text-gray-600  m-auto'>
                    I challenge myself daily. Learning Chinese is one thing.
                    {'\n'} Learning about how to stay young and happy is another.
               </p>


        

                {/* <Link href='/#skills'>
                <button className='py-4 p-6 text-gray-100 mt-4 '>
                         My CV
                </button>
                </Link> */}
               
  
                    <br/>
                    <br/>


                <div className='flex  py-30'>
                    <Link href='/#skills'>
                        
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleDown
                            className='text-[#126068]'
                            size={30}
                            />
                        </div>
                        
                    </Link>
                </div>



            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
               <Image className='rounded-xl' src="/../public/assets/website.png" alt="my picture" width='395' height='240' /> 
            </div>

        </div>


        

    </div>
  )
}

export default About