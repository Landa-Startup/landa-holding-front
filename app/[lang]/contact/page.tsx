import { Metadata } from 'next';
import { useTranslation } from 'app/i18n';
import ContactUsForm from '@/components/common/form/ContactUsForm';
import ContactUsDescription from '@/components/common/ContactUsDescription';
import Banner from '@/components/common/Banner';

export const metadata: Metadata = {
  title: 'Landa Holding | Contact',
  description:
    'Contact Landa Holding to get in touch with our dedicated team. Whether you have questions, inquiries, or partnership opportunities, we are here to assist you. Reach out to us today.',
};

export default async function ContactUsPage({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const { t } = await useTranslation(lang, "contact")
  // Renamed the component for better naming
  return (
    <div>
      {/* Banner Component */}
      <Banner
        image="/static/images/Contact/37b76f28c1c41b4ea18163cf2fba85ab.png"
        title={t('banner')}
        lang={lang}
      />

      {/* Main Content Grid */}
      {/* ContactUsDescription Component */}
      {/* TODO: hardcode delete */}
      <div className='container mx-auto grid grid-cols-1 gap-12 bg-[#FAFAFA] px-5 py-28 font-barlow text-black md:flex md:flex-row md:justify-between lg:px-28'>
        <ContactUsDescription />
        <ContactUsForm />
      </div>
    </div>
  );
}
