import React from 'react';

export default function LandaHoldingBlack() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center relative bg-neutral-800 md:h-[590px] py-10">
      <svg
        className="absolute left-[940px]"
        xmlns="http://www.w3.org/2000/svg"
        width="238"
        height="589"
        viewBox="0 0 238 589"
        fill="none"
      >
        <path
          d="M70.5 0L70 145.875M70 293.75H237.5M70 293.75V145.875M70 293.75V588.5M70 145.875H0"
          stroke="#F8F5F0"
          stroke-width="2"
        />
      </svg>
      <div className="flex flex-col items-center md:items-start mb-10 md:mb-0 space-y-2">
        <div>
          <span className="text-white font-barlow text-base font-normal tracking-[5.60px]">
            LANDA HOLDING
            <br />
          </span>
          <span className="text-white text-3xl font-barlow font-normal hidden md:block">
            Investment Center
            <br />
          </span>
        </div>
        <div className="w-[353px] md:w-[434px]">
          <ul className="text-white text-base font-normal leading-8 list-disc pl-4 font-barlow md:mt-4">
            <li>Global Investment Opportunities within Your Reach.</li>
            <li>
              Access to a Network of Successful Entrepreneurs and Investors.
            </li>
            <li>
              Exclusive Insights and Expert Analysis for Informed Decisions.
            </li>
            <li>
              Collaborative Environment for Joint Ventures and Partnerships.
            </li>
            <li>
              Accelerated Growth Potential through Diversified Investments.
            </li>
          </ul>
        </div>
        <button className="relative justify-start items-center gap-4 inline-flex">
          <div className="text-stone-100 text-xl md:text-3xl font-normal leading-6 tracking-wider font-condensed">
            More
          </div>
          <div className="justify-start items-start gap-2.5 flex w-5 h-5">
            <div className="w-5 h-5 md:w-10 md:h-10 border border-stone-100" />
            <svg
              className="absolute text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center md:items-start md:mt-5 space-y-2">
        <div>
          <span className="text-white font-barlow text-base font-normal tracking-[5.60px]">
            LANDA HOLDING
            <br />
          </span>
          <span className="text-white text-3xl font-barlow font-normal hidden md:block">
            Entrepreneur Center
            <br />
          </span>
        </div>
        <ul className="text-white text-base font-normal leading-8 list-disc pl-4 font-barlow md:mt-4">
          <li className="list-disc">
            Global Networking Opportunities for Collaboration and Partnerships
          </li>
          <li className="list-disc">
            Access to all videos of pitches, industry trend presentations and
            panel discussions
          </li>
          <li className="list-disc">
            Attending events of the Entrepreneurs Center
          </li>
          <li className="list-disc">
            Meetings with top business leaders and entrepreneurs
          </li>
          <li className="list-disc">
            Participation in seasonal meetings with other international
            entrepreneurs
          </li>
          <li className="list-disc">
            Online platform for connecting with other entrepreneurs
          </li>
        </ul>

        <button className="relative justify-start items-center gap-4 inline-flex">
          <div className="text-stone-100 text-xl md:text-3xl font-normal leading-6 tracking-wider font-condense">
            More
          </div>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="w-5 h-5 md:w-10 md:h-10 border border-stone-100" />
            <svg
              className="absolute text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
