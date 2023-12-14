import React from 'react';
import AboutusPersonalTabs from './AboutusPersonalTabs';
// TODO: import from i18n instead of statics
import { cardsDataFA, cardsDataEN } from '../../app/[lang]/statics';
import { useTranslation } from 'app/i18n';

export default async function AboutUsProfile({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, 'aboutUs');

  return (
    <div className="flex w-full mb-10 flex-col justify-center bg-[#FAFAFA]">
      <div className="m-auto flex w-5/6 flex-col justify-center px-4 py-10">
        <div
          className={`flex flex-col justify-items-center py-5 text-black lg:ml-64${
            t('lng') === 'fa' && 'mr-10'
          }`}
        >
          <h2 className="tracking-0 font-gilda text-xl font-normal leading-normal ltr:tracking-widest md:text-xl">
            {t('lng') === 'en' ? 'PROFESSIONALS' : 'حرفه ای ها'}
          </h2>
          <h1 className="rtl:tracking-0 font-gilda text-3xl  font-normal leading-normal md:text-4xl">
            {lang === 'en' ? 'BOARD OF DIRECTORS' : 'هيئت مدیره'}
          </h1>
        </div>

        <div className="mb-8 flex flex-col justify-between gap-24 md:flex-row md:gap-10">
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
