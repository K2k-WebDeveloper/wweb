import React from "react";
import img1 from "../../assets/mush22.webp";
import img2 from "../../assets/download.jpg";
import img3 from "../../assets/images.jpg";
import img4 from "../../assets/download (1).jpg";

function Cards() {
  return (
    <div className="py-10 mx-10">
      <h2 className="font-bold text-3xl flex justify-center py-8">
        Various Products
      </h2>
      <p className="flex justify-center py-3">
        With our products, we strive to brighten your mood, ease your day, and
        inspire you to explore the possibilities in life.
      </p>
      <p className="flex justify-center pb-10">
        We pride ourselves on offering an extensive selection of cannabis
        products, including:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1a5d47] dark:border-gray-700 cursor-pointer">
          <a href="#">
            <img class="rounded-t-lg" src={img1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Magic Truffles:{" "}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
              With nature's key explore mind-expanding adventure, unlock higher
              consciousness and profound experiences with Magic Truffles.
            </p>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1a5d47] dark:border-gray-700 cursor-pointer">
          <a href="#">
            <img class="rounded-t-lg " src={img2} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Greengo:{" "}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
            Enjoy the pure essence of eco-friendly smoking with our exquisite Greengo, a natural alternative that’s gentle on both you and the planet.
            </p>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1a5d47] dark:border-gray-700 cursor-pointer">
          <a href="#">
            <img class="rounded-t-lg" src={img3} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Paddo Kweekset:{" "}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
            Our beginner-friendly mushroom growing kit allows you to cultivate your own psychedelic adventure at home.
            </p>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1a5d47] dark:border-gray-700 cursor-pointer">
          <a href="#">
            <img class="rounded-t-lg w-full" src={img4} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              RAW:{" "}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
            For the purest natural experience, RAW's raw papers and accessories will elevate your smoking ritual.   
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
