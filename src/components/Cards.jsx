import React from "react";

const Cards = () => {
  return (
    <>
      <section className="bg-cardDarkBG">
        <div className="xl:mx-[120px] md:my-[65px] lg:my-[90px] max-w-[120.6rem] flex flex-col items-center justify-start text-center">
          <h2 className="font-millik text-white mb-[26px] lg:mb-[3.5rem] max-w-[70rem] text-[36px] md:text-[46px] lg:text-[80px] leading-[2.7rem] lg:leading-[5rem]">
            Create physical and virtual{" "}
            <span className="text-[#6672c7]">cards</span>
          </h2>
          <p className="lg:mb-[3rem] mb-[39px] md:max-w-[30rem] lg:max-w-[40rem] text-[18px] lg:text-[22px] text-white">
            Issue physical and virtual cards that work globally. Create, launch,
            and manage your cards easily from anywhere.
          </p>
          <a
            href="/"
            className="bg-white text-cardDarkBG font-semibold text-[13px] lg:text-[16px] rounded-lg p-4 px-6 md:p-6 md:px-8 "
          >
            Get started with cards
          </a>
        </div>
      </section>
    </>
  );
};

export default Cards;
