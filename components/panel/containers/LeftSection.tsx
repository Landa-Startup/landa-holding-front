import React from 'react';
import ClipboardData from '@/components/icons/Panel/ClipboardData';
import House from '@/components/icons/Panel/House';

export default function LeftSection() {
  return (
    <div className="w-2/12 flex flex-col bg-[#EEE6DD] text-[#222]">
      <ul className="font-barlow font-medium text-2xl divide-y divide-[#AA8453]">
        <li className="flex gap-2 items-center md:pl-6 py-3 justify-center md:justify-start">
          <House />
          <span className="hidden md:block">Dashboard</span>
        </li>
        <li className="flex gap-2 items-center md:pl-6 py-3 justify-center md:justify-start">
          <ClipboardData />
          <span className="hidden md:block">Leave Permissions</span>
        </li>
      </ul>
    </div>
  );
}
