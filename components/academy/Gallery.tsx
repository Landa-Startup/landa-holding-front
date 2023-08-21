import Image from 'next/image';
import React from 'react';

export default function Gallery() {
  return (
    <div className="py-5 relative bg-neutral-50 bg-opacity-95">
      <div className="flex flex-col">
        <div className="text-center text-lime-400 text-[32px] font-normal leading-[50px] tracking-[11.20px]">
          LANDA ACADEMY
        </div>
        <div className="text-center text-black text-[64px] font-normal leading-[50px] tracking-[3.20px]">
          Our Gallery
        </div>
        <div className="grid grid-cols-2 mx-2 md:grid-cols-3 justify-items-center gap-3 my-5">
          <img
            className="w-[389px] h-[243px]"
            src="https://via.placeholder.com/389x243"
          />
          <img
            className="w-[389px] h-[243px]"
            src="https://via.placeholder.com/389x243"
          />
          <img
            className="w-[389px] h-[243px]"
            src="https://via.placeholder.com/389x243"
          />
          <img
            className="w-[389px] h-[243px]"
            src="https://via.placeholder.com/389x243"
          />
          <img
            className="w-[389px] h-[243px]"
            src="https://via.placeholder.com/389x243"
          />
          <img
            className="w-[389px] h-[243px]"
            src="https://via.placeholder.com/389x243"
          />
        </div>
        <button className="bg-yellow-400 h-14 w-60 md:w-72 mx-auto text-white">
          Visit Now
        </button>
      </div>
    </div>
  );
}
