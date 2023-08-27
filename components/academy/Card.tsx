import Link from 'next/link';
import React from 'react';

export default function Card({
  title,
  image,
  active,
}: {
  title: string;
  image: string;
  active?: boolean;
}) {
  return (
    <Link
      href={title}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className={`flex items-center justify-center w-[175px] md:h-[486px] relative flex-shrink-0 p-4 bg-gray-300 courses-overlay h-[220px]${
        active ? ' border-2 border-yellow-400' : ''
      }`}
    >
      <div className="hidden md:block absolute md:w-[396px] left-[65px] top-[350px] origin-top-left -rotate-90 text-white text-4xl font-medium leading-[50px] tracking-widest">
        {title}
      </div>
      <div className="z-10 md:hidden md:w-[396px] left-[45px] top-[80px] origin-top-left text-white text-xl font-medium leading-[50px] tracking-widest">
        {title}
      </div>
      {active ? (
        <div className="flex items-center justify-center bottom-0 left-0 w-[172px] h-[45px] absolute md:w-[173px] text-center bg-yellow-400 text-emerald-800 font-medium">
          <span className="text-xl md:text-xl tracking-[1px] md:tracking-wide">
            Register Now
          </span>
        </div>
      ) : (
        <></>
      )}
    </Link>
  );
}
