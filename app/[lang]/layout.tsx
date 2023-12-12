import Footer from '../../components/home/Footer';
import Navbar from '../../components/common/Navbar';
import ScrollUpButton from '../../components/common/ScrollUpButton';
import { dir } from 'i18next';
import { languages } from 'app/i18n/setting';
import { useTranslation } from 'app/i18n';
import './globals.css';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}
export default async function RootLayout({
  params: { lang },
  children
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  const { t } = await useTranslation(lang, 'layout');
  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar
          lang={lang}
          menuItems={t('menuItems', { returnObjects: true })}
          submenuItems={t('submenuItems', { returnObjects: true })}
        >
          <main>{children}</main>
          <Footer lang={lang} />
          <ScrollUpButton />
        </Navbar>
      </body>
    </html>
  );
}
