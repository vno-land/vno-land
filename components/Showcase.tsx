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
          <h2>Vue&apos;s First Build Tool For Deno</h2>
          <h1>Now has the power of <span>Static Site Generation</span></h1>
          <div className={styles.btnsContainer}>
            <Button btnText="Get Started" btnLink="/learn" btnClass="primary" />
            <Button btnText="Read The Docs ->" btnLink="/docs" btnClass="info"/>
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
