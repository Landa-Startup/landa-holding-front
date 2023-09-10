import React from 'react';
import Phone from '../atoms/IconPhone';
import Email from '../atoms/IconEmail';
import Location from '../atoms/IconLocation';
import Link from 'next/link';

export default function ContactUsDescription() {
  return (
    <div>
      <h1 className="text-5xl font-light">Landa Holding</h1>
      <p className="my-5 text-base text-justify">
        In Landa Holding, individuals will be trained based on their interests
        and capabilities. Necessary actions are taken at the Landa Acceleration
        Center to accelerate their unique abilities. Then, investment is made
        based on the investment priorities of developing the nurtured
        capabilities of individuals.
      </p>
      <div className="flex my-3">
        <Phone />
        <ul className="mx-4">
          <li className="font-semibold">Phone Call</li>
          {/* TODO: create component for below icons */}
          <li>
            <Link className="space-x-1" href="tel:+14165577622">
              <span>Canada:</span>
              <span className="text-[#AA8453]">+1 (416) 557-7622</span>
            </Link>
          </li>
          <li>
            <Link className="space-x-1" href="tel:+14165577622">
              <span>Tehran:</span>
              <span className="text-[#AA8453]">02188030167</span>
            </Link>
          </li>
          <li>
            <Link className="space-x-1" href="tel:+14165577622">
              <span>Isfahan:</span>
              <span className="text-[#AA8453]">03131311914</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex my-3">
        <Email />
        <ul className="mx-4">
          <li className="font-semibold">Email info</li>
          <li>
            <a className="text-[#AA8453]" href="mailto:info@landaholding.com">
              info@landaholding.com
            </a>
          </li>
        </ul>
      </div>

      <div className="flex my-3">
        <Location />
        <div className="flex flex-col ml-2">
          <span className="font-semibold">Address</span>
          <ul className="mx-4 list-disc space-y-3">
            <li>Suite 200, 7646 Yonge Street, Toronto, ON L4J 1V9, Canada</li>
            <li>
              A3 Unit,Daneshvar tower, Eastern Daneshvar street, Tehran, Iran
            </li>
            <li>C5 Unit,Tala Building, Saadat Abad Ave, Isfahan, Iran</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
