'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function LanguageSwitch({ lang }: { lang: string }) {
  const pathName = usePathname();
  const router = useRouter();

  const [language, setLanguage] = useState(lang);
  useEffect(() => {
    console.log('new lang: ', language);
    const newPath = pathName?.replace(/^\/(en|fa)/, `/${language}`);
    if (!newPath) {
      return;
    }
    router.push(newPath);
  }, [language, pathName, router]);

  const handleClick = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fa' : 'en'));
  };

  return (
    <div
      className="mx-auto flex h-10 w-28 flex-shrink-0 cursor-pointer select-none items-center rounded-lg bg-white bg-opacity-50 p-1 backdrop-blur-md"
      onClick={handleClick}
    >
      <div
        className={`flex h-8 w-[54px] items-center justify-center gap-2.5 rounded-lg text-black transition-all duration-1000 ${
          language === 'en' ? 'bg-white' : ''
        }`}
      >
        EN
      </div>
      <div
        className={`flex h-8 w-[54px] items-center justify-center gap-2.5 rounded-lg text-black transition-all duration-1000 ${
          language === 'fa' ? 'bg-white' : ''
        }`}
      >
        FA
      </div>
    </div>
  );
}