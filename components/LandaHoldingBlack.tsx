import React from 'react';

export default function LandaHoldingBalck() {
  return (
    <div className="relative bg-neutral-800">
      <div className="flex flex-col md:flex-row justify-around items-center p-9">
        <div className="w-[245px] h-[70.55px] text-center font-barlow md:hidden mb-3">
          <span className="text-white text-base font-normal tracking-[5.60px]">
            LANDA HOLDING
            <br />
          </span>
          <span className="text-white text-4xl font-normal">
            Cooperation
            <br />
          </span>
        </div>
        <div>
          <div className="w-[312px] md:h-[69px]">
            <span className="hidden md:block text-white font-barlow text-base font-normal tracking-[5.60px]">
              LANDA HOLDING
              <br />
            </span>
            <span className="text-white text-3xl font-barlow font-normal">
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
        <div>
          <div className="w-[312px] md:h-[69px]">
            <span className="hidden md:block text-white font-barlow text-base font-normal tracking-[5.60px]">
              LANDA HOLDING
              <br />
            </span>
            <span className="mt-14 text-white text-[32px] font-normal font-barlow">
              Entrepreneur Center
              <br />
            </span>
          </div>
          <ul className="font-barlow text-white text-base font-normal leading-8 mt-4">
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
    </div>
  );
}
