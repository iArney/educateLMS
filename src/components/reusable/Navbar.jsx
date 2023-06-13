import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/EducateLogo.png';

const Navbar = () => {
  const [navDown, setNavDown] = useState(false);
  const handleNav = () => {
    setNavDown(!navDown);
  };
  const navigate = useNavigate();

  return (
    <header className='bg-white flex h-16 w-full px-6 z-20 md:px-14 justify-between items-center sticky top-0 border-b'>
      <img src={Logo} className='h-10' alt='educate-logo' />
      <ul className='hidden lg:flex items-center justify-between gap-x-6 h-full'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Features</li>
        <li className='cursor-pointer'>About Us</li>
        <li className='btn bg-secondary' onClick={() => navigate('/login')}>
          Sign In
        </li>
        <li className='btn bg-primary' onClick={() => navigate('/userAccess')}>
          Sign Up
        </li>
      </ul>

      {/* for small devices */}
      <div className='w-fit h-fit py-4 px-3 lg:hidden' onClick={handleNav}>
        {navDown ? (
          <AiOutlineClose className='text-3xl font-bold text-gray-900' />
        ) : (
          <GiHamburgerMenu className='text-3xl font-bold text-gray-900' />
        )}
        {navDown ? (
          <div className='w-full h-screen  bg-gray-900/60 shadow-md absolute left-0 top-16 animate-fadeIn'>
            <div className='w-full h-fit py-3 bg-white/90 shadow-md animate-slideDown'>
              <ul className=''>
                <li className='p-5'>Home</li>
                <li className='p-5'>About Us</li>
                <li className='p-5'>Contact Us</li>
              </ul>
              <div
                className='p-4 flex justify-center mb-2 text-white rounded-md cursor-pointer'
                style={{ backgroundColor: '#27153E' }}
                onClick={() => navigate('/login')}
              >
                Sign In
              </div>
              <div
                className='p-4 flex justify-center bg-orange-600 text-white rounded-md cursor-pointer'
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};

export default Navbar;
