import Image from 'next/image';
import React from 'react';

export default function UploadInput({ title }: { title: string }) {
  return (
    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="=text-neutral-800 text-[15px] font-normal">{title}</div>
      <div className="px-6 py-2 rounded-md bg-stone-100 shadow justify-center items-center gap-[5px] inline-flex">
        <Image
          className="w-5 h-5"
          src="/static/images/01b4cd75ff21ef0a30e6e410fa049bb0.png"
          width={100}
          height={100}
          alt="upload"
        />
        <input
          className="text-neutral-800 text-[13px] font-normal capitalize"
          type="file"
        />
      </div>
    </div>
  );
}