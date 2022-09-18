import React from 'react';
import Timer from 'components/Countdown/Timer';
import Header from './Header';
import 'styles/index.css';
import styles from './App.module.scss';

const App: React.FC = () => {
  const targetDateInMilliseconds = Math.floor(new Date('October 14, 2022 11:00:00') as any);

  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.wrapper}>
        <Timer targetDate={targetDateInMilliseconds} />
      </div>
    </main>
  );
};

export default App;
