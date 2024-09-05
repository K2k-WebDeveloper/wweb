import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Footer from "./component/footer/Footer";
import About from "./component/About/About";
import Navbar from "./component/nav/Navbar";
import Preloader from "./component/preloader/Preloader"; // Import the Preloader component

const App = () => {
  const [loading, setLoading] = useState(true); // State to control preloader

  return (
    <>
      {loading ? (
        // Render Preloader for 5 seconds
        <Preloader setLoading={setLoading} />
      ) : (
        // Render the main content once loading is done
        <Router>
          <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
