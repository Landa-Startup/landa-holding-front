'use client';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type ButtonProps = {
  text: string;
  type?: 'button' | 'reset' | 'submit' | 'link';
  href?: string;
  disabled?: boolean;
  bgColor?: 'primary' | 'secondary' | 'white' | 'black' | 'transparent';
};

export default function ButtonRefactor({
  text,
  type = 'button',
  href,
  disabled,
  bgColor
}: ButtonProps) {
  switch (type) {
    // If the type is 'Link'
    case 'link':
      return (
        href && (
          <Link href={href} className="group relative w-full overflow-hidden">
            <button
              disabled={disabled}
              className={`bg-${
                bgColor ? bgColor : 'black'
              } delay-50 flex h-[50px] w-full flex-wrap content-center justify-center rounded-xl p-2 text-white transition duration-150 ease-in-out hover:bg-primary`}
            >
              <div className="z-10 flex flex-row rtl:flex-row-reverse items-center gap-2">
                <span className="text-md">{text}</span>
                <ChevronRightIcon className="h-5 w-5" />
              </div>
            </button>
            {/* <span className="absolute inset-0 rounded bg-black transition-transform duration-500 group-hover:translate-x-0"></span> */}
          </Link>
        )
      );

    // If the type is 'button', 'submit', or 'reset'
    case 'button':
    case 'submit':
    case 'reset':
      return (
        // <Link href='https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/fdrlCrpDtls.html?corpId=12980266'>
        <div className="group relative w-full overflow-hidden">
          <button
            type={type}
            className={`bg-${
              bgColor ? bgColor : 'black'
            } delay-50 flex h-[50px] w-full flex-wrap content-center justify-center rounded-xl p-2 text-white transition duration-150 ease-in-out hover:bg-primary`}
          >
            <div className="z-10 flex flex-row rtl:flex-row-reverse items-center gap-2">
              <span>{text}</span>
            </div>
          </button>
          <span className="text-md"></span>
        </div>
        // </Link>
      );

    // If the type is any other value
    default:
      // Render nothing
      return null;
  }
}
