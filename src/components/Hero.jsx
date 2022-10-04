import React from "react";

const Hero = () => {
  return (
    <>
      <section>
        <div className="my-0 mx-auto m-w-[102.9] flex flex-wrap items-start justify-between xl:mx-[90px]">
          <div className="w-[55rem] ">
            <h4 className="font-millik font-medium text-black text-5xl leading-[7rem] mb-7  lg:text-[6rem] xl:text-[7rem]">
              <span className="text-orange">Endless possibilities</span>{" "}
              <span>for every business</span>
            </h4>
            <p className="max-w-[35rem] mb-14  text-xl leading-8">
              Sell online, process payments, build financial products, or use
              business tools designed to grow your business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
