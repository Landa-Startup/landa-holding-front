'use client';
import { cookies } from 'next/dist/client/components/headers';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

export default function Navbar({ children }: { children: React.ReactNode }) {
  const drawerRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' },
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
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" ref={drawerRef} />
      <div className="drawer-content flex flex-col relative md:px-10">
        <div className="w-full navbar bg-transparent text-white flex justify-between items-center md:px-1">
          <div className="flex-none xl:hidden">
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost -mt-5"
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
          <div className="px-2 m-2 text-left h-full flex justify-start items-center">
            <Link href="/">
              <div className="flex flex-col md:flex-row items-end">
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
          <div className=" xl:flex-1 xl:flex justify-start ml-32 hidden">
            <ul className="menu menu-horizontal flex justify-center space-x-10 text-xl font-condensed">
              {menuItems.map((item) => (
                <li className="text-2xl h-9" key={item.label}>
                  <Link href={item.href} className="hover:bg-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="h-9">
                <details className="dropdown mb-32">
                  <summary
                    className="text-2xl hover:text-primary hover:bg-base-200"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    WORK WITH US
                  </summary>
                  <ul
                    className={`p-2 space-y-1 shadow menu dropdown-content z-[1] bg-stone-100 rounded-box w-64 ${isMenuOpen ? '' : 'hidden'
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
                          className="text-black border hover:text-primary hover:bg-base-200 p-5 font-bold"
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
        <ul className="menu p-4 w-80 h-full bg-base-200 text-xl">
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
