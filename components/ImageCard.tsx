import React from 'react';

export default function ImageCard({ title }: { title: string }) {
  return (
    <div>
      <div className="w-[557px] h-11 text-center text-neutral-800 text-[32px] font-normal uppercase tracking-[11.20px]">
        Landa holding
      </div>
      <div className="text-center">
        <span className="text-neutral-800 text-[64px] font-normal tracking-[6.40px]">
          {title}
        </span>
        <span className="text-neutral-800 text-[64px] font-normal tracking-[7.04px]"></span>
      </div>
    </div>
  );
}
