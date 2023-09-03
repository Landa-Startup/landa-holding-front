import React from 'react';
import Image from 'next/image';

export default function AboutUsLandaHolding() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly pt-5 md:py-32 bg-[#FAFAFA]">
      <div className="text-black sm:pb-4 lg:text-justify p-7">
        <p className="pb-4 text-3xl text-center xl:text-4xl md:text-left text-semibold font-gilda">
          About Landa Holding
        </p>
        <p className="md:w-[387px] text-justify ml-5 font-normal md:tracking-wide font-barlow md:ml-0">
          Landa International Holding started its activity in Canada in 2017 as
          one of the most reliable companies in the field of immigration. Landa
          Holding&rsquo;s distinctive feature that makes it unique compared to
          other immigration companies is its extensive charitable activities and
          high-quality transaction flow. Landa Holding aims to gather reliable
          investors together from all over the world and introduce the best
          investment opportunities for start-up businesses.
        </p>
      </div>
      <Image
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
