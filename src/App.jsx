import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p- flex-wrap">
        <div className="flex flex-col max-w-lg">
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
        <div className="flex-auto">
          <img
            className="h-auto w-full"
            src="/public/images/Hero-Wrapper__image--center.png"
            alt="Team working together"
          />
        </div>
      </div>
    </>
  );
}

export default App;
