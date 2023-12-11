import React from 'react';
import HomeCards from './HomeCards';
import Lines from '../icons/Home/Lines';
import { CompanySectionsInterface } from '@/types/global';
import { useTranslation } from 'app/i18n';
import { dir } from 'i18next';
// import { useSubmit } from 'providers/StateProvider';
import { useLang } from '../../store';

export default async function HomeCardsContainer() {

  const lang = useLang.getState().lang

  console.log("mmm", lang);

  // console.log("mm:" , lang)
  // Define data for the text card containers

  const { t } = await useTranslation(lang, 'mainPage');

  // console.log("t is:", t('cards', {returnObjects: true}))

  return (
    <div className="relative  bg-whiteGold text-black" id="LandaHolding">
      <div className={dir(lang) == 'rtl' ? 'block' : 'block'}>
        <Lines />
      </div>
      {/* Map over cardData to create HomeTextCardContainers */}
      {t('cards', { returnObjects: true }).map(
        ({
          title,
          text,
          reverse,
          index,
          link,
          addedClass,
          images
        }: CompanySectionsInterface) => (
          <HomeCards
            key={index}
            titles={title}
            text={text}
            images={images}
            reverse={reverse}
            addedClass={addedClass}
            link={link}
          />
        )
      )}
    </div>
  );
}
