import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../input.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsActive(false);
            }
        }

        // Add event listener when menu is active
        if (isActive) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isActive]);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className='bg-gray-100' ref={navRef}>
            <div className='flex flex-wrap items-center justify-between mx-4 p-3'>
                <Link to={"/"}>
                    <img src='/assets/img/portfolio_logo.gif' alt='Myky Huynh portfolio logo' className='h-20 max-sm:h-14' />
                </Link>
                <button onClick={toggleActiveClass} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className={`${isActive ? 'hidden' : 'block'} h-6 w-6`} />
                    <XMarkIcon aria-hidden="true" className={`${isActive ? 'block' : 'hidden'} h-6 w-6`} />
                </button>
                <div className={`w-full md:block md:w-auto ${isActive ? 'block' : 'hidden'}`}>
                    <ul className='text-xl font-semibold flex flex-col md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0'>
                        <NavLink to="/"
                            style={({ isActive }) => ({
                                color: isActive ? '#ff0000' : '#000000',
                                fontWeight: isActive ? 'bold' : 'normal'
                            })}
                        >
                            <li className='block py-2 px-3 rounded-full border border-opacity-0 border-slate-500 hover:border-opacity-100 active:bg-pink-100'>
                                home
                            </li>
                        </NavLink>
                        <NavLink to="/about"
                            style={({ isActive }) => ({
                                color: isActive ? '#ff0000' : '#000000',
                                fontWeight: isActive ? 'bold' : 'normal'
                            })}
                        >
                            <li className='block py-2 px-3 rounded-full border border-opacity-0 border-slate-500 hover:border-opacity-100 active:bg-pink-100'>
                                about
                            </li>
                        </NavLink>
                        <NavLink to="/work"
                            style={({ isActive }) => ({
                                color: isActive ? '#ff0000' : '#000000',
                                fontWeight: isActive ? 'bold' : 'normal'
                            })}
                        >
                            <li className='block py-2 px-3 rounded-full border border-opacity-0 border-slate-500 hover:border-opacity-100 active:bg-pink-100'>
                                work
                            </li>
                        </NavLink>
                        <NavLink to="/blog"
                            style={({ isActive }) => ({
                                color: isActive ? '#ff0000' : '#000000',
                                fontWeight: isActive ? 'bold' : 'normal'
                            })}
                        >
                            <li className='block py-2 px-3 rounded-full border border-opacity-0 border-slate-500 hover:border-opacity-100 active:bg-pink-100'>
                                blog
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;