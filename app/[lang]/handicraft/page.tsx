import BannerStartUp from '@/components/common/BannerStartup';
import HandicraftForm from '@/components/common/form/HandicraftForm';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Landa Holding | Handicrafts',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default function page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  return (
    <div>
      <BannerStartUp
        image="/static/images/handicraftBanner.png"
        title="LANDA Handicrafts"
        logo="/static/images/handicrafts.svg"
        lang={lang}
      />
      <div className="mx-8 my-14 flex flex-col gap-8 md:mx-24">
        <div className="relative flex">
          <Image
            className="hidden md:block"
            src="/static/images/handicraftLogo.png"
            alt="handicraft"
            width={500}
            height={500}
          />
          <Image
            className="absolute top-1/4 object-cover opacity-20 md:hidden"
            src="/static/images/handicraftLogo.png"
            alt="handicraft"
            layout="fill"
          />
          <p className="z-10 text-justify font-barlow text-base font-normal leading-[48px] tracking-wider text-black md:mt-5">
            Landa Handicraft is an innovative and astute start-up that was
            founded with the goal of establishing a direct and dependable
            communication bridge between producers and customers all over the
            world, as well as addressing the challenges and worries that this
            industry faces. As a subsidiary of Landa International Holding, this
            start-up has begun its operations for handicraft aficionados all
            over the world. We have formed a group of outstanding and
            experienced individuals after years of study in the global craft
            business.
          </p>
        </div>
        <div className="relative flex flex-col-reverse justify-between overflow-hidden md:flex-row">
          <p className="mt-7 text-justify font-barlow text-base font-normal leading-[45px] tracking-wider text-black md:mt-0 md:w-[652px]">
            Using NFT on this platform is one of the qualities that separates
            Landa Handicraft from its competitors. We were able to bring the NFT
            system into the handicraft area by investing heavily and utilizing
            our skilled staff. We can address concerns regarding the
            authenticity of artistic and cultural works under consideration with
            the assistance of this feature.
            <br />
            With the help of a team of Artificial intelligence (AI) and
            Augmented Reality (AR) specialists, the presence of prominent
            individuals in the field of handicrafts, and initial approval from
            the Canadian government, the Landa Handicraft startup has
            established itself as a reliable platform for those who love and
            value handicrafts, especially those who appreciate the importance of
            preserving their products&apos; authenticity.
          </p>
          <div className="absolute -bottom-56 -right-40 h-[650px] w-screen md:hidden">
            <Image
              className=" object-cover opacity-20 md:hidden"
              src="/static/images/handicraftLogo.png"
              alt="handicraft"
              layout="fill"
            />
          </div>
          <div className="relative h-[500px] w-full md:w-[650px]">
            <Image
              className="rounded-sm object-cover"
              src="/static/images/handicrafts1.jpg"
              alt="handicraft"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-11 rounded-sm bg-[#F7F3EE] px-8 py-5 md:px-24">
          <p className="font-openSans text-base font-bold leading-[210%] tracking-wider text-[#AA8453]">
            Please fill out the following form to indicate your interest in
            collaborating with the Landa Handicrafts startup or future
            opportunities:
          </p>
          <HandicraftForm />
        </div>
      </div>
    </div>
  );
}
