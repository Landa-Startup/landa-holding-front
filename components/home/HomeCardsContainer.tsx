'use client'
import HomeCards from './HomeCards';
import { useTranslation } from 'app/i18n/client';
import { CompanySectionsInterface } from '@/types/global';
import { useLang } from 'stores/langStore';

const HomeCardsContainer = () => {
  const lang = useLang().lang
  const { t } = useTranslation(lang, 'mainPage');

  const renderHomeCards = (cardData: CompanySectionsInterface[]) => {
    return (
      <div className='w-full h-auto flex flex-col gap-4 md:gap-20'>
        {cardData.map(({smallTitle, title, text, reverse, index, link, addedClass, images, buttonText}) => (
              <HomeCards
                smallTitle={smallTitle}
                key={index}
                titles={title}
                text={text}
                images={images}
                reverse={reverse}
                addedClass={addedClass}
                link={link}
                buttonText={buttonText}
              />
        ))}
      </div>
    )
  };

  return (
    <div className="relative text-black my-10 md:my-24" id="LandaHolding">
      {renderHomeCards(t('cards', { returnObjects: true }))}
    </div>
  );
};

export default HomeCardsContainer;