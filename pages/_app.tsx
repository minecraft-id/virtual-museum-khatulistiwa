import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ViewerProvider } from '@/hooks/ViewerContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Museum</title>      
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />          
        <link
          rel='preload'
          href='/assets/fonts/minecraft-enchantment.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='true'
        />

        <link
          rel='preload'
          href='/assets/fonts/Minecraftia-Regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='true'
        />

        <link
          rel='preload'
          href='/assets/fonts/MinecraftTen.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='true'
        />

        <link rel='preload' as='image' href='/assets/background/book.webp' />
        <link rel='preload' as='image' href='/assets/background/1page.webp' />
      </Head>

      <ViewerProvider>
        <Component {...pageProps} />
      </ViewerProvider>
    </>
  );
}
export default App;
