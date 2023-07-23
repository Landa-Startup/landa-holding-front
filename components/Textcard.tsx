import React from 'react';

export default function TextCard({ text }: { text: string }) {
  return (
    <div className="flex flex-col font-barlow items-center w-[491px] text-black text-xl font-normal leading-[30px]">
      {text}
      <br />
      <button className="w-[219px] h-[60px] pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px] bg-primary justify-center items-center inline-flex">
        <div className="text-center font-condensed text-white text-base font-normal">
          Visit Now
        </div>
      </button>
    </div>
  );
}
