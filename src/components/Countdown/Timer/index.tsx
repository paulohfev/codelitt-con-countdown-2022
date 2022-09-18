import React, { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';
import Counter from 'components/Countdown/Counter';
import styles from './CountdownTimer.module.scss';

type Props = {
  targetDate: number;
};

const calculateDuration = (targetDate: number) => {
  const currentDateInMilliseconds = Math.floor(Date.now());
  return moment.duration(Math.max(targetDate - currentDateInMilliseconds));
}

const Timer: React.FC<Props> = ({ targetDate }) => {
  const [duration, setDuration] = useState(calculateDuration(targetDate));
  const timerRef = useRef(0);

  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(targetDate));
  }, [targetDate])

  useEffect(() => {
    timerRef.current = window.setInterval(timerCallback, 1000);

    return () => {
      clearInterval(timerRef.current);
    }
  }, [targetDate, timerCallback]);

  return (
    <div className={styles.wrapper}>
      <Counter time={duration.days()} unit="Days" />
      <Counter time={duration.hours()} unit="Hours" />
      <Counter time={duration.minutes()} unit="Minutes" />
      <Counter time={duration.seconds()} unit="Seconds" />
    </div>
  )
};

export default Timer;
