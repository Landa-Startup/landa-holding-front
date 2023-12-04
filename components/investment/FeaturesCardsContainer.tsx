import React from "react";
import FeaturesCards from './FeaturesCards';
import { useTranslation } from "app/i18n";
import i18next from "i18next";

export default async function FeaturesCardsContainer(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "investment")

  t('featureCards', {returnObjects: true}).map(({
    link,
    title,
    description
  } : {
    link: string;
    title: string;
    description: string
  }) => {});

  // console.log(i18next.t('investment: featureCards'))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {t('featureCards', {returnObjects: true}).map(({
        link,
        title,
        description
      } : {
        link: string;
        title: string;
        description: string
      }) => (
        <FeaturesCards
          key={''}
          link={link}
          title={title}
          description={description}
          lang={lang}
        />
      ))}
      {/* {t('featureCards', {returnObjects: true}).map((card, index) => (
        <FeaturesCards
          key={index}
          link={card.link}
          title={card.title}
          description={card.description}
        />
      ))} */}
    </div>
  );
}
