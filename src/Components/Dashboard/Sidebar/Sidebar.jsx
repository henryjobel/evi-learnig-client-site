
// Components
import logo from '../../../assets/logoS-removebg-preview.png'


// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { SiGoogleclassroom } from "react-icons/si";
import { MdClass } from "react-icons/md";

import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import MenuItem from './MenuItem/MenuItem'
import ToggleBtn from './ToggleBtn/ToggleBtn'
import { useState } from 'react'

const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)

  //   For guest/host menu item toggle button
  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-slate-800 text-white flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <img src={logo} alt="" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-white'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-slate-800 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gary-100 mx-auto'>
              <img src={logo} alt="" />
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* If a user is host */}
            <ToggleBtn toggleHandler={toggleHandler} />
            <nav>
              <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
              />
              <MenuItem
                icon={SiGoogleclassroom }
                label='Add Classe'
                address='addclass'
              />
              <MenuItem
                icon={MdClass}
                label='My Classe'
                address='myclass'
              />
              <MenuItem
                icon={MdClass}
                label='Assingment'
                address='assigment'
              />

              {/* Menu Items */}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label='Profile'
            address='/dashboard/profile'
          />
          <button className='flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-blue-300   hover:text-blue-600 transition-colors duration-300 transform'>
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
