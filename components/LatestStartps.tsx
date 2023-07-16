import React from 'react';
import LatestStartupsCard from './LatestStartupsCard';

export default function LatestStartps() {
  return (
    <div>
      <div className="w-[1440px] h-[643px] relative bg-stone-100">
        <LatestStartupsCard image='https://via.placeholder.com/249x216' title='LANDA TRIP' description='Landa trip is an innovative start-up company that creates, promotes, and runs useful educational courses for all interested people and businesses.'/>
        <LatestStartupsCard image='https://via.placeholder.com/249x216' title='Diaco' description='Diaco is an open innovation platform which acts as an intermediate between technology seekers and providers to fulfill their technological demands.'/>
        <LatestStartupsCard image='https://via.placeholder.com/249x216' title='VISION RAFT' description='This is Vision Raft, a VR platform focused on education and entertainment of the young ones which acts to enhance their learning quality.'/>
      </div>
    </div>
  );
}
