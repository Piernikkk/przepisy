import { Poppins } from 'next/font/google';
import "./globals.css";
import RecipesProvider from '@/lib/providers/RecipiesProvider';
import ModalProvider from '@/lib/providers/ModalProvider';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Przepisy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <RecipesProvider>
          <ModalProvider>
            {children}

          </ModalProvider>
        </RecipesProvider>
      </body>
    </html>
  );
}
