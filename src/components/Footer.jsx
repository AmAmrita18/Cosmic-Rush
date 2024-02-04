import React from 'react'
import logo from '../assets/logo-1.png';
import { RiDiscordLine, RiYoutubeLine, RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { Link } from 'react-router-dom';

const navOptionsFooter = [
  {
    id: `NAVF001`,
    title: `Home`,
    url: `/`
  },
  {
    id: `NAVF004`,
    title: `Shop`,
    url: `#`
  },
  {
    id: `NAVF002`,
    title: `About`,
    url: `#`
  },
  {
    id: `NAVF003`,
    title: `Contact`,
    url: `#`
  },
  
]

function Footer() {
  return (
    <div className='w-full bg-[#3B3B3B] shadow-xl border-t border-t-[#2f2f2f]'>
      <div className="w-[80%] mx-auto max-w-[1600px] py-4 flex md:flex-row flex-col justify-between gap-x-4">
        <div className="w-[100%] md:w-[66%] flex justify-between gap-x-3">
          <div className="w-[50%] flex flex-col justify-evenly py-2 gap-y-5">
            <div>
              <Link to={"/"} className="flex gap-x-2 items-center">
                <img src={logo} alt="..." className='w-[24px] h-[24px] object-cover' />
                <h2 className='text-lg header'>Cosmic Rush</h2>
              </Link>
            </div>
            <p className='text-sm text-[#ccc] w-[85%]'>Cosmic Rush is a website created to showcase React + Tailwind Skills.</p>
            <div className="flex flex-col gap-y-3">
              <p className='text-sm text-[#ccc]'>Join the Rush</p>
              <div className='flex gap-x-3 items-center'>
                <RiDiscordLine className='w-[20px] h-[20px] text-[#ccc] cursor-pointer' />
                <RiYoutubeLine className='w-[20px] h-[20px] text-[#ccc] cursor-pointer' />
                <RiLinkedinLine className='w-[20px] h-[20px] text-[#ccc] cursor-pointer' />
                <RiTwitterXLine className='w-[18px] h-[18px] text-[#ccc] cursor-pointer' />
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-start py-2 gap-y-4">
            <h2 className='text-[16px] header'>Explore</h2>
            <div className="flex flex-col gap-y-2">
              {
                navOptionsFooter.map((nav) => (
                  <Link to={nav.url} key={nav.id}>
                    <p className='text-sm text-[#ccc]'>{nav.title}</p> 
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[33%] flex flex-col justify-start py-2 gap-y-4 mt-6 md:mt-0">
          <h2 className='text-[16px] header'>Join the Weekly Rush</h2>
          <div className="flex flex-col gap-y-[0.5px]">
            <p className='text-sm text-[#ccc]'>Get exclusive offers, deals &</p>
            <p className='text-sm text-[#ccc]'>updates delivered to your inbox.</p>
          </div>
          <div className="bg-[#2b2b2b] bg-opacity-65 w-[90%] rounded-md flex rounded-r-2xl">
          <input type="email" placeholder='Enter your email' className='bg-transparent w-[70%] py-3 lg:py-4 px-3 text-sm placeholder:text-[#ccc] text-[#ccc] active:border-none' style={{ borderTop: "none", borderBottom: "none", borderRight: "none", borderLeft: "none"}} />
                    <Link className='w-[30%] hidden lg:block bg-violet-500 text-sm h-[100%] py-4 rounded-2xl text-center'>Subscribe</Link>
                    <Link className='w-[30%] lg:hidden bg-violet-500 flex items-center justify-center text-sm h-[100%] py-3 rounded-2xl text-center'><FiSend className='w-[18px] h-[18px]' /> </Link>
          </div>
        </div>
       

      </div>
      <div className='w-[82%] mx-auto max-w-[1600px] border-b-[0.25px] border-b-[#ccc]' />
      <div className="w-[80%] mx-auto max-w-[1600px] py-4">
      <p className='text-sm text-[#ccc]'>&copy; Cosmic Rush. Developed with proud in Bharat.</p>
      </div>
    </div>
  )
}

export default Footer