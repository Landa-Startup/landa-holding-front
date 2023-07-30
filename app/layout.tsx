import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';
import ScrollUpButton from '@/components/ScrollUpButton';

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
        <div>
          {/* <Navbar /> */}
          <main>{children}</main>
<<<<<<< HEAD
          {/* <Footer /> */}
=======
          <Footer />
          <ScrollUpButton />
>>>>>>> 052c85fd293ffb9ed9a262d0401fb043513cf05c
        </div>
      </body>
    </html>
  );
}
