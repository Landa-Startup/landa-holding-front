import React from 'react';

export default function TextCard({ text }: { text: string }) {
  return (
    <div className="w-[491px] text-black text-xl font-normal leading-[30px]">
      {text}
      <br />
    </div>
  );
}
