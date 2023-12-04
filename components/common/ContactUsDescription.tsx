import React from 'react';
import Phone from '../icons/IconPhone';
import Email from '../icons/IconEmail';
import Location from '../icons/IconLocation';
import Link from 'next/link';
import IconInstagram from '../icons/IconInstagram';
import IconWhatApp from '../icons/IconWhatsApp';
import IconLinkedinB from '../icons/IconLinkedinB';
import IconEmailB from '../icons/IconEmailB';
import { useTranslation } from 'app/i18n';
export default async function ContactUsDescription(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "contact")

  return (
    <div className='h-full' dir={t('lng') === "en" ? "ltr" : "rtl"}>
      <div className="mb-5 mt-10 flex flex-col items-center md:my-0 md:w-[464px] md:items-start">
        <h1 className="font-gilda text-4xl font-light md:text-5xl">
          {t('LandaHolding')}
        </h1>
        <p className="my-5 text-justify text-base">
          {t('text')}
        </p>
      </div>

      <div className="flex flex-row gap-3">
        <Link
          href={'https://instagram.com/landa_holding?igshid=YTQwZjQ0NmI0OA=='}
          target="_blank"
        >
          <IconInstagram />
        </Link>
        <Link href={'https://wa.me/989120539563'} target="_blank">
          <IconWhatApp />
        </Link>
        <Link href={'mailto:info@landaholding.com'}>
          <IconEmailB />
        </Link>
        <Link
          href={'https://www.linkedin.com/company/landa-startup-inc'}
          target="_blank"
        >
          <IconLinkedinB />
        </Link>
      </div>

      <div className={`mt-10 flex flex-col gap-1`}>
        <div className="flex gap-5">
          <Phone />
          <div className="flex flex-col">
            <span className="font-semibold">{t('phone')}</span>
            <ul className="gap-1">
              {/* TODO: create component for below icons */}
              <li>
                <Link href="tel:+14165577622">
                  <span>Toronto:</span>
                  <span className="text-[#AA8453]">+1 (289) 269-3933</span>
                </Link>
              </li>
              <li>
                <Link href="tel:+14165577622">
                  <span>Tehran:</span>
                  <span className="text-[#AA8453]">+98 (912) 0539563</span>
                </Link>
              </li>
              <li>
                <Link href="tel:+14165577622">
                  <span>Isfahan:</span>
                  <span className="text-[#AA8453]">+98 (313) 1311914</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-5">
          <Email />
          <ul>
            <li className="font-semibold">{t('email')}</li>
            <li>
              <a className="text-[#AA8453]" href="mailto:info@landaholding.com">
                info@landaholding.com
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-5">
          <Location />
          <div className="ml-2 flex flex-col">
            <span className="font-semibold">{t('address')}</span>
            <ul className="mx-4 list-disc space-y-3">
              <li>No. 200, 7646 Yonge Street, Thornhill, Toronto, ON L4J 1V9, Canada</li>
              <li>Office 41, No. 27, Gholam Jafari Street, Tajrish Square, Tehran, Iran</li>
              <li>Office C, 5th Floor, Tala Complex, Sa'adat Abad Street, Isfahan, Iran</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
