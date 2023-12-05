import React from 'react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/common/Navbar';
import ScrollUpButton from '../../components/common/ScrollUpButton';
import { dir } from 'i18next'
import { languages } from 'app/i18n/setting'
import './globals.css';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}
// import { dir } from 'i18next'
export default function RootLayout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  // console.log("dir: ", dir(lang));
  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar lang={lang}>
          {/* Navbar */}
          <main>{children}</main> {/* Main Content */}
          <Footer lang={lang} />
          <ScrollUpButton /> {/* Scroll Up Button */}
        </Navbar>
      </body>
    </html>
  );
}
