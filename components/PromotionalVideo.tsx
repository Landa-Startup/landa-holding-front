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
<<<<<<<<< Temporary merge branch 1
      <div className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
=========
      <div className="flex flex-col items-center justify-center h-screen">
>>>>>>>>> Temporary merge branch 2
        <div className="text-base font-normal tracking-wide text-white w-155 h-23">
          LANDA HOLDING
        </div>
        <div className="h-12 text-4xl font-normal tracking-wider text-white w-373">
          Promotional Video
        </div>
<<<<<<<<< Temporary merge branch 1
        <button className="relative border rounded-full w-14 h-14 bg-zinc-300 border-zinc-300 border-spacing-2">
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
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
=========
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
