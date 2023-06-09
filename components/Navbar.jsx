import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../public/assets/Can_Logo.png';

import React, { useState, useEffect, use } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { SocialIcon } from 'react-social-icons';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const [navBg, setNavBg] = useState('#126068');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter()

    // for different underpages
    useEffect(() => {
        if (
            router.asPath === '/property' ||
            router.asPath === '/coach'
        ) {
            setNavBg('transparent')
            setLinkColor('#1f2937')
        }
        else {
            setNavBg('#126068')
            setLinkColor('#1f2937')
        }


    }, [router])




    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, []);

    return (
        <div

            sytle={{ backgroundColor: `${navBg}` }}

            className=
            {shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            {/* media queries */}
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/#home'>
                    <Image src={logoImg} alt="/" width='125' height='50' />
                </Link>
                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                        <Link href='/'>

                            <li className='ml-10 text-sm  uppercase hover:text-[#126068]'>Home</li>
                        </Link>

                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:text-[#126068]'>About</li>
                        </Link>

                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:text-[#126068]'>Skills</li>
                        </Link>

                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:text-[#126068]'>Projects</li>
                        </Link>

                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:text-[#126068]'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        < AiOutlineMenu size={25} />
                    </div>

                </div>

            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

                <div className={nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0fc] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/' >
                                <Image src={logoImg} width='87' height='35' alt="/" />
                            </Link>

                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose></AiOutlineClose>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4 text-[#126068]'>Let's grow together and learn!</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>

                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>

                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>

                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>

                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>

                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#126068]'>Let's stay in touch</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <SocialIcon network="linkedin" url="https://www.linkedin.com/in/dilemkaya/" style={{ height: 25, width: 25 }} />



                                </div>

                                {/* Need to add email addess properly in main, here navbar twice and contact */}
                                {/* <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div> */}

                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <SocialIcon network="github" url="https://github.com/didi5/websites" style={{ height: 25, width: 25 }} />
                                </div>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <SocialIcon network="instagram" url="https://www.instagram.com/can_do_girl/" style={{ height: 25, width: 25 }} />
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar