import React from 'react';

export default function PromotionalVideo() {
  return (
    <div
      style={{
        backgroundImage: "url('/static/images/blurred-co-working.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="h-[400px] relative"
    >
      <div className="absolute flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-155 h-23 text-white text-base font-normal tracking-wide">
          LANDA HOLDING
        </div>
        <div className="w-373 h-12 text-white text-4xl font-normal tracking-wider">
          Promotional Video
        </div>
        <button className="relative w-14 h-14 bg-zinc-300 rounded-full border border-zinc-300 border-spacing-2">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              className="w-6 h-6 text-stone-500"
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
          </span>
        </button>
      </div>
    </div>
  );
}
