import React from "react";
import Globe from "../assets/Images/globe.png";

const Global = () => {
  return (
    <section className="md:py-[140px] bg-white">
      <div className="xl:mx-[90px] max-w-[109rem]">
        <h2 className="font-millik text-cardDarkBG text-[34px] md:text-[50px] lg:text-[80px] leading-[2.5rem] md:leading-[3.5rem] lg:leading-[5.5rem] mb-[1.5rem] lg:mb-0 max-w-[60rem] ">
          Our <span className="text-[#6672c7]">global</span> reach
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:w-[40%]">
            <div className="relative border-l border-cardDarkBG border-dashed">
              <div className="mb-[3rem] ml-[-0.9px]">
                <h5 className="lg:text-[20px] text-[#00ABAB] font-semibold mb-[0.8rem] relative border-l-2 border-cardDarkBG pl-[2rem]">
                  30+ Currencies
                </h5>
                <p className="text-[16px] pl-[2rem]">
                  We accept payments in more than thirty currencies.
                </p>
              </div>
              <div className="mb-[3rem] ml-[-0.9px]">
                <h5 className="lg:text-[20px] text-cardDarkBG font-semibold mb-[0.8rem] relative border-l-2 border-cardDarkBG pl-[2rem]">
                  20M+ API calls
                </h5>
                <p className="text-[16px] pl-[2rem]">
                  API calls per day, peaking at 231 requests per second.
                </p>
              </div>
              <div className="mb-[3rem] ml-[-0.9px]">
                <h5 className="lg:text-[20px] text-cardDarkBG font-semibold mb-[0.8rem] relative border-l-2 border-cardDarkBG pl-[2rem]">
                  500k+ payments daily
                </h5>
                <p className="text-[16px] pl-[2rem]">
                  Average number of payments processed daily.
                </p>
              </div>
              <div className="ml-[-0.9px]">
                <h5 className="lg:text-[20px] text-cardDarkBG font-semibold mb-[0.8rem] relative border-l-2 border-cardDarkBG pl-[2rem]">
                  15+ payment options
                </h5>
                <ul className="flex flex-wrap items-start justify-between max-w-[15rem] pl-[2rem]">
                  <li className="mb-[1rem] text-[16px]">
                    Debit & Credit cards
                  </li>
                  <li className="mb-[1rem] text-[16px]">Bank Account</li>
                  <li className="mb-[1rem] text-[16px]">Mobile money</li>
                  <li className="mb-[1rem] text-[16px]">POS</li>
                  <li className="mb-[1rem] text-[16px]">M-Pesa</li>
                  <li className="mb-[1rem] text-[16px]">VISA QR</li>
                  <li className="mb-[1rem] text-[16px]">Bank Transfer</li>
                  <li className="mb-[1rem] text-[16px]">USSD</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%]  overflow-hidden">
            <img
              src={Globe}
              className="w-full  lg:w-[50rem] lg:h-[50rem] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Global;
