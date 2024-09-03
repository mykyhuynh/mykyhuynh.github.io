import React, { useState } from 'react';
import '../input.css';
import logo from '../assets/img/portfolio_logo.gif';
import '../assets/font/Myfont-Regular.ttf';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


function Navbar () {
    // adding the states
    const [isActive, setIsActive] = useState(false);

    // add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className='bg-gray-100'>
            <div className='flex flex-wrap items-center justify-between mx-4 p-3'>
                <a href="/">
                    <img src={logo} alt='Myky Huynh portfolio logo' className='h-20' />
                </a>
                <button onClick={toggleActiveClass} class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className={`${isActive ? 'hidden' : 'block'} h-6 w-6`} />
                    <XMarkIcon aria-hidden="true" className={`${isActive ? 'block' : 'hidden'} h-6 w-6`} />
                </button>
                <div className={`w-full md:block md:w-auto ${isActive ? 'block' : 'hidden'}`}>
                    <ul className='text-xl font-semibold flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0'>
                        <li><a href="/about" className='block py-2 px-3 rounded hover:bg-pink-300'>About</a></li>
                        <li><a href="/work" className='block py-2 px-3 rounded hover:bg-pink-300'>Work</a></li>
                        <li><a href="/blog" className='block py-2 px-3 rounded hover:bg-pink-300'>Blog</a></li>
                        <li><a href="/contact" className='block py-2 px-3 rounded hover:bg-pink-300'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;