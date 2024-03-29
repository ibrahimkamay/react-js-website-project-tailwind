import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/banner1.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto h-[500px]">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex md:flex-row-reverse items-center justify-between">
            <div>
              <img src={banner1} alt="banner1" />
            </div>

            {/*  hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex md:flex-row-reverse items-center justify-between">
            <div>
              <img src={banner1} alt="banner1" />
            </div>

            {/*  hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Learn and Earn Money{" "}
                <span className="text-brandPrimary leading-snug">
                  in 4 Months
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
