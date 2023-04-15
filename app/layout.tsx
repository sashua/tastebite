import { Header } from './components';
import { fontInter, fontPlayfairDisplay } from './fonts';
import './tailwind.css';

export const metadata = {
  title: 'Tastebite',
  description:
    'Discover delicious and easy-to-make recipes on our food website! From appetizers to desserts, our recipes are perfect for every occasion. Browse through our collection of tasty dishes and impress your guests with your cooking skills.',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props): JSX.Element {
  return (
    <html
      lang="en"
      className={`${fontInter.variable} ${fontPlayfairDisplay.variable}`}
    >
      <body className="font-primary">
        <Header />
        <main className="mt-14">{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
