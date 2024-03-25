import React from "react";

const About = () => {
  return (
    <div className="bg-[#f3f5ed] md:mx-24 lg:mx-48 p-5 xl:mx-52">
      <div className=" mx-2 p-4 text-center">
        <p className=" font-semibold my-2 text-[35px]">Our Mission</p>
        <p className="text-[15px] my-2">
          We are on a mission to bring awareness about the importance of eating
          well and to improve your relationship with food. The relationship
          between food and the human body is so intense yet ignored by everybody
          that often results in neglected health and ultimately health related
          problems. Our aim is to ensure that everybody has access to nutrient
          dense, convenient meals so that you don’t have to compromise on your
          nutrition because of your busy schedules.
        </p>
      </div>
      <div className="border mx-3 border-[#7ad03a] rounded-2xl py-10 my-4 text-center">
        <p className="text-center">
          <i className="fa-solid fa-quote-left text-[#7ad03a] fa-2xl my-4"></i>
        </p>
        <p className="my-3 italic">
          For us it’s not ‘just food’, it’s a matter of good lifestyle choices
          and eventually a better quality of life.
        </p>
      </div>
    </div>
  );
};

export default About;
