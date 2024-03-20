import React from "react";
import foodImage from "/src/assets/food.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" text-white bg-black">
      <div>
        <img src={foodImage} alt="error" className="w-full xl:h-[523px]" />
      </div>

      <div className="text-white mx-20 md:mx-56 xl:py-10">
        <p className="text-[29px] font-semibold text-center mt-8">
          Choose Your Plan
        </p>
        <div className=" pb-8 grid lg:grid-cols-2 xl:grid-cols-3">
          <div className="border rounded-md mt-10 h-72 p-4 flex flex-col justify-between lg:ml-4 xl:ml-6">
            <div>
              <p className="text-[18px] font-semibold">Basic Plan</p>
              <p className="text-gray-500 text-[17px]">
                Fitmeals is not a diet system that promotes cleanses, pills,
                preserved foods.
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[18px]">Price:500</p>
              <Link to="/basic">
                <button className="bg-blue-500 p-2 rounded-md mt-3">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>

          <div className="border mt-10 rounded-md h-72 p-4 flex flex-col justify-between lg:ml-4 xl:ml-6">
            <div>
              <p className="text-[18px] font-semibold">Premium Plan</p>
              <p className="text-gray-500 text-[17px]">
                Fitmeals is not a diet system that promotes cleanses, pills,
                preserved foods.
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[18px]">Price:1000</p>
              <Link to="/premium">
                <button className="bg-blue-500 p-2 rounded-md mt-3">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>

          <div className="border mt-10 rounded-md h-72 p-4 flex flex-col justify-between lg:ml-4 xl:ml-6">
            <div>
              <p className="text-[18px] font-semibold">Ultimate Plan</p>
              <p className="text-gray-500 text-[17px]">
                Fitmeals is not a diet system that promotes cleanses, pills,
                preserved foods.
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[18px]">Price:2000</p>
              <Link to="/ultimate">
                <button className="bg-blue-500 p-2 rounded-md mt-3">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
