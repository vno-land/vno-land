import React, { FC } from 'react';

import styles from '../styles/FeaturesCard.module.css';

interface CardComponentProps {
  title: string,
  excerpt: string,
  link: string
}

const FeaturesCard:FC<CardComponentProps> = ({ title, excerpt, link }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <a href={link}>Learn More <i className="fas fa-chevron-right"></i></a>
    </div>
  )
}

export default FeaturesCard;
