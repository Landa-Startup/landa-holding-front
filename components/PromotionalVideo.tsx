import React from 'react';

export default function PromotionalVideo() {
  return (
    <div
      style={{
        backgroundImage: "url('/static/images/blurred-co-working.png')",
      }}
      className="h-[400px]"
    >
      <div className="flex justify-center items-center h-screen flex-col">
      <div className="w-155 h-23 text-white text-base font-normal tracking-wide">
  LANDA HOLDING
</div>
<div className="w-373 h-12 text-white text-4xl font-normal tracking-wider">
  Promotional Video
</div>
<div className="w-16 h-16 rounded-full bg-stone-100 flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
        {/* play button */}
      </div>
    </div>
  );
}
