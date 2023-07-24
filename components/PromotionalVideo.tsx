import React from 'react';

export default function PromotionalVideo() {
  return (
    <div
      style={{
        backgroundImage: "url('/static/images/blurred-co-working.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'brightness(0.8)',
      }}
      className="h-[400px] relative"
    >
      <div className="absolute flex flex-col h-[400px] justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-155 h-23 text-white text-base font-normal tracking-wide font-condensed">
          LANDA HOLDING
        </div>
        <div className="w-373 h-12 my-4 text-white text-4xl font-normal tracking-wider font-gilda">
          Promotional Video
        </div>
        <div className="w-20 h-20  opacity-100 relative p-6 border-2 border-primary text-center text-white font-futura rounded-full font-light   b4">
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