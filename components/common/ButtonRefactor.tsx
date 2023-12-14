
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
          <Link href={href} className="group relative w-fit overflow-hidden">
            <button
              disabled={disabled}
              className={`bg-${bgColor ? bgColor : 'primary'
                } flex h-[56px] w-[224px] flex-wrap content-center justify-center rounded p-2 text-white`}
            >
              <div className="z-10 flex items-center rtl:flex-row-reverse">
                <span>{text}</span>
                <ChevronRightIcon className="h-5 w-5" />
              </div>
            </button>
            <span className="absolute inset-0 -translate-x-full rounded bg-black transition-transform duration-500 group-hover:translate-x-0"></span>
          </Link>
        )
      );

    // If the type is 'button', 'submit', or 'reset'
    case 'button':
    case 'submit':
    case 'reset':
      return (
        <div className="group relative w-fit overflow-hidden">
          <button
            type={type}
            className="flex h-[56px] w-[224px] flex-wrap content-center items-center justify-center rounded bg-[#AA8453] p-2 text-white"
          >
            <div className="z-10 flex items-center gap-2 rtl:flex-row-reverse">
              <span>{text}</span>
              {/* <ChevronRightIcon className="h-5 w-5" /> */}
            </div>
          </button>
          <span className="absolute inset-0 -translate-x-full rounded bg-black transition-transform duration-500 group-hover:translate-x-0"></span>
        </div>
      );

    // If the type is any other value
    default:
      // Render nothing
      return null;
  }
}
