import React from "react";
import basic from "../assets/basic.jpg";
import ultimate_1 from "../assets/ultimate-1.jpg";
import checkoutHandler from "../checkoutHandler";

const Ultimate = () => {
  return (
    <div>
      <div className="relative">
        <p className="text-center text-red-600 font-bold text-[30px] font-sacramento my-5">
          Athletic Plan
        </p>
        <img
          src={basic}
          alt="weight loss Meal plan"
          className="opacity-90 w-full h-auto md:h-64 lg:h-80 xl:h-96"
        />
      </div>

      <div className="lg:py-10 border pb-5 my-20 bg-[#f3f5ed] lg:flex md:px-[5%] lg:px-[8%] xl:px-[15%] text-gray-800 items-center">
        <div className="mx-5 pt-5 text-center lg:text-start">
          <p className="leading-loose py-8">
            A diet rich in protein is essential for promoting muscle growth and
            repair while simultaneously burning fat to ensure you stay in shape.
            This plan includes high protein meals for individuals who want to
            gain weight or build muscle. If you are a fitness enthusiast who’s
            looking for meals higher in calories and lean protein then we’ve got
            you covered.
          </p>

          <button className="bg-pink-700 text-white font-semibold p-2 rounded-md">
            View Sample Menu
          </button>
        </div>
        <div className="flex flex-col items-center lg:flex-none">
          <p className="my-4 font-bold text-[20px] font-sacramento">
            What out meals look like:
          </p>
          <img src={ultimate_1} alt="error" className="h-44 w-68" />
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
              <p className="font-bold">Rs.<span className="text-red-700">3000</span></p>
            </div>
            <button className="bg-red-600 text-white p-3 px-6 rounded-xl mt-4"
              onClick={()=>checkoutHandler(3000)}>
              Order Now
            </button>
          </div>

          <div className="bg-white my-5 rounded-lg py-10 lg:ml-6">
            <p className="font-bold">
              <span className="text-red-700">3 Months</span> Plan
            </p>
            <div className="leading-loose">
              <p>Freshly prepared meals</p>
              <p>Home delivery</p>
              <p>No refined sugars</p>
              <p>Planned by nutritionists</p>
              <p>Plan flexibility</p>
              <p className="font-bold">Rs.<span className="text-red-700">4300</span></p>
            </div>
            <button className="bg-red-600 text-white p-3 px-6 rounded-xl mt-4"
              onClick={()=>checkoutHandler(4300)}>
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
              <p className="font-bold">Rs.<span className="text-red-700">5000</span></p>
            </div>
            <button className="bg-red-600 text-white p-3 px-6 rounded-xl mt-4"
              onClick={()=>checkoutHandler(5000)}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ultimate;
