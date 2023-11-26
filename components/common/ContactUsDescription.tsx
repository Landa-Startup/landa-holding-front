import React from 'react';
import Phone from '../icons/IconPhone';
import Email from '../icons/IconEmail';
import Location from '../icons/IconLocation';
import Link from 'next/link';
import IconInstagram from '../icons/IconInstagram';
import IconWhatApp from '../icons/IconWhatsApp';
import IconLinkedinB from '../icons/IconLinkedinB';
import IconEmailB from '../icons/IconEmailB';
export default function ContactUsDescription() {
  return (
    <div className='h-full'>
      <div className="md:w-[464px] flex flex-col items-center md:items-start mb-5 mt-10 md:my-0">
        <h1 className="text-4xl md:text-5xl font-light font-gilda">
          Landa Holding
        </h1>
        <p className="my-5 text-base text-justify">
          In Landa academy, individuals will be trained based on their interests
          and capabilities. Necessary actions are taken at the Landa
          Acceleration Center to accelerate their unique abilities. Then,
          investment is made based on the investment priorities of developing
          the nurtured capabilities of individuals.
        </p>
      </div>

      <div className="flex flex-row space-x-3">
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

      <div className="flex flex-col gap-1 mt-10">
        <div className="flex">
          <Phone />
          <div className="flex flex-col">
            <span className="font-semibold">Phone Call</span>
            <ul className="gap-1">
              {/* TODO: create component for below icons */}
              <li>
                <Link href="tel:+14165577622">
                  <span>Toronto:</span>
                  <span className="text-[#AA8453]">+1 (416) 557-7622</span>
                </Link>
              </li>
              <li>
                <Link href="tel:+14165577622">
                  <span>Tehran:</span>
                  <span className="text-[#AA8453]">02188030167</span>
                </Link>
              </li>
              <li>
                <Link href="tel:+14165577622">
                  <span>Isfahan:</span>
                  <span className="text-[#AA8453]">03131311914</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <Email />
          <ul>
            <li className="font-semibold">Email info</li>
            <li>
              <a className="text-[#AA8453]" href="mailto:info@landaholding.com">
                info@landaholding.com
              </a>
            </li>
          </ul>
        </div>

        <div className="flex">
          <Location />
          <div className="flex flex-col ml-2">
            <span className="font-semibold">Address</span>
            <ul className="mx-4 list-disc space-y-3">
              <li>No. 200, 7646 Yonge Street, Toronto, ON L4J 1V9, Canada</li>
              <li>No. 27, Gholam Jafari St, Tajrish Sq,Tehran, Iran</li>
              <li>Tala Complex, Saadat Abad St, Isfahan, Iran</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
