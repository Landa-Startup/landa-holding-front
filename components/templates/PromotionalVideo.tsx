import React from 'react';

export default function PromotionalVideo() {
  return (
    <div
      style={{
        backgroundImage:
          "url('/static/images/Home/Promotional-Video/blurred-co-working.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'brightness(0.8)',
      }}
      className="h-[400px] relative"
    >
      <div className="absolute flex flex-col h-[400px] w-full inset-0 bg-black bg-opacity-40 justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-base font-normal tracking-wide text-white w-155 h-23 font-condensed">
          LANDA HOLDING
        </div>
        <div className="h-12 my-4 text-4xl font-normal tracking-wider text-white w-373 font-gilda">
          Promotional Video
        </div>
        <div className="relative w-20 h-20 p-6 font-light text-center text-white border-2 rounded-full opacity-100 border-primary font-futura b4">
          <div className="circle h-1 w-1 top-1/2 left-1/2 bg-white rounded-full absolute  z-[-10]"></div>
          <svg
            className="w-8 h-w-8 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      </div>
    </div>
  );
}