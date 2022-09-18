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

  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  const updateDuration = useCallback(() => {
    setDuration(calculateDuration(targetDate));
  }, [targetDate])

  useEffect(() => {
    timerRef.current = window.setInterval(updateDuration, 1000);

    return () => {
      clearInterval(timerRef.current);
    }
  }, [targetDate, updateDuration]);

  const mapNumber = (number: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  const daysRadius = mapNumber(days, 30, 0, 0, 360);
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

  return (
    <div className={styles.wrapper}>
      <Counter circleRadius={daysRadius} time={days} unit="Days" />
      <Counter circleRadius={hoursRadius} time={hours} unit="Hours" />
      <Counter circleRadius={minutesRadius} time={minutes} unit="Min" />
      <Counter circleRadius={secondsRadius} time={seconds} unit="Sec" />
    </div>
  )
};

export default Timer;
