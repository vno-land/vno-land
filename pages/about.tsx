import Head from 'next/head';

import styles from '../styles/Team.module.css';

import Showcase from '../components/Showcase';
import Section from '../components/Layout/Section';
import HeadingComponent from '../components/Layout/Utility/HeadingComponent';
import CardGrid from '../components/CardGrid';
import FeaturesCard from '../components/FeaturesCard';
import AboutSection from '../components/AboutSection';

import { featureCardData, aboutShowcaseProps } from '../data/data';
import vnoAboutGraphic from '../public/vno-about-isometric.svg';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Vno Land - About Vno</title>
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

        <Showcase title={aboutShowcaseProps.title} subtitle={aboutShowcaseProps.subtitle} requireBtns={false} image={vnoAboutGraphic} />

        {/* <Section sectionColor="#57D3AF">
          <CardGrid data={featureCardData} render={(element) => <FeaturesCard key={element.id} title={element.title} excerpt={element.excerpt} link={element.link}/>} />
        </Section> */}

        <Section sectionColor="#ffffff">
          <AboutSection />
        </Section>
      </div>
    </div>
  );
}