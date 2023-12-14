import HomeCards from './HomeCards';
import Lines from '../icons/Home/Lines';
import { useTranslation } from 'app/i18n';
import { CompanySectionsInterface } from '@/types/global';
import { useLang } from 'stores/langStore';

const HomeCardsContainer = async () => {
  const lang = useLang.getState().lang
  const { t } = await useTranslation(lang, 'mainPage');

  const renderHomeCards = (cardData: CompanySectionsInterface[]) => {
    return cardData.map(({ title, text, reverse, index, link, addedClass, images }) => (
      <HomeCards
        key={index}
        titles={title}
        text={text}
        images={images}
        reverse={reverse}
        addedClass={addedClass}
        link={link}
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