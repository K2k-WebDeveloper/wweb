import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/200w (1).gif";

function About1() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div className="px-10 py-10">
      <h2
        className="py-3 flex justify-center font-bold text-[17px] lg:text-[25px] "
        data-aos="fade-up"
      >
        About Us 
      </h2>
      <div div className="py-4 px-6">
        <div className="lg:flex md:flex md:justify-center md:" data-aos="fade-up">
          <img src={img1} className="h-44 lg:pr-52 mx-4" />
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
  );
}

export default About1;
