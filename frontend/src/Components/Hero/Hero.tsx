import React from "react";
import hero from "./hero.png";
import { Link } from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero" className="bg-gray-900 py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-10">
          <h1 className="text-5xl font-bold text-white text-center lg:text-left">
            Financial data with no news.
          </h1>
          <p className="text-xl text-gray-400 text-center lg:text-left">
            Search relevant financial documents without fear mongering and fake
            news.
          </p>
          <div className="text-center lg:text-left">
            <Link
              to="/search"
              className="py-4 px-8 bg-lightGreen text-white rounded-lg text-lg font-bold hover:bg-lightGreen-dark"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src={hero}
            alt="Financial data"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
