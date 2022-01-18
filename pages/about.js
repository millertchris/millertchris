import { motion } from 'framer-motion';
import Header from '../components/header';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Header
        metaTitle='Chris Miller | About'
        metaDescription={`Working with agencies and teams that help brands communicate and connect with the people that love and adore them.`}
      />

      <motion.main exit={{ opacity: 0 }}>
        <section className='block about'>
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
                    About
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
                      My story.
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
                    At the intersection of creativity and technology is where I
                    feel most at home — working with agencies and teams that
                    help brands communicate and connect with the people that
                    love and adore them.
                  </p>

                  <p>
                    Born in the 80’s — interactive experiences have always
                    magnetized and mesmerized me. Movies and comic books also
                    became a transformative part early in life in how they could
                    immerse you into the storytelling and exciting ways.
                  </p>

                  <p>
                    I would later become a high school dropout due to the lack
                    of engagement and accessibility in the classroom.
                  </p>

                  <p>
                    Music became my passion, and some friends and I started a
                    band. I enjoyed how it allowed me to connect with people
                    through visual, sound, and story. Through this experience —
                    I would learn the art of filmmaking, designing,
                    storytelling, advertising, and marketing.
                  </p>

                  <p>
                    Throughout this period, I worked at countless fast-food
                    restaurants, warehouses, and a construction company to fund
                    the band’s merchandise and weekend touring expenses.
                  </p>

                  <p>
                    When the band split — I wanted to build a career using the
                    skills I had acquired, and through lots of hard work and
                    networking, I was able to land roles in filmmaking, tech,
                    and eventually advertising and marketing.
                  </p>

                  <p>
                    Today — I’m the founder of an agency,{' '}
                    <a href='https://prolificdigital.com'>Prolific Digital</a>.
                  </p>

                  <p>
                    We enjoy helping brands connect with their audiences through
                    rich, engaging storytelling experiences and support several
                    large agencies that require a trusted and experienced
                    partner to deliver exceptional experiences to their clients.
                  </p>

                  <p>
                    A husband, a father, and an advocate for the underdogs — I
                    enjoy releasing public educational material that helps to
                    inform and empower others that may not otherwise have access
                    to these resources.
                  </p>
                  <ul className='social'>
                    <li>
                      <a
                        href='https://twitter.com/millertchris'
                        target='_blank'
                      >
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fab'
                          data-icon='twitter'
                          className='svg-inline--fa fa-twitter fa-w-16'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path
                            fill='currentColor'
                            d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/millertchris/'
                        target='_blank'
                      >
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fab'
                          data-icon='linkedin-in'
                          className='svg-inline--fa fa-linkedin-in fa-w-14'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path
                            fill='currentColor'
                            d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.youtube.com/millertchris'
                        target='_blank'
                      >
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fab'
                          data-icon='youtube'
                          className='svg-inline--fa fa-youtube fa-w-18'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 576 512'
                        >
                          <path
                            fill='currentColor'
                            d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>

                  <Link href='/agency'>
                    <a className='btn'>See agency</a>
                  </Link>
                  <a href='mailto:chris@prolificdigital.com' className='btn'>
                    Email me
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
