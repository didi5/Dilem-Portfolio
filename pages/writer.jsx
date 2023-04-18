import React from 'react';
import Image from 'next/legacy/image';
import webImg from '../public/assets/beach.jpg';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';



const writer = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/30 z-10 ' /> 
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={webImg} alt='/' />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'> Life Long Learner</h2>
              <h3> Learn to never get old </h3>
          </div>
      </div>





      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8'>

    

          <div className='col-span-2'>
            {/* <p>Project</p> */}
            <h2 className='py-4 text-[#126068]'>Tech</h2>
            <br />
            <p className='py-4 text-gray-600  m-auto'>

              Cyber Security, Internetworking
              
               </p>

            <br />

            <button className='px-8 py-12 mt-4 mr-8'>The psychology behind your feelings.</button>

           
                   
            
          </div>

          <div className='col-span-2'>
            <h2 className='py-4 text-[#126068]'>Marketing</h2>
            <br />
            <p className='py-4 text-gray-600  m-auto'>

              SEO Marketing </p>


            <br />
           
            <button className='px-8 py-12 mt-4 mr-8'>The science behind staying young.</button>
            
            
          </div>

          <div className='col-span-2'>
            {/* <p>Project</p> */}
            <h2 className='py-4 text-[#126068]'>Reading</h2>
            <br />
            <p className='py-4 text-gray-600  m-auto'>

              Stay happier and feel better</p>

            <br />
           
            <button className='px-8 py-12 mt-4 mr-8'>The psychology behind your feelings.</button>
            
            
          </div>


          

          {/* <div className='col-span-4 md:col-span-1 shadow-xl shadow-grey-400 rounded-xl p4'>
            <div className='p-2' > 
            <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1 '>

                <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' /> Loose Weight 
                </p>

                <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' /> Get Fit 
                </p>

                <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' /> Personal Growth 
                </p>

                <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' /> Mindset & Brain  
                </p>
              </div>

            </div>
          </div> */}

          
              

               
              
        </div>


        {/* <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>This was built with. Why did I choose this? React JS / Tailwind / Javascript </p>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4' >Code</button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-grey-400 rounded-xl p4'>
            <div className='p-2' > 
            <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1 '>

                <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' /> React 
                </p>

                <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' /> Tailwind 
                </p>

                <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' /> Javascript 
                </p>

                <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' /> Python 
                </p>

                <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' /> HTML/CSS 
                </p>

              </div>

            </div>
          </div>

             

        </div> */}




    </div>
  );
};

export default writer