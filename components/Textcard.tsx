import React from 'react';
import Button from './Button';

export default function TextCard({ text }: { text: string }) {
  return (
    <div className="flex flex-col font-barlow items-center w-[491px] text-black text-xl font-normal leading-[30px]">
      {text}
      <br />
      <Button text="Visit Now" size="visit" />
    </div>
  );
}
