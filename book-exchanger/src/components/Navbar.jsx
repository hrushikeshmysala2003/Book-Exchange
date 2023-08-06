import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { ImBooks } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/user';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state => state.user)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logoutSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
  }
  return (
    <nav className="p-5 bg-blue-500 w-full border-b fixed top-0 left-0 border-b-gray-200 shadow-md z-10">
      <div className="flex items-center gap-4">
        <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
          <ImBooks fontSize={"1.75rem"} color='white' />
          <span className='text-white font-bold text-xl italic'>Book X-Change</span>
        </Link>

        {/* Hamburger menu button */}
        <div className="md:hidden absolute right-4">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            {
              isMenuOpen ?
                <AiOutlineClose /> : <GiHamburgerMenu />
            }
          </button>
        </div>

        {/* Navbar links for larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link
            to={'/'}
            className="text-white text-lg hover:text-gray-300 focus:outline-none"
          >
            Home
          </Link>

        </div>
        {
          isAuthenticated ? (
            <>
            <div className='hidden md:flex space-x-2 absolute right-4 '>
              <Link to={'/profile'} className='bg-white hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded'>Profile</Link>
              <button onClick={logoutSubmitHandler} className='bg-white hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded'>Logout</button>
            </div>
            </>
          ): (
            <>
            <div className='hidden md:flex space-x-2 absolute right-4 '>
              <Link to={'/login'} className='bg-white hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded'>Login</Link>
              <Link to={'/register'} className='bg-white hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded'>Register</Link>
            </div>
            </>
          )
        }

        {/* <div className='hidden md:flex space-x-2 absolute right-4 '>
          <Link to={'/login'} className='bg-white hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded'>Login</Link>
          <button onClick={logoutSubmitHandler} className='bg-white hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded'>Logout</button>
          <Link to={'/register'} className='bg-white hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded'>Register</Link>
        </div> */}
      </div>

      {/* Responsive menu for smaller screens */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
          <Link
            to={'/'}
            className="text-white text-lg hover:text-gray-300 focus:outline-none"
          >
            Home
          </Link>
          <Link to={'/login'} className='bg-white text-center hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded w-[100px]'>Login</Link>
          <Link to={'/register'} className='bg-white text-center hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded w-[100px]'>Register</Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
