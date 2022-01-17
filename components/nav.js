import React, { useState } from 'react';
import Link from 'next/link';
import { Slant as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  {
    url: '/',
    text: 'Home',
  },
  {
    url: '/portfolio',
    text: 'Portfolio',
  },
  {
    url: '/about',
    text: 'About',
  },
  {
    url: '/agency',
    text: 'Agency',
  },
];

const variants = {
  open: {
    display: 'flex',
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
  closed: {
    display: 'none',
    opacity: 0,
    scale: 0.8,
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className='hammy'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <ul>
          {menuItems.map((item, i) => (
            <li className='reveal-text' key={i}>
              <Link href={item.url}>
                <motion.a
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.text}
                </motion.a>
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
