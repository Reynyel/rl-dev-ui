import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Carousel from "./Carousel";
import Responsive from "./Responsive";
import { FooterWithSocialLinks } from "./Footer";
import Hero from "./Hero";
import CaseStudies from "./Case";
import Build from "./Build";

function App() {
  return (
    <>
      <Header />
      {/* Full viewport height for this section */}
      <div className="pt-16 flex justify-center items-center mx-auto max-w-screen-xl flex-wrap min-h-screen">
        <div dir="ltr">
          <div className="flex flex-col max-w-lg me-8 pe-8 items-start text-start">
            <h1 className="text-5xl font-bold mb-4">
              Great <span className="text-purple-600">Product</span> is built by
              great teams
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3"
            >
              Let's get started!
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="/images/Hero-Wrapper__image--center.png"
            alt="Team working together"
          />
        </div>
      </div>

      {/* Ensure this section takes up at least the full viewport height */}
      <div className="mb-16 min-h-screen flex flex-col">
        <Hero />
      </div>

      <div className="min-h-screen">
        <CaseStudies />
      </div>

      <div className="min-h-screen">
        <Build />
      </div>

      {/* Uncomment this if you want a footer */}      
      <FooterWithSocialLinks />
    </>
  );
}

export default App;
