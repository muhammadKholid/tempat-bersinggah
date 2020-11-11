import React from 'react';
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import './Header.css';

import Ava from '../../assets/PicsArt_11-11-11.25.04.jpg';

const textLines = [
  `Hello Stranger!`,
  `I am a man behind this web`,
  `I am a Web Developer,`,
  `A Photographer in vacation time,`,
  `A Dancer when listening a nice beat,`,
  `An Amateur Vocalist,`,
  `and I like making up random rhymes.`,
  `Welcome to my page and have a nice day :)`,
];
export default function Header() {
  const variant = {
    visible: { opacity: 1, y: [200, 0] },
    hidden: { opacity: 0 },
  };
  return (
    <main>
      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ ease: 'easeInOut', duration: 2 }}
        variants={variant}
        className="site-title">
        <div className="avatar">
          <motion.img
            animate={{ scale: [0.5, 1], rotate: -360 }}
            transition={{ duration: 2 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            src={Ava}
            alt="almasfikri"
            className="ava"
          />
          <div className="site-content">
            <h1>Muhammad Kholid</h1>
            <div className="typed" style={{ fontSize: 17, marginTop: '1rem' }}>
              <Typed strings={textLines} typeSpeed={80} loop={true} />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
