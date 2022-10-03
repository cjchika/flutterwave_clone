import React, { useState } from "react";
import { Navlinks } from "../assets/constants";
import MobileMenuNavigation from "./MobileMenuNavigation";
import Logo from "../assets/Images/flutterwave.svg";
import { TbMenu } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

const MenuNavigation = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const menuHandler = () => {
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);
  };

  return (
    <header className="z-10 w-full  bg-white top-0 pt-[16px] lg:pt-[30px] px-[10px] md:px-[20px] ">
      <nav className="flex lg:flex items-center justify-between xl:mx-[110px]">
        <div className="flex  items-center ">
          <div className="w-48 ">
            <img src={Logo} alt="flutterwave-logo" className="w-full" />
          </div>
        </div>
        <ul className=" hidden lg:flex text-ash ">
          <li>
            {Navlinks.map((navlink) => (
              <a
                key={navlink.id}
                href={navlink.id}
                className="px-[12px] xl:px-[17px] py-[10px] hover:text-green"
              >
                {navlink.title}
              </a>
            ))}
          </li>
        </ul>
        <div className="hidden lg:flex ">
          <button className=" ">
            <a className="bg-btnSecondary text-black rounded-[12px] font-medium text-base lg:px-[50px] py-[15px] hover:text-white hover:bg-btnPrimary">
              Sign in
            </a>
          </button>
        </div>
        <div className="lg:hidden pr-1">
          <button onClick={menuHandler}>
            {!isMobileMenu ? (
              <TbMenu className="text-[#171717] bg-[#403f3f3] mt-2 text-3xl" />
            ) : (
              <CgClose className="text-[#171717] bg-[#403f3f3] mt-2 text-3xl" />
            )}
          </button>
        </div>
      </nav>
      {isMobileMenu && <MobileMenuNavigation onToggle={menuHandler} />}
    </header>
  );
};

export default MenuNavigation;
