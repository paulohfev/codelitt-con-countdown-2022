import React, { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';

type Props = {
  targetDate: number;
};

const calculateDuration = (targetDate: number) => {
  const currentDateInMilliseconds = Math.floor(Date.now());
  return moment.duration(Math.max(targetDate - currentDateInMilliseconds));
}

const CountdownTimer: React.FC<Props> = ({ targetDate }) => {
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
    <div>
      {duration.days()} Days
      {duration.hours()} Hours
      {duration.minutes()} Minutes
      {duration.seconds()} Seconds
    </div>
  )
};

export default CountdownTimer;
