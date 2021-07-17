import Head from 'next/head';

import Showcase from '../components/Showcase';
import Button from '../components/Layout/Button';
import Section from '../components/Layout/Section';
import SSGSection from '../components/Layout/SSGSection';
import CardGrid from '../components/CardGrid';
import HeadingComponent from '../components/Layout/HeadingComponent';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Vno Land</title>
          <meta name='description' content='The first build tool for compiling and bundling Vue components in a Deno runtime environment' />
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
            integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          />
        </Head>

        <Showcase />
        <Section sectionColor="#ffffff">
          <HeadingComponent title="Why Vno" subtitle="The first native Vue compiler for Deno" />
          <CardGrid />
        </Section>

        <SSGSection />
      </div>
    </div>
  );
}
