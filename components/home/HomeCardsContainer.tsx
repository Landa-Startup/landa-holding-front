import React from 'react';
import HomeCards from './HomeCards';
import Lines from '../icons/Home/Lines';
import { cardData } from '../../app/[lng]/statics';
import { useTranslation } from 'app/i18n';

export default async function HomeCardsContainer(items) {
  // Define data for the text card containers


  return (
    <div className="relative text-black bg-whiteGold" id="LandaHolding">
      <Lines />
      {/* Map over cardData to create HomeTextCardContainers */}
      {/* {items.map((data, index) => (
        <HomeCards
          key={index}
          titles={t(data.title)}
          text={t(data.text)}
          images={data.images}
          reverse={data.reverse}
          addedClass={t(data.addedClass)}
          link={t(data.link)}
        />
      ))} */}
    </div>
  );
}
