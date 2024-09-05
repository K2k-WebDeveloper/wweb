// src/Preloader.js
import React, { useEffect, useState } from 'react';
import img from "../../assets/200w.gif"

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    // Set a 5-second timer for the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#28612b]">
      {/* Replace 'your-image.png' with the actual image URL or import it */}
      <img
        src={img}
        alt="Loading..."
        className="w-50 h-50"
      />
    </div>
  );
};

export default Preloader;
