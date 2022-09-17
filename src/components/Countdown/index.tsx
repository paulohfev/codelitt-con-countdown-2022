import React, { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';

type Props = {
  targetDate: number;
}

const calculateDuration = (targetDate: any) =>
  moment.duration(Math.max(targetDate - Math.floor(Date.now())), 'milliseconds');

const Countdown: React.FC<Props> = ({ targetDate }) => {
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
  }, [targetDate]);

  return (
    <div>
      {duration.days()} Days
      {duration.hours()} Hours
      {duration.minutes()} Minutes
      {duration.seconds()} Seconds
    </div>
  )
};

export default Countdown;
