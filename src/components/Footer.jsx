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
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const handleToggle = () => {
    setToggleButton((toggleButton) => !toggleButton);
  };

  return (
    <footer className="pt-[90px] px-[20px]">
      <div className="max-w-[109.rem] bg-white  text-cardDarkBG xl:mx-[90px]">
        <div className="hidden lg:flex justify-between border-[#f3f3f3] border-b pb-[40px]">
          <div className="w-[20%]">
            <h4 className="mb-[1.5rem] text-xl "> Products</h4>
            <ul>
              {Products.map((product) => (
                <li key={product.id} className="mb-[1.5rem]">
                  {product.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[20%]">
            <h4 className="mb-[1.5rem] text-xl"> Resources</h4>
            <ul>
              {Resources.map((resource) => (
                <li key={resource.id} className="mb-[1.5rem]">
                  {resource.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[20%]">
            <h4 className="mb-[1.5rem] text-xl"> Developers</h4>
            <ul>
              {Developers.map((developer) => (
                <li key={developer.id} className="mb-[1.5rem]">
                  {developer.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[20%]">
            <h4 className="mb-[1.5rem] text-xl"> Flutterwave</h4>
            <ul>
              {Flutterwave.map((wave) => (
                <li key={wave.id} className="mb-[1.5rem]">
                  {wave.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[20%]">
            <h4 className="mb-[1.5rem] text-xl"> Contact</h4>
            <ul>
              {Contact.map((con) => (
                <li key={con.id} className="mb-[1.5rem]">
                  {con.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex justify-between py-[40px] border-[#f3f3f3] border-b">
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
                <div className="bg-white z-100 absolute mb-[30rem] p-6 rounded-2xl w-[40rem] drop-shadow-5xl">
                  <ul className="font-Poppins flex flex-wrap justify-start items-start  ">
                    {countries.map((country) => (
                      <li
                        key={country.country}
                        className="flex text-left w-1/3 p-[10px]"
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
          <div>
            {Social.map((media) => (
              <a key={media.id} href="/" className="mx-3 hover:text-green">
                {media.text}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-wrap justify-between py-[40px]">
          <div>
            <div className="flex items-center justify-between">
              <p className="mr-2">©</p>
              <p>Flutterwave</p>
            </div>
          </div>
          <div>
            {Legal.map((leg) => (
              <a key={leg.id} href="/" className="mx-3 hover:text-green">
                {leg.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
