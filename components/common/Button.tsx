'use client';
import { useRouter } from 'next/navigation';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { useSubmit } from 'providers/StateProvider';

// Define the ButtonProps type
// go to prop causes a redirext
type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: string;
  type?: 'button' | 'reset' | 'submit';
  bgColor?: 'Primary' | 'Yellow';
  goto?: string;
  disabled?: boolean;
};

export default function Button({
  size,
  type = 'button',
  bgColor,
  goto,
  disabled = true
}: ButtonProps) {
  // Determine the button size and apply appropriate styles
  const isVisitSize = size === 'visit';

  const router = useRouter();

  const { send } = useSubmit();

  return (
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
      } px-10 py-5 relative border border-white uppercase tracking-wider leading-none overflow-hidden inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-normal hover:text-white mt-3 btn btn-wide dark:text-current`}
      type={type}
      disabled={disabled}
    >
      <span className="absolute inset-0 bg-black"></span>
      <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-medium leading-none">
        {send ? 'Submitting ....' : 'Submit'}
      </span>
      {isVisitSize && (
        <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-medium leading-none">
          {"Visit Now"}
        </span>
      )}
    </button>
  );
}
