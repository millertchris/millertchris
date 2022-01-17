import Header from '../components/header';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Canvas from '../components/canvas';
import CanvasColor from '../components/canvas-color';

export default function Home() {
  return (
    <>
      <Header
        metaTitle='Chris Miller | Advertising and Web Design'
        metaDescription='Connecting brands with their audience through rich and engaging digital experiences.'
      />

      <CanvasColor />

      <main>
        <Canvas />

        <section className='block hero'>
          <div className='wrapper'>
            <div className='row'>
              <div className='col'>
                <motion.h1
                  className='label'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                >
                  Chris Miller
                </motion.h1>

                <h2 className='h1 reveal-text'>
                  <motion.span
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut',
                    }}
                  >
                    Create experiences.
                  </motion.span>
                </h2>

                <p className='reveal-text'>
                  <motion.span
                    initial={{ y: 150 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.25 }}
                  >
                    In a society driven by transactions — it’s the interactions,
                    experiences, and authenticity people seek. If done right,
                    your brand will attract followers, create promoters, and
                    earn the trust of many.
                  </motion.span>
                </p>
                <div className='reveal-text'>
                  <Link href='/portfolio'>
                    <motion.a
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, delay: 6 }}
                    >
                      View portfolio
                    </motion.a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
