import Head from 'next/head';
import Nav from './nav';
import { motion } from 'framer-motion';

export default function Header(props) {
  return (
    <>
      <Head>
        <title>{props.metaTitle}</title>
        <meta name='title' content={props.metaTitle} />
        <meta name='description' content={props.metaDescription} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://millertchris.com/' />
        <meta property='og:title' content={props.metaTitle} />
        <meta property='og:description' content={props.metaDescription} />
        <meta
          property='og:image'
          content='https://millertchris.com/social/millertchris-twitter-meta-image.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://millertchris.com/' />
        <meta property='twitter:title' content={props.metaTitle} />
        <meta property='twitter:description' content={props.metaDescription} />
        <meta
          property='twitter:image'
          content='https://millertchris.com/social/millertchris-twitter-meta-image.png'
        />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta
          name='msapplication-config'
          content='/favicons/browserconfig.xml'
        />
        <meta name='theme-color' content='#ffffff' />

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-J24C9431J7'
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J24C9431J7', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>

      <Nav />
    </>
  );
}
