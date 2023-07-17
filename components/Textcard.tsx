import React from 'react';

export default function TextCard({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center w-[491px] text-black text-xl font-normal leading-[30px]">
      {text}
      <br />
      <div className="w-[219px] h-[60px] pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px] bg-[#AA8453] justify-center items-center inline-flex">
        <div className="text-center text-white text-base font-normal">
          Visit Now
        </div>
      </div>
    </div>
  );
}
