import Link from 'next/link'
import Hero from '@/components/home/Hero'
import HomeCardsContainer from '@/components/home/HomeCardsContainer'
import LandaHoldingBlack from '@/components/home/LandaHoldingBlack'
import LandaHoldingPriority from '@/components/home/LandaHoldingPriority'
import HomeOurTeam from '@/components/home/HomeOurTeam'
import LatestStartups from '@/components/home/LatestStartups'
import Partners from '@/components/home/Partners'

export default function Page() {
  return (
    <div className="relative">
      {/* Hero section */}
      <Hero
        showLanda
        titles={[
          'Acceleration',
          'Investment',
          'Academy',
        ]}
        subTitle={'Feel The Future'}
        backgroundImage="Hero.png"
        leftImage="Landa.svg"
        showButton={false}
      />

      {/* Include other components */}
      <HomeCardsContainer />
      <LandaHoldingBlack />
      <LandaHoldingPriority />
      <HomeOurTeam />
      <LatestStartups />
      <Partners />
    </div>
  )
}