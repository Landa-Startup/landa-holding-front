import React from 'react';

export default function Input({ title }: { title: string }) {
  return (
    <div className="w-[297px] h-[75px] px-[11px] py-[5px] flex-col justify-start items-start gap-2 inline-flex">
      <div className="h-[17px]">
        <span className="text-black text-base font-normal">{title}</span>
        <span className="text-stone-500 text-base font-normal">*</span>
      </div>
      <input
        className="w-[275px] h-[31px] relative bg-stone-100 shadow"
        placeholder="First Name"
      ></input>
    </div>
  );
}
