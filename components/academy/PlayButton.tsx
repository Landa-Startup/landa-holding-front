import React from 'react';

export default function PlayButton() {
  return (
    <div className="inline-flex items-start gap-[10px] relative">
      <div className="relative w-[130px] h-[130px] rounded-[65px] border-[0.5px] border-solid border-white" />
      <div className="absolute w-[120px] h-[120px] top-[5px] left-[5px] bg-white rounded-[60px]" />
      <svg
        className="absolute left-12 bottom-11"
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="44"
        viewBox="0 0 38 44"
        fill="none"
      >
        <path
          d="M2 2.94744L35 22L2 41.0526V2.94744Z"
          stroke="#3D5656"
          stroke-width="3"
        />
      </svg>
    </div>
  );
}
