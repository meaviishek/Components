import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../assets/BigLogo-cropped.svg';
import india from '../assets/make.png';
import bglogo1 from '../assets/header-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#2c535a] text-white relative">
      {/* Background Logo */}
      <div className="absolute inset-0 z-0">
        <img src={bglogo1} alt="Background Logo" className="w-auto h-[535px] object-cover opacity-5" />
      </div>

      <div className="relative z-10">
        <div className="pt-16 pb-8 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="flex flex-col items-center justify-center ">
              <img src={logo} alt="Company Logo" className="w-auto h-32 mb-4 mt-4" />
              <p className="text-gray-400 text-2xl md:text-3xl font-michroma text-center md:text-left">Unit of DOTX</p>
            </div>

            {/* Middle Section */}
            <div className="font-michroma">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="text-xl font-medium mb-4">Fill the Space......</h3>
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <input
                      type="email"
                      placeholder="Enter your E-Mail ID"
                      className="p-2 bg-[#294e54] text-center text-white rounded-lg focus:outline-none w-full md:w-64"
                    />
                    <button className="bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors w-full md:w-auto">
                      Submit
                    </button>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center md:items-end">
                  <img src={india} alt="Make in India" className="w-auto h-24" />
                </div>
              </div>

              <div className="mt-8 border-t border-gray-400 pt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                  <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-semibold mb-2">Download</h3>
                    <p className="text-gray-400">Brochure</p>
                    <p className="text-gray-400">App</p>
                  </div>

                  <div className="flex flex-col items-center md:items-start font-poppins">
                    <h3 className="font-semibold mb-2 font-michroma">Company</h3>
                    <p className="text-gray-400">About Us</p>
                    <p className="text-gray-400">Career</p>
                    <p className="text-gray-400">Contact Us</p>
                  </div>
                  </div>
                  <div className="flex flex-col items-center md:items-end mt-8 lg:mt-0">
                    <div className="flex gap-4">
                      <FaFacebookF size={35} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
                      <FaLinkedinIn size={35} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
                      <FaInstagram size={35} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
                      <FaYoutube size={35} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
                      <FaXTwitter size={35} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
                    </div>
                    <div className="text-center text-gray-500 text-sm mt-4 font-poppins pt-2">
                      &copy; Copyright 2024 All Rights Reserved
                    </div>
                  </div>
                
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-400 pt-8 text-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex items-center justify-center  gap-2 text-gray-300">
                <FaPhoneAlt /> 9928189510
              </div>

              <div className="flex items-center justify-center  gap-2 text-gray-300">
                <FaEnvelope /> contact@anantvega.com
              </div>

              <div className="flex items-center justify-center  gap-2 text-gray-300">
                <FaMapMarkerAlt /> Mumbai, Maharashtra, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;