// Head 
import Head from 'next/head';

// Component Imports
import Showcase from '../components/Showcase';
import Section from '../components/Layout/Section';
import SSGSection from '../components/SSGSection';
import FeaturesCard from '../components/FeaturesCard';
import CardGrid from '../components/CardGrid';
import HeadingComponent from '../components/Layout/Utility/HeadingComponent';

// Style Imports
import styles from '../styles/Home.module.css';

// Data Import
import { featureCardData, homeShowcaseProps } from '../data/data';
import vnoShowcaseGraphic from '../public/vno-compiler-isometric.png';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        

        <Showcase title={homeShowcaseProps.title} subtitle={homeShowcaseProps.subtitle} requireBtns={true} image={vnoShowcaseGraphic} />
        
        <Section sectionColor="#ffffff">
          <HeadingComponent title="Why Vno" subtitle="The first native Vue compiler for Deno" />
          <CardGrid data={featureCardData} render={(element) => <FeaturesCard key={element.id} title={element.title} excerpt={element.excerpt} link={element.link}/>} />
        </Section>

        <SSGSection />
      </div>
    </div>
  );
}
