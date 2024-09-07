import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from '../../assets/da47cccdf3779d6d22bb5b78dd63b76b37-weed-bodega-2.1x.rsocial.w1200.webp';
import Content from './Content';

import img from '../../assets/weed-botanical-cannabis-leaf-illustration-vector-removebg-preview.png'
import FeatureSection from './FeatureSection';
import About1 from './About1';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animation in milliseconds
      easing: 'ease-in-out', // easing function for the animation
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
    
      
        <div
        className='bg-cover bg-center h-[85vh] opacity-85'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        <div className='py-10 mx-10 z-10 placeholder '>
          <div className='lg:mx-60 bg-[#d4efd2] bg-opacity-60 rounded-xl '>
          <h2
            className='flex justify-center text-[#28612b] pt-20 font-bold text-[30px] '
            data-aos="fade-down"
          >
            Smart Shop Jordan
          </h2>

          <h2
            className='flex justify-center text-[#28612b] font-bold text-[30px] lg:text-[40px]'
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <img className='h-28' src={img} />
          </h2>

          <h2
            className='flex justify-center text-[#28612b] py-6 font-bold text-[12px] lg:text-[30px]'
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Where roots take flight and land on green dreams in a click
          </h2>

          <div className="flex justify-center items-center py-6">
          <a href="https://wa.me/31645859570">
  <button
    className="text-[#28612b] hover:text-[#fff] w-60 py-3 font-bold text-[30px] bg-[#151529] hover:bg-[#1a5d47] rounded-lg "
    data-aos="fade-up"
    data-aos-delay="600"
  >
    Get yours
  </button>
</a>
</div>
          </div>
        </div>
      </div>
      <About1 />
      <Content />
      <FeatureSection />
    </>
  );
}

export default Home;
