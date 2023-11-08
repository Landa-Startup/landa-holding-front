import React from 'react';
import Footer from '@/components/home/Footer';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import ScrollUpButton from '@/components/common/ScrollUpButton';

import { dir } from 'i18next'

import { languages } from '../i18n/setting'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode;
  params: { lng: string }
}) {
  return (
    <html lang={lng} dir='ltr'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar> {/* Navbar */}
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
