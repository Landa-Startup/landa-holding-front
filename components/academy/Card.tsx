import React from 'react';

export default function Card({
  title,
  active,
}: {
  title: string;
  active?: boolean;
}) {
  return (
    <div
      style={{
        backgroundImage: `url('/static/images/Academy/courses/Rectangle 3011 (1).png'), linear-gradient(to bottom, #f6e05e, #84cc16)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className={`w-[175px] h-[486px] relative flex-shrink-0 p-4 bg-gray-300 ${
        active ? 'border-2 border-yellow-400' : ''
      }`}
    >
      <div className="md:w-[396px] left-[65px] top-[441px] absolute origin-top-left -rotate-90 text-white text-4xl font-medium leading-[50px] tracking-widest">
        {title}
      </div>
      {active ? (
        <div className="bottom-0 left-0 absolute md:w-[173px] text-center bg-yellow-400 text-emerald-800 text-xl font-medium tracking-wide">
          Register Now
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
