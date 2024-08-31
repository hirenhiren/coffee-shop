import React from 'react';
import appleStore from '../assets/website/app_store.png';
import playStore from '../assets/website/play_store.png';

const  Playstore = () => {
  return (
    <>
<div className="bg-[url('./assets/website/coffee-beans-bg.png')] bg-no-repeat  bg-cover  bg-center py-[6%] sm:py-[3%] overflow-hidden">
         <div className="flex" data-aos="fade-up">
          <div className="w-[80%] mx-auto">
            <div className='w-[100%] sm:w-[40%]'>
            <h2 className="text-2xl sm:text-4xl text-white font-bold text-center sm:text-left">Coffee Cafe is available for  Android and IOS</h2>
            <div className="flex py-6">
            <a className='inline'><img src={appleStore} alt="applestore" className='w-[200px]'/></a>
            <a className='inline'><img src={playStore} alt="playstore" className='w-[200px]'/></a>
            </div>
            </div>
          </div>
          </div>    
      </div>
    </>
  )
}

export default Playstore