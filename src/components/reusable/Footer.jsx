import logoWhite from '../../assets/logo_white.svg';
import { FaTwitter, FaYoutube, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='px-4 md:px-14 py-6 w-full space-y-5 bg-secondary'>
      <div className='md:flex items-center'>
        <div className='md:w-1/2 space-y-4'>
          <img src={logoWhite} alt='logo' className='h-10' />
          <p className='text-white w-fit'>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <form className='md:flex items-center md:space-x-2 space-y-2 md:space-y-0'>
            <div className='md:flex items-center justify-center'>
              <input type='text' placeholder='Enter your email' className='form-input' />
            </div>
            <div className='w-full md:w-fit h-fit'>
              <button
                type='submit'
                className='bg-orange-600 p-3 rounded-md text-white w-full md:w-fit'
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className='text-white text-xs font-light'>
            By subscribing you agree to with our Privacy Policy and provide consent to receive
            updates from our company.
          </p>
        </div>

        <div className='flex flex-wrap justify-between md:w-1/2 mt-10 gap-y-4'>
          <div className='mb-5 md:my-0 w-fit md:w-1/4 flex flex-col md:items-center'>
            <div>
              <h1 className='text-white font-bold mb-2'>Menu</h1>
              <ul className=' space-y-2 text-gray-200/60'>
                <li className='w-full flex'>Home</li>
                <li className='w-full flex'>About Us</li>
                <li className='w-full flex'>Contact Us</li>
                <li className='w-full flex'>Support</li>
              </ul>
            </div>
          </div>

          <div className='w-fit md:w-1/4 flex flex-col md:items-center'>
            <div>
              <h1 className='text-white font-bold mb-2'>Resources</h1>
              <ul className=' space-y-2 text-gray-200/60'>
                <li className='w-full flex'>Blog</li>
                <li className='w-full flex'>Pricing</li>
                <li className='w-full flex'>Help Center</li>
                <li className='w-full flex'>Documentation</li>
                <li className='w-full flex'>Guidelines</li>
              </ul>
            </div>
          </div>

          <div className='w-fit md:w-1/4 flex flex-col md:items-center mt-3 md:mt-0'>
            <div>
              <h1 className='text-white font-bold w-fit mb-2'>Follow us on:</h1>
              <ul className='flex text-gray-200/60 mt-3 md:mt-0 space-x-4'>
                <li>
                  <FaInstagram className='text-3xl' />
                </li>
                <li>
                  <FaYoutube className='text-3xl' />
                </li>
                <li>
                  <FaDiscord className='text-3xl' />
                </li>
                <li>
                  <FaTwitter className='text-3xl' />
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <hr className='text-gray-200/60' />
      <div className=' md:px-0 text-gray-200/60 md:flex justify-between'>
        <h2 className='small'>2023 Edu_cate. All right reserved.</h2>
        <ul className='flex space-x-2 mt-3 md:mt-0 small'>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
