import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/weed-botanical-cannabis-leaf-illustration-vector-removebg-preview.png";
import img2 from "../../assets/How-To-Roll-a-Blunt-removebg-preview.png";
import img3 from "../../assets/download__1_-removebg-preview.png";
import img4 from "../../assets/images__1_-removebg-preview.png";


function Content() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div className="px-10 py-5">
      <h2
        className="py-3 flex justify-center font-bold text-[17px] lg:text-[25px]"
        data-aos="fade-up"
      >
        What We Provide
      </h2>
  <div className="py-4 px-6 lg:flex lg:space-x-6 space-y-4 lg:space-y-0 justify-center">
  
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1a5d47] dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg h-24" src={img1} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Weed</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fresh Weed Extracted from Plant</p>
    </div>
  </div>
  
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1a5d47] dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg h-24" src={img2} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blunt</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pre Rolled Blunt Available </p>
    </div>
  </div>
  
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1a5d47] dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg h-24" src={img3} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Greengo</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fresh Blunt Extracted from Plant</p>
    </div>
  </div>
  
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1a5d47] dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg h-24 px-2" src={img4} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Paddo Kweekset</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fresh Blunt Extracted from Plant</p>
    </div>
  </div>




      </div>
    </div>
  );
}

export default Content;
