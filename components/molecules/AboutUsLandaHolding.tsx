import React from 'react';
import Image from 'next/image';

export default function AboutUsLandaHolding() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly pt-5 md:py-32 bg-[#FAFAFA]">
      <div className="text-black p-7 space-y-2">
        <p className="text-3xl text-center font-semibold font-gilda">
          About Landa Holding
        </p>
        <p className="md:w-[387px] text-justify mt-4 md:mt-0 ml-0 md:ml-5 font-normal tracking-wide font-barlow">
          Landa International Holding started its activity in Canada in 2017 as
          one of the most reliable companies in the field of investing in new
          innovative startups and businesses. Landa Holding’s distinctive
          feature that makes it unique compared to other companies is its long
          experience, reliability, and sincerity in providing services. Landa
          Holding aims to gather reliable investors together from all over the
          world and introduce the best investment opportunities for start-up
          businesses.
        </p>
      </div>
      <Image
        loading="lazy"
        src="/static/images/About/team.jpg"
        width={661}
        height={404}
        quality={100}
        alt="Landa Team"
        objectFit="cover"
      />
    </div>
  );
}
