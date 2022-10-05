import React from "react";
import Famasi from "../assets/Images/Famasi-3.webp";
import FootCity from "../assets/Images/foot-city.webp";

const Customers = () => {
  return (
    <section className="pt-0 md:px-0 py-[30px] md:py-[60px]">
      <div className="max-w-[168rem]">
        <div className="flex flex-wrap md:flex-nowrap items-start justify-between">
          <div className="md:relative md:h-full md:mr-16">
            <div className="w-full h-full ">
              {" "}
              <div className="block overflow-hidden relative w-full ">
                <img
                  className="object-cover md:h-[35rem] lg:h-[55rem] xl:h-[50rem] object-right"
                  src={FootCity}
                />
              </div>
            </div>
            <p className="my-6 md:hidden">
              It's not the size of the company, it's the size of the ambition.
              Ambitious businesses of all sizes count on Flutterwave to grow
              their business everywhere.
            </p>
          </div>
          <div className="md:mt-[-12rem] lg:mt-[-10rem]  ">
            <div className="md:relative md:h-full">
              <div className="w-full h-full">
                <div className="block overflow-hidden relative w-full ">
                  <img
                    className=" object-cover md:h-[32rem] lg:h-[45rem] object-center"
                    src={Famasi}
                  />
                  <div className="pr-[10px]">
                    <p className="hidden md:block text-xl font-medium leading-8 mt-20 max-w-[30rem]">
                      It's not the size of the company, it's the size of the
                      ambition. Ambitious businesses of all sizes count on
                      Flutterwave to grow their business everywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
