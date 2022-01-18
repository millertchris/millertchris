import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import CanvasColor from '../components/canvas-color';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {
  const handleRouteChange = (url) => {
    window.gtag('config', 'G-J24C9431J7', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <CanvasColor />
      <AnimatePresence>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
