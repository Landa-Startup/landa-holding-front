import React from 'react';
import AboutusPersonalTabs from './AboutusPersonalTabs';
// TODO: import from i18n instead of statics
import { cardsDataFA, cardsDataEN } from '../../app/[lang]/statics';
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

export default async function AboutUsProfile(
) {

  const lang = useLang.getState().lang

  const { t } = await useTranslation(lang, "aboutUs");

  return (
    <div className="flex w-full flex-col justify-center bg-[#FAFAFA]">
      <div className="m-auto flex w-4/5 flex-col justify-center px-4 py-10">
        <div
          className={`flex flex-col justify-items-center py-5 text-black lg:ml-64${
            lang === 'fa' && 'mr-10'
          }`}
        >
          <h2 className="tracking-0 font-condensed text-xl font-normal leading-normal ltr:tracking-widest md:text-2xl">
            {lang === 'en' ? 'PROFESSIONALS' : 'حرفه ای ها'}
          </h2>
          <h1 className="rtl:tracking-0 font-gilda text-3xl font-normal leading-normal md:text-4xl">
            {lang === 'en' ? 'Board of Directors' : 'هيئت مدیره'}
          </h1>
        </div>

        <div className="mb-8 flex flex-col items-center justify-between gap-20 md:flex-row md:gap-10">
          {/* {cardsDataEN.map((card, index) => (
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
        ))} */}
          {t('lng') === 'en'
            ? cardsDataEN.map((card, index) => (
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
            : cardsDataFA.map((card, index) => (
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
              ))}
        </div>
      </div>
    </div>
  );
}
