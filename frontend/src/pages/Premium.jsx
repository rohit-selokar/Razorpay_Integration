import React from "react";
import primium_1 from "../assets/primium-1.jpg";
import basic from "../assets/basic.jpg";
import checkoutHandler from "../checkoutHandler";

const Premium = () => {
  return (
    <div>
      <div className="relative">
        <p className="text-center text-red-600 font-bold text-[30px] font-sacramento my-5">
          Maintenance Meal Plan
        </p>
        <img
          src={basic}
          alt="weight loss Meal plan"
          className="opacity-90 w-full h-auto md:h-64 lg:h-80 xl:h-96"
        />
      </div>

      <div className="py-20 my-24 bg-gray-300 lg:flex md:px-[5%] lg:px-[8%] xl:px-[15%] text-gray-800 items-center">
        <div className="mx-5 pt-5 text-center lg:text-start">
          <p className="leading-loose">
            Just looking for healthy food to help you maintain your weight and
            lead a healthy lifestyle? This is the plan for you! The meals are
            well balanced and consist of complex carbohydrates, lean protein,
            healthy fats and generous portions of fruits and vegetables which
            add all the essential vitamins, minerals and fibre to your diet.
          </p>
          <p className="leading-loose py-8">
            Losing weight is hard but maintaining your weight and just eating
            healthy in general can be a challenge for a lot of people which is
            why you can trust us to take care of that for you.
          </p>
          <button className="bg-pink-700 text-white font-semibold p-2 rounded-md">
            View Sample Menu
          </button>
        </div>
        <div className="flex flex-col items-center lg:flex-none">
          <p className="my-4 font-bold text-[23px] text-red-600 font-sacramento lg:mb-8">
            What out meals look like
          </p>
          <img src={primium_1} alt="error" className="lg:h-64 h-60" />
        </div>
      </div>

      <div className="bg-[#7ad03a]">
        <div className="text-center text-[23px] font-semibold pt-5 font-sacramento">
          <p>Choose your ideal program &</p>
          <p>get started</p>
        </div>
        <div className="mx-10 text-center lg:grid lg:grid-cols-2 xl:grid-cols-3 md:px-[5%] lg:px-[8%] xl:px-[12%]">
          <div className="bg-white my-5 rounded-lg py-10 lg:ml-6">
            <p className="font-bold">
              <span className="text-red-700">1 Weeks</span> Plan
            </p>
            <div className="leading-loose">
              <p>Freshly prepared meals</p>
              <p>Home delivery</p>
              <p>No refined sugars</p>
              <p>Planned by nutritionists</p>
              <p>Plan flexibility</p>
              <p className="font-bold">
                Rs.<span className="text-red-700">1000</span>
              </p>
            </div>
            <button
              className="bg-red-600 text-white p-3 px-6 rounded-xl mt-4"
              onClick={() => checkoutHandler(1000)}
            >
              Order Now
            </button>
          </div>

          <div className="bg-white my-5 rounded-lg py-10 lg:ml-6">
            <p className="font-bold">
              <span className="text-red-700">1 Months</span> Plan
            </p>
            <div className="leading-loose">
              <p>Freshly prepared meals</p>
              <p>Home delivery</p>
              <p>No refined sugars</p>
              <p>Planned by nutritionists</p>
              <p>Plan flexibility</p>
              <p className="font-bold">
                Rs.<span className="text-red-700">1400</span>
              </p>
            </div>
            <button
              className="bg-red-600 text-white p-3 px-6 rounded-xl mt-4"
              onClick={() => checkoutHandler(1400)}
            >
              Order Now
            </button>
          </div>

          <div className="bg-white my-5 rounded-lg py-10 lg:ml-6">
            <p className="font-bold">
              <span className="text-red-700">6 Months</span> Plan
            </p>
            <div className="leading-loose">
              <p>Freshly prepared meals</p>
              <p>Home delivery</p>
              <p>No refined sugars</p>
              <p>Planned by nutritionists</p>
              <p>Plan flexibility</p>
              <p className="font-bold">
                Rs.<span className="text-red-700">3000</span>
              </p>
            </div>
            <button
              className="bg-red-600 text-white p-3 px-6 rounded-xl mt-4"
              onClick={() => checkoutHandler(3000)}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
