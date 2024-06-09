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
  const { t } = await useTranslation(lang, 'mainPage');
  return (
    <div>
      <Banner
        image="/static/images/our-team/Header.jpg"
        title={t('OurTeam')}
        lang={lang}
      />
      <TeamPersons />
    </div>
  );
}