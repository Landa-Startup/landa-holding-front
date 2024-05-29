'use client'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useLang } from 'stores/langStore';

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

  const { lang } = useLang();

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
              } delay-50 flex h-[56px] w-full flex-wrap content-center justify-center rounded-xl p-2 text-white transition duration-150 ease-in-out hover:bg-primary`}
              // className='transition flex h-[56px] w-full flex-wrap content-center justify-center rounded p-2 text-white ease-in-out delay-150 bg-black hover:bg-primary duration-300'
            >
              <div className="z-10 flex items-center gap-2">
                <span className='text-md'>{text}</span>
                {lang === "en" ? <ChevronRightIcon className="h-5 w-5" /> : <ChevronLeftIcon className='h-5 w-5' />}
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
        <Link href="https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/fdrlCrpDtls.html?corpId=12980266">
        
        <div className="group relative w-fit overflow-hidden order-first md:order-last mr-2">
          <button
            type={type}
            className="flex h-[56px] w-[224px] md:w-[284px] flex-wrap content-center items-center justify-center rounded bg-[#AA8453] p-2 text-white"
          >
            <div className="z-10 flex items-center gap-2 rtl:flex-row-reverse text-sm">
              <span>{text}</span>
              {/* <ChevronRightIcon className="h-5 w-5" /> */}
            </div>
          </button>
          <span className="absolute inset-0 -translate-x-full rounded bg-black transition-transform duration-500 group-hover:translate-x-0"></span>
        </div>
        </Link>
      );

    // If the type is any other value
    default:
      // Render nothing
      return null;
  }
}
