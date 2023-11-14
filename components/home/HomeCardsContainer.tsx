import React from 'react';
import HomeCards from './HomeCards';
import Lines from '../icons/Home/Lines';
import { cardData } from '../../app/[lang]/statics';
import { useTranslation } from 'app/i18n';

export default async function HomeCardsContainer() {
  // Define data for the text card containers

  const { t } = await useTranslation('fa', 'translation');

  return (
    <div className="relative bg-whiteGold text-black" id="LandaHolding">
      <Lines />
      {/* Map over cardData to create HomeTextCardContainers */}
      {cardData.map((data, index) => (
        <HomeCards
          key={index}
          titles={t(data.title)}
          text={t(data.text)}
          images={data.images}
          reverse={data.reverse}
          addedClass={t(data.addedClass)}
          link={t(data.link)}
        />
      ))}
    </div>
  );
}
