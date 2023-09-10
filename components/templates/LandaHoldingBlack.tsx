import Link from 'next/link';
import React from 'react';

export default function LandaHoldingBlack() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly md:justify-between md:pr-20 md:pl-36 items-center relative bg-neutral-800 h-[900px] md:h-[590px] py-5 md:py-10 space-y-5 pb-5">
      <svg
        className="absolute left-[260px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="238"
        height="589"
        viewBox="0 0 238 589"
        fill="none"
      >
        <path
          d="M70.5 0L70 145.875M70 293.75H237.5M70 293.75V145.875M70 293.75V588.5M70 145.875H0"
          stroke="#F8F5F0"
          strokeWidth="2"
        />
      </svg> 
      <svg
        className="md:hidden absolute left-0 "
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="899"
        viewBox="0 0 75 899"
        fill="none"
      >
        <path
          d="M23.885 -1L23.7156 153.41M23.885 503.319H75M23.885 503.319L23.7156 153.41M23.885 503.319L23.7156 621.933L23.7664 705.115M23.7156 153.41H0M23.885 899V804.559M23.885 804.559H59.7674M23.885 804.559L23.7664 705.115M23.7664 705.115H0"
          stroke="#F8F5F0"
        />
      </svg>
      <svg
        className="md:hidden absolute right-0 "
        xmlns="http://www.w3.org/2000/svg"
        width="149"
        height="899"
        viewBox="0 0 149 899"
        fill="none"
      >
        <path
          d="M124.788 0L124.96 154.143M124.96 385.375H0M124.96 385.375V154.143M124.96 385.375V606.215M124.96 154.143H149M124.96 899V853.956M124.96 606.215V621.855V760.428V853.956M124.96 606.215H149M124.96 853.956H18.5"
          stroke="#F8F5F0"
        />
      </svg>
      <div className="h-[376px] flex flex-col items-center mt-5 justify-around md:items-start ">
        <div className="flex flex-col items-start">
          <span className="text-white font-barlow text-base font-normal tracking-[5.60px]">
            LANDA HOLDING
            <br />
          </span>
          <span className="text-white text-3xl font-condensed font-normal ">
            Investment Center
            <br />
          </span>
        </div>
        <div className="w-[350px] md:w-[434px]">
          <ul className="text-white text-[14px] font-normal leading-9 list-disc pl-4 font-barlow space-y-2">
            <li className="leading-7 md:leading-10">
              Global Investment Opportunities within Your Reach.
            </li>
            <li className="leading-7 md:leading-10">
              Access to a Network of Successful Entrepreneurs and Investors.
            </li>
            <li className="leading-7 md:leading-10">
              Exclusive Insights and Expert Analysis for Informed Decisions.
            </li>
            <li className="leading-7 md:leading-10">
              Collaborative Environment for Joint Ventures and Partnerships.
            </li>
            <li className="leading-7 md:leading-10">
              Accelerated Growth Potential through Diversified Investments.
            </li>
          </ul>
        </div>
        <button className="relative justify-start items-center gap-4 inline-flex md:self-center md:pt-5 group">
          <Link href={'/investor-registration'}>
            <div className="text-stone-100 text-[28px] md:text-[32px] font-normal leading-6 tracking-[1.5px] font-condensed">
              Register
            </div>
          </Link>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="relative w-5 h-5 md:w-10 md:h-10">
              <div className="absolute inset-0 bg-white border border-stone-100 transition duration-1000 ease-in-out opacity-0 hover:opacity-100"></div>
              <div className="w-full h-full border border-stone-100">
                <svg
                  className="absolute text-white transition duration-1000 ease-in-out group-hover:text-black group-hover:bg-white"
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
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center md:items-start mt-11 md:mt-5 space-y-2">
        <div className="flex flex-col items-start">
          <span className="text-white font-barlow text-base font-normal tracking-[5.60px]">
            LANDA HOLDING
            <br />
          </span>
          <span className="text-white text-3xl font-condensed font-normal">
            Entrepreneur Center
            <br />
          </span>
        </div>
        <div className="w-[300px] md:w-[500px]">
          <ul className="text-white text-base font-normal leading-8 list-disc pl-5 font-barlow md:mt-4 leading-lose">
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
            <li className="llist-disc">
              Participation in seasonal meetings with other international
              entrepreneurs
            </li>
            <li className="list-disc">
              Online platform for connecting with other entrepreneurs
            </li>
          </ul>
        </div>
        <button className="relative justify-start items-center gap-4 inline-flex md:self-center md:pt-5 group">
          <Link href={'/entrepreneurs'}>
            <div className="text-stone-100 text-[28px] md:text-[32px] tracking-[1.5px] font-normal leading-6 font-condensed">
              Register
            </div>
          </Link>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="relative w-5 h-5 md:w-10 md:h-10">
              <div className="absolute inset-0 bg-white border border-stone-100 transition duration-1000 ease-in-out opacity-0 hover:opacity-100"></div>
              <div className="w-full h-full border border-stone-100">
                <svg
                  className="absolute text-white transition duration-1000 ease-in-out group-hover:text-black group-hover:bg-white"
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
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
