import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import CanvasColor from '../components/canvas-color';

function MyApp({ Component, pageProps, router }) {
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
