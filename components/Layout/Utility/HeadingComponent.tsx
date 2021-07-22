import React, { FC } from 'react';

interface HeadingComponentProps {
  title: string,
  subtitle: string
}

const HeadingComponent:FC<HeadingComponentProps> = ({ title, subtitle }) => {
  return (
    <div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        h1 {
          margin: 0;
          font-size: 3rem;
          color: #333333;
        }

        h3 {
          margin: .5rem 0;
          font-family: 'Quicksand', Arial, Helvetica, sans-serif;
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--sec-font-color-dark);
        }
      `}</style>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  )
}

export default HeadingComponent
