import Image from 'next/image';
import React from 'react';

export default function Fifth() {
  return (
    <div className="flex flex-col items-center relative" id="Roadmap-5">
      <div className="w-[420px] text-black text-5xl font-normal leading-snug absolute left-40 top-16">
        Work experience at the Canadian company
      </div>
      <Image
        className="mt-28 mb-16 z-10"
        alt="Landa academy"
        src={'static/images/Academy/Roadmap/Selecting team-cuate (1) 1.svg'}
        width={645}
        height={430}
      />
      <div className="justify-start items-start gap-2 inline-flex pb-5">
        <div className="w-5 h-5 bg-yellow-400 rounded-full mt-3" />
        <div className="w-[500px] text-black text-2xl font-normal leading-10 text-justify">
          Following a year of active participation within Landa, you will
          receive a credible and verifiable Canadian work experience certificate
          from us.
        </div>
      </div>
      <svg
        className="absolute top-0 left-[683px]"
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="178"
        viewBox="0 0 47 178"
        fill="none"
      >
        <path
          d="M1.5007 -4.50009C10.0788 10.4421 18.7399 36.2214 18.8044 49.7387C19.0199 94.863 1.61819 125.126 33.2157 140.199C54.8047 155.221 40.0143 158.95 42.8714 175.725"
          stroke="#FDD30A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="6 6"
        />
      </svg>
    </div>
  );
}
