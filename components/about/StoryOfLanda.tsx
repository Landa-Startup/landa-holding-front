import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UlList from '../List/UlList';
import { useTranslation } from 'app/i18n';

export default async function StoryOfLanda(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "aboutUs");

  console.log(t('KeyDifferentiatingFactors', {returnObjects: true})[0])

  return (
    <div className="flex flex-col md:px-32 py-10 md:py-14 gap-12 bg-[#F7F3EE]">
      <div className="flex flex-col lg:flex-row gap-12 text-[#000]">
        <div className="flex flex-col md:w-full lg:w-1/2 xl:w-1/2 text-justify px-10">
          <div className="w-screen -ml-10 lg:w-[449px] xl:w-[589px] md:w-[500px] h-[310px] md:h-[310px] relative ">
            <Image
              className="object-cover"
              src="/static/images/About/story/1.png"
              alt="story of landa"
              layout="fill"
            />
          </div>
          <span className="font-gilda text-3xl text-primary mt-9 mb-5">
            {t('TheStoryOfLanda', {returnObjects: true})[0].title}
          </span>
          <div className="flex flex-col text-[#000] font-barlow space-y-4">
            <p>
            {t('TheStoryOfLanda', {returnObjects: true})[0].text}
            </p>
            <div className="flex flex-col">
              {/* <p>
                Furthermore, on January 1, 2021, Landa Holding transformed into
                Federal Company.
              </p> */}
              {/* <Link
                className="text-primary"
                href={
                  'https://chat.google.com/dm/pz6RjUAAAAE/hCbpJ4Uw-54/hCbpJ4Uw-54?cls=10'
                }
              >
                Chat
              </Link> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-full lg:w-1/2 xl:w-1/2 md:text-justify px-10">
          <span className="text-primary font-gilda text-3xl">
            {t('LANDAStartups', {returnObjects: true})[0].title}
          </span>
          <ul className="flex flex-col space-y-3 mt-5">
            <li className="list-disc marker:text-primary">
              <span className="text-primary font-bold">Startup Academy</span>, a
              startup with the aim of fostering and accelerating the growth of
              teenagers, has been operating since 2017 under the supervision of
              the FarshTech company.
            </li>
            <li className="list-disc marker:text-primary">
              <span className="text-primary font-bold">Landa Trip</span>, a
              startup in the field of tourism and education with an
              international platform and professional artificial intelligence,
              began its activities in Iran in 2022.
            </li>
            <li className="list-disc marker:text-primary">
              <span className="text-primary font-bold">Diaco</span>, a startup
              in the field of industry and automation, operates with CNC Wire
              Cut machines in Canada and markets in the United States and
              Europe.
            </li>
            <li className="list-disc marker:text-primary">
              <span className="text-primary font-bold">Vision Raft</span>, a
              startup in the virtual world, children&apos;s education sector,
              expanded its operations in 2022 with the support of MTA
              Accelerator in Canada.
            </li>
            <li className="list-disc marker:text-primary">
              <span className="text-primary font-bold">Landa Handicraft</span>,
              a startup in the handicraft industry, an online store, and a
              reference point for handicrafts, attracted the necessary capital
              for platform development for the international market in 2023.
            </li>
            <li className="list-disc marker:text-primary">
              <span className="text-primary font-bold">Steady Skull</span>, a
              startup in the medical field, developed a product to facilitate
              brain surgery procedures, starting its activities in 2019 with a
              specialized team.
            </li>

          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-12 text-[#000]">
        <div className="flex flex-col md:w-full lg:w-1/2 xl:w-1/2 px-10">
          <span className="font-gilda text-3xl text-primary">
          {t('VisionOfTheLanaHolding', {returnObjects: true})[0].title}
          </span>
          <div className="flex flex-col space-y-4 mt-5">
            <p>
              {t('VisionOfTheLanaHolding', {returnObjects: true})[0].text1}
            </p>
            <p>
              {t('VisionOfTheLanaHolding', {returnObjects: true})[0].text2}
            </p>
            <p>
              {t('VisionOfTheLanaHolding', {returnObjects: true})[0].text3}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-full lg:w-1/2 xl:w-1/2 md:text-justify px-10">
          <span className="font-gilda text-3xl text-primary mb-4">
            {t('KeyDifferentiatingFactors', {returnObjects: true})[0].title}
          </span>
          <p>
            First and foremost, it&apos;s essential to understand that the most
            critical aspect is the mental model and perspective behind these key
            differentiating factors. The way we perceive and approach a business
            can create various points of distinction.
          </p>
          <span className="text-primary font-bold">What sets us apart:</span>
          <ul className="px-4">
            <li className="list-decimal">
              Specialized Screening and Analysis of Startups: We specialize in
              screening and analyzing startups, creating opportunities for
              members to learn from each other.
            </li>
            <li className="list-decimal">
              Members Invest Directly: Members invest directly in startups of
              their choice, creating an environment where no member feels
              pressured to invest, and no member misses out on potential
              investment opportunities.
            </li>
            <li className="list-decimal">
              Focus on Building Investor Connections: Our primary approach is to
              foster connections among members, involving not only charitable
              activities but also numerous entertaining activities and social
              events.
            </li>
            <li className="list-decimal">
              Value Supporters&apos;Financial Contributions: We highly value the
              financial contributions of our supporters. Their opinions and
              guidance contribute to all aspects of the holding&apos;s
              operations.
            </li>
            <li className="list-decimal">
              Inclusive Structure: Our structure provides an opportunity for
              entrepreneurs to engage with reputable investors who have the
              capacity to invest at the startup level.
            </li>
            <li className="list-decimal">
              Collaboration with Other Investment Centers: We welcome
              collaboration with other investment centers and investment
              communities. Entrepreneurs seeking capital from multiple investor
              groups benefit from this collaboration.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}