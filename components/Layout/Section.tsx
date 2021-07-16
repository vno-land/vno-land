import React, { FC } from 'react'

import styles from '../../styles/Layout/Section.module.css';

interface SectionComponentProps {
  sectionColor?: string,
}

const Section:FC<SectionComponentProps> = ({ children, sectionColor="ffffff" }) => {

  return (
    <section>
      <style jsx>{`
        section {
          width: 100%;
          padding: 100px;
          background-color: ${sectionColor};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      { children }
    </section>
  )
}

export default Section
