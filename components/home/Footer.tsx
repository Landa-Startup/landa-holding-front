import React from 'react';
import CopyRight from '../common/CopyRight';
import Image from 'next/image';
import Link from 'next/link';
import Instagram from '../icons/footer/Instagram';
import Envelope from '../icons/footer/Envelope';
import Whatsapp from '../icons/footer/Whatsapp';
import LinkedIn from '../icons/footer/LinkedIn';

export default function Footer() {
  function GetYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  return (
    <div className="flex flex-col bg-neutral-800 p-8 font-barlow">
      <div className="flex flex-col justify-between space-y-5 md:flex-row md:gap-4 md:p-20">
        <div className="mt-5 flex flex-col md:w-[344px]">
          <div className="h-[25px] text-justify text-xl font-medium text-white">
            About Landa
            <br />
          </div>
          <div className="mt-1 text-base font-normal  text-neutral-400 md:mr-10">
            {/* In Landa Academy, individuals will be trained based on their
            interests and capabilities. Necessary actions are taken at the Landa
            Acceleration Center to accelerate their unique abilities. Then,
            investment is made based on the investment priorities of developing
            the nurtured capabilities of individuals. */}
            Landa Holding distinguishes itself through extensive charity work
            and world-class transaction capabilities that enable private
            business growth. The company connects reliable global investors to
            top startup opportunities by linking idea holders with relevant
            service providers. <br />
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
            Explore
            <br />
          </div>
          <div className="flex flex-col space-y-1">
            <Link
              href={'/'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              Home
            </Link>
            <Link
              href={'/about'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href={'/contact'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              Contact Us
            </Link>
            <Link
              href={'/our-team'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              Our Team
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1">
          <div className="text-xl font-medium text-white">Forms</div>
          <div className="inline-flex flex-col items-start justify-start self-stretch">
            <Link
              href={'/StartupsForm'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              Startups
            </Link>
            <Link
              href={'/investor-registration'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              Investor Center
            </Link>
            <Link
              href={'/entrepreneurs'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              Entrepreneur Center
            </Link>
            <Link
              href={'/partner-membership'}
              className="max-w-fit text-base font-normal text-neutral-400 hover:text-primary"
            >
              Our Business Partners
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1 md:ml-1 md:w-1/4">
          <div className="h-[30px] w-[93px]  text-xl font-medium text-white">
            Contact
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
