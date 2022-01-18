import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../components/header';

export default function Home() {
  return (
    <>
      <Header
        metaTitle='Chris Miller | Agency'
        metaDescription='Prolific Digital is a creative digital agency that specializes in web design.'
      />

      <motion.main exit={{ opacity: 0 }}>
        <section className='block agency'>
          <div className='wrapper'>
            <div className='row'>
              <div className='col'>
                <h1 className='label reveal-text'>
                  <motion.span
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.1,
                    }}
                  >
                    Prolific Digital
                  </motion.span>
                </h1>
                <h2 className='h1'>
                  <span className='reveal-text'>
                    <motion.span
                      initial={{ y: 60 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1,
                      }}
                    >
                      We create interactive
                    </motion.span>
                  </span>
                  <span className='reveal-text'>
                    <motion.span
                      initial={{ y: 60 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1,
                        ease: 'easeInOut',
                      }}
                    >
                      story telling experiences.
                    </motion.span>
                  </span>
                </h2>
                <motion.div
                  className='content'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: 1.25,
                  }}
                >
                  <p>
                    Although we are not a large agency with lots of awards, a
                    padded portfolio, or years of tenure, we pride ourselves on
                    the qualities we think are more important: we are curious,
                    thoughtful, playful, empathetic, creative, tenacious,
                    committed, transparent, agile, and above all — honest.
                  </p>
                  <p>
                    We help to communicate brands in a digital space by
                    providing enriching experiences while delivering on time —
                    we replace awards with ambition, portfolio with personality,
                    and tenure with tenacity.
                  </p>
                  <p>
                    If this is something you are looking for and admire in a
                    digital agency like us, then let’s find a way to work —
                    together.
                  </p>
                  <a href='https://prolificdigital.com' className='btn'>
                    Visit our agency
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </motion.main>

      <footer></footer>
    </>
  );
}
