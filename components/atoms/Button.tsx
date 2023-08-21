import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
  size: string;
  type?: 'button' | 'reset' | 'submit';
};

export default function Button({
  text,
  size,
  type = 'button',
  addedClass,
  bgColor,
}: {
  text: string;
  size: string;
  type?: 'button' | 'reset' | 'submit';
  addedClass?: string;
  bgColor?: string;
}) {
  return size == 'visit' ? (
    <button
      className={
        `btn2 w-[135px] md:w-[219px] h-[32px] md:h-[60px] pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px] ${
          bgColor ? bgColor : 'bg-primary'
        } px-10 py-5 relative border border-white uppercase  tracking-wider leading-none overflow-hidden inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal hover:text-white ` +
        addedClass
      }
      type={type}
      // {...rest}
    >
      <span className="absolute inset-0 bg-black"></span>
      <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal leading-none">
        {text}
      </span>
      <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal leading-none">
        {text}
      </span>
    </button>
  ) : (
    <button
      className={`hidden md:flex btn2 h-11 pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px] ${
        bgColor ? bgColor : 'bg-primary'
      } px-10 py-5 relative border border-white uppercase  tracking-wider leading-none overflow-hidden inset-0 justify-center items-center text-center font-condensed text-white text-base font-normal hover:text-white`}
      type={type}
      // {...rest}
    >
      <span className="absolute inset-0 bg-black"></span>
      <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal">
        {text}
      </span>
      {/* If text going to change after hover, put it here */}
    </button>
  );
}
