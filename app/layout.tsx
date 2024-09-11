import {Navbar} from 'components/layout/navbar1';
import { GeistSans } from 'geist/font';
import { ensureStartsWith } from 'lib/utils';
import { ReactNode, Suspense } from 'react';
import './globals.css';
import { Footer } from 'components/footer/Footer';
// import Footer from 'components/layout/footer';
import { Provider } from './provider';
import { CartProvider } from 'context/cartContext';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html data-theme="light" lang="en" className={GeistSans.variable}>
      {/* <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white"> */}
      <body>
        <Provider>
          <CartProvider>
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer/>
          </CartProvider>
        </Provider>
      </body>
    </html>
  );
}
{/* <html data-theme="dark">
  <div data-theme="light">
    This div will always use light theme
    <span data-theme="retro">This span will always use retro theme!</span>
  </div>
</html> */}