import React from "react";
import foodImage from "/src/assets/food.jpg";
import { Link } from "react-router-dom";
import contact from "../assets/contact.jpg"

const Home = () => {
  return (
    <div>
      {/* Slide Image */}
      <div>
        <img src={foodImage} alt="error" className="w-full xl:h-[535px]" />
      </div>

      {/* Plan */}
      <div className="mx-20 md:mx-56 xl:py-10">
        <p className="text-[29px] font-semibold text-center mt-8">
          Choose Your Plan
        </p>
        <div className=" pb-8 grid lg:grid-cols-2 xl:grid-cols-3">
          <div className="border border-black rounded-md mt-10 h-72 p-4 flex flex-col justify-between lg:ml-4 xl:ml-6">
            <div>
              <p className="text-[18px] font-semibold">Basic Plan</p>
              <p className="text-gray-500 text-[17px]">
                Fitmeals is not a diet system that promotes cleanses, pills,
                preserved foods.
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[18px]">Price: 500</p>
              <Link to="/basic">
                <button className="bg-blue-500 p-2 rounded-md mt-3 text-white hover:bg-green-500 hover:text-black">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>

          <div className="border border-black mt-10 rounded-md h-72 p-4 flex flex-col justify-between lg:ml-4 xl:ml-6">
            <div>
              <p className="text-[18px] font-semibold">Premium Plan</p>
              <p className="text-gray-500 text-[17px]">
                Fitmeals is not a diet system that promotes cleanses, pills,
                preserved foods.
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[18px]">Price: 1000</p>
              <Link to="/premium">
                <button className="bg-blue-500 p-2 rounded-md mt-3 text-white hover:bg-green-500 hover:text-black">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>

          <div className="border border-black mt-10 rounded-md h-72 p-4 flex flex-col justify-between lg:ml-4 xl:ml-6">
            <div>
              <p className="text-[18px] font-semibold">Ultimate Plan</p>
              <p className="text-gray-500 text-[17px]">
                Fitmeals is not a diet system that promotes cleanses, pills,
                preserved foods.
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[18px]">Price: 2000</p>
              <Link to="/ultimate">
                <button className="bg-blue-500 p-2 rounded-md mt-3 text-white hover:bg-green-500 hover:text-black">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Our Benefit */}
      <div className="bg-pink-50 text-center p-4 py-16">
        <div className="mx-10 lg:mx-20 xl:mx-44">
          <p className="font-semibold text-[#7ad03a] text-[27px]">
            Our Benefits
          </p>
          <p className="my-2 font-semibold text-[20px] lg:text-[30px]">
            So Why Choose Fitmeals?
          </p>
          <p className="text-[15px]">
            Fitmeals is not a diet system that promotes cleanses, pills,
            preserved foods or any kind of disordered eating habits. We’re all
            about wholesome & nourishing foods that make you feel the best
            version of yourself.
          </p>
        </div>
        <div className="px-10 md:px-40 xl:px-36 lg:grid grid-cols-2 gap-6 xl:grid-cols-4">
          <div className="my-8">
            <p>
              <i className="fa-solid fa-apple-whole bg-[#7ad03a] text-white py-8 px-5 fa-2xl rounded-[50%]"></i>
            </p>
            <p className="font-semibold text-[18px] my-3">Fresh ingredients</p>
            <p className="text-[15px] my-3 text-gray-800">
              Procuring fresh and fundamental ingredients required for a
              wholesome meal.
            </p>
          </div>

          <div className="my-8">
            <p>
              <i className="fa-solid fa-star bg-[#7ad03a] text-white py-8 px-4 fa-2xl rounded-[50%]"></i>
            </p>
            <p className="font-semibold text-[18px] my-3">Finest quality</p>
            <p className="text-[15px] my-3 text-gray-800">
              All the meals are designed by our nutrition experts using only the
              best quality ingredients.
            </p>
          </div>

          <div className="my-8 lg:my-0 xl:my-8">
            <p>
              <i className="fa-solid fa-truck bg-[#7ad03a] text-white py-8 px-4 fa-2xl rounded-[50%]"></i>
            </p>
            <p className="font-semibold text-[18px] my-3">On time delivery</p>
            <p className="text-[15px] my-3 text-gray-800">
              Helping you stay ahead of your diet plans.
            </p>
          </div>

          <div className="my-8 lg:my-0 xl:my-8">
            <p>
              <i className="fa-solid fa-check bg-[#7ad03a] text-white py-8 px-5 fa-2xl rounded-[50%]"></i>
            </p>
            <p className="font-semibold text-[18px] my-3">Preservative-free</p>
            <p className="text-[15px] my-3 text-gray-800">
              Your ultimate plan for eating clean without added preservatives.
            </p>
          </div>
        </div>
      </div>

      

      {/* Need Help */}
      <div className="lg:flex md:mx-24 my-4 xl:mx-56 xl:my-10">
        <div className="text-center p-5 xl:text-start">
          <p className="text-[#76c639] font-semibold text-[24px] xl:text-[35px]">
            Need Help?
          </p>
          <p className="font-semibold text-[22px] xl:text-[35px]">
            Talk to our nutritionists!
          </p>
          <p className="text-gray-600 text-[15px] my-3 xl:text-[17px]">
            Don’t know where to start or have any specific health conditions?
            Consult our experienced nutritionists and get your meals customised
            accordingly!
          </p>
          <button className="bg-red-700 p-4 text-white rounded-full font-semibold hover:bg-[#76c639]">
            Contact now
          </button>
        </div>
        <div className="hidden lg:flex">
          <img src={contact} className="rounded-full" />
        </div>
      </div>


      {/* Subscribed */}
      <div className="bg-[#76c639]">
        <div className="text-center p-6 md:mx-20">
          <p className="font-semibold text-[25px] my-2">
            Join our <span className="text-white">mailing list</span>
          </p>
          <p className="text-[15px] my-2">
            Subscribe to our newsletter to stay up to date with our discounts,
            new products, recipes & nutrition tips.
          </p>
          <div className="my-3 lg:my-8">
            <input
              placeholder="Your email ...."
              className=" px-2 py-3 border-none rounded-l-full md:px-4 xl:px-7"
            />
            <button className="bg-red-700 p-3 text-[14px] font-semibold text-white rounded-r-full hover:bg-black lg:px-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
