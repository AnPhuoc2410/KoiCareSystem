import logo from '../../assets/logo.png'
import React, { useState } from 'react';
import { IoFishOutline } from "react-icons/io5";
import { GiAquarium } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { FaHandPointRight } from "react-icons/fa";
import { CgCalculator } from "react-icons/cg";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";

function Member() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  
  return(<div>

    {/* member page */}
    <div className='min-h-screen px-3 py-3 flex bg-gray-100 gap-5'>
      {/* sidebar */}
      <div className='w-1/6 bg-white text-black shadow-xl rounded-md h-screen overflow-y-auto'>
        {/* logo  */}
        <div className='flex justify-center items-center mb-4'>
          <button className='pt-2 rounded-md '>
            <img className='w-12 animate-spin' src={logo} alt='Logo' />
          </button>
          <a href='#' className='pt-1 text-xl font-bold text-black'>
            Koi Care System
          </a>
        </div>
        {/* sidebar content */}
        <div className='flex flex-col justify-center items-center m-2'>
          {/* member account */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center' onClick={toggleList}>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 mr-3">
                      <path stroke-linecap="round" stroke-linejoin="round" 
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0
                       0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966
                        0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
              {/* my account*/}
              <span className='font-semibold'>My Account</span>
            </div>
            {/* right section */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
              strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          
          {isOpen && (
              <div className='w-full'>
                <ul>
                  <li className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex items-center'>
                    {/* icon image */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 mr-3">
                      <path stroke-linecap="round" stroke-linejoin="round" 
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0
                       0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966
                        0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span className='font-semibold '>Profile</span>
                  </li>
                  <li className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex items-center'>
                    {/* icon image */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 mr-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>

                    <span className='font-semibold '>Logout</span>
                  </li>
                  <li className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex items-center'>
                    {/* icon image */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 mr-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    <span className='font-semibold '>Shop Cart</span>
                  </li>
                </ul>
              </div>
            )}

          <hr className='my-4 border-gray-300 w-full' />
          <p className='pb-1 pr-32'>Features</p>

          {/* sidebar items  */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center'>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 mr-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
              </svg>

              <span className='font-semibold'>DashBoard</span>
            </div>        
          </div>

          {/* sidebar items  */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center'>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <div className='w-7 h-7 mr-3'>
              <IoFishOutline className='w-full h-full'/> 

              </div>
              
              <span className='font-semibold'>My Koi</span>
            </div>        
          </div>
       
          {/* sidebar items  */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center'>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <div className='w-7 h-7 mr-3'>
                <GiAquarium className='w-full h-full'/> 
              </div>
              <span className='font-semibold'>My Pond</span>
            </div>        
          </div>

          {/* sidebar items  */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center'>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <div className='w-7 h-7 mr-3'>
                <IoIosWater className='w-full h-full'/> 
              </div>
              <span className='font-semibold'>Water Parameters</span>
            </div>        
          </div>

          {/* sidebar items  */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center'>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <div className='w-7 h-7 mr-3'>
                <LuAlarmClock className='w-full h-full'/> 
              </div>
              <span className='font-semibold'>Reminders</span>
            </div>        
          </div>

          {/* sidebar items  */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center'>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <div className='w-7 h-7 mr-3'>
                <FaHandPointRight className='w-full h-full'/> 
              </div>
              <span className='font-semibold'>Recommendations</span>
            </div>        
          </div>
          
          {/* sidebar items  */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center'>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <div className='w-7 h-7 mr-3'>
                <CgCalculator className='w-full h-full'/> 
              </div>
              <span className='font-semibold'>Food Calculator</span>
            </div>        
          </div>

          {/* sidebar items  */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center'>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <div className='w-7 h-7 mr-3'>
                <CgCalculator className='w-full h-full'/> 
              </div>
              <span className='font-semibold'>Salt Calculator</span>
            </div>        
          </div>

          {/* sidebar items  */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center'>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <div className='w-7 h-7 mr-3'>
                <IoStatsChartSharp className='w-full h-full'/> 
              </div>
              <span className='font-semibold'>Statistics</span>
            </div>        
          </div>

          {/* sidebar items  */}
          <div className='hover:text-white hover:bg-red-500 min-w-full p-4 cursor-pointer rounded-lg flex justify-between items-center'>
            {/* left section */}
            <div className='flex items-center'>
              {/* icon image */}
              <div className='w-7 h-7 mr-3'>
                <FaRegNewspaper className='w-full h-full'/> 
              </div>
              <span className='font-semibold'>News and blogs</span>
            </div>        
          </div>
             
        </div>


      </div>
      {/* dashboard page  */}
      <div className="w-5/6 bg-white text-black shadow-xl rounded-md flex flex-col">
        {/* 4 ô trên  */}
        <div className='h-1/4  m-2 flex flex-row gap-2'>
          {/* item  */}
          <div className='flex-1 bg-white border border-gray-200 shadow-sm rounded-md'>
          </div>         
          <div className='flex-1 bg-white border border-gray-200 shadow-sm rounded-md'>
          </div> 
          <div className='flex-1 bg-white border border-gray-200 shadow-sm rounded-md'>
          </div> 
          <div className='flex-1 bg-white border border-gray-200 shadow-sm rounded-md'>
          </div> 
        </div>
        
        <div className='h-3/4 flex flex-row gap-2 '>     
          <div className='flex-3 bg-white border border-gray-200 shadow-sm rounded-md'>   </div>   
          <div className='flex-1 bg-white border border-gray-200 shadow-sm rounded-md'>   </div>
        </div>
      </div>

    </div>


  </div>)
}

export default Member
