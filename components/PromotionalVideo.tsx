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
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-base font-normal tracking-wide text-white w-155 h-23">
          LANDA HOLDING
        </div>
        <div className="h-12 text-4xl font-normal tracking-wider text-white w-373">
          Promotional Video
        </div>
        {/* TODO: SVG file should move to: components/icons/LandaIcon.tsx */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-stone-100">
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
