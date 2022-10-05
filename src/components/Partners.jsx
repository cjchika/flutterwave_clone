import React from "react";
import { partnersLogo } from "../assets/constants";

const Partners = () => {
  return (
    <section className="py-[30px] md:py-[60px]">
      <div className="mx-auto xl:mx-[50px]">
        <div>
          <h3 className="mb-[20px] text-cardDarkBG text-[20px] font-medium">
            We are trusted by <span className="font-semibold">1 Million+</span>{" "}
            businesses
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-start mx-[-1.5rem] xl:mx-[-1.4rem]">
          {partnersLogo.map((partner) => (
            <div
              key={partner.id}
              className="px-[22px] sm:px-[25px] xl:px-[20px] py-[17px] sm:py-[20px] xl:py-[15px]"
            >
              <img
                src={partner.icon}
                className="h-[1.3rem] md:h-[2rem] lg:h-[2.3rem] w-auto "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
