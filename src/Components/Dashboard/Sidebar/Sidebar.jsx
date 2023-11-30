import logo from '../../../assets/logoS-removebg-preview.png'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import MenuItem from './MenuItem/MenuItem'
import ToggleBtn from './ToggleBtn/ToggleBtn'
import { useState } from 'react'
import useAuth from '../../../Hoocks/useAuth';
import useRole from '../../../Hoocks/useRole';
import TeacherItem from './TeacherItem'
import StudentItem from './StudentItem'
import AdminItem from './AdminItem'

const Sidebar = () => {
  const {logOut} = useAuth()
  // eslint-disable-next-line no-unused-vars
  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)
  const [role] = useRole(null)
  console.log('worleeeeeeeeeeeeee===',role);

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
      <div className='flex justify-between text-white bg-slate-800 md:hidden'>
        <div>
          <div className='block p-4 font-bold cursor-pointer'>
            <img src={logo} alt="" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='p-4 mobile-menu-button focus:outline-none focus:bg-white'
        >
          <AiOutlineBars className='w-5 h-5' />
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
            <div className='items-center justify-center hidden w-full px-4 py-2 mx-auto rounded-lg shadow-lg md:flex bg-gary-100'>
              <img src={logo} alt="" />
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            
            {role === 'teacher' && <ToggleBtn toggleHandler={toggleHandler} />}
            <nav>
             {role === 'admin' &&  <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard/statitic'
              />}
              {/* admin */}
              {role === 'admin' && <AdminItem></AdminItem>}
              {/* student items */}
              {role === 'student' && <StudentItem></StudentItem>}
              {/* teacher items */}

              {role === 'teacher' ? toggle ? <TeacherItem></TeacherItem>:<StudentItem></StudentItem> : ''}

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
          <button onClick={logOut}  className='flex items-center w-full px-4 py-2 mt-5 text-white transition-colors duration-300 transform hover:bg-blue-300 hover:text-blue-600'>
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
