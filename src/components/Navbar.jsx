import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-scroll';
import { FaBars, FaXmark  } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

useEffect(() => {
    const handScroll = () => {
        if (window.scrollY > 100) {
            setIsSticky(true)
        } else {
            setIsSticky(false)   
        }
    };
    window.addEventListener('scroll', handScroll);
    return () => {
    window.addEventListener('scroll', handScroll);

    }
})
// navitems array 

const NavItems = [
    {
        link:"Home",
        path: "home"
    },
    {
        link:"Service",
        path: "service"
    },
    {
        link:"About",
        path: "about"
    },
    {
        link:"Product",
        path: "product"
    },
    {
        link:"Testimonial",
        path: "testimonial"
    },
    {
        link:"FAQ",
        path: "faq"
    },
]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href=""><img src={logo} alt="logo" className='w-[128px] inline-block ' /></a>
                {/* nav items for large devices */}
                <ul className='md:flex space-x-12 hidden '>
                    {
                        NavItems.map(({link,path}) =><Link to={path} spy={true} smooth={true} offset={-100} key={path}
                        className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link> )
                    }
                </ul>
                <div className='space-x-12 hidden lg:flex items-center'>
                    <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                    <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 hover:bg-neutralGrey'>Sign up</button>
                </div>
                {/* menu btn for only mobile devices */}
                <div className='md:hidden'>
                    <button className='focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)
                        }
                    </button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar