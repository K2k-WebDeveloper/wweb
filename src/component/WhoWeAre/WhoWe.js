import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../assets/Best-Weed-Shop.jpeg";

import img from "../../assets/giphy (2).gif";
import Content from "./Content";

function WhoWe() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animation in milliseconds
      easing: "ease-in-out", // easing function for the animation
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center lg:h-[75vh] opacity-85"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-10 mx-10 z-10 placeholder bg-[#d4efd2] bg-opacity-60 text-[#000] ">
          <h2
            className="py-10 flex justify-center font-bold text-[17px] lg:text-[25px]  "
            data-aos="fade-up"
          >
            Who We Are
          </h2>
          <div div className="py-4 px-6">
            <div className="lg:flex" data-aos="fade-up">
              <img src={img} className="h-44 px-0 lg:px-0 lg:pr-52 md:px-52" />
              <p className="lg:pr-48">
                We at Smart Shop Jordan take great satisfaction in providing
                top-notch, laboratory-tested cannabis products to improve your
                health. We are more than just a cannabis store. We are an
                enthusiastic group of professionals committed to spreading the
                word about the advantages of cannabis for recreation, wellness,
                and health.
                <br />
                <br /> We take pride in the producers we support and make sure
                to uphold their standards by offering top-notch products that
                are fresh and of the highest quality while adhering to ethical
                practices. Merely being "good enough' is not our goal; we aim
                for excellence so that our customers can savor all the
                advantages fully.
                <br />
                <br />
                We aim to enhance the quality of people's lives through
                education and inspiration while providing them with access, to
                ethically produced cannabis items.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Content />
    </>
  );
}

export default WhoWe;
