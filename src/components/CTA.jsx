import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CTA = () => {
  return (
    <section className="pt-[10px]">
      <div className="max-w-[109.rem] bg-cardDarkBG rounded-[2rem] shadow-2xl text-white p-[3rem] xl:mx-[90px] ">
        <div className="my-[1.2rem] mx-auto  max-w-[50rem]">
          <h4 className="font-millik text-[34px] md:text-[50px] leading-[2.5rem] md:leading-[3.5rem] lg:leading-[5.5rem] mb-[1.5rem]">
            Ready to get started?
          </h4>
          <p className="lg:text-[1.2rem] mb-[2rem] lg:mb-[4rem]">
            Create an account and instantly start accepting payments, selling
            your beautiful products online and building financial tools.
          </p>
          <div className="flex ">
            <a
              href="/"
              className="bg-white text-btnPrimary font-semibold text-sm rounded-lg p-3 px-4 md:p-5 md:px-7 mr-[2rem] "
            >
              Get Started
            </a>
            <a
              href="/"
              className="flex items-center text-white text-[12px] md:text-[16px] font-semibold "
            >
              Contact Sales <IoIosArrowForward className="ml-[9px] mt-[4px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
