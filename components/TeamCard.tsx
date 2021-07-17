import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/TeamCard.module.css';

interface TeamCardProps {
  imgUrl: any,
  name: string,
  title: string
  email: string,
  github: string,
  linkedin: string
}

const TeamCard:FC<TeamCardProps> = ({ imgUrl, name, title, email, github, linkedin }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image width={300} height={300} layout="responsive" objectFit="contain" src={imgUrl} alt={'Image of ' + name}/>
      </div>
      <div className={styles.cardContentContainer}>
        <div className={styles.socialIcons}>
          <a href={`mailto:${email}`}><i className="fas fa-envelope"></i></a>
          <a href={github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href={linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default TeamCard;