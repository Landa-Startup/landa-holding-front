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
        {/* <div className=""> */}
        <Navbar >
          <main>{children}</main>
          <div className="bottom-0 w-full">
            <Footer />
          </div>
        </Navbar>
        {/* </div> */}

        {/* <div className="min-h-screen">
          <main>{children}</main>
        </div> */}


        {/* <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollUpButton />
        </div> */}
      </body>
    </html>
  );
}
