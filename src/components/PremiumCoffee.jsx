import React from 'react'
import whiteCup from '../assets/coffee-white.png';
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { CiCoffeeCup } from "react-icons/ci";
import CommonTitle from './commonTitle';
import AOS from "aos";
import "aos/dist/aos.css";

const PremiumCoffee = () => {
  return (
    <>
        <div className="bg-[url('./assets/website/coffee-texture.jpg')] bg-no-repeat  bg-cover mt-[5%] bg-center py-[5%] overflow-hidden">
      <div className="flex flex-col sm:flex-row px-6 justify-between items-center">
        <div className="w-[100%] sm:w-[50%]" data-aos="zoom-in">
      <img data-aos="continuous-spin" src={whiteCup} className="mx-auto w-[100%] lg:w-[50%]" alt=""/>
      </div>
            <div className="p-0 sm:p-4 w-[100%] sm:w-[50%]">
              <div data-aos="fade-up">
              <CommonTitle>Premium Blen Coffee</CommonTitle>
              </div >
              <p data-aos="fade-up" className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
              <div className="flex justify-between py-8">
                <div className="flex flex-col w-[60%]">
                <div className="flex items-center space-x-2 py-2" data-aos="fade-up" data-aos-duration="1000">
                <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                <span>Premium Coffee</span>
                </div>
                <div className="flex items-center space-x-2 py-2" data-aos="fade-up" data-aos-duration="2000">
                <IoFastFood  className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                <span>Hot Coffee</span>
                </div>
                <div className="flex items-center space-x-2 py-2" data-aos="fade-up" data-aos-duration="3000">
                <CiCoffeeCup  className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                <span>Cold Coffee</span>
                </div>
                </div>
                
                <div className="border-l-4 border-[#bda199] w-[40%] pl-[2%]" data-aos="fade-left">
                    <h4 className="pattaya-regular text-3xl py-2"> Tea Lover </h4>
                    <p className="text-gray-500 text-sm ml-2">Much like writing code, brewing the perfect cup of tea requires patience, precision, and a dash of passion to create a comforting blend of flavors.</p>
                </div>
              
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default PremiumCoffee