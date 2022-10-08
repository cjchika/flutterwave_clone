import React from "react";
import { ImSphere } from "react-icons/im";

const APIsection = () => {
  return (
    <section className="md:py-[140px] bg-[#f8fafd]">
      <div className="xl:mx-[90px] ">
        <h2 className="font-millik text-cardDarkBG text-[34px] md:text-[50px] lg:text-[80px] leading-[2.5rem] md:leading-[3.5rem] lg:leading-[5.5rem] mb-[1.5rem] md:mb-[4rem] max-w-[60rem] ">
          Well documented and easy-to-use{" "}
          <span className="text-pink">APIs</span> for{" "}
          <span className="text-pink">developers</span>
        </h2>
        <p className="text-[18px] font-thin mb-[30px] max-w-[40rem] md:text-[22px]">
          We have done the core payments integrations and abstractions, so your
          team can easily integrate with our APIs and access multiple payment
          functionalities.
        </p>
        <ul className="text-[18px] mb-[50px]  md:text-[22px] last-of-type:mb-[5rem]">
          <li className="mb-[1.2rem] flex items-center">
            <div>
              <ImSphere className="mr-[10px] text-[#262c55] text-[18px]" />
            </div>{" "}
            Quick transfers
          </li>
          <li className="mb-[1.2rem] flex items-center">
            <div>
              <ImSphere className="mr-[10px] text-[#262c55] text-[18px]" />
            </div>{" "}
            Initiate one-time and recurring payments
          </li>
          <li className="mb-[1.2rem] flex items-center">
            <div>
              <ImSphere className="mr-[10px] text-[#262c55] text-[18px]" />
            </div>{" "}
            Payment verification
          </li>
          <li className="mb-[1.2rem] flex items-center">
            <div>
              <ImSphere className="mr-[10px] text-[#262c55] text-[18px]" />
            </div>{" "}
            Instant virtual cards creation
          </li>
          <li className="mb-[1.2rem] flex items-center">
            <div>
              <ImSphere className="mr-[10px] text-[#262c55] text-[18px]" />
            </div>{" "}
            Customer verification
          </li>
        </ul>
        <a
          href="/"
          className="bg-btnPrimary text-white font-semibold text-[16px] rounded-lg p-6 px-8 "
        >
          Read the API Docs
        </a>
      </div>
    </section>
  );
};

export default APIsection;
