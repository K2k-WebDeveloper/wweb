import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/giphy.gif";
import img2 from "../../../assets/tumblr_dbc7597dc40455ab6354d3bb5dc3f5a2_e52821c7_400.gif";

function Work() {
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
        About Smart Shop Jordan
      </h2>
      <div className="py-4 px-6">
        <h3 className="py-5 font-extrabold" data-aos="fade-right">
          Welcome to Smart Shop Jordan
        </h3>
        <div className="lg:flex" data-aos="fade-up">
          <p className="lg:pr-48">
            At Smart Shop Jordan, we are dedicated to providing premium cannabis
            products that meet the highest standards of quality and safety. Our
            journey began with a vision to offer a curated selection of top-tier
            cannabis products that enhance the well-being of our customers while
            fostering a community of responsible consumers.
          </p>
          <img src={img1} className="h-44 lg:pr-52" />
        </div>

        <div>
          <h3
            className="py-5 font-extrabold flex justify-center"
            data-aos="fade-up"
          >
            Why Choose Us?
          </h3>
          <div className="lg:flex" data-aos="fade-up">
            <img src={img2} className="h- lg:pr-52" />
            <p className="lg:pr-48">
              At Smart Shop Jordan, we prioritize the health and satisfaction of
              our customers. Our commitment to quality is reflected in every
              aspect of our business, from the cultivation of our cannabis to
              the packaging and delivery of our products. We are dedicated to
              sustainable practices and ethical sourcing, ensuring that our
              products not only meet but exceed industry standards.
              <li>
                <span className="font-bold">Premium Quality:</span> We handpick
                our cannabis strains and products to ensure they meet the
                highest standards of potency and purity.
              </li>
              <li>
                <span className="font-bold">Transparency:</span> Our lab-tested
                products come with detailed reports, providing you with full
                confidence in what you’re consuming.
              </li>
              <li>
                <span className="font-bold">Customer-Centric Approach:</span>{" "}
                Our knowledgeable team is here to assist you in finding the
                perfect products to suit your needs and preferences.
              </li>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-[#fff]">
          <h3 className="py-10 font-extrabold " data-aos="fade-right">
            Join Us on Our Journey
          </h3>

          <div className="lg:flex lg:justify-center" data-aos="fade-up">
            <p className="lg:">
              Whether you are a seasoned cannabis enthusiast or new to the world
              of cannabis, Smart Shop Jordan is here to provide you with
              exceptional products and an unparalleled shopping experience.
              Explore our range of offerings and experience the difference that
              quality and care can make. 
              <br/> <span className="font-bold flex justify-center">Thank you for choosing Smart Shop
              Jordan. We look forward to serving you.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
