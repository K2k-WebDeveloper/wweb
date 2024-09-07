import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/200w.gif";
import img2 from "../../assets/giphy (1).gif";

function Content() {
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
        className="py-3 flex justify-center font-bold text-[17px] lg:text-[25px]"
        data-aos="fade-up"
      >
        Our Commitment to the Community
      </h2>
      <div className="py-4 px-6">
        <div className="lg:flex" data-aos="fade-up">
          <p className="lg:pr-48">
            At Smart Shop Jordan, we're not just about offering top-notch
            cannabis goods; we also care about the community. We aim to enhance
            lives, boost well-being, and help to develop our local communities.
            Our mission is to offer people top-notch sourced cannabis that has a
            positive impact on lives while pushing for a sustainable and
            inclusive future. Green practices are our top concern at every
            production step, from using eco-friendly packaging to growing
            cannabis.
          </p>
          <img src={img1} className="h-44 lg:pr-52" />
        </div>

        <div>
          <h3 className="py-5 font-extrabold" data-aos="fade-right">
            Why Choose Us?
          </h3>
          <div className="lg:flex" data-aos="fade-up">
            <p className="lg:pr-48">
              Smart Shop Jordan stands out with its unmatched product knowledge
              and customer care.
              <br/> <br/> Each product we create from our grown organic
              cannabis is always strong, clean, and works well. From growing to
              packaging, we stick to the highest standards while following local
              laws and industry best practices.
              <br/> <br/> We believe our customers should
              have the power to make informed choices. We achieve this by making
              sure details about our products, their benefits, and how to use
              them are easy to understand and find. 
              <br/> <br/>Your journey to better
              health is our top priority. Our skilled team is always ready to
              lend a hand and will suggest products that fit your specific needs
              best.
            </p>
            <img src={img2} className="h-52 lg:pr-52" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
