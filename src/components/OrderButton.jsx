import React from 'react';
import { FaCoffee } from "react-icons/fa";
function OrderButton() {
  return (
    <>
        <div className="text-center hover:scale-105 transition duration-300">
           <button className="bg-[#784539] text-white p-1 pl-6 pr-6 rounded-full"> Order <FaCoffee className="ml-2 inline" /></button>
        </div>
    </>
  )
}

export default OrderButton