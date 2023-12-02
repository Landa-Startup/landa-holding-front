import React from 'react';
import EventCard from './EventCard';

export default function EventCardsContainer() {
  return (
    <div className="flex flex-col mx-4 md:mx-28 my-6 md:my-16 gap-10">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}
