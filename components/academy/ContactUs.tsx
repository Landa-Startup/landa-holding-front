import React from 'react';

export default function ContactUs() {
  return (
    <div className="md:w-[1440px] md:h-[694px] md:pl-[121px] md:pr-[120px] md:pt-[38px] md:pb-[104px] py-5 bg-stone-100 flex-col justify-start items-center gap-[37px] flex">
      <div className="self-center flex-col  items-start inline-flex">
        <div className="md:w-[413px] md:h-[58px] text-center text-lime-400 text-2xl md:text-[32px] font-normal leading-[50px] tracking-[8px] md:tracking-[11.20px]">
          LANDA ACADEMY
        </div>
        <div className="md:w-[413px] md:h-[58px] text-center text-black text-5xl md:text-[64px] font-normal leading-[50px] tracking-[3.20px]">
          Contact Us
        </div>
      </div>
      <div className="md:w-[1199px] md:h-[304px] relative flex-col justify-start items-center flex">
        <div className="flex flex-col space-y-1 md:flex-row justify-between md:w-[794px]">
          <input
            className="md:w-[389px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
            placeholder="First Name"
          ></input>
          <input
            className="md:w-[389px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
            placeholder="Last Name"
          ></input>
        </div>
        <textarea
          className="w-[200px] md:w-[794px] md:h-[185px] relative bg-yellow-50 border border-yellow-400 pl-5 mt-1 md:mt-7"
          placeholder="Description"
        />
      </div>
      <button className="bg-yellow-400 h-14 w-60 md:w-72 mx-auto text-white">
        Visit Now
      </button>
    </div>
  );
}