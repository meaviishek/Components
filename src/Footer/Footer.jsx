import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../assets/BigLogo-cropped.svg';
import india from '../assets/make.png';
import { MdDownloadForOffline } from "react-icons/md";

import bglogo1 from '../assets/header-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#2c535a] text-white relative  border-b-[15px] border-[#6c7686]">
      {/* Background Logo */}
      <div className="absolute inset-0 z-0">
        <img src={bglogo1} alt="Background Logo" className="w-auto h-[520px] object-cover opacity-5" />
      </div>

      <div className="relative z-10">
        <div className="pt-16 pb-4 max-w-full mx-auto">
          {/* Top Section */}
          <div className="flex md:flex-row flex-col md:gap-0 gap-8 ">
            {/* Left Section */}
         
            <div className="flex flex-col items-center justify-center md:w-2/5 ">
              <img src={logo} alt="Company Logo" className="w-auto h-32 mb-4 mt-4" />
              <p className="text-gray-300 text-2xl md:text-4xl font-michroma text-center md:text-left">Unit of DOTX</p>
            </div>
          
            {/* Middle Section */}
            <div className="font-michroma lg:w-3/5">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
  {/* Right Section - Image (Comes First on Mobile) */}
 

  {/* Left Section - Form */}
  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-2xl font-medium mb-4">Fill the Space......</h3>
    <div className="flex flex-col md:flex-row items-center">
      <input
        type="email"
        placeholder="Enter your E-Mail ID"
        className="p-3 bg-[#294e54] text-center text-white focus:outline-none w-full md:w-96"
      />
      <button className="bg-gray-500 px-4 py-3 hover:bg-gray-600 transition-colors w-full md:w-auto">
        Submit
      </button>
    </div>
  </div>
  <div className="flex flex-col items-center md:items-end md:mr-20">
    <img src={india} alt="Make in India" className="w-auto h-32" />
  </div>
</div>


              <div className="mt-8 border-t border-gray-400 pt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 ml-6 lg:ml-0 ">
                  <div className="flex flex-col gap-2 text-xs lg:text-lg">
                    <button className="font-semibold mb-2 flex items-center gap-2"><MdDownloadForOffline size={25}/>Brochure</button>
                    <button className="font-semibold mb-2 flex items-center gap-2"><MdDownloadForOffline size={25}/>Membership</button>
                  
                  </div>

                  <div className="flex flex-col items-center md:items-start font-poppins gap-2">
                    <h3 className="font-semibold mb-2 font-michroma text-xs lg:text-lg">COMPANY</h3>
                    <p className="text-gray-300">About Us</p>
                    <p className="text-gray-300">Career</p>
                    <p className="text-gray-300">Contact Us</p>
                  </div>
                  </div>
                  <div className="flex flex-col items-center md:items-end mt-8 lg:-mt-16 md:mr-20 ">
                    <div className="flex gap-4">
                      <span className="bg-white p-3 rounded-full">
                      <FaFacebookF size={25} className="text-gray-800 cursor-pointer hover:text-gray-900 transition-colors" />
                      </span>
                      <span className="bg-white p-3 rounded-full">
                      <FaLinkedinIn size={25} className="text-gray-800 cursor-pointer hover:text-gray-900 transition-colors" />
                      </span>
                      <span className="bg-white p-3 rounded-full">
                      <FaInstagram size={25} className="text-gray-800 cursor-pointer hover:text-gray-900 transition-colors" />
                      </span>
                      <span className="bg-white p-3 rounded-full">
                      <FaYoutube size={25} className="text-gray-800 cursor-pointer hover:text-gray-900 transition-colors" />
                      </span>
                      <span className="bg-white p-3 rounded-full">
                      <FaXTwitter size={25} className="text-gray-800 cursor-pointer hover:text-gray-900 transition-colors" />
                      </span>
                    </div>
                    <div className="text-center text-gray-300 text-sm mt-4 font-poppins pt-2">
                      &copy; Copyright 2024 All Rights Reserved
                    </div>
                  </div>
                
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-4 border-t border-gray-400 font-semibold pt-4 text-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex items-center justify-center  gap-2 text-gray-200">
              <span className="bg-white p-3 rounded-full"><FaPhoneAlt color="black" /> </span>+91 9928189510
              </div>

              <div className="flex items-center justify-center  gap-2 text-gray-200">
              <span className="bg-white p-3 rounded-full"><FaEnvelope color="black"/></span>
               contact@anantvega.com
              </div>

              <div className="flex items-center justify-center  gap-2 text-gray-200">
              <span className="bg-white p-3 rounded-full"><FaMapMarkerAlt color="black"/></span> Mumbai, Maharashtra, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;