import { Link } from "react-router-dom";
import useAuth from './../../../../Hoocks/useAuth';
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import avatarImg from '../../../../assets/download.png'


const DropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user,logOut  } = useAuth()
  
    return (
      <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
          >
            <AiOutlineMenu />
            <div className='hidden md:block'>
              <img
                className='rounded-full'
                referrerPolicy='no-referrer'
                src={user && user.photoURL ? user.photoURL : avatarImg}
                alt='profile'
                height='30'
                width='30'
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
            <div className='flex flex-col cursor-pointer'>
              <Link
                to='/'
                className='block px-4 py-3 font-semibold text-black transition md:hidden hover:bg-blue-400'
              >
                Home
              </Link>
              {user? 
              <>
              <Link
                to='/dashboard'
                className='px-4 py-3 font-semibold text-black transition hover:bg-blue-400'
              >
                Dashboard
              </Link>
              <button onClick={logOut}
                to='/logout'
                className='px-4 py-3 font-semibold text-black transition cursor-pointer hover:bg-blue-400'
              >
                Logout
              </button>
              </> : 
              <>
              <Link
                to='/login'
                className='px-4 py-3 font-semibold text-black transition hover:bg-blue-400'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='px-4 py-3 font-semibold text-black transition hover:bg-blue-400'
              >
                Sign Up
              </Link>
              </>}
            </div>
          </div>
        )}
      </div>
    )
};

export default DropDownMenu;