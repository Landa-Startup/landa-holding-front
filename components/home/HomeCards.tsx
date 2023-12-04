import React from 'react';
import HomeCardsLeft from './HomeCardsLeft';
import HomeCardsRight from './HomeCardsRight';
import { HomeCardsProps } from '../../types/global';
import { useTranslation } from 'app/i18n';

export default async function HomeCards({
  titles,
  text,
  images,
  reverse = false, // Added a default value for the "reverse" prop
  addedClass,
  link,
  lang
}: HomeCardsProps) {
  // Determine the flex direction based on the "reverse" prop

  const { t } = await useTranslation(lang, "mainPage");

  const value = t('lng') === "en" ? reverse : !reverse
  const flexDirectionClass = value
    ? 'flex-col md:flex-row'
    : 'flex-col md:flex-row-reverse';

  return (
    <div
      className={`${flexDirectionClass} flex items-center justify-between border-b-2 border-primary px-9 py-5 last:border-none md:border-none md:p-32`}
    >
      <HomeCardsLeft text={text} addedClass={addedClass} link={link} lang={lang} />
      <HomeCardsRight images={images} titles={titles} link={link} lang={lang} />
    </div>
  );
}
