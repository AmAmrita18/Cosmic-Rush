import React from 'react'
import { MdOutlineRocketLaunch } from "react-icons/md";
import hero from '../../assets/hero.png'
import user from '../../assets/user1.jpg'

const features = [
    {
        id: `FEATURE001`,
        title: `100K+`,
        description: `Diverse Selection`
    },
    {
        id: `FEATURE002`,
        title: `60K+`,
        description: `Thrilling Challenges`
    },
    {
        id: `FEATURE003`,
        title: `15K+`,
        description: `Creative Developers`
    },
]

function Hero() {
  return (
    <div className='w-full'>
        <div className="w-[80%] max-w-[1600px] mx-auto flex md:flex-row flex-col justify-start gap-y-4 md:justify-between gap-x-2 mt-10">
            <div className="w-full md:w-[50%] flex flex-col gap-y-4">
                <div className='flex flex-col gap-y-[0.5px]'>
                    <h1 className='text-[38px] lg:text-[54px] font-[600] md:w-[80%] text-left header'>
                    Unleash Your Power, <span className='text-violet-500'>Rule the Games</span>.
                    </h1>
                </div>
                <p className='text-[16px] md:w-[85%] text-[#ccc]'>Embark on epic gaming journeys here, where every click unveils a world of thrilling adventures and endless possibilities. Unleash your inner hero in our diverse game marketplace.</p>
                
                <div className="hidden md:flex flex-col gap-y-4">
                    <p className='bg-violet-500 mt-[12px] md:w-[65%] lg:w-[55%] text-center text-sm py-4 px-12 rounded-2xl flex justify-center items-center gap-x-2'>
                        <MdOutlineRocketLaunch className='w-[16px] h-[16px] text-white'/>
                        Get Started
                    </p>

                    <div className="flex justify-between w-[75%]">
                        {
                            features.map((feature) => (
                                <div key={feature.id} className="flex flex-col gap-y-1 mt-3">
                                    <h2 className='text-3xl font-[500]'>{feature.title}</h2>
                                    <p className='text-sm font-[400]'>{feature.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[48%]">
                <div className="w-[100%]">
                    <img src={hero} alt=".." className='w-[100%] h-[380px] object-cover rounded-t-xl' />
                    <div className="w-full bg-[#3b3b3b] py-3 flex flex-col gap-y-1 px-4 rounded-b-xl">
                        <h4 className='text-lg font-[500]'>Athena's Legacy</h4>
                        <div className="flex items-center gap-x-2">
                            <img src={user} alt="" className='w-[32px] h-[32px] rounded-full object-cover' />
                            <p className='text-sm'>CelestialWanderer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex md:hidden flex-col gap-y-4">
                    <div className='bg-violet-500 mt-[12px] md:w-[65%] lg:w-[45%] text-center text-sm py-4 px-12 rounded-2xl flex justify-center items-center gap-x-2'>
                        <MdOutlineRocketLaunch className='w-[16px] h-[16px] text-white'/>
                        Get Started
                    </div>

                    <div className="flex justify-between w-full md:w-[75%]">
                        {
                            features.map((feature) => (
                                <div key={feature.id} className="flex flex-col gap-y-1">
                                    <h2 className='text-xl font-[500]'>{feature.title}</h2>
                                    <p className='text-sm font-[400]'>{feature.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Hero
