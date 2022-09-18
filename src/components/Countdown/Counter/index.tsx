import React from 'react';
import styles from './Counter.module.scss';

type Props = {
  time: number;
  unit: string;
};

const Counter: React.FC<Props> = ({ time, unit}) => {
  return (
    <div className={styles.wrapper}>
      <time>{time}</time>
      <span>{unit}</span>
    </div>
  );
};

export default Counter;
