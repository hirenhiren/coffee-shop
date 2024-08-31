import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
<div className="bg-[url('./assets/website/coffee-footer.jpg')] bg-center bg-no-repeat bg-cover">
<div className="py-[2%] mt-[3%] text-white bg-cover  bg-black/40 sm:h-[400px]" data-aos="fade-up">
<div className="px-6 py-6 ">
    <div className="flex flex-col sm:flex-row justify-between"> 
        <div className='py-6' data-aos="fade-up" data-aos-duration="1000">
           <h2 className="pattaya-regular text-[45px]">Coffee Cafe</h2>
           <p>Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your <br/>  Perfect Espresso Escape</p> 
           <button className="bg-[#3d2517] rounded-full px-4 py-2 my-2">Visit our Youtube Channel</button>
        </div>
        <div className='py-6' data-aos="fade-up" data-aos-duration="2000">
          <p className="font-bold text-2xl">Footer</p>
          <ul>
            <li className="py-2 hover:cursor-pointer hover:scale-[1.1] transition duration-300">Home</li>
            <li className="py-2 hover:cursor-pointer hover:scale-[1.1] transition duration-300">About</li>
            <li className="py-2 hover:cursor-pointer hover:scale-[1.1] transition duration-300">Contact</li>
            <li className="py-2 hover:cursor-pointer hover:scale-[1.1] transition duration-300">Blog</li>
          </ul>
        </div>
        <div className='py-6' data-aos="fade-up" data-aos-duration="3000">
        <p className="font-bold text-2xl">Quick Links</p>
        <ul>
            <li className="py-2 hover:cursor-pointer hover:scale-[1.1] transition duration-300">Home</li>
            <li className="py-2 hover:cursor-pointer hover:scale-[1.1] transition duration-300">About</li>
            <li className="py-2 hover:cursor-pointer hover:scale-[1.1] transition duration-300">Contact</li>
            <li className="py-2 hover:cursor-pointer hover:scale-[1.1] transition duration-300">Blog</li>
          </ul>
        </div>
        <div className="pr-[10%] py-6" data-aos="fade-up" sd>
        <p className="font-bold text-2xl">Address</p>
         <p className="py-2">Mumbai, India </p>
         <p className="py-2">+91 9999999999</p>
        <div className="flex space-x-2">
        <FaFacebook className="text-white text-[30px] my-2  hover:cursor-pointer hover:scale-[1.1] transition duration-300"/>
        <FaLinkedin className="text-white text-[30px] my-2  hover:cursor-pointer hover:scale-[1.1] transition duration-300"/>
        <FaInstagram className="text-white text-[30px] my-2  hover:cursor-pointer hover:scale-[1.1] transition duration-300"/>
        </div>
        </div>
    </div>
    </div>
</div>

</div> 
    </>
  )
}

export default Footer