import React from "react";
import CreatorImage from "../assets/Images/yanga-beauty.webp";
import CreatorIImage from "../assets/Images/creator.webp";
import { IoIosArrowForward } from "react-icons/io";

const Commerce = () => {
  return (
    <>
      <section className="py-[70px] md:py-[100px]">
        <div className="my-0 mx-auto max-w-[109.2rem]  . flex flex-wrap items-start justify-between xl:mx-[90px] overflow-hidden">
          <h2 className="text-cardDarkBG font-millik max-w-[108.7rem] mb-[2rem] lg:mb-[5rem]  text-[34px] md:text-[48px] leading-[2.6rem] lg:text-[5rem] md:leading-[3.5rem] lg:leading-[5.8rem]">
            Build a successful online business with our{" "}
            <span className="text-green">Commerce tools.</span>
          </h2>
          <div className="mb-[3rem] lg:mb-[10rem] ">
            <div className="flex  items-start justify-end">
              <div className="pt-[1rem]  lg:flex  items-start justify-end">
                <div className="lg:w-[25rem] lg:mr-[4.5rem] lg:mt-[8rem]">
                  <h6 className="font-semibold leading-[2rem] text-[20px] mb-[1.2rem]">
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
                <div className="w-full lg:w-[51%] mt-[5rem] lg:mt-0">
                  <div className="h-full relative">
                    <div className="w-full lg:h-[38rem]">
                      <img className="h-full object-cover" src={CreatorImage} />
                    </div>
                    <div className="my-[4rem] md:my-[3rem] lg:hidden">
                      <div className="mb-[3rem] lg:mb-[8rem]">
                        <div>
                          <h6 className="font-semibold leading-[2rem] text-[20px] mb-[1.9rem]">
                            {" "}
                            Invoices
                          </h6>
                        </div>
                        <p className="text-cardDarkBG text-base leading-[2rem] text-[20px] mb-[2.8rem]">
                          Generate professional invoices for your customers and
                          get paid from anywhere.
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
                          Receive one-off or recurring payments from anyone,
                          anywhere, via your unique payment link.
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
            </div>
            <div className="flex flex-wrap lg:flex-nowrap  items-end justify-start lg:mt-[-10%]">
              <div className="w-full lg:mr-[5rem] lg:w-[58%] ">
                <div className="relative h-full mb-10 lg:mb-0">
                  <div className="lg:h-[100%] w-full lg:w-[29rem] xlg:w-[33rem] xl:w-[38rem]">
                    <img
                      src={CreatorIImage}
                      className="object-cover h-full w-full"
                    />
                    <figcaption className="text-[16px] lg:text-[1.1rem] text-center mt-[0.8rem] lg:mt-[2rem] xlg:mt-[1.7rem] ">
                      A platform for you, whether you’re a big business or a
                      <span className="text-green"> solo artist.</span>
                    </figcaption>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="mb-[3rem] lg:mb-[3rem]">
                  <div>
                    <h6 className="font-semibold leading-[2rem] text-[22px] mb-[1.2rem]">
                      {" "}
                      Invoices
                    </h6>
                  </div>
                  <p className="text-cardDarkBG text-base leading-[2rem] text-[20px] mb-[2rem]">
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
                    <h6 className="font-semibold leading-[2rem] text-[22px] mb-[1.2rem]">
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
          <p className="text-cardDarkBG text-[36px] md:text-[50px] font-thin lg:text-[4.5rem] mb-[4rem]">
            Let’s play to our strengths, shall we? You focus on bringing your
            amazing ideas to life and we focus on providing all the{" "}
            <span className="text-green">commerce tools</span> you need.
          </p>
          <a
            href="/"
            className="bg-btnPrimary text-white font-semibold text-sm rounded-lg p-6 px-8 "
          >
            Okay, let's go
          </a>
        </div>
      </section>
    </>
  );
};

export default Commerce;
