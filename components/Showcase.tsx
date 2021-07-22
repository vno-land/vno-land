import React, { FC } from 'react';
import Image from 'next/image';
import Button from './Layout/Utility/Button';

import styles from '../styles/Showcase.module.css';

interface ShowcaseProps {
  title: string,
  subtitle: string,
  requireBtns: boolean
  image: any
}

const Showcase:FC<ShowcaseProps> = ({ title, subtitle, requireBtns, image }) => {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.showcaseContainer}>
        <div className={styles.left}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          { requireBtns && <div className={styles.btnsContainer}>
            <Button btnText="Get Started" btnLink="/learn/ssg/create-vno-app" btnClass="primary" />
            <Button btnText="Read Our Docs ->" btnLink="/docs/ssg/getting-started" btnClass="info"/>
          </div> }
        </div>
        <div className={styles.right}>
          <Image src={image} alt="Vno graphic"/>
        </div>
      </div>
    </section>
  )
}

export default Showcase
