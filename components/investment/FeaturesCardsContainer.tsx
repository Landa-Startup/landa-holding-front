import React from 'react';
import FeaturesCards from './FeaturesCards';
import { useTranslation } from 'app/i18n';

export default async function FeaturesCardsContainer({
  lang
}: {
  lang: string;
}) {
  const { t } = await useTranslation(lang, 'investment');

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
      {t('featureCards', { returnObjects: true }).map(
        ({
          link,
          title,
          description,
          index
        }: {
          link: string;
          title: string;
          description: string;
          index: number;
        }) => (
          <FeaturesCards
            key={index}
            link={link}
            title={title}
            description={description}
            lang={lang}
          />
        )
      )}
    </div>
  );
}
