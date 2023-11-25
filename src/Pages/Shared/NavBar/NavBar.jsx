
import { Link, NavLink } from 'react-router-dom';
import logoHr from '../../../assets/logoS-removebg-preview.png'

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
            <div className="navbar fixed z-10 bg-opacity-60 bg-gray-800 text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img className='w-[200px] lg:ml-64' src={logoHr} alt="" />
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal text-base font-bold font-sans text-blue-100">
      {navLinks}
    </ul>
  </div>
  <div>
    <button className='btn btn-outline btn-info'><Link to='/login'>login</Link></button>
  </div>
</div>
        </div>
    );
};

export default NavBar;