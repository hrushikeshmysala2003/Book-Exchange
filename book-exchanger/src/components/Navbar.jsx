import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { ImBooks } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 relative w-[100vw]">
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

        <div className='hidden md:flex space-x-2 absolute right-4 '>
          <Link to={'/login'} className='bg-white hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded'>Login</Link>
          <Link to={'/register'} className='bg-white hover:text-blue-700 text-blue-400 font-bold py-2 px-4 rounded'>Register</Link>
        </div>
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
