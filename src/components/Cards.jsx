import React from "react";
import MasterCard from "../assets/Images/mastercard.png";
// import box from '../assets/Images/box.png'

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
            className="mb-[45px] lg:mb-[70px] bg-white text-cardDarkBG font-semibold text-[13px] lg:text-[16px] rounded-lg p-4 px-6 md:p-6 md:px-8 "
          >
            Get started with cards
          </a>
          <div>
            <img
              className="h-full w-full md:w-[400px] xl:w-[500px] drop-shadow-3xl mb-[6em]"
              src={MasterCard}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center  ">
            <div className="text-white bg-[url('./assets/Images/box.png')] z-[1]  bg-[#313131] rounded-[1.6rem] drop-shadow-2xl overflow-hidden text-left p-8 lg:p-12 md:absolute md:w-[30rem] md:ml-[-15rem] lg:ml-[-20rem]">
              <h6 className="font-semibold text-[1.2rem] mb-[1.5rem]">
                Better Business Expense management
              </h6>
              <p className="text-[1rem] leading-[1.5rem]">
                You can issue a physical bank card to an employee or even a
                trusted merchant at your local market to make the purchases for
                you. Every time you have an order, you’re able to fund that card
                so they can purchase it and send it to you for delivery to your
                customer. The possibilities are endless.
              </p>
            </div>
            <div className="text-white z-[2] bg-[url('./assets/Images/box.png')] my-[3rem] md:my-0 bg-[#313131] rounded-[1.6rem] drop-shadow-2xl overflow-hidden text-left p-8 lg:p-12 md:absolute  md:w-[30rem] md:ml-[2rem] lg:ml-4rem]">
              <h6 className="font-semibold text-[1.2rem] mb-[1.5rem]">
                New revenue lines
              </h6>
              <p className="text-[1rem] leading-[1.5rem]">
                You can issue a physical bank card to an employee or even a
                trusted merchant at your local market to make the purchases for
                you. Every time you have an order, you’re able to fund that card
                so they can purchase it and send it to you for delivery to your
                customer. The possibilities are endless.
              </p>
            </div>
            <div className=" text-white z-[3] bg-[url('./assets/Images/box.png')] bg-[#313131] rounded-[1.6rem] drop-shadow-2xl overflow-hidden text-left p-8 lg:p-12 md:w-[30rem] md:ml-[15rem] lg:ml-[14rem]">
              <h6 className="font-semibold text-[1.2rem] mb-[1.5rem]">
                Seamless Business Organization
              </h6>
              <p className="text-[1rem] leading-[1.5rem] ">
                You can issue a physical bank card to an employee or even a
                trusted merchant at your local market to make the purchases for
                you. Every time you have an order, you’re able to fund that card
                so they can purchase it and send it to you for delivery to your
                customer. The possibilities are endless.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
