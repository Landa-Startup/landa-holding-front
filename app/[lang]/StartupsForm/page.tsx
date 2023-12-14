
import Banner from '../../../components/common/Banner';
import StartupFormForm from '../../../components/StartupsForm/StartupFormForm';
import { Metadata } from 'next';
import { useTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'Landa Holding | Startups',
  description:
    'Explore the Landa Holding Startup Form and share your innovative ideas with us. We are interested in hearing from startups and entrepreneurs. Lets work together to bring your vision to life.',
};

export default async function StartupValidationPage({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const { t } = await useTranslation(lang, "formComponent")

  return (
    <div dir={t('dir')}>
      {/* Banner component with an image and title */}
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title={t('startUp', { returnObjects: true }).banner}
        lang={lang}
      />

      {/* Render the StartupFormForm component */}
      <StartupFormForm />
    </div>
  );
}
