import React, { useState } from 'react';
import OrderButton from './OrderButton';
import coffeeLogo from "../assets/website/coffee_logo.png";
import hamburgerMenu from '../assets/hamburger-menu.png';
import { FaCoffee } from 'react-icons/fa';

const Nav = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
   
    const toggleMenu = () => {
      setShowMobileMenu(!showMobileMenu);
    }

    return (
        <>
            <div className="bg-gradient-to-r from-[#4a1e1b] to-[#5b3331]">
                <div className="px-6">
                    {/* Desktop Menu */}
                    <nav className="flex flex-row justify-between items-center py-4">
                        <div className="flex">
                            <a className="text-white text-4xl pattaya-regular" href="#" data-aos="fade-down">
                                <img
                                    src={coffeeLogo}
                                    alt="logo"
                                    className="inline mr-2 w-[50px]"
                                />
                                Coffee Shop
                            </a>
                        </div>
                        <div className="flex items-center">
                            <img 
                                src={hamburgerMenu} 
                                alt="hamburgerMenuIcon" 
                                width="40px" 
                                onClick={toggleMenu} 
                                className="sm:hidden cursor-pointer"
                            />
                            <ul className="hidden sm:flex flex-row space-x-6 text-[#cdc1c0] text-xl" data-aos="fade-down" data-aos-duration="2000">
                                <li className="p-2 hover:text-white">
                                    <a href="#">Home</a>
                                </li>
                                <li className="p-2 hover:text-white">
                                    <a href="#">Services</a>
                                </li>
                                <li className="p-2 hover:text-white">
                                    <a href="#">About</a>
                                </li>
                                <li className="hover:scale-105 transition duration-300">
                                    <button className="bg-[#784539] text-white p-1 pl-6 pr-6 rounded-full flex items-center">
                                        Order <FaCoffee className="ml-2" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    {showMobileMenu && (
                        <div className="absolute top-20 left-0 w-full  bg-gradient-to-r from-[#4a1e1b] to-[#5b3331] z-10 flex flex-col items-center justify-center py-6">
                            <nav>
                                <ul className="text-center text-[#cdc1c0] text-2xl space-y-6">
                                    <li className="hover:text-white">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="hover:text-white">
                                        <a href="#">Services</a>
                                    </li>
                                    <li className="hover:text-white">
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <OrderButton />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Nav;
