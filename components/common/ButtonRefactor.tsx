
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

  const { lang } = useLang.getState()

  switch (type) {
    // If the type is 'Link'
    case 'link':
      return (
        href && (
          <Link href={href} className="group relative w-full overflow-hidden">
            <button
              disabled={disabled}
              className={`bg-${
                bgColor ? bgColor : 'primary'
              } flex h-[56px] w-full flex-wrap content-center justify-center rounded p-2 text-white hover:bg-primary transition duration-150 delay-50 ease-in-out`}
              // className='transition flex h-[56px] w-full flex-wrap content-center justify-center rounded p-2 text-white ease-in-out delay-150 bg-black hover:bg-primary duration-300'
            >
              <div className="z-10 flex gap-2 items-center">
                <span className='text-lg'>{text}</span>
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
