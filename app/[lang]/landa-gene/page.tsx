import React from 'react';
import Banner from '@/components/common/Banner';
import LandaGene from '@/components/landa-gene/LandaGene';
import { Metadata } from 'next';
import { SubmitProvider } from 'providers/StateProvider';
import { useTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'Landa Holding | Landa Gene',
  description: '',
};

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const { t } = await useTranslation(lang, "landaGene")

  return (
    <div dir={t('dir')}>
      <Banner
        image="/static/images/gene.jpg"
        title={t('banner')}
        lang={lang}
      />

      <SubmitProvider>
        <LandaGene lang={lang} textUp={t('textUp')} textMid={t('textMid')} textDown={t('textDown')} formText={t('formText')} />
      </SubmitProvider>
    </div>
  );
}