import React from 'react';
import EventCard from './EventCard';

export default function EventCardsContainer(
  {lang} : {lang: string}
) {
  return (
    <div className="flex flex-col mx-28 my-16 gap-10">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}
