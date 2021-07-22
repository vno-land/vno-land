import React, { FC } from 'react'

interface SectionComponentProps {
  sectionColor?: string,
  sectionMinHeight?: string
}

const Section:FC<SectionComponentProps> = ({ children, sectionColor="ffffff", sectionMinHeight="auto" }) => {

  return (
    <section>
      <style jsx>{`
        section {
          width: 100%;
          min-height: ${sectionMinHeight};
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
