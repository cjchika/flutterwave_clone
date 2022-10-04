import React from "react";

const Hero = () => {
  return (
    <>
      <section className="pt-[140px]">
        <div className="my-0 mx-auto m-w-[102.9] flex flex-wrap items-start justify-between xl:mx-[90px]">
          <div className="w-[55rem] ">
            <h4 className="font-millik font-medium text-black text-5xl lg:leading-[7rem] mb-7 md:text-[70px] lg:text-[6rem] xl:text-[6.5rem]">
              <span className="text-orange">Endless possibilities</span>{" "}
              <span>for every business</span>
            </h4>
            <p className="max-w-[35rem] mb-9 font-thin  text-lg md:text-xl lg:leading-8">
              Sell online, process payments, build financial products, or use
              business tools designed to grow your business.
            </p>
            <div className="flex">
              <button className="bg-[#0A0E27] p-3 text-xs sm:text-base sm:font-semibold sm:p-4 md:p-5 text-white rounded-xl mr-4 md:mr-6">
                Create a free account
              </button>
              <button className="bg-btnSecondary p-3 sm:p-4 md:p-5 px-3 sm:px-4 md:px-8  sm:font-semibold text-[#0A0E27] rounded-xl">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
