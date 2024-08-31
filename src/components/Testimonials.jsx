import React from 'react';
import testimonialOne from '../assets/testimonial-1.png';
import testimonialThree from '../assets/testimonial-3.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CommonTitle from './commonTitle';

const  Testimonials = () =>{
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true, // enables auto-scrolling
      autoplaySpeed: 3000, // time between each scroll (in milliseconds)
      pauseOnHover: true, // pauses auto-scroll on hover
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // Make sure the slides are responsive
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
<div className="overflow-hidden overflow-hidden" data-aos="zoom-in-down">
  <div className="px-6 py-6">
    <div data-aos="fade-up" className='text-center'>
    <CommonTitle>Testimonials</CommonTitle>
    </div>
    <Slider {...settings}>
      <div className="px-3">
      <div className="bg-[#f3edeb] p-6 rounded-md shadow-lg shadow-gray-200">
        <div className="flex justify-between">
          <img src={testimonialOne} className="my-4" alt="" width="100px"/>
          <span className="text-9xl pattaya-regular text-[#c2bdbc]">,,</span>
        </div>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
        <h5 className="pattaya-regular text-2xl font-bold my-4">John Doe</h5>
      </div>
      </div>

      <div className="px-3">
      <div className="bg-[#f3edeb] p-6 rounded-md shadow-lg shadow-gray-200">
        <div className="flex justify-between">
          <img src={testimonialThree} className="my-4" alt="" width="100px"/>
          <span className="text-9xl pattaya-regular text-[#c2bdbc]">,,</span>
        </div>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
        <h5 className="pattaya-regular text-2xl font-bold my-4">John Doe</h5>
      </div>
      </div>

      <div className="px-3">
      <div className="bg-[#f3edeb] p-6 rounded-md shadow-lg shadow-gray-200">
        <div className="flex justify-between">
          <img src={testimonialThree} className="my-4" alt="" width="100px"/>
          <span className="text-9xl pattaya-regular text-[#c2bdbc]">,,</span>
        </div>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
        <h5 className="pattaya-regular text-2xl font-bold my-4">John Doe</h5>
      </div>
      </div>

      <div className="px-3">
      <div className="bg-[#f3edeb] p-6 rounded-md shadow-lg shadow-gray-200">
        <div className="flex justify-between">
          <img src={testimonialOne} className="my-4" alt="" width="100px"/>
          <span className="text-9xl pattaya-regular text-[#c2bdbc]">,,</span>
        </div>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
        <h5 className="pattaya-regular text-2xl font-bold my-4">John Doe</h5>
      </div>
      </div>
    </Slider>
  </div>
</div>
    </>
  )
}

export default Testimonials