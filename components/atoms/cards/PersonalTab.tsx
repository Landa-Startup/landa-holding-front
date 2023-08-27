import React from 'react';

import IconWeb from '@/components/atoms/IconWeb';
import Link from 'next/link';
import IconLinkedin from '../IconLinkedin';
import IconRoundedEmail from '../IconRoundedEmail';

export default function PersonalTab({
  image,
  name,
  position,
}: {
  image: string;
  name: string;
  position: string;
}) {
  return (
    <div className="sm:">
      <div>
        <div className=" ">
          <div
            className="w-[300px] md:w-[270px] h-[300px] border border-primary rounded-sm"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // filter: "brightness(80%)" // lower the brightness.
            }}
          >
            <div className="">
              <div className="flex flex-col gap-3 pl-3.5 pt-4 justify-items-center">
                <Link className="" href="#">
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
                <div className="  flex flex-col items-center  ">
                  <span className="  text-[#FFF] font-normal "> {name} </span>
                  {/* <span className="text-[#FAFAFA] font-light "> {position} </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
