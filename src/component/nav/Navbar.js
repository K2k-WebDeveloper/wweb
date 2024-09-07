import React, { useState } from "react";
import logo from "../../assets/weed-botanical-cannabis-leaf-illustration-vector-removebg-preview.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-[#1a5d47] -z-10 opacity-95">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-20" alt="IT Future Network Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Smart Shop Jordan
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#1a5d47] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#1a5d47] dark:focus:ring-[#1a5d47]"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l12 12M1 13L13 1"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">
            <li>
                <a
                  href="/"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#55bc99] md:p-0 dark:text-white md:dark:hover:text-[#55bc99] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#55bc99] md:p-0 dark:text-white md:dark:hover:text-[#55bc99] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/product"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#55bc99] md:p-0 dark:text-white md:dark:hover:text-[#55bc99] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Our Products
                </a>
              </li>

              <li>
                <a
                  href="/whoweare"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#55bc99] md:p-0 dark:text-white md:dark:hover:text-[#55bc99] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Who We Are
                </a>
              </li>
              
              <li>
                <a
                  href="https://wa.me/31645859570"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#55bc99] md:p-0 dark:text-white md:dark:hover:text-[#55bc99] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
