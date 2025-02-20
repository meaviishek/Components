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
        <img src={bglogo1} alt="Background Logo" className="w-auto h-full object-cover opacity-5" />
      </div>

      <div className="relative z-10">
        <div className="pt-6 pb-4 max-w-full mx-auto">
          {/* Top Section */}
          <div className="flex md:flex-row flex-col md:gap-0 gap-8 ">
            {/* Left Section */}
         
            <div className="flex flex-col items-center justify-center md:w-2/5 ">
              <img src={logo} alt="Company Logo" className="w-auto h-32 mb-4 mt-4" />
              <p className="text-gray-300 text-2xl md:text-4xl font-michroma text-center md:text-left">Unit of DOTX</p>
            </div>
          
            {/* Middle Section */}
            <div className="font-michroma lg:w-3/5">
            <div className="flex flex-col-reverse gap-16 md:flex-row justify-between items-center ">
   
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
  <div className="flex flex-col items-center md:items-end sm:4 md:mr-10 lg:mr-20">
    <img src={india} alt="Make in India" className="w-auto h-32" />
  </div>
</div>


              <div className="md:mt-2 mt-8 border-t border-gray-400 pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 ml-6 lg:ml-0 gap-20 ">
                  <div className="flex flex-col gap-2 text-lg lg:text-xl">
                    <button className="font-semibold mb-2 flex items-center gap-2 hover:scale-105 transition-all duration-300"><MdDownloadForOffline size={25}/>Brochure</button>
                    <button className="font-semibold mb-2 flex items-center gap-2 hover:scale-105 transition-all duration-300"><MdDownloadForOffline size={25}/>Membership</button>
                    <h3 className="font-semibold mb-2 font-michroma text-lg ml-8">COMPANY</h3>
                  </div>

                  <div className="flex flex-col items-center md:items-start font-poppins gap-1 text-xl">
                   
                    <p className="text-gray-300">About Us</p>
                    <p className="text-gray-300">Career</p>
                    <p className="text-gray-300">Contact Us</p>
                  </div>
                  </div>
                  <div className="flex flex-col items-center justify-center  lg:items-end mt-8 lg:-mt-16 md:mr-20 ">
                    <div className="flex gap-4">
                      <span className="bg-white p-2 rounded-full hover:scale-105 transition-all duration-300">
                      <FaFacebookF size={25} className="text-gray-800 cursor-pointer hover:text-gray-900 transition-colors" />
                      </span>
                      <span className="bg-white p-2 rounded-full hover:scale-105 transition-all duration-300">
                      <FaLinkedinIn size={25} className="text-gray-800 cursor-pointer hover:text-gray-900 transition-colors" />
                      </span>
                      <span className="bg-white p-2 rounded-full hover:scale-105 transition-all duration-300">
                      <FaInstagram size={25} className="text-gray-800 cursor-pointer hover:text-gray-900 transition-colors" />
                      </span>
                      <span className="bg-white p-2 rounded-full hover:scale-105 transition-all duration-300">
                      <FaYoutube size={25} className="text-gray-800 cursor-pointer hover:text-gray-900 transition-colors" />
                      </span>
                      <span className="bg-white p-2 rounded-full hover:scale-105 transition-all duration-300">
                      <FaXTwitter size={25} className="text-gray-800 cursor-pointer hover:text-gray-900 transition-colors" />
                      </span>
                    </div>
                    <div className="text-center justify-center items-center text-gray-300 text-sm mt-4 font-poppins pt-2">
                      &copy; Copyright 2024 All Rights Reserved
                    </div>
                  </div>
                
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-4 border-t border-gray-400 font-semibold pt-4 text-2xl">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
    {/* Phone */}
    <div className="flex items-center justify-center gap-2 text-gray-200 hover:text-white transition-colors duration-300">
      <span className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
        <FaPhoneAlt className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6" color="black" />
      </span>
      +91 9928189510
    </div>

    {/* Email */}
    <div className="flex items-center justify-center gap-2 text-gray-200 hover:text-white transition-colors duration-300">
      <span className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
        <FaEnvelope className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6" color="black" />
      </span>
      contact@anantvega.com
    </div>

    {/* Location */}
    <div className="flex items-center justify-center gap-2 text-gray-200 hover:text-white transition-colors duration-300">
      <span className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
        <FaMapMarkerAlt className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6" color="black" />
      </span>
      Mumbai, Maharashtra, India
    </div>
  </div>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;