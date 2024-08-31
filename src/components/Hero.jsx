import React from 'react'
import coffeeCup from "../assets/coffee2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from './Button';

const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration in milliseconds
        });
      }, []);
    
    
  return (
    <>
        <div className="bg-[#270c03] overflow-hidden sm:h-[550px] flex items-center">
        <div className="flex flex-col  sm:flex-row px-6 sm:h-[450px] justify-between items-center">
          <div className="sm:flex-[1] py-4 order-[2] sm:order-[1]" data-aos="fade-up-right">
            <h2 className="text-[50px] md:text-[50px] lg:text-[75px] font-bold text-white leading-none">
              We serve the richest 
              <span className="pattaya-regular text-[#854d3d]"> Coffee </span> in
              the city
            </h2>
            <button data-aos="fade-up" className="bg-gradient-to-r from-[#824b3b] to-[#4d201d] p-1 pl-6 pr-6 sm:p-2  sm:pl-6 sm:pr-6 rounded-full text-white my-6 border-solid border-2 border-[#814b3a]">
              {" "}
              Coffee Options{" "}
            </button>
          </div>

          <div className="sm:flex-[1] sm:flex relative justify-center text-center py-4 m-4 order-[1] sm:order-[2]" data-aos="zoom-in">
            <div className='absolute left-0  top-0 md:left-10 md:top-0 xl:top-20'>
            <Button />
            </div>
        
            <img
              data-aos="continuous-spin"
              src={coffeeCup}
              alt="coffeecup"
              className="p-4"
            />

            <div className='absolute right-0 bottom-0 md:right-10 md:bottom-0 xl:bottom-20'>
            <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero