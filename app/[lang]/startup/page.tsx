import Banner from '../../../components/common/Banner';
import { useTranslation } from 'app/i18n';
import Differences from '@/components/startup/Differences';
import NatureOfStartups from '@/components/startup/NatureOfStartups';
import Gateway from '@/components/startup/Gateway';
import Services from '@/components/startup/Services';
import LatestStartups from '@/components/home/LatestStartups';

export default async function StartUp({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'startUp');

  return (
    <div>
      <div className='hidden md:inline'>
        <Banner
          image="/static/images/Startup/startup-banner.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className='inline md:hidden'>
        <Banner
          image="/static/images/Startup/startup-banner.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className='max-w-[1600px] mx-auto px-8 md:px-24 font-gilda'>
        <Differences />
        <NatureOfStartups />
        <Gateway />
        <Services />
        <LatestStartups/>
      </div>
    </div>
  )
}
