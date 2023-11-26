import React from 'react';
import Image from 'next/image';

export default function AboutUsLandaHolding() {
  return (
    <div className="flex flex-col lg:flex-col xl:flex-row items-center justify-evenly pt-5 md:py-32 bg-[#FAFAFA]">
      <div className="text-black p-10 md:p-3 space-y-3">
        <p className="text-3xl md:text-4xl text-center font-gilda">
          About Landa Holding
        </p>
        <p className="lg:w-[450px] text-justify text-lg md:text-xl mt-4 md:mt-8 ml-0 md:mx-10 font-normal tracking-wide font-barlow mb-20">
          Landa Holding is distinctive and distinguished from others in the same
          market and what makes us unique is our extensive charitable activities
          and world-class transaction flow, which facilitate the process of
          private business development. Landa Holding aims to attract reliable
          investors from all over the world and recommend the best investment
          opportunities for startup businesses, and to establish the right
          environment and connections between the idea holders and providers of
          services for this matter.
        </p>
      </div>
      <Image
        className="brightness-95 contrast-[1.10] drop-shadow-md"
        loading="lazy"
        src="/static/images/About/Team.jpg"
        width={661}
        height={404}
        quality={100}
        alt="Landa Team"
        objectFit="cover"
      />
    </div>
  );
}
