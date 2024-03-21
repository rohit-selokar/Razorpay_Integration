import React from "react";
import axios from "axios";
import basic from "../assets/basic.jpg";
import basic_1 from "../assets/basic-1.jpg";

const Basic = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/getkey");

    const {
      data: { data },
    } = await axios.post("http://localhost:4000/order", {
      amount,
    });

    const options = {
      key,
      amount: data.amount,
      currency: "INR",
      name: "Fit Meals",
      description: "Nutritious Culinary Delights",
      image: "https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-black.png",
      order_id: data.id,
      callback_url: "http://localhost:3000/verify",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#7ad03a",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

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

      <div className="py-10 lg:my-20 bg-[#f3f5ed] lg:flex md:px-[5%] lg:px-[8%] xl:px-[15%] text-gray-800 items-center">
        <div className="mx-5 pt-5 text-center lg:text-start">
          <p className="leading-loose">
            If your aim is to lose weight in a gradual, healthy manner then this
            diet would meet your requirements. The meals are well balanced and
            consist of complex carbohydrates, lean protein, healthy fats and
            generous portions of fruits and vegetables which add all the
            essential vitamins, minerals and fibre to your diet.
          </p>
          <p className="leading-loose py-8">
            Disclaimer: This isn’t going to be any type of a crash diet which
            will give you magical results; we’ll aim for 2-4kgs per month and
            all your meals will be designed by our nutritionists who focus not
            only on seeing results but also on ensuring that there no compromise
            on your mental and physical health.
          </p>
          <button className="bg-pink-700 text-white font-semibold p-2 rounded-md">
            View Sample Menu
          </button>
        </div>
        <div className="flex flex-col items-center lg:flex-none">
          <p className="my-4 font-bold text-[20px] font-sacramento">
            What out meals look like:
          </p>
          <img src={basic_1} alt="error" />
        </div>
      </div>

      <div className="bg-[#7ad03a] pb-7">
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
            </div>
            <button
              className="bg-red-600 text-white p-3 px-6 rounded-xl mt-4"
              onClick={() => checkoutHandler(500)}
            >
              Order Now
            </button>
          </div>

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
            </div>
            <button className="bg-red-600 text-white p-3 px-6 rounded-xl mt-4">
              Order Now
            </button>
          </div>

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
            </div>
            <button className="bg-red-600 text-white p-3 px-6 rounded-xl mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
