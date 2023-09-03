import React from 'react';
import Footer from '@/components/templates/Footer';
import './globals.css';
import Navbar from '@/components/templates/Navbar';
import ScrollUpButton from '@/components/atoms/ScrollUpButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar>
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
