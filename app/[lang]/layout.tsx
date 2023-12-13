import Footer from '../../components/home/Footer';
import Navbar from '../../components/common/Navbar';
import ScrollUpButton from '../../components/common/ScrollUpButton';
import { dir } from 'i18next'
import { languages } from 'app/i18n/setting'
import './globals.css';
import { useLang } from 'store';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}
export default function RootLayout({
  params: { lang },
  children
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {

  useLang.setState({
    lang: lang
  })

  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar lang={lang} >
          <main>
            {children}
          </main>
          <Footer lang={lang} />
          <ScrollUpButton />
        </Navbar>
      </body>
    </html>
  );
}
