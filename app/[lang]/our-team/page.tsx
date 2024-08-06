import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import TeamPersons from '@/components/our-team/TeamPersons';
import { useTranslation } from 'app/i18n';
import '../../[lang]/globals.css';

export const metadata: Metadata = {
  title: 'Landa Holding | Our Team',
  description:
    'Meet the dedicated and talented individuals who make up the Landa Holding team. Learn about their expertise, passion, and commitment to excellence. Get to know the driving force behind our success.'
};

export default async function TeamPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'ourTeam');
  console.log(t('title'));
  
  return (
    <div>
      <div className='hidden md:inline'>
        <Banner
          image="/static/images/our-team/Header.jpg"
          title={t('title')}
          lang={lang}
        />
      </div>
      <div className='inline md:hidden'>
        <Banner
          image="/static/images/our-team/Header-mobile.jpeg"
          title={t('title')}
          lang={lang}
        />
      </div>
      <TeamPersons />
    </div>
  );
}