import React from 'react';
import AboutusPersonalTabs from './AboutusPersonalTabs';
// TODO: import from i18n instead of statics
import { cardsDataFA, cardsDataEN } from '../../app/[lang]/statics';
import { useTranslation } from 'app/i18n';

export default async function AboutUsProfile(
  { lang }: { lang: string }
) {

  const { t } = await useTranslation(lang, "aboutUs");

  return (
    <div className="bg-[#FAFAFA]">
      <div className={`mx-8 flex flex-col justify-items-center py-5 text-black lg:ml-64${t('lng') === "fa" && "mr-10"}`}>
        <h2 className="font-condensed text-xl font-normal leading-normal tracking-widest md:text-2xl">
          {/* TODO: read from i18n */}
          {t('lng') === "en" ? "PROFESSIONALS" : "حرفه ای ها"}
        </h2>
        <h1 className="font-gilda text-3xl font-normal leading-normal md:text-4xl">
          {t('lng') === "en" ? "Board of Directors" : "هيئت مدیره"}
        </h1>
      </div>

      {/* <div className="flex flex-col justify-center  space-x-10 space-y-16 space-x-reverse  py-16 md:flex-row"> */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        {/* TODO: read from i18n */}
        {t('lng') === "en" ?
          cardsDataEN.map((card, index) => (
            <AboutusPersonalTabs
              key={index}
              image={card.image}
              name={card.name}
              position={card.position}
              linkedIn={card.links.linkedin}
              email={card.links.email}
              website={card.links.website}
              instagram={card.links.instagram}
            />
          )) :
          cardsDataFA.map((card, index) => (
            <AboutusPersonalTabs
              key={index}
              image={card.image}
              name={card.name}
              position={card.position}
              linkedIn={card.links.linkedin}
              email={card.links.email}
              website={card.links.website}
              instagram={card.links.instagram}
            />
          ))
        }
      </div>
    </div>
  );
}
