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
        <div className="grid grid-cols-2 mx-32 md:grid-cols-3 justify-items-center gap-2 my-5">
          <Image
            width={389}
            height={243}
            alt="Gallery Photo"
            className="w-[389px] h-[243px]"
            src="/static/images/Academy/gallery/Rectangle 3024.png"
          />
          <Image
            width={291}
            height={243}
            alt="Gallery Photo"
            className="w-[291px] h-[243px]"
            src="/static/images/Academy/gallery/Rectangle 3025.png"
          />
          <Image
            width={493}
            height={243}
            alt="Gallery Photo"
            className="w-[493px] h-[243px]"
            src="/static/images/Academy/gallery/Rectangle 3026.png"
          />
          <Image
            width={489}
            height={243}
            alt="Gallery Photo"
            className="w-[489px] h-[243px]"
            src="/static/images/Academy/gallery/Rectangle 3027.png"
          />
          <Image
            width={389}
            height={243}
            alt="Gallery Photo"
            className="w-[389px] h-[243px]"
            src="/static/images/Academy/gallery/Rectangle 3028.png"
          />
          <Image
            width={287}
            height={243}
            alt="Gallery Photo"
            className="w-[287px] h-[243px]"
            src="/static/images/Academy/gallery/Rectangle 3029.png"
          />
        </div>
        <button className="bg-yellow-400 h-14 w-60 md:w-72 mx-auto text-white">
          Visit Now
        </button>
      </div>
    </div>
  );
}
