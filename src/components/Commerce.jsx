import React from "react";
import CreatorImage from "../assets/Images/yanga-beauty.webp";
import CreatorIImage from "../assets/Images/creator.webp";
import { IoIosArrowForward } from "react-icons/io";

const Commerce = () => {
  return (
    <>
      <section className="py-[70px] md:py-[100px]">
        <div className="my-0 mx-auto max-w-[109.2rem]  .  m-w-[102.9rem] flex flex-wrap items-start justify-between xl:mx-[90px] overflow-hidden">
          <h2 className="text-cardDarkBG font-millik max-w-[108.7rem] lg:mb-[10.8rem] mb-[63px] text-[34px] md:text-[48px] leading-[2.6rem] lg:text-[5rem] md:leading-[3.5rem] lg:leading-[5.8rem]">
            Build a successful online business with our{" "}
            <span className="text-green">Commerce tools.</span>
          </h2>
          <div className="lg:mb-[18rem]">
            <div className="flex items-start justify-end">
              <div className="pt-[1rem] lg:pt-[8rem]">
                <div className="lg:w-[30rem]">
                  <h6 className="font-semibold leading-[2rem] text-[20px] mb-[1.9rem]">
                    Store
                  </h6>
                  <p className="text-cardDarkBG text-base leading-[2rem] text-[20px] mb-[2.8rem]">
                    Create a free ecommerce website and start selling worldwide
                    with just a few clicks.
                  </p>
                  <a
                    href="/"
                    className="bg-btnPrimary text-white text-sm rounded-lg p-4 px-5 "
                  >
                    Start selling
                  </a>
                </div>
                <div className="w-full lg:w-[51%] lg:ml-[8rem] mt-[4.5rem]">
                  <div className="h-full relative">
                    <div className="w-full h-full">
                      <img className="h-full object-cover" src={CreatorImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-start mt-[-8%]">
              <div className="lg:mr-[8rem] lg:w-[58%]">
                <div className="relative h-full">
                  <div className="h-full w-full">
                    <img src={CreatorIImage} className="object-cover h-full" />
                    <figcaption className="text-[1.5rem] mt-[2rem] text-center">
                      A platform for you, whether you’re a big business or a
                      <span className="text-green">solo artist.</span>
                    </figcaption>
                  </div>
                </div>
              </div>
              <div className="pb-[1rem]">
                <div className="mb-[8rem]">
                  <div>
                    <h6 className="font-semibold leading-[2rem] text-[20px] mb-[1.9rem]">
                      {" "}
                      Invoices
                    </h6>
                  </div>
                  <p className="text-cardDarkBG text-base leading-[2rem] text-[20px] mb-[2.8rem]">
                    Generate professional invoices for your customers and get
                    paid from anywhere.
                  </p>
                  <a
                    href="/"
                    className="flex items-center text-[#fb4e20] text-[16px] font-semibold "
                  >
                    Get started{" "}
                    <IoIosArrowForward className="ml-[9px] mt-[4px]" />
                  </a>
                </div>
                <div>
                  <div>
                    <h6 className="font-semibold leading-[2rem] text-[20px] mb-[1.9rem]">
                      {" "}
                      Peyment Links
                    </h6>
                  </div>
                  <p className="text-cardDarkBG text-base leading-[2rem] text-[20px] mb-[2.8rem]">
                    Receive one-off or recurring payments from anyone, anywhere,
                    via your unique payment link.
                  </p>
                  <a
                    href="/"
                    className="flex items-center text-[#fb4e20] text-[16px] font-semibold "
                  >
                    Learn More{" "}
                    <IoIosArrowForward className="ml-[9px] mt-[4px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commerce;
