import React, { Fragment } from "react";
import { Navlinks } from "../assets/constants";
import { paymentChildren } from "../assets/constants";
import { commerceChildren } from "../assets/constants";
import { noIconChildren } from "../assets/constants";

const MobileMenuNavigation = ({ menuHandler }) => {
  return (
    <Fragment>
      <div className="bg-white mt-4 lg:hidden ">
        <ul className="flex flex-col items-stretch text-ash ">
          <li className="pt-[10px] mb-[18px]  border-b-[0.5px] border-[#dfdddd] bg-transparent border-dashed">
            <span className="uppercase cursor-auto text-[12px] text-[#686868] mb-[14px] py-0 px-[10px]">
              Payments
            </span>
            <ul>
              {paymentChildren.map((payment) => (
                <li key={payment.id} onClick={menuHandler}>
                  <a className="flex items-center px-[10px] py-[13px]">
                    <div>
                      <img
                        className="w-auto h-[45px] mr-[14px]"
                        src={payment.icon}
                      />
                    </div>
                    <div className="flex flex-col flex-wrap justify-start">
                      <span className="text-blueDark mb-[6px] font-semibold text-[14px]">
                        {payment.title}
                      </span>
                      <span className="text-blueDark text-[13px]">
                        {payment.subTitle}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="pt-[10px] mb-[18px] border-b-[0.5px] border-[#dfdddd] bg-transparent border-dashed">
            <span className="uppercase cursor-auto text-[12px] text-[#686868] mb-[14px] py-0 px-[10px]">
              Commerce
            </span>
            <ul>
              {commerceChildren.map((commerce) => (
                <li key={commerce.id} onClick={menuHandler}>
                  <a className="flex items-center px-[10px] py-[13px]">
                    <div>
                      <img
                        className="w-auto h-[45px] mr-[14px]"
                        src={commerce.icon}
                      />
                    </div>
                    <div className="flex flex-col flex-wrap justify-start">
                      <span className="text-blueDark mb-[6px] font-semibold text-[14px]">
                        {commerce.title}
                      </span>
                      <span className="text-blueDark text-[13px]">
                        {commerce.subTitle}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="pt-[10px] mb-[14px] ">
            {noIconChildren.map((noIcon) => (
              <a
                onClick={menuHandler}
                key={noIcon.id}
                className="flex flex-col flex-wrap justify-start px-[10px] py-[10px]"
              >
                <span className="text-blueDark mb-[6px] font-semibold text-[14px]">
                  {noIcon.title}
                </span>
                <span className="text-blueDark text-[13px]">
                  {noIcon.subTitle}
                </span>
              </a>
            ))}
          </li>
        </ul>
        <div className="flex justify-center py-3 px-[10px] mt-5 mb-5">
          <button
            className="bg-blueDark font-medium text-base text-white w-full py-3 rounded-xl"
            onClick={menuHandler}
          >
            <a className="text-center">Sign in</a>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenuNavigation;
