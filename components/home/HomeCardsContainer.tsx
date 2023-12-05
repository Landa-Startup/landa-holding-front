import React from 'react';
import HomeCards from './HomeCards';
import Lines from '../icons/Home/Lines';
import { CompanySectionsInterface } from '@/types/global';
import { useTranslation } from 'app/i18n';

export default async function HomeCardsContainer(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "mainPage")
  // Define data for the text card containers

  return (
    <div className="relative bg-whiteGold text-black" id="LandaHolding">
      <Lines />
      {/* Map over cardData to create HomeTextCardContainers */}
      {t('cards', {returnObjects: true}).map(({
        title,
        text,
        reverse,
        index,
        link,
        addedClass,
        images
      } : CompanySectionsInterface) => (
        <HomeCards
          key={index}
          titles={title}
          text={text}
          images={images}
          reverse={reverse}
          addedClass={addedClass}
          link={link}
          lang={lang}
        />
      ))}
    </div>
  );
}
