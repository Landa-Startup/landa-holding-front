import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import LandaHoldingPriority from '@/components/home/LandaHoldingPriority';
import LatestStartups from '@/components/home/LatestStartups';
import LandaHoldingBlack from '@/components/home/LandaHoldingBlack';
import HomeCardsContainer from '@/components/home/HomeCardsContainer';
import Partners from '@/components/home/Partners';
import HomeOurTeam from '@/components/home/HomeOurTeam';
// import UpcomingEvents from '@/components/home/UpcomingEvents';
// import AerialViewBusinessTeam from '@/components/home/BusinessTeam';

import { useTranslation } from '../i18n';
// import HomeUpComingStartups from '@/components/home/HomeUpComingStartups';
// import HomeUpcomingEvents from '@/components/home/HomeUpcomingEvents';

export const metadata: Metadata = {
  title: 'Landa Holding',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'mainPage');

  return (
    <div className="relative">
      {/* TODO: read t inside hero components using zustend */}
      <Hero
        lang={lang}
        showLanda
        titles={[ t('Investment'), t('Acceleration'), t('Academy')]}
        title={t('LandaHolding')}
        subTitle={t('HeroSubtitle')}
        backgroundImage="Hero.png"
        leftImage="Landa.svg"
        showButton={false}
      />

        <HomeCardsContainer />
        <LandaHoldingBlack />
        {/* <HomeUpComingStartups/> */}
        {/* <HomeUpcomingEvents /> */}
        <LandaHoldingPriority />
        <HomeOurTeam />
        <LatestStartups />
        {/* <AerialViewBusinessTeam /> */}
        <Partners />
    </div>
  );
}