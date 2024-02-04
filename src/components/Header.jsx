import React, {useState} from 'react';
import logo from '../assets/logo-1.png'
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const navOptions = [
    {
        id: `NAV004`,
        title: `Home`,
        url: `/`
      },
  {
    id: `NAV001`,
    title: `Shop`,
    url: `#`
  },
  {
    id: `NAV002`,
    title: `About`,
    url: `#`
  },
  {
    id: `NAV003`,
    title: `Contact`,
    url: `#`
  }
]

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClose = (e) => {
      if(e.target.id === "screen"){
        setOpenSidebar(false);
      }
  }
  return (
    <div className='w-full border-b border-b-[#3b3b3b] shadow-md'>
      <div className="w-[90%] mx-auto py-4 flex justify-between">
        <div>
          <Link to={"/"} className="flex gap-x-2 items-center">
            <img src={logo} alt="..." className='w-[32px] h-[32px] object-cover' />
            <h2 className='text-2xl header'>Cosmic Rush</h2>
          </Link>
        </div>
        <div className="hidden md:flex gap-x-8 items-center">
          {
            navOptions.map((nav) => (
              <NavLink to={nav.url} key={nav.id} className={({isActive}) => `hover:text-violet-500 text-[16px]`}>
                  {nav.title}
              </NavLink>
            ))
          }
        </div>
        <div className="hidden md:flex items-center">
          <Link to={"#"} className='px-4 py-2 bg-violet-500 text-sm rounded-md'>
              Join the Rush
          </Link>
        </div>
        <div className='md:hidden grid'>
          <HiOutlineMenuAlt3
            className='w-[30px] h-[30px] cursor-pointer'
            onClick={() => setOpenSidebar(true)}
          />
          {
            openSidebar && (
              <>
              <div 
                className="fixed w-full h-screen top-0 left-0 z-[99999] bg-[#00000024] "
                onClick={handleClose}
                id='screen'
                >
                  <div className="w-[70%] fixed z-[99999999] h-[100vh] bg-[#3b3b3b] bg-opacity-90 top-0 right-0">
                    <div className="mt-[15vh] w-full text-center h-[70%] flex flex-col justify-evenly">
                      {
                        navOptions.map((nav, index) => (
                            <Link key={nav.id} to={nav.url} className={`text-[14px] font-[500] text-opacity-80 text-white`}>
                                {nav.title}
                            </Link>
                        ))
                      }
                      <Link to={"#"} className='w-[75%] mx-auto px-4 py-2 bg-violet-500 text-sm rounded-md'>
                          Join the Rush
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header