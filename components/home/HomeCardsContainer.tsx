import React from 'react';
import HomeCards from './HomeCards';
import Lines from '../icons/Home/Lines';
import { cardData } from '../../app/[lang]/statics';

export default function HomeCardsContainer(
  {lang} : {lang: string}
) {
  // Define data for the text card containers

  return (
    <div className="relative bg-whiteGold text-black" id="LandaHolding">
      <Lines />
      {/* Map over cardData to create HomeTextCardContainers */}
      {cardData.map((data, index) => (
        <HomeCards
          key={index}
          titles={data.title}
          text={data.text}
          images={data.images}
          reverse={data.reverse}
          addedClass={data.addedClass}
          link={data.link}
          lang={lang}
        />
      ))}
    </div>
  );
}
