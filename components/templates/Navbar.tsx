"use client"
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col relative md:px-10">
        <div className="w-full navbar bg-transparent text-white flex justify-between items-center">
          {/* hover:text-white md:flex md:justify-between md:mx-5 */}
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className=" px-2 mx-2 text-left">
            <Link href="/">
              <Image
                src={'static/images/Logo.svg'}
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="hidden md:flex-1 md:flex justify-center"> {/* Center items in md mode */}
            <ul className="menu menu-horizontal w-full flex justify-center space-x-10">
              <li><a>HOME</a></li>
              <li><a>ABOUT</a></li>
              <li><a>CONTACT</a></li>
              <li><a>OUR TEAM</a></li>
            </ul>
          </div>
        </div>
        <div className="children">
          {children}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          <li><a>HOME</a></li>
          <li><a>ABOUT</a></li>
          <li><a>CONTACT</a></li>
          <li><a>OUR TEAM</a></li>
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