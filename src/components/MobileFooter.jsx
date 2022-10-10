import React, { useState } from "react";
import {
  Products,
  Resources,
  Developers,
  Flutterwave,
  Contact,
  Social,
  Legal,
  countries,
} from "../assets/constants";
import NigeriaFlag from "../assets/Images/NigeriaFlag.jpg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MobileFooter = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleResources, setToggleResources] = useState(false);
  const [toggleFlutterwave, setToggleFlutterwave] = useState(false);
  const [toggleContact, setToggleContact] = useState(false);
  const [toggleDevelopers, setToggleDevelopers] = useState(false);
  const [toggleLegal, setToggleLegal] = useState(false);
  const [toggleSocial, setToggleSocial] = useState(false);

  // const handleFooterToggle = () => {
  //   setToggle((toggle) => !toggle);
  // };

  const handleToggle = () => {
    setToggleButton((toggleButton) => !toggleButton);
  };

  return (
    <div>
      <div className="flex flex-col lg:hidden border-[#f3f3f3] border-b pb-[10px]">
        <div className="w-full border-[#f3f3f3] border-b my-2">
          <div
            className="flex items-center justify-between mb-[1.5rem] text-xl "
            onClick={() => setToggleProduct((toggleProduct) => !toggleProduct)}
          >
            <h4> Products</h4>
            {toggleProduct ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {toggleProduct && (
            <ul>
              {Products.map((product) => (
                <li key={product.id} className="mb-[1.5rem]">
                  {product.text}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full border-[#f3f3f3] border-b my-2">
          <div
            className="flex items-center justify-between mb-[1.5rem] text-xl "
            onClick={() =>
              setToggleResources((toggleResources) => !toggleResources)
            }
          >
            <h4> Resources</h4>
            {toggleResources ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {toggleResources && (
            <ul>
              {Resources.map((resource) => (
                <li key={resource.id} className="mb-[1.5rem]">
                  {resource.text}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full border-[#f3f3f3] border-b my-2">
          <div
            className="flex items-center justify-between mb-[1.5rem] text-xl "
            onClick={() =>
              setToggleDevelopers((toggleDevelopers) => !toggleDevelopers)
            }
          >
            <h4> Developers</h4>
            {toggleDevelopers ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {toggleDevelopers && (
            <ul>
              {Developers.map((developer) => (
                <li key={developer.id} className="mb-[1.5rem]">
                  {developer.text}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full border-[#f3f3f3] border-b my-2">
          <div
            className="flex items-center justify-between mb-[1.5rem] text-xl "
            onClick={() =>
              setToggleFlutterwave((toggleFlutterwave) => !toggleFlutterwave)
            }
          >
            <h4>Flutterwave</h4>
            {toggleFlutterwave ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {toggleFlutterwave && (
            <ul>
              {Flutterwave.map((wave) => (
                <li key={wave.id} className="mb-[1.5rem]">
                  {wave.text}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full border-[#f3f3f3] border-b my-2">
          <div
            className="flex items-center justify-between mb-[1.5rem] text-xl "
            onClick={() => setToggleContact((toggleContact) => !toggleContact)}
          >
            <h4>Contact</h4>
            {toggleContact ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {toggleContact && (
            <ul>
              {Contact.map((con) => (
                <li key={con.id} className="mb-[1.5rem]">
                  {con.text}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="w-full border-[#f3f3f3] border-b my-2">
          <div
            className="flex items-center justify-between mb-[1.5rem] text-xl "
            onClick={() => setToggleSocial((toggleSocial) => !toggleSocial)}
          >
            <h4>Connect</h4>
            {toggleSocial ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {toggleSocial && (
            <ul>
              {Social.map((con) => (
                <li key={con.id} className="mb-[1.5rem]">
                  {con.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:hidden justify-between py-[40px] border-[#f3f3f3] border-b">
        <div>
          <div className="flex items-center">
            <button
              className="flex items-center hover:text-green"
              onClick={handleToggle}
            >
              <img
                src={NigeriaFlag}
                className="w-5 h-5 object-cover rounded-full mr-2 "
              />
              <span className="mr-2">Nigeria</span>
              <IoIosArrowDown />
            </button>
            {toggleButton && (
              <div className="bg-white z-100 absolute mb-[70rem] md:mb-[30rem] p-6 rounded-2xl max-w-[100%] mr-4 md:mx-0 md:w-[40rem] drop-shadow-5xl">
                <ul className="font-Poppins flex flex-wrap justify-start items-start  ">
                  {countries.map((country) => (
                    <li
                      key={country.country}
                      className="flex text-left w-full md:w-1/3 p-[10px]"
                    >
                      <button className="hover:bg-[#eeecec] w-full flex items-center bg-transparent rounded-lg justify-start py-[8px] px-[8.5px] border-none cursor-pointer ">
                        <img
                          src={country.flag}
                          className="w-7 h-5 object-cover rounded-[5px] mr-3"
                        />
                        <span className="text-[15px]">{country.country}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full mt-5 lg:hidden">
        <div
          className="flex items-center justify-between mb-[1.5rem] text-xl "
          onClick={() => setToggleLegal((toggleLegal) => !toggleLegal)}
        >
          <h4>Legal</h4>
          {toggleLegal ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {toggleLegal && (
          <ul>
            {Legal.map((con) => (
              <li key={con.id} className="mb-[1.5rem]">
                {con.text}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className=" py-[40px] lg:hidden">
        <div>
          <div className="flex items-center justify-start">
            <p className="mr-2">©</p>
            <p>Flutterwave</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
