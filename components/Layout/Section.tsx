import React, { FC } from 'react'

import styles from '../../styles/Layout/Section.module.css';

interface SectionComponentProps {
  sectionColor?: string,
  sectionHeight?: number,
}

const Section:FC<SectionComponentProps> = ({ children, sectionColor="ffffff", sectionHeight=300 }) => {

  return (
    <section>
      <style jsx>{`
        section {
          width: 100%;
          height: ${sectionHeight}px;
          background-color: ${sectionColor};
          display: flex;
          justify-content: center;
        }
      `}</style>
      <div className={styles.sectionContainer}>
        { children }
      </div>
    </section>
  )
}

export default Section
