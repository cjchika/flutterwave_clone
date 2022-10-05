import React from "react";
import CheckoutImage from "../assets/Images/checkout.png";
import { IoIosArrowForward } from "react-icons/io";

const Payment = () => {
  return (
    <section>
      <div className="my-0 mx-auto max-w-[109.2rem] xl:mx-[50px]">
        <h2 className="font-millik font-medium text-black text-[2.2rem] mb-10 md:text-[3.2rem] lg:text-[80px] lg:leading-[5rem]  xl:text-[5rem] max-w-[40rem]">
          A fully unified set of{" "}
          <span className="text-orange">payments tools</span>
        </h2>
        <div className="flex flex-wrap items-center justify-between">
          <div className="lg:w-1/3 lg:pr-7">
            <h6 className="text-black text-lg font-bold mb-8">Checkout</h6>
            <p className="mb-8 text-[18px] leading-7 lg:leading-10 text-cardDarkBG">
              Checkout features our smart payment ordering system, incredible
              speed, and beautiful simplicity. It's designed to grow your
              revenue and provide the best payment experience to your customers.
            </p>
            <a
              className="bg-btnPrimary text-white text-sm rounded-lg p-4 px-5"
              href="/"
            >
              Get started
            </a>
          </div>

          <div className="lg:w-1/3 lg:px-7">
            <img
              src={CheckoutImage}
              className="w-full h-[40rem] lg:h-auto object-left max-h-[55rem] xl:max-h-[65rem] object-contain drop-shadow-2xl my-[3.5rem] lg:my-0"
            />
          </div>

          <div className="lg:w-1/3 lg:pl-7">
            <div className="mb-20">
              <h6 className="text-black text-lg font-bold mb-4">
                Accept payments
              </h6>
              <p className="mb-8 text-[18px] leading-7 text-cardDarkBG">
                Easily receive money from anyone, anywhere in the world.
              </p>
              <a
                className="flex items-center text-[#fb4e20] text-[16px] font-semibold"
                href="/"
              >
                Learn more <IoIosArrowForward className="ml-[9px] mt-[4px]" />
              </a>
            </div>
            <div>
              <h6 className="text-black text-lg font-bold mb-4">
                Accept payments
              </h6>
              <p className="mb-8 text-[18px] leading-7 text-cardDarkBG">
                Make single or bulk transfers to bank accounts from your
                Flutterwave dashboard.
              </p>
              <a
                className="flex items-center text-[#fb4e20] text-[16px] font-semibold"
                href="/"
              >
                Learn more <IoIosArrowForward className="ml-[9px] mt-[4px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
