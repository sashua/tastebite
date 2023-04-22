import { Footer } from './Footer';
import { Header } from './Header';
import { fontInter, fontPlayfairDisplay } from './fonts';
import './tailwind.css';

export const metadata = {
  title: 'Tastebite',
  description:
    'Discover delicious and easy-to-make recipes on our food website! From appetizers to desserts, our recipes are perfect for every occasion. Browse through our collection of tasty dishes and impress your guests with your cooking skills.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html
      lang="en"
      className={`${fontInter.variable} ${fontPlayfairDisplay.variable}`}
    >
      <body className="flex min-h-screen flex-col font-primary">
        <Header />
        <main className="mt-14 grow py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
