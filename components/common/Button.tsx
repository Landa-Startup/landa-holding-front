'use client';
import { useRouter } from 'next/navigation';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { useSubmit } from '../../providers/StateProvider';

// Define the ButtonProps type
// go to prop causes a redirext
// go to prop causes a redirext
type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text?: string;
  size?: string;
  type?: 'button' | 'reset' | 'submit';
  bgColor?: 'Primary' | 'Yellow';
  goto?: string;
  disabled?: boolean;
  lang: string
};

export default function Button({
  text,
  size,
  type = 'button',
  bgColor,
  goto,
  disabled = true,
  lang,
}: ButtonProps) {
  // Determine the button size and apply appropriate styles
  const isVisitSize = size === 'visit';

  const router = useRouter();

  const { send } = useSubmit();

  console.log(lang);

  return (
    <Link href={goto || '/'} className={addedClass}>
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
        <span className="absolute inset-0 flex justify-center items-center text-center font-condensed text-white text-base font-medium leading-none">
          {lang === "en" ? "Visit Now" : "مشاهده کنید"}
        </span>
      )}
    </button>
  );
}