import Image from 'next/image';
import Header from '../components/header';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Header
        metaTitle='Chris Miller | Advertising and Web Design'
        metaDescription='Connecting brands with their audience through rich and engaging digital experiences.'
      />

      <main>
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

                <h2 className='h1 black-bar'>
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

                <p className='black-bar'>
                  <motion.span
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.25 }}
                  >
                    In a society driven by transactions — it’s the interactions,
                    experiences, and authenticity people seek. If done right,
                    your brand will attract followers, create promoters, and
                    earn the trust of many.
                  </motion.span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
