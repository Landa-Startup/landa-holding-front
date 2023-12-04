import React from 'react';
import CopyRight from '../common/CopyRight';
import Image from 'next/image';
import Link from 'next/link';
import Instagram from '../icons/footer/Instagram';
import Envelope from '../icons/footer/Envelope';
import Whatsapp from '../icons/footer/Whatsapp';
import LinkedIn from '../icons/footer/LinkedIn';
import { useTranslation } from 'app/i18n';

export default async function Footer(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "footer")

  function GetYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  return (
    <div className="flex flex-col bg-neutral-800 p-8 font-barlow" dir={t('dir')}>
      <div className="flex flex-col justify-between space-y-5 md:flex-row md:gap-4 md:p-20">
        <div className="mt-5 flex flex-col md:w-[344px]">
          <div className="h-[25px] text-justify text-xl font-medium text-white">
            {t('about', {returnObjects: true}).title}
            <br />
          </div>
          <div className={`mt-1 text-base font-normal  text-neutral-400 ${lang === "en" ? "md:mr-10" : "md:ml-10"}`}>
            {t('about', {returnObjects: true}).text}
            <br />
          </div>
          <div className="mt-2 flex h-[22px] w-[126px] flex-row items-center justify-between text-white">
            <Link
              aria-label="Instagram"
              href={
                'https://instagram.com/landa_holding?igshid=YTQwZjQ0NmI0OA=='
              }
              className="hover:text-primary"
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              aria-label="Email"
              href={'mailto:info@landaholding.com'}
              className="hover:text-primary"
            >
              <Envelope />
            </Link>
            <Link
              aria-label="Whatsapp"
              href={'https://wa.me/989120539563'}
              className="hover:text-primary"
              target="_blank"
            >
              <Whatsapp />
            </Link>
            <Link
              aria-label="Linkedin"
              href={'https://www.linkedin.com/company/landa-startup-inc'}
              className="hover:text-primary"
              target="_blank"
            >
              <LinkedIn />
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1 md:mr-10">
          <div className="text-justify text-xl font-medium text-white">
            {t('explore', {returnObjects: true}).title}
            <br />
          </div>
          <div className="flex flex-col space-y-1">
            <Link
              href={'/'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              {t('explore', {returnObjects: true}).text.home}
            </Link>
            <Link
              href={'/about'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              {t('explore', {returnObjects: true}).text.about}
            </Link>
            <Link
              href={'/contact'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              {t('explore', {returnObjects: true}).text.contact}
            </Link>
            <Link
              href={'/our-team'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              {t('explore', {returnObjects: true}).text.ourTeam}
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1">
          <div className="text-xl font-medium text-white">{t('forms', {returnObjects: true}).title}</div>
          <div className="inline-flex flex-col items-start justify-start self-stretch">
            <Link
              href={'/StartupsForm'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              {t('forms', {returnObjects: true}).text.startUp}
            </Link>
            <Link
              href={'/investor-registration'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              {t('forms', {returnObjects: true}).text.investor}
            </Link>
            <Link
              href={'/entrepreneurs'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              {t('forms', {returnObjects: true}).text.entrepreneur}
            </Link>
            <Link
              href={'/partner-membership'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              {t('forms', {returnObjects: true}).text.partners}
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1 md:ml-1 md:w-1/4">
          <div className="h-[30px] w-[93px]  text-xl font-medium text-white">
            {t('contact', {returnObjects: true}).title}
            <br />
          </div>
          <div className="text-justify text-base font-normal text-neutral-400">
          No. 200, 7646 Yonge Street, Thornhill, Toronto, ON L4J 1V9, Canada
          </div>
          <div className="text-justify text-base font-normal text-neutral-400">
          +1 (289) 269-3933
          </div>
          <div className="border-t border-t-white pt-1 text-justify text-base font-normal text-neutral-400">
          Office 41, No. 27, Gholam Jafari Street, Tajrish Square, Tehran, Iran
          </div>
          <div className="border-b border-b-white pb-1 text-justify text-base font-normal text-neutral-400">
          +98 (912) 0539563
          </div>
          <div className="text-base font-normal text-neutral-400">
          Office C, 5th Floor, Tala Complex, Sa'adat Abad Street, Isfahan, Iran
          </div>
          <div className="text-base font-normal text-neutral-400">
          +98 (313) 1311914
          </div>
        </div>
      </div>
      <div className="self-stretch border-t pt-4 text-center text-white">
        © Copyright {GetYear()} by{' '}
        <Link href={'/'} className="text-primary">
          LandaHolding
        </Link>
      </div>
    </div>
  );
}
