import React from 'react';
import Image from 'next/image';

export default function AboutUsLandaHolding() {
  return (
    <div className="flex flex-col lg:flex-col xl:flex-row items-center justify-evenly pt-5 md:py-32 bg-[#FAFAFA]">
      <div className="text-black p-3 space-y-2">
        <p className="text-3xl text-center font-semibold font-gilda">
          About Landa Holding
        </p>
        <p className="lg:w-[687px]  text-justify  text-xl mt-4 md:mt-8 ml-0 md:mx-10 font-normal tracking-wide font-barlow mb-20">
          {/* Landa International Holding started its activity in Canada in 2017 as
          one of the most reliable companies in the field of immigration. Landa
          Holding&rsquo;s distinctive feature that makes it unique compared to
          other immigration companies is its extensive charitable activities and
          high-quality transaction flow. Landa Holding aims to gather reliable
          investors together from all over the world and introduce the best
          investment opportunities for start-up businesses. */}
          We are a team of Angel Investors who help you make your own team, define your business model, and increase the value of your startup in international markets. What distinguishes us and makes us unique is our assistance in attracting resources and investment, inviting international investors and business associates, in addition to our entrepreneurs, that will all lead to success. Landa Holding aims to gather all resources from all over the world and introduce the best investment opportunities for start-up businesses.        </p>
      </div>
      <Image
        className="brightness-95 contrast-[1.15] drop-shadow-md"
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