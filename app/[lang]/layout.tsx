import React from 'react';
import Footer from '../../components/home/Footer';
import './globals.css';
import Navbar from '../../components/common/Navbar';
import ScrollUpButton from '../../components/common/ScrollUpButton';

// import { dir } from 'i18next'
export default function RootLayout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar lang={lang}>
          {/* Navbar */}
          <main>{children}</main> {/* Main Content */}
          <Footer />
          <ScrollUpButton /> {/* Scroll Up Button */}
        </Navbar>
      </body>
    </html>
  );
}
