import React from 'react';

export default function Button({ text, size }: { text: string; size: string }) {
  return size == 'visit' ? (
    <button
      className="btn2 w-[219px] h-[60px] pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px] bg-primary px-10 py-5 relative border border-white uppercase  tracking-wider leading-none overflow-hidden inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal hover:text-white"
      type="button"
    >
      <span className="absolute inset-0 bg-black"></span>
      <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal">
        {text}
      </span>
      {text}
    </button>
  ) : (
    <button
      className="btn2 h-11 pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px] bg-primary px-10 py-5 relative border border-white uppercase  tracking-wider leading-none overflow-hidden inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal hover:text-white"
      type="button"
    >
      <span className="absolute inset-0 bg-black"></span>
      <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal">
        {text}
      </span>
      {/* If text going to change after hover, put it here */}
    </button>
  );
}
