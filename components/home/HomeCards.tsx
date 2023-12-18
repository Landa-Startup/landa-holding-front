import React from 'react';
import HomeCardsLeft from './HomeCardsLeft';
import HomeCardsRight from './HomeCardsRight';
import { HomeCardsProps } from '../../types/global';

export default async function HomeCards({
  titles,
  text,
  images,
  addedClass,
  link
}: HomeCardsProps) {
  // Determine the flex direction based on the "reverse" prop

  // const lang = useLang.getState().lang

  // console.log(lang);

  // const { t } = await useTranslation(lang, "mainPage");

  // const value = t('lng') === "en" ? reverse : !reverse
  // const flexDirectionClass = value
  //   ? 'flex-col md:flex-row'
  //   : 'flex-col md:flex-row-reverse';

  return (
    <div
      className={`relative flex flex-col items-center justify-between border-b-2 border-primary px-9 py-5 last:border-none md:border-none md:p-28 ltr:md:flex-row rtl:md:flex-row-reverse`}
    >
      <HomeCardsLeft text={text} addedClass={addedClass} link={link} />
      <HomeCardsRight images={images} titles={titles} link={link} />
    </div>
  );
}
