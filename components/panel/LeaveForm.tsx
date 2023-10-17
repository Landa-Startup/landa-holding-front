import React from 'react';
import LeaveFormRadio from './LeaveFormRadio';
import LeaveFormFromTo from './LeaveFormFromTo';
import LeaveFormDate from './LeaveFormDate';

export default function LeaveForm() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 border-b-2 border-black pb-4 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          className="bi bi-clipboard-data"
          viewBox="0 0 16 16"
        >
          <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>
        <span className="text-3xl font-medium font-barlow">
          leave permission Form
        </span>
      </div>
      <div className="grid grid-cols-3 gap-9">
        <LeaveFormRadio
          title="Leave (daily - hourly)"
          items={['Hourly leave', 'Day off']}
        />
        <LeaveFormFromTo title="I want leave from" />
        <LeaveFormDate title="From Date" />
        <LeaveFormDate title="To Date" />
        <LeaveFormRadio
          title="Type of leave"
          items={['entitlement', 'illness']}
        />
      </div>
      <div className="flex">
        <button className="bg-primary text-white font-barlow text-base font-semibold px-8 py-2 rounded-lg mt-8">
          Submit
        </button>
        <button className="bg-[#F8F5F0] text-primary font-barlow text-base font-semibold px-8 py-2 rounded-lg mt-8 ml-4">
          Cancel
        </button>
      </div>
    </div>
  );
}
