import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-blue-300   hover:text-blue-700 ${
          isActive ? 'bg-blue-400  text-white' : 'text-white'
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium' data-aos="zoom-in">{label}</span>
    </NavLink>
  )
}

export default MenuItem