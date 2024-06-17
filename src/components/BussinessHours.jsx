import React, { useState } from "react";
import AppLayout from "./AppLayout";

const BussinessHours = () => {
  return (
    <div className="bg-[#F3F5F7]">
    <AppLayout>
    <h1 className="lg:my-4 my-4 sm:my-5 lg:font-bold text-[30px] font-bold  lg:text-[28px] sm:text-[30px] text-black text-center">
      Business Hours
    </h1>
    </AppLayout>
    <div class=" mx-4 px-4 sm:mx-[20%] lg:mx-[30%] pt-10  pb-14 ">
      <div className="">
        <div className="border-2 sm:border-2 border-[#000] rounded-[10px] bg-[#F1C6D5] sm:mx-20 px-4 sm:px-0">
          <div className=" mx-1 lg:ml-[45px] sm:mx-[25px] lg:my-[32px] sm:my-[25px] my-[15px] text-[#000]">
            <h3 className="lg:text-[20px] sm:text-[18px] font-[20px] lg:mt-10 sm:mt-6">
              MONDAY &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              A M &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              P M
            </h3>

            <h3 className="lg:text-[20px] sm:text-[18px] font-[20px] lg:mt-4 sm:mt-3 ">
              TUESDAY &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              A M &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              P M
            </h3>
            <h3 className="lg:text-[20px] sm:text-[18px] font-[20px] lg:mt-4 sm:mt-3">
              WEDNESDAY &nbsp; &nbsp;&nbsp; &nbsp;{" "}
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              A M &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              P M
            </h3>
            <h3 className="lg:text-[20px] sm:text-[18px] font-[20px] lg:mt-4 sm:mt-3">
              THURSDAY &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;{" "}
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              A M &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              P M
            </h3>
            <h3 className="lg:text-[20px] sm:text-[18px] font-[20px] lg:mt-4 sm:mt-3">
              FRIDAY &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;{" "}
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              A M &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              P M
            </h3>
            <h3 className="lg:text-[20px] sm:text-[18px] font-[20px] lg:mt-4 sm:mt-3">
              SATURDAY &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              A M &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              P M
            </h3>
            <h3 className="lg:text-[20px] sm:text-[18px] font-[20px] lg:mt-4 sm:mt-3">
              SUNDAY &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              A M &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              <span className="lg:text-[15px] sm:text-[13px] text-[12px]">
                9&nbsp;
              </span>
              P M
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BussinessHours;
