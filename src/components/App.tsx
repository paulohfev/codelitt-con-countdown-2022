import React from 'react';
import CountdownTimer from 'components/CountdownTimer';
import styles from './App.module.scss';

const App: React.FC = () => {
  const targetDateInMilliseconds = Math.floor(new Date('October 14, 2022 11:00:00') as any);

  return (
    <main className={styles.main}>
      <CountdownTimer targetDate={targetDateInMilliseconds} />
    </main>
  );
};

export default App;
