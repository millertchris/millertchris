import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/header';
import Tilt from 'react-parallax-tilt';

const items = [
  {
    title: 'Fords Gin (Active Project)',
    image: 'fords-gin-website.jpg',
  },
  {
    title: 'Old Forester',
    image: 'old-forester-website.jpeg',
    url: 'https://www.oldforester.com/',
  },
  {
    title: 'Zoom',
    image: 'zoom-diversity-and-inclusion-website.png',
    url: 'https://zoom.prolificdigital.com/',
  },
  { title: 'Buckhead', image: 'buckheads-website.png' },
  {
    title: 'Southern Comfort',
    image: 'southern-comfort-website.jpeg',
    url: 'http://originalsoutherncomfort.com/en-us/',
  },
  {
    title: 'Metro United Way',
    image: 'metro-united-way-website.png',
    url: 'https://metrounitedway.org/',
  },
  { title: 'Level', image: 'level-branding.jpg' },
  {
    title: 'Schedule It',
    image: 'schedule-it-website.jpg',
    url: 'https://schedule-it.prolificdigital.com/',
  },
  {
    title: 'Goldhouse',
    image: 'goldhouse-website.jpg',
    url: 'https://goldhouse.prolificdigital.com/',
  },
  {
    title: 'Frost Brown Todd',
    image: 'frost-brown-todd-website.png',
    url: 'https://frostbrowntodd.com/',
  },
  {
    title: 'Elegance Living',
    image: 'elegance-living-website.png',
    url: 'https://elegance-living.com/',
  },
  {
    title: 'Galvanize',
    image: 'galvanize-climate-solution-website.png',
    url: 'https://galvanizeclimatesolutions.com/',
  },
  {
    title: 'Forge Point',
    image: 'forgepoint-capitol-website.png',
    url: 'https://forgepointcap.com/',
  },
  {
    title: 'Playground',
    image: 'playground-global-website.png',
    url: 'https://playground.global/',
  },
  {
    title: 'IMC Licensing',
    image: 'imc-licensing-website.png',
    url: 'https://imclicensing.com/',
  },
  // {
  //   title: 'Wax Communications',
  //   image: 'wax-communications-website.jpg',
  //   url: 'https://waxcom.com/',
  // },
  {
    title: 'Telegram',
    image: 'telegram-website.jpg',
    url: 'https://telegram.prolificdigital.com/',
  },
  {
    title: 'Parklands',
    image: 'the-parklands-website.png',
    url: 'https://theparklands.org/',
  },
  {
    title: 'Park Community Credit Union',
    image: 'park-community-credit-union--website.png',
    url: 'https://parkcommunity.com/',
  },
  {
    title: 'New Directions Housing',
    image: 'new-direction-housing-website.png',
    url: 'https://www.ndhc.org/',
  },
  {
    title: 'Moonshine University',
    image: 'moonshine-university-website.png',
    url: 'https://moonshineuniversity.com/',
  },
  {
    title: 'NBA2Lou',
    image: 'nba2lou-website.png',
    url: 'https://nba2lou.com/',
  },
  {
    title: 'MCM CPA',
    image: 'mcm-cpa-website.png',
    url: 'https://mcmcpa.com/',
  },
  {
    title: 'Home of the Innocents',
    image: 'home-of-the-innocents-website.png',
    url: 'https://www.homeoftheinnocents.org/',
  },
  {
    title: 'National Travel Association',
    image: 'national-travel-association-website.png',
    url: 'https://ntaonline.com/',
  },
  // {
  //   title: 'International Coaching Federation',
  //   image: 'old-forester-website.jpeg',
  //   url: 'https://coachingfederation.org/',
  // },
  {
    title: 'Gravely',
    image: 'gravely-brewing-website.png',
    url: 'https://www.gravelybrewing.com/',
  },
  {
    title: 'Flavorman',
    image: 'flavorman-website.png',
    url: 'https://flavorman.com/',
  },
  {
    title: 'Embroiderers Guild of America',
    image: 'egausa-website.png',
    url: 'https://egausa.org/',
  },
  {
    title: 'Carnegie Center',
    image: 'carnegie-center-website.png',
    url: 'http://www.carnegiecenter.org/',
  },
  { title: 'Belle of Louisville', image: 'belle-of-louisville-website.png' },
  { title: 'BDAS', image: 'bdas-website.png', url: 'https://bdastesting.com/' },
  {
    title: 'APH Museum',
    image: 'aph-museum-website.png',
    url: 'https://www.aph.org/the-museum-of-the-american-printing-house-for-the-blind-attracting-visitors-from-around-the-world/',
  },
  {
    title: 'American Founders Bank',
    image: 'american-founders-bank-website.png',
  },
  {
    title: 'Investors Heritage',
    image: 'investors-heritage-website.png',
    url: 'https://investorsheritage.com/',
  },
  { title: 'Funtown Mountain', image: 'funtown-mountain-website.png' },
  {
    title: 'Globetrotters',
    image: 'globetrotters-website.png',
    url: 'https://www.gec-group.com/',
  },
  {
    title: 'Hosparus Health',
    image: 'hosparus-health-website.png',
    url: 'https://hosparushealth.org/',
  },
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
                    <h2 className='title h6'>{item.title}</h2>
                    {item.url && (
                      <a href={item.url} target='_blank'>
                        Visit site
                      </a>
                    )}
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
