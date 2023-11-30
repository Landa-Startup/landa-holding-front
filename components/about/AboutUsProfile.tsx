import React from 'react';
// import AboutUsProfileCard from './AboutUsProfileCard';
import AboutusPersonalTabs from './AboutusPersonalTabs';
import { cardsDataFA, cardsDataEN } from '../../app/[lang]/statics';
import { useTranslation } from 'app/i18n';

export default async function AboutUsProfile(
  {lang} : {lang: string}
) {

  const { t } = await useTranslation(lang, "aboutUs");

  return (
    <div className="bg-[#FAFAFA]">
      <div className={`flex flex-col ml-8 lg:ml-64 mx-8 py-5 text-black justify-items-center ${t('lng') === "fa" && "mr-10"}`}>
        <h2 className="text-xl font-normal leading-normal tracking-widest font-condensed md:text-2xl">
          {t('lng') === "en" ? "PROFESSIONALS" : "حرفه ای ها"}
        </h2>
        <h1 className="text-3xl font-normal leading-normal font-gilda md:text-4xl">
          {t('lng') === "en" ? "Board of Directors" : "هيئت مدیره"}
        </h1>
      </div>

      <div className="lg:flex lg:flex-row lg:justify-center  lg:pb-28 grid grid-cols-1  mx-auto pb-16 ml-8 md:space-x-12 space-y-20 mb-8 lg:ml-0">
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
