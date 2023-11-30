import React from 'react';
import AboutUsLandaHolding from '../../../components/about/AboutUsLandaHolding';
import AboutUsProfile from '../../../components/about/AboutUsProfile';
import Banner from '../../../components/common/Banner';
import { Metadata } from 'next';
import SubsidiaryCompanies from '../../../components/about/SubsidiaryCompanies';
import StoryOfLanda from '../../../components/about/StoryOfLanda';
import KeyDifferentiating from '../../../components/KeyDifferentiating';
import { cards } from '../../[lang]/statics';
import { useTranslation } from 'app/i18n';




export const metadata: Metadata = {
  title: 'Landa Holding | About',
  description:
    'Learn about Landa Holding, a forward-thinking company dedicated to innovation and excellence. Discover our mission, values, and the team behind our success. Join us on our journey towards a brighter future.',
};

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const { t } = await useTranslation(lang, "aboutUs")

  return (
    <div dir={t('lng') === "en" ? "ltr" : "rtl"}>
      <Banner
        title={t('banner')}
        image="/static/images/a52.jpeg"
        lang={lang}
      />
      <AboutUsLandaHolding lang={lang} />
      <SubsidiaryCompanies lang={lang} />
      <StoryOfLanda lang={lang} />
      {/* <AboutUsCooperation /> */}
      {/* <div className="bg-whiteGold md:my-20 md:mx-12">
        {cards.map((card, index) => (
          <AboutUsCard
            reverse={card.reverse}
            key={index}
            text={card.text}
            title={card.title}
            image={card.image}
            description={''}
            link={card.link}
          />
        ))}
      </div> */}
      <KeyDifferentiating />
      <AboutUsProfile lang={lang} />
    </div>
  );
}
