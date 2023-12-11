import React from 'react';
import FeaturesCards from './FeaturesCards';
import { useTranslation } from 'app/i18n';
import { useLang } from 'store';
import { SubmitProvider } from 'providers/StateProvider';

export default async function FeaturesCardsContainer() {

  const lang = useLang.getState().lang

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
          <SubmitProvider key={index} >
          <FeaturesCards
            link={link}
            title={title}
            description={description}
          />
          </SubmitProvider>
        )
      )}
    </div>
  );
}
