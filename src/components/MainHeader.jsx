import React, { useState } from "react";
import { Navlinks } from "../assets/constants";
import Logo from "../assets/Images/flutterwave.svg";
import { TbMenu } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

const MainHeader = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const menuHandler = () => {
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);
  };

  //   const mobileMenu = (
  //     <div className="w-11/12 max-w-2xl mt-4">
  //       <ul className=" flex-col px-6 text-ash  ">
  //         <li className="py-3">
  //           <NavLink to="/home" activeClassName="text-blue" onClick={menuHandler}>
  //             Home
  //           </NavLink>
  //         </li>
  //         <li className="py-3">
  //           <NavLink
  //             to="/listings"
  //             activeClassName="text-blue"
  //             onClick={menuHandler}
  //           >
  //             Properties
  //           </NavLink>
  //         </li>
  //         <li className="py-3">
  //           <NavLink
  //             to="/agent"
  //             activeClassName="text-blue"
  //             onClick={menuHandler}
  //           >
  //             Agents
  //           </NavLink>
  //         </li>
  //         <li className="py-3">
  //           <NavLink to="/blog" activeClassName="text-blue" onClick={menuHandler}>
  //             Blog
  //           </NavLink>
  //         </li>
  //       </ul>
  //       <div className="flex justify-between py-3 pl-6">
  //         <button
  //           className="text-blue font-medium text-base pr-5"
  //           onClick={menuHandler}
  //         >
  //           <Link to="/login">Login</Link>
  //         </button>
  //         <button
  //           className="ml-6 bg-blue text-white font-bold text-xs p-3 px-3 rounded-lg shadow-md "
  //           onClick={menuHandler}
  //         >
  //           <Link to="/signup">Get Started</Link>
  //         </button>
  //       </div>
  //     </div>
  //   );

  return (
    <header className="z-10 w-full fixed bg-white top-0 pt-[16px] lg:pt-[30px] px-[10px] md:px-[20px] ">
      <nav className="flex lg:flex items-center justify-between xl:mx-[74px]">
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
                className="px-[12px] xl:px-[17px] py-[10px]"
              >
                {navlink.title}
              </a>
            ))}
          </li>
        </ul>
        <div className="hidden lg:flex ">
          <button className=" ">
            <a className="bg-btnSecondary text-black rounded-[12px] font-medium text-base lg:px-[50px] py-[15px]">
              Sign in
            </a>
          </button>
        </div>
        <div className="lg:hidden pr-1">
          <button onClick={menuHandler}>
            {!isMobileMenu ? (
              <TbMenu className="text-[#171717] bg-[#403f3f3] mt-2 text-xl" />
            ) : (
              <CgClose className="text-[#171717] bg-[#403f3f3] mt-2 text-xl" />
            )}
          </button>
        </div>
      </nav>
      {/* {isMobileMenu && mobileMenu} */}
    </header>
  );
};

export default MainHeader;
