import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import space from '../assets/space.jpg';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { GrNext } from "react-icons/gr";
import { MdNavigateNext,MdNavigateBefore } from "react-icons/md";

import { GrPrevious } from 'react-icons/gr';

// Example image data (replace with your own images)
const images = [
  { id: 1, src: space },
  { id: 2, src: space },
  { id: 3, src: space },
  { id: 4, src: space },
  { id: 5, src: space },
];

export default function ImageSwiper() {
  return (
    <>
  
      <div className="relative w-full flex flex-col items-center text-white">
        {/* Stats Section */}
        <div className="bg-gray-200 text-black rounded-lg shadow-lg p-4 md:p-8 flex flex-row gap-4 md:gap-8 text-center font-michroma">
          <div className="w-full md:w-36">
            <h2 className="text-3xl md:text-5xl font-bold">1K+</h2>
            <p className="text-xs md:text-sm mt-2">STUDENTS CONNECTED</p>
          </div>
          <div className="w-full md:w-36">
            <h2 className="text-3xl md:text-5xl font-bold">5+</h2>
            <p className="text-xs md:text-sm mt-2">PROJECTS ONGOING</p>
          </div>
          <div className="w-full md:w-36">
            <h2 className="text-3xl md:text-5xl font-bold">15+</h2>
            <p className="text-xs md:text-sm mt-2">TEAM MEMBERS</p>
          </div>
        </div>

   
 
      </div>
           {/* Swiper Section */}
           <div className="relative w-full py-8">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1} // Default for mobile
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0, // No rotation
              stretch: 0, // No stretching
              depth: -100, // Negative depth to push the middle slide back
              modifier: 2, // Adjust the effect intensity
              slideShadows: false, // Disable shadows for a cleaner look
            }}
            breakpoints={{
              640: {
                slidesPerView: 2, // 2 slides for tablets
              },
              1024: {
                slidesPerView: 3, // 3 slides for desktops
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Autoplay, EffectCoverflow, Navigation]}
            className="mySwiper"
          >
            {/* Map through the images array to render slides dynamically */}
            {images.map((image, index) => (
              
              <SwiperSlide
                key={image.id}
                className="relative transition-transform duration-300"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className={`object-cover rounded-lg ${
                      // Apply smaller size to the centered slide
                      'swiper-slide-active' ? 'w-full h-54' : 'w-full h-auto'
                    } transition-transform duration-300`}
                    style={{ maxWidth: '100%', maxHeight: '100%' }} // Ensure original size
                  />
                  
                </div>
            
              </SwiperSlide>
              
            ))}
          </Swiper>
          

          {/* Navigation Buttons */}
          
          <div className="flex justify-center gap-4 mt-4">
  {/* Previous Button */}
  <button className="swiper-button-prev text-white px-6 py-6 rounded-full hover:scale-110 transition-all duration-300  flex items-center justify-center">
    <MdNavigateBefore />
  </button>

  {/* Next Button */}
  <button className="swiper-button-next text-white px-6 py-6 rounded-full    hover:scale-110 transition-all duration-300  flex items-center justify-center">
    <MdNavigateNext  />
  </button>
</div>
      
        </div>
    
 
    </>
  );
}