import React from 'react';
import Phone from '../icons/IconPhone';
import Email from '../atoms/IconEmail';
import Location from '../icons/IconLocation';

export default function ContactUsDescription() {
  return (
    <div>
      <h1 className="text-5xl font-light">Landa Holding</h1>
      <p className='my-5'>
        In Landa Holding, individuals will be trained based on their interests
        and capabilities. Necessary actions are taken at the Landa Acceleration
        Center to accelerate their unique abilities. Then, investment is made
        based on the investment priorities of developing the nurtured
        capabilities of individuals.
      </p>
      <div className='flex my-3'>
      <Phone/>
      <ul className='mx-4'>
        <li>Phone Call</li>
        {/* TODO: create component for below icons */}
        <li><a className='text-[#AA8453]' href="tel:+14165577622">Canada: +1 (416) 557-7622</a></li>
        <li><a className='text-[#AA8453]' href="tel:02188030167">Tehran: 02188030167</a></li>
        <li><a className='text-[#AA8453]' href="tel:03131311914">Isfahan: 03131311914</a></li>
      </ul>
      </div>
      <div className='flex my-3'>
      <Email/>
      <ul className='mx-4'>
      <li>Email info</li>
      <li><a className='text-[#AA8453]' href="mailto:info@landaholding.com">info@landaholding.com</a></li>
      </ul>
      </div>

      <div className='flex my-3'>
      <Location/>
      <ul className='mx-4'>
        <li>Address</li>
        <li>- Suite 200, 7646 Yonge Street, Toronto, ON L4J 1V9, Canada</li>
        <li>- A3 Unit,Daneshvar tower,  Eastern Daneshvar street, Tehran</li>
        <li>- C5 Unit,Tala Building, Saadat Abad Ave, Isfahan, Iran</li>
      </ul>
      </div>

    </div>
  );
}
