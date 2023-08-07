import React from 'react';

import IconWeb from '@/components/atoms/IconWeb'
import Link from 'next/link';
import IconLinkedin from '../IconLinkedin';
import IconRoundedEmail from '../IconRoundedEmail';



export default function page({ image }: { image: string }) {
  return (
    <div className='sm:' >

      <div>
        <div className=" ">
          <div

            className=""
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='' >
              <div className="flex flex-col gap-3 pl-3.5 pt-4 ">
                <Link className="  " href="#">
                  <IconLinkedin />
                </Link>
                <Link className="  " href="#">
                  <IconRoundedEmail />
                </Link>
                <Link className=" " href="#">
                  <IconWeb />
                </Link>
              </div>

              <div className=" mt-28 ">
                <hr className="  ml-14 mr-14 " />
                {/* TODO: use props for name and position instead of static data like "lucy Clark" */}
                <div className="  flex flex-col items-center  ">
                  <span className="  text-[#FFF] font-normal ">lucy Clark</span>
                  <span className="text-[#FAFAFA] font-light ">Front-end</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}