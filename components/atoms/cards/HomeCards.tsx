import React from 'react';
import HomeCardsLeft from './HomeCardsLeft';
import HomeCardsRight from './HomeCardsRight';

export default function HomeCards({
  titles,
  text,
  images,
  reverse,
}: {
  titles: string;
  text: string;
  images: Array<{ src: string; alt: string }>;
  reverse?: boolean;
}) {
  return (
    <div
      className={`${
        reverse ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'
      } flex justify-between items-center px-9 md:px-32 py-5 md:py-28`}
    >
      <HomeCardsLeft text={text} />
      <HomeCardsRight images={images} titles={titles} />
    </div>
  );
}
