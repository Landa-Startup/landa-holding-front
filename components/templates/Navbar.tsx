'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col relative md:px-10">
        <div className="w-full navbar bg-transparent text-white flex justify-between items-center md:px-12">
          <div className="px-2 m-5 text-left h-full flex justify-start items-start ">
            <Link href="/">
              <div className="flex flex-col md:flex-row items-center">
                <Image
                  className="w-7 h-8 md:w-12 md:h-14"
                  src={'static/images/Logo.svg'}
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <span className="text-primary text-[7.5px] md:text-xl tracking-[0.375px] font-bold">
                  LANDA
                </span>
              </div>
            </Link>
          </div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost -mt-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="hidden xl:flex-1 xl:flex justify-start ml-32 hover:font-white">
            {' '}
            {/* Center items in md mode */}
            <ul className="menu menu-horizontal flex justify-center space-x-10 text-xl font-condensed">
              <li>
                <Link
                  href={'/'}
                  className="text-primary hover:text-primary hover:bg-base-200"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href={'/about'}
                  className="hover:text-primary hover:bg-base-200"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href={'/contact'}
                  className="hover:text-primary hover:bg-base-200"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href={'/our-team'}
                  className="hover:text-primary hover:bg-base-200"
                >
                  OUR TEAM
                </Link>
              </li>
              {/* <li>
                <Link href={'/'}>WORK WITH US</Link>
              </li> */}
              <li>
                <details className="dropdown mb-32">
                  <summary className="m-1 hover:text-primary hover:bg-base-200">
                    WORK WITH US
                  </summary>
                  <ul className="p-2 space-y-1 shadow menu dropdown-content z-[1] bg-stone-100 rounded-box w-64">
                    <li>
                      <Link
                        href={'/investor-registration'}
                        className="text-black border hover:text-primary hover:bg-base-200 p-5 font-bold"
                      >
                        CENTER OF INVESTOR
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/partner-membership'}
                        className="text-black border hover:text-primary hover:bg-base-200 p-5 font-bold"
                      >
                        OUR BUSINESS PARTNERS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/StartupsForm'}
                        className="text-black border hover:text-primary hover:bg-base-200 p-5 font-bold"
                      >
                        STARTUPS
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="children">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-xl">
          <li>
            <Link href={'/'} className="text-primary">
              HOME
            </Link>
          </li>
          <li>
            <Link href={'/about'}>ABOUT</Link>
          </li>
          <li>
            <Link href={'/contact'}>CONTACT</Link>
          </li>
          <li>
            <Link href={'/our-team'}>OUR TEAM</Link>
          </li>
          <li>
            <Link href={'/'}>WORK WITH US</Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .children {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
