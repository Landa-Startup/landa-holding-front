import React from 'react';
import Footer from '@/components/home/Footer';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import ScrollUpButton from '@/components/common/ScrollUpButton';

import { dir } from 'i18next';
import { useTranslation } from 'app/i18n';

const languages = ['en', 'fa'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

// Define data for the text card containers
interface GenerateMetadataProps {
  params: {
    lng: string;
  };
}

export async function GenerateMetadata({
  params: { lng },
}: GenerateMetadataProps) {
  const { t } = await useTranslation(lng as string, 'home');
  return { title: t('h1') };
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, 'home');

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar
          menuItems={[
            { label: t('Home'), href: '/' },
            { label: t('ABOUT US'), href: '/about' },
            { label: t('ACCELERATION'), href: '/acceleration' },
            { label: t('CONTACT US'), href: '/contact' },
            { label: t('OUR TEAM'), href: '/our-team' },
          ]}
          forms_navbar={t('FORMS')}
          submenuItems={[
            { label: t('INVESTOR CENTER'), href: '/investor-registration' },
            { label: t('ENTREPRENEUR CENTER'), href: '/entrepreneurs' },
            { label: t('BUSINESS PARTNERS'), href: '/partner-membership' },
            { label: t('STARTUPS VALIDATION'), href: '/StartupsForm' },
            { label: t('APPLY JOB'), href: '/job-form' },
            { label: t('acceleration'), href: '/acceleration' },
          ]}
        >
          {/* Navbar */}
          <main>{children}</main> {/* Main Content */}
          <div className="bottom-0 w-full">
            <Footer /> {/* Footer */}
            <ScrollUpButton /> {/* Scroll Up Button */}
          </div>
        </Navbar>
      </body>
    </html>
  );
}
