import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    
    <div style={{backgroundImage: "/static/images/businessman.png"}}>
      <div className="w-[557px] h-11 text-center text-white text-[32px] font-normal tracking-[11.20px]">
        Landa Holding
      </div>
      <div className="w-[689px] h-[71px] text-right text-neutral-50 text-opacity-95 text-[64px] font-normal tracking-[6.40px]">
        Acceleration Center
        <br />
      </div>
      <div className="w-[554px] text-center text-neutral-50 text-opacity-95 text-base font-normal leading-[30px]">
        Landa Holding is an international investment company active in Iran and
        Canada.
        <br />
        Landa Holding acts as a supporter of entrepreneurs, investors, business
        owners and everybody who is willing to start its own start-up.
        <br />
        Our main focus is to make your business boost internationally.
      </div>
    </div>
  );
}
