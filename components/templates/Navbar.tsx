'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

export default function Navbar({ children }: { children: React.ReactNode }) {
  const drawerRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'CONTACT US', href: '/contact' },
    { label: 'OUR TEAM', href: '/our-team' },
  ];
  const submenuItems = [
    { label: 'CENTER OF INVESTOR', href: '/investor-registration' },
    { label: 'OUR BUSINESS PARTNERS', href: '/partner-membership' },
    { label: 'STARTUPS', href: '/StartupsForm' },
    { label: 'APPLY JOB', href: '/job-form' },
    { label: 'Entrepreneurs', href: '/entrepreneurs' },
  ];
  const handleLinkClick = () => {
    // setIsMenuOpen(false);
    if (!drawerRef.current) {
      console.log(drawerRef);
      return;
    }
    drawerRef.current.click();
  };
  // const handleClickOutside = (event: Event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     setIsMenuOpen(false);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside);
  // }, []);
  return (
    <div className="top-0 drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        aria-label="Menu Toggle"
        ref={drawerRef}
      />
      <div className="relative flex flex-col drawer-content">
        <div className="fixed flex items-center justify-between w-full p-0 text-white bg-neutral-800 bg-opacity-80 navbar md:px-12 md:p-3 ">
          <div className="flex-none mt-3 lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="-mt-5 btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
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
          <div className="flex items-center justify-start h-full px-2 m-2 text-left">
            <Link href="/">
              <div className="flex flex-col items-end md:flex-row">
                <Image
                  className="w-10 h-10 md:w-12 md:h-14"
                  src={'static/images/Logo.svg'}
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <span className="text-primary text-[12px] md:text-xl tracking-[0.375px] font-bold">
                  LANDA
                </span>
              </div>
            </Link>
          </div>
          <div className="justify-start hidden ml-32 xl:flex-1 xl:flex">
            <ul className="flex justify-center space-x-10 text-xl menu menu-horizontal font-condensed">
              {menuItems.map((item) => (
                <li className="text-2xl h-9" key={item.label}>
                  <Link href={item.href} className="text-white hover:bg-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="h-9">
                <details className="mb-32 dropdown">
                  <summary
                    className="text-2xl hover:text-black hover:bg-base-200"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    WORK WITH US
                  </summary>
                  <ul
                    className={`p-2 space-y-1 shadow menu dropdown-content z-[1] bg-stone-100 rounded-box w-64 ${
                      isMenuOpen ? '' : 'hidden'
                    }`}
                  >
                    {submenuItems.map((item) => (
                      <li
                        className="text-xl max-h-fit"
                        key={item.label}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Link
                          href={item.href}
                          className="p-5 font-bold text-black border hover:text-primary hover:bg-base-200"
                        >
                          {item.label}{' '}
                        </Link>
                      </li>
                    ))}
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
        <ul className="absolute h-full p-4 text-xl menu w-80 bg-base-200 top-[72px]">
          {menuItems.map((item) => (
            <li key={item.label} onClick={() => handleLinkClick()}>
              <Link href={item.href} className="">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={'#'}>WORK WITH US</Link>
            <ul>
              {submenuItems.map((item) => (
                <li key={item.label} onClick={() => handleLinkClick()}>
                  <Link href={item.href} className="">
                    {item.label}{' '}
                  </Link>
                </li>
              ))}
            </ul>
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