import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from '../../assets/marijuana-dispensary-products-illustration-1200x630-1085450290.jpg';


import img from '../../assets/giphy (1).gif'
import Cards from './Cards';


function OurProducts() {
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
        className='bg-cover bg-center lg:h-[65vh] opacity-85'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        < div className='py-10 mx-10 z-10 placeholder bg-[#d4efd2] bg-opacity-60 text-[#000] '>
         
        <h2
        className="py-10 flex justify-center font-bold text-[17px] lg:text-[25px] "
        data-aos="fade-up"
      >
        Our Products
      </h2>
      <div div className="py-4 px-6">
        <div className="lg:flex" data-aos="fade-up">
          <img src={img} className="h-48 px-5 lg:pr-52 md:px-52" />
          <p className="lg:pr-48">
            Welcome to the cloudland "Smart Shop Jordan," the ultimate
            destination for premium cannabis and related stuff that'll blow your
            mind and offer life-changing sensory encounters. The weed market's
            got tons of choices. Bad info can mess with your head making it hard
            to know if something's good for you. Do not be alarmed. "Smart Shop
            Jodan" is your go-to guide in navigating through these unfamiliar
            waters and finding the products that best suit your needs and
            preferences.
          </p>
        </div>
      </div>
      
        </div>
        
      </div>
      <Cards />
      
    </>
  );
}

export default OurProducts;
