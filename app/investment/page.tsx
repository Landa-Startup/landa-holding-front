import Hero from '@/components/investment/HeroInvestment';
import Button from '@/components/common/Button';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import Link from '@/components/icons/Link';
import FeaturesCards from '@/components/investment/FeaturesCards';
import Image from 'next/image';
import React from 'react';
import Certificate from '@/components/investment/Certificate';
import { Metadata } from 'next';
import FeaturesCardsContainer from '@/components/investment/FeaturesCardsContainer';

export const metadata: Metadata = {
  title: 'Landa Holding | Investment',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default function page() {
  return (
    <div>
      {/* TODO: we have multiple hero with same styles. make one component for all */}
      <Hero
        backgroundImage="/static/images/investment/hero.png"
        showLanda
        leftImage="/static/images/investment/left.svg"
        showButton
      />
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-8 md:px-28 gap-6 md:gap-24 bg-[#F7F3EE] items-end">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col font-gilda whitespace-nowrap">
            <span className="text-3xl md:text-5xl text-[#55422A]">
              LANDA INVESTMENT :
            </span>
            <span className="text-lg md:text-4xl text-primary">
              What is an investment holding company?
            </span>
          </div>
          {/* TODO: make component these texts */}
          <p className="leading-8 tracking-[1px] font-barlow text-justify">
            In the realm of finance, various types of firms engage in investing
            in other companies. However, what sets holding companies apart is
            their ability to acquire a controlling stake that grants them the
            power to influence management decisions and shape the long-term
            strategic objectives of the target firm. Although holding companies
            secure a controlling stake, they also enjoy entitlement to the
            profits generated by their subsidiary companies. The share of
            profits they receive is determined by the extent of their
            controlling stake and is calculated after the subsidiary has
            accounted for all business expenses, cost of goods sold, interest,
            and tax payments. In addition to their strategic benefits, holding
            companies can provide tax advantages, particularly when the parent
            company is located in a region with a low tax rate. Furthermore,
            subsidiaries can be acquired in two ways: through the purchase of
            shares or through the decision of a larger entity to spin off a
            specific business unit.
          </p>
        </div>
        <div className="w-[320px] md:w-[600px] h-[300px] md:h-[450px] relative">
          <Image
            className="object-cover"
            src="/static/images/investment/1.jpg"
            alt="LANDA INVESTMENT"
            layout="fill"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-8 md:px-28 gap-6 md:gap-24 relative">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-2xl md:text-4xl text-primary font-gilda">
              Types of Holding Companies
            </span>
          </div>
          <p className="leading-7 tracking-[1px] font-barlow text-justify">
            Many holding companies are primarily focused on ownership control
            and do not engage in manufacturing, sales of products or services,
            or any other operational activities. Their main purpose is to
            possess majority stock or membership interests in other companies,
            giving rise to the term &apos;pure holding company.&apos; In
            contrast, some holding companies not only hold ownership stakes in
            subsidiaries but also conduct their own business operations. These
            are known as &apos;mixed holding companies. Additionally, there are
            other categories of holding companies, such as immediate and
            intermediate holding companies. These types of holding companies are
            themselves owned by other holding companies or larger businesses.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="md:w-[575px] h-[171px] relative">
            <Image
              className="object-cover"
              src="/static/images/investment/Incorporation-page-001 1.png"
              alt="LANDA INVESTMENT"
              layout="fill"
            />
          </div>
          <span className="text-2xl md:text-4xl text-primary font-gilda">
            Landa Investment Strategy
          </span>
          <p className="leading-7 tracking-[1px] font-barlow text-justify">
            Landa Investment Center is mainly focused on attracting investors
            from all over the world and investing collected resources in
            innovative, scalable, and promising startups with international
            market potentials. For this purpose, we are named angel investors
            who facilitate planning and developing new businesses, and who
            introduce that startup to global markets.
          </p>
        </div>
        <Image
          src="/static/images/investment/logo 1.png"
          alt="Logo"
          layout="fill"
          className="object-contain pb-[500px] md:pb-10 md:pt-10 -z-10"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-8 md:px-28 gap-6 md:gap-24 bg-[#F7F3EE]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-2xl md:text-4xl text-primary font-gilda">
              Investment in Startups
            </span>
          </div>
          <p className="leading-8 tracking-[1px] font-barlow text-justify">
            Investing in a startup has the potential to yield noticeable
            returns, yet it isn’t a risk-free enterprise. There are no
            guarantees that a fledgling company will take off, and if it fails,
            investors may walk away with nothing. Startup investors are
            essentially buying a piece of the company with their investment.
            They are putting down capital, in exchange for a portion of
            ownership in the startup and rights to its potential future profits.
          </p>
          <div className="relative w-[561px] h-[168px] hidden md:block">
            <Image
              src="/static/images/investment/Incorporation-page-001 1 (1).png"
              alt="Coin"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="md:w-[575px] h-[230px] relative">
            <Image
              className="object-cover"
              src="/static/images/investment/Incorporation-page-001 1 (2).png"
              alt="LANDA INVESTMENT"
              layout="fill"
            />
          </div>
          <span className="text-2xl md:text-4xl text-primary font-gilda">
            Our Vision and Mission
          </span>
          <p className="leading-7 tracking-[1px] font-barlow text-justify">
            It is our vision to evaluate and identify the most promising and
            innovative startup plans in order to minimize the risks of failure
            for the investors who confide in our company, and our mission to to
            provide the clients with all the necessary tools and resources to
            pave the way to success and ensure significant returns and profits
            for both parties.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-8 md:px-28 gap-6 md:gap-24 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-2xl md:text-4xl text-primary font-gilda">
            Certificate of Incorporation
          </span>
          <div className="flex items-end">
            <Certificate />
            <Link size={32} addedClass="-ml-10 mb-3 z-10" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="leading-8 tracking-[1px] font-barlow text-justify">
            Landa holding companies are primarily focused on ownership control
            and do not engage in manufacturing, sales of products or services,
            or any other operational activities. Their main purpose is to
            possess majority stock or membership interests in other companies,
            giving rise to the term &apos;pure holding company.&apos; In
            contrast, some holding companies not only hold ownership stakes in
            subsidiaries but also conduct their own business operations. These
            are known as &apos;mixed holding companies. Additionally, there are
            other categories of holding companies, such as immediate and
            intermediate holding companies. These types of holding companies are
            themselves owned by other holding companies or larger businesses.
          </p>
          <Button
            goto="/"
            size="not"
            text="Federal Canada Corporation Information"
            bgColor="Primary"
            addedClass="w-full"
          />
        </div>
      </div>
      <div className="bg-[#F7F3EE] py-10 md:py-16 px-8 md:px-28">
        <div className="leading-8 tracking-[1px] font-barlow text-justify">
          <p>
            At Landa Holding, our objective is to identify innovative start-up
            projects, minimize risks, and foster success for our trusted
            investors. We offer a comprehensive range of tools, resources, and
            knowledge-sharing opportunities to ensure significant returns for
            both parties. We value your entrepreneurial ideas and perspectives
            and provide unwavering support throughout your journey. Through
            dynamic meetings, we share relevant information, opportunities, and
            feedback, working together to overcome challenges and achieve your
            goals. Our emphasis on research and innovation creates a space for
            creativity, where we tailor support to each start-up, maximizing
            existing capital. Trust us to elevate your entrepreneurial endeavors
            and provide ongoing resources for your ideas to thrive.
          </p>
          <p>
            -Don&apos;t wait for opportunities to come knocking. Be the driver
            of your own success by venturing into entrepreneurship and
            unleashing your limitless creativity and innovation at Landa Holding
            -Experience the freedom of entrepreneurship, where you have the
            power to turn your passion into a purpose-driven business that
            leaves a lasting legacy by being at Landa Holding. -By becoming a
            part of Landa Holding, embrace the thrill and rewards of
            entrepreneurship, where every decision you make and every obstacle
            you overcome adds to your journey of growth and achievement.
          </p>
        </div>
        <FeaturesCardsContainer />
      </div>
      {/* <UpcomingEvents /> */}
    </div>
  );
}