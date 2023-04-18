import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-gray-600'>My Skills</p>
            <h2 className='py-4 text-[#126068]'>Learning Everyday</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


                

                <div className='p-6 shadown-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/beach.jpeg'  
                        width='160' height='84' alt='/'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='py-4 text-gray-600  m-auto'>Balance Body & Mind</h3>
                        {/* <p>Personal</p> */}
                     
                    </div>
                    <Link href='/#projects'> 
                    <button className='w-full p-4 text-gray-100 mt-4'>
                        Optimizer
                        </button>
                        </Link>
                </div>
                </div>

                <div className='p-6 shadown-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/code.jpeg'  
                        width='114' height='64' alt='/'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <h3 className='py-4 text-gray-600  m-auto'>Designing and creating websites</h3>

                      
                    
                       
                    </div>
                    <Link href='/#projects'>
                    <button className='w-full p-4 text-gray-100 mt-4 '>
                         Futurist
                        </button>
                        </Link>
                </div>
                </div>

                <div className='p-6 shadown-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/trend.jpeg'  
                        width='114' height='74' alt='/'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='py-4 text-gray-600  m-auto'>Future Trends</h3>
                        
                    </div>
                    <Link href='/#projects'>
                    <button className='w-full p-4 text-gray-100 mt-4 '>
                         Innovator
                        </button>
                        </Link>
                </div>
                </div>




                <div className='p-6 shadown-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/book.jpeg'  
                        width='114' height='74' alt='/'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='py-4 text-gray-600  m-auto'>Reading, Blogging</h3>
                        
                        
                    </div>
                    <Link href='/#projects'>
                   
                    <button className='w-full p-4 text-gray-100 mt-4 '>
                         Creator
                        </button>
                        </Link>
                </div>
                </div>

                
               


               




             


               


              


               


                


                




            </div>
        </div>
    </div>
  )
}

export default Skills