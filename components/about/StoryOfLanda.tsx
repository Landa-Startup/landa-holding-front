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
    <div className="flex flex-col gap-12 bg-[#F7F3EE] py-10 md:px-32 md:py-14">
      <div className="flex flex-col gap-12 text-[#000] lg:flex-row">
        <div className="flex flex-col px-10 text-justify md:w-full lg:w-1/2 xl:w-1/2">
          <div className="relative -ml-10 h-[310px] w-screen md:h-[310px] md:w-[500px] lg:w-[449px] xl:w-[589px] ">
            <Image
              className="object-cover"
              src="/static/images/About/story/1.png"
              alt="story of landa"
              layout="fill"
            />
          </div>
          <span className="mb-5 mt-9 font-gilda text-3xl text-primary">
            {t('TheStoryOfLanda', {returnObjects: true})[0].title}
          </span>
          <div className="flex flex-col space-y-4 font-barlow text-[#000]">
            <p>
            {t('TheStoryOfLanda', {returnObjects: true})[0].text}
            </p>
            <div className="flex flex-col">
            </div>
          </div>
        </div>
        <div className="flex flex-col px-10 md:w-full md:text-justify lg:w-1/2 xl:w-1/2">
          <span className="font-gilda text-3xl text-primary">
            {t('LANDAStartups', {returnObjects: true})[0].title}
          </span>
          <ul className="mt-5 flex flex-col space-y-3">
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">Startup Academy</span>, a
              startup with the aim of fostering and accelerating the growth of
              teenagers, has been operating since 2017 under the supervision of
              the FarshTech company.
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">Landa Trip</span>, a
              startup in the field of tourism and education with an
              international platform and professional artificial intelligence,
              began its activities in Iran in 2022.
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">Diaco</span>, a startup
              in the field of industry and automation, operates with CNC Wire
              Cut machines in Canada and markets in the United States and
              Europe.
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">Vision Raft</span>, a
              startup in the virtual world, children&apos;s education sector,
              expanded its operations in 2022 with the support of MTA
              Accelerator in Canada.
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">Landa Handicraft</span>,
              a startup in the handicraft industry, an online store, and a
              reference point for handicrafts, attracted the necessary capital
              for platform development for the international market in 2023.
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">Steady Skull</span>, a
              startup in the medical field, developed a product to facilitate
              brain surgery procedures, starting its activities in 2019 with a
              specialized team.
            </li>

          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-12 text-[#000] md:flex-col lg:flex-row xl:flex-row">
        <div className="flex flex-col px-10 md:w-full">
          <span className="font-gilda text-3xl text-primary">
          {t('VisionOfTheLanaHolding', {returnObjects: true})[0].title}
          </span>
          <div className="mt-5 flex flex-col space-y-4">
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
        {/* <div className="flex flex-col px-10 md:w-full md:text-justify lg:w-1/2 xl:w-1/2">
          <span className="mb-4 font-gilda text-3xl text-primary">
            {t('KeyDifferentiatingFactors', {returnObjects: true})[0].title}
          </span>
          <p>
            First and foremost, it&apos;s essential to understand that the most
            critical aspect is the mental model and perspective behind these key
            differentiating factors. The way we perceive and approach a business
            can create various points of distinction.
          </p>
          <span className="font-bold text-primary">What sets us apart:</span>
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
        </div> */}
      </div>
    </div>
  );
}