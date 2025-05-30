'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { useTranslation } from 'app/i18n/client';
import { setCookie } from 'cookies-next';
import LanguageSwitch from './LanguageSwitch';

export default function Navbar({
  children,
  lang
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const { t } = useTranslation(lang, 'layout');

  const menuItems = t('menuItems', { returnObjects: true });
  const submenuItems = t('submenuItems', { returnObjects: true });

  setCookie('i18next', lang);

  const drawerRef = useRef<HTMLInputElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(false);
    if (!drawerRef.current) {
      return;
    }
    drawerRef.current.click();
  };
  return (
    <div className="drawer top-0 ">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        aria-label="Menu Toggle"
        ref={drawerRef}
      />
      <div className="drawer-content relative flex flex-col">
        <div className="navbar fixed flex w-full flex-row items-center justify-between bg-neutral-800 bg-opacity-80 p-0 text-white ltr:flex-row-reverse md:px-12 md:ltr:flex-row ">
          <div className="mt-3 flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost -mt-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="white"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="m-2 flex h-full items-center justify-start px-2 text-left ">
            <Link href="/">
              <div className="flex flex-col items-center md:flex-row md:items-end">
                <Image
                  className="h-10 w-10 md:h-14 md:w-12 "
                  src="static/images/Logo.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <span className="font-condensed text-[12px] font-bold text-primary ltr:tracking-[0.25rem] md:text-xl">
                  {lang == 'en' ? 'LANDA' : 'LANDA'}
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden justify-center ltr:mr-12 xl:flex xl:flex-1">
            <ul className="menu menu-horizontal flex justify-center space-x-10 font-condensed text-xl font-bold rtl:space-x-reverse md:mb-3 ">
              {menuItems.map(
                ({ label, href }: { label: string; href: string }) => (
                  <li className="h-9 text-2xl mt-2" key={label}>
                    <Link href={href} className="text-white hover:bg-white">
                      {label}
                    </Link>
                  </li>
                )
              )}
              <li className="h-9">
                <div className="relative group">
                  <h2 className="text-2xl cursor-pointer transition-all p-2 group-hover:bg-white group-hover:text-black rounded-xl">
                    {lang === 'en' ? 'FORMS' : 'فرم ها'}
                  </h2>

                  {/* Desktop Forms */}
                  <ul className="absolute -left-[80px] top-14 mt-2 w-64 space-y-0 rounded-box bg-stone-100 p-2 shadow opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible">
                    {submenuItems.map(({ label, href }: any) => (
                      <li className="max-h-fit text-xl" key={label}>
                        <Link
                          href={href}
                          className="block border p-5 font-bold text-black hover:bg-base-200 hover:text-primary"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <LanguageSwitch />
          </div>
        </div>
        <div className="children">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

        <ul className="menu absolute h-full w-80 space-y-0 divide-y divide-solid bg-white p-4 text-xl text-black  ltr:left-[110px] md:hidden">
          {/* <ul className="menu absolute h-full w-80 space-y-5 bg-white p-4 text-xl text-black ltr:left-[70px] md:hidden  divide-y divide-solid"> */}

          <Image
            className="mx-auto mb-2"
            src="static/images/Logo.svg"
            alt="Landa Key Differentiating"
            width={96}
            height={4}
            loading="lazy"
          />
          {menuItems.map(({ label, href }: { label: string; href: string }) => (
            <li
              className="font-Barlow flex items-center font-condensed pb-1"
              key={label}
              onClick={() => handleLinkClick()}
            >
              <Link href={href} className="">
                {label}
              </Link>
            </li>
          ))}
          <li>
            {/* new// */}

            <details className="">
              <summary className="font-Barlow btn m-1 pt-2 font-condensed text-xl">
                {lang === 'en' ? 'FORMS' : 'فرم ها'}
              </summary>
              <ul className="px-2">
                {/* mobile forms */}
                <ul className="">
                  {submenuItems.map(
                    ({ label, href }: { label: string; href: string }) => (
                      <li key={label} onClick={() => handleLinkClick()}>
                        <Link href={href} className="font-condensed">
                          {label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </ul>
            </details>

            {/* //item */}

            {/* new// */}

            {/* 
            <div className="mx-auto pl-8">
              <Link className="font-condensed font-bold" href={'#'}>
                {lang === 'en' ? 'FORMS' : 'فرم ها'}
              </Link>
              <IconDown/>
            </div> */}
          </li>
          {/* <div className="absolute bottom-5 mx-auto w-72 rounded px-12">
            <div className=" mx-auto rounded-lg bg-[#DCDCDC] py-2">
              <LanguageSwitch />
            </div>
            <div className="flex h items-center justify-between px-10 text-black md:hidden">
              
              <Link
                href={
                  'https://instagram.com/landa_holding?igshid=YTQwZjQ0NmI0OA=='
                }
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </Link>

              <Link href={'mailto:info@landaholding.com'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </Link>

              <Link href={'https://wa.me/989120539563'} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-whatsapp h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </Link>

              <Link
                href={'https://www.linkedin.com/company/landa-startup-inc'}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Link>
            </div>
          </div> */}
        </ul>
      </div>
      <style>{`
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
