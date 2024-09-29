import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero" className="bg-gray-900 text-white">
      <div className="container flex flex-col justify-center items-center mx-auto px-8 py-16 lg:flex-row lg:justify-between lg:items-start lg:px-24 lg:py-32">
        <div className="flex flex-col space-y-10 text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold lg:text-6xl">
            Financial data with no news.
          </h1>
          <p className="text-2xl text-gray-400">
            Search relevant financial documents without fear mongering and fake
            news.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              to="/search"
              className="py-5 px-10 text-2xl font-bold text-white bg-lightGreen rounded lg:py-4 hover:opacity-70"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
