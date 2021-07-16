import React, { FC } from 'react';
import FeaturesCard from './FeaturesCard';
import styles from '../styles/CardContainer.module.css';

import { demoCardData } from '../data';

const CardGrid:FC = () => {
  return (
    <div className={styles.cardGrid}>
      {demoCardData.map(cardDetails => <FeaturesCard key={cardDetails.id} title={cardDetails.title} excerpt={cardDetails.excerpt} link={cardDetails.link} />)}
    </div>
  )
}

export default CardGrid;
