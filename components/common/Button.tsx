'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

// Define the ButtonProps type
// go to prop causes a redirext
type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string | ReactNode;
  size: string;
  type?: 'button' | 'reset' | 'submit';
  addedClass?: string;
  bgColor?: 'Primary' | 'Yellow';
  goto: string;
  disabled?: boolean;
};

export default function Button({
  text,
  size,
  type = 'button',
  addedClass,
  bgColor,
  goto,
  disabled = false
}: ButtonProps) {
  // Determine the button size and apply appropriate styles
  const isVisitSize = size === 'visit';

  const router = useRouter();

  return (
<<<<<<< HEAD
    <Link href={goto}>
      <button
        className={`btn2 ${
          isVisitSize
            ? 'w-[135px] md:w-[219px] h-[32px] md:h-[60px] pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px]'
            : 'hidden md:flex h-11 pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px]'
        } ${
          bgColor === 'Primary' ? 'bg-primary' : 'bg-[#FDD30A]'
        } px-10 py-5 relative border border-white uppercase tracking-wider leading-none overflow-hidden inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal hover:text-white ${addedClass}`}
        type={type}
      >
        <span className="absolute inset-0 bg-black"></span>
=======
    <button
      onClick={() => {
        goto ? router.push(goto || '/') : ""
      }}
      className={`btn2 ${
        isVisitSize
          ? 'w-[135px] md:w-[219px] h-[32px] md:h-[60px] pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px]'
          : 'w-full md:w-[235px] lg:w-[300px] md:flex h-11 pl-[72px] pr-[71px] pt-[15px] pb-4 mt-[19px]'
      } ${
        bgColor === 'Primary' ? 'bg-primary' : 'bg-[#FDD30A]'
      } px-10 py-5 relative border border-white uppercase tracking-wider leading-none overflow-hidden inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal hover:text-white ${addedClass}`}
      type={type}
      disabled={disabled}
    >
      <span className="absolute inset-0 bg-black"></span>
      <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-medium leading-none">
        {text}
      </span>
      {isVisitSize && (
>>>>>>> f4b2d2db2aec1876c912447b78c2b0b8ef877be6
        <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-medium leading-none">
          {text}
        </span>
        {isVisitSize && (
          <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-medium leading-none">
            {text}
          </span>
        )}
      </button>
    </Link>
  );
}
