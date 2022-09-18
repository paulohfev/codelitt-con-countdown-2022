import React from 'react';
import SVGCircle from 'components/SVGCircle';
import styles from './Counter.module.scss';

type Props = {
  circleRadius: number;
  time: number;
  unit: string;
};

const Counter: React.FC<Props> = ({ circleRadius, time, unit}) => {
  return (
    <div className={styles.wrapper}>
      <SVGCircle radius={circleRadius} />

      <div className={styles['count-wrapper']}>
        <time className={styles.time}>{time}</time>
        <span className={styles.label}>{unit}</span>
      </div>
    </div>
  );
};

export default Counter;
