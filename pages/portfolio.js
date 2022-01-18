import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/header';
import Tilt from 'react-parallax-tilt';

const items = [
  { title: 'Old Forester', image: 'old-forester-website.jpeg' },
  { title: 'Buckhead', image: 'buckheads-website.png' },
  { title: 'Southern Comfort', image: 'southern-comfort-website.jpeg' },
  { title: 'Metro United Way', image: 'metro-united-way-website.png' },
  { title: 'Level', image: 'level-branding.jpg' },
  { title: 'Schedule It', image: 'schedule-it-website.jpg' },
  { title: 'Goldhouse', image: 'goldhouse-website.jpg' },
  { title: 'Frost Brown Todd', image: 'frost-brown-todd-website.png' },
  { title: 'Elegance Living', image: 'elegance-living-website.png' },
  { title: 'Galvanize', image: 'galvanize-climate-solution-website.png' },
  { title: 'Forge Point', image: 'forgepoint-capitol-website.png' },
  { title: 'Playground', image: 'playground-global-website.png' },
  { title: 'IMC Licensing', image: 'imc-licensing-website.png' },
  // { title: 'Wax Communications', image: 'wax-communications-website.jpg' },
  { title: 'Telegram', image: 'telegram-website.jpg' },
  { title: 'Parklands', image: 'the-parklands-website.png' },
  {
    title: 'Park Community Credit Union',
    image: 'park-community-credit-union--website.png',
  },
  {
    title: 'New Directions Housing',
    image: 'new-direction-housing-website.png',
  },
  { title: 'Moonshine University', image: 'moonshine-university-website.png' },
  { title: 'NBA2Lou', image: 'nba2lou-website.png' },
  { title: 'MCM CPA', image: 'mcm-cpa-website.png' },
  {
    title: 'Home of the Innocents',
    image: 'home-of-the-innocents-website.png',
  },
  {
    title: 'National Travel Association',
    image: 'national-travel-association-website.png',
  },
  // {
  //   title: 'International Coaching Federation',
  //   image: 'old-forester-website.jpeg',
  // },
  { title: 'Gravely', image: 'gravely-brewing-website.png' },
  { title: 'Flavorman', image: 'flavorman-website.png' },
  {
    title: 'Embroiderers Guild of America',
    image: 'egausa-website.png',
  },
  { title: 'Carnegie Center', image: 'carnegie-center-website.png' },
  { title: 'Belle of Louisville', image: 'belle-of-louisville-website.png' },
  { title: 'BDAS', image: 'bdas-website.png' },
  { title: 'APH Museum', image: 'aph-museum-website.png' },
  {
    title: 'American Founders Bank',
    image: 'american-founders-bank-website.png',
  },
  { title: 'Investors Heritage', image: 'investors-heritage-website.png' },
  { title: 'Funtown Mountain', image: 'funtown-mountain-website.png' },
  { title: 'Globetrotters', image: 'globetrotters-website.png' },
  { title: 'Hosparus Health', image: 'hosparus-health-website.png' },
];

export default function Home() {
  return (
    <>
      <Header
        metaTitle='Chris Miller | Portfolio'
        metaDescription={`Projects I've scoped, created, and delivered over the years.`}
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
                    Portfolio
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
                      Passionate teams deliver
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
                      exceptional experiences.
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
                    Over the years — I&apos;ve had the privilege to partner with
                    other agencies and clients who care deeply about creating
                    rich and engaging experieneces.
                  </p>
                  <Link href='/about'>
                    <a className='btn'>Learn more</a>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <motion.section
          className='block portfolio'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: 2.5,
          }}
        >
          <div className='wrapper'>
            <div className='row'>
              {items.map((item, i) => (
                <div className='item' key={i}>
                  <Tilt glareEnable='true'>
                    <div className='image'>
                      <Image
                        src={'/images/' + item.image}
                        alt={item.title + ' website'}
                        placeholder='blur'
                        blurDataURL='/images/Progressively-Loading-Images-With-Blur-Effect-min.png'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </Tilt>
                  <div className='content'>
                    <h2 className='h6'>{item.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.main>

      <footer></footer>
    </>
  );
}
