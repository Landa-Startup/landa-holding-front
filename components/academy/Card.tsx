import React from 'react';

export default function Card({
  title,
  active,
}: {
  title: string;
  active?: boolean;
}) {
  return (
    <div className="md:w-[175px] md:h-[486px] relative">
      <img
        className="md:w-[335px] md:h-[486px] left-0 top-0 absolute"
        src="https://via.placeholder.com/335x486"
      />
      <div
        className={`md:w-[175px]  ${
          active ? 'border-4 border-yellow-400' : ''
        } md:h-[486px] left-0 top-0 absolute bg-gradient-to-b from-yellow-400 to-lime-400`}
      />
      <div className="md:w-[396px] left-[65px] top-[441px] absolute origin-top-left -rotate-90 text-white text-4xl font-medium leading-[50px] tracking-widest">
        {title}
      </div>
      {active ? (
        <div className="bottom-0 absolute md:w-[172px] text-center bg-yellow-400 text-emerald-800 text-xl font-medium tracking-wide">
          Register Now
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
