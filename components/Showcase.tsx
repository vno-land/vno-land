import React from 'react';
import Image from 'next/image';
import Button from './Layout/Button';

import vnoGraphic from '../public/vno-isometric.png';
import styles from '../styles/Showcase.module.css';

const Showcase = () => {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.showcaseContainer}>
        <div className={styles.left}>
          <h1>The First Vue Build Tool For Deno</h1>
          <h2>Vno gives you all the features you need for production in Deno: static rendering, TypeScript support, smart bundling, route pre-fetching, and more. <span>No config needed.</span></h2>
          <div className={styles.btnsContainer}>
            <Button btnText="Get Started" btnLink="/learn" btnClass="primary" />
            <Button btnText="Read Our Docs ->" btnLink="/docs" btnClass="info"/>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={vnoGraphic} alt="Vno graphic"/>
        </div>
      </div>
    </section>
  )
}

export default Showcase
