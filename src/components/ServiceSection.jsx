import React from 'react';
import coffeeCup from "../assets/coffee2.png";
import CommonTitle from './commonTitle';

const ServiceSection = () => {
  return (
    <div>
        <div className="bg-[#fff] overflow-hidden">
        <div className="px-6 py-6 ">
          <div className='text-center' data-aos="fade-down">
          <CommonTitle > Best Coffee For You </CommonTitle>
          </div>
          <div className="w-[80%] mx-auto mt-[20%] sm:mt-[5%]">
            <div className="flex flex-col sm:flex-row text-center sm:space-x-[10%] space-y-[50%] sm:space-y-[0]">
              <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col border-solid border-2 rounded-xl shadow-xl p-2 hover:bg-[#854d3d] hover:text-white   duration-300 group">
                <img src={coffeeCup} alt="coffee" width="80%" className="mx-auto mt-[-30%] group-hover:scale-105 group-hover:rotate-6 duration-300"/>
                <h3 className="font-bold">Espresso</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="flex flex-col border-solid border-2 rounded-xl shadow-xl p-2 hover:bg-[#854d3d] hover:text-white   duration-300 group">
                <img src={coffeeCup} alt="coffee" width="80%" className="mx-auto mt-[-30%] group-hover:scale-105 group-hover:rotate-6 duration-300"/>
                <h3 className="font-bold">Espresso</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="5000" className="flex flex-col border-solid border-2 rounded-xl shadow-xl p-2 hover:bg-[#854d3d] hover:text-white   duration-300 group">
                <img src={coffeeCup} alt="coffee" width="80%" className="mx-auto mt-[-30%] group-hover:scale-105 group-hover:rotate-6 duration-300"/>
                <h3 className="font-bold">Espresso</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection