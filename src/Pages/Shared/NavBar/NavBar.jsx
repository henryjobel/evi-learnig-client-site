
import { Link, NavLink } from 'react-router-dom';
import logoHr from '../../../assets/logoS-removebg-preview.png'
import DropDownMenu from './DropDown/DropDownMenu';

const NavBar = () => {
  const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allclasses'>All Classes</NavLink></li>
    <li><NavLink to='/techon'>Tech On</NavLink></li>
    <li><NavLink to='/about'>About us</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
  </>
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-60 bg-gray-800 text-white shadow-sm">
        <div className="navbar-start">
          <img className='w-[200px] lg:ml-64' src={logoHr} alt="" />
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal text-base font-bold font-sans text-blue-100">
            {navLinks}
          </ul>
        </div>
        <div className='navbar-end'>
          <DropDownMenu></DropDownMenu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;