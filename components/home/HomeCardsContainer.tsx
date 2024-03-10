'use client'
import HomeCards from './HomeCards';
import Lines from '../icons/Home/Lines';
import { useTranslation } from 'app/i18n/client';
import { CompanySectionsInterface } from '@/types/global';
import { useLang } from 'stores/langStore';

const HomeCardsContainer = () => {
  const lang = useLang().lang
  const { t } = useTranslation(lang, 'mainPage');

  const renderHomeCards = (cardData: CompanySectionsInterface[]) => {
    return cardData.map(({ title, text, reverse, index, link, addedClass, images, buttonText} : {
      title: string;
      text: string;
      reverse: boolean;
      show: boolean;
      index: number;
      link: string;
      addedClass: string;
      images: {src: string, alt: string}[];
      buttonText: string;
    }) => (
      <HomeCards
        key={index}
        titles={title}
        text={text}
        images={images}
        reverse={reverse}
        addedClass={addedClass}
        link={link}
        buttonText={buttonText}
      />
    ));
  };

  return (
    <div className="relative bg-whiteGold text-black" id="LandaHolding">
      <div>
        <Lines />
      </div>
      {renderHomeCards(t('cards', { returnObjects: true }))}
    </div>
  );
};

export default HomeCardsContainer;