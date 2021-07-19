import React, { PropsWithChildren } from 'react';
import styles from '../styles/CardGrid.module.css';



interface CardGridProps<T> {
  data: T[],
  render: (element:T) => React.ReactNode
}

const CardGrid = <T extends any>({ data , render }:PropsWithChildren<CardGridProps<T>>) => {
  return (
    <div className={styles.cardGrid}>
      {data.map(render)}
    </div>
  )
}

export default CardGrid;
