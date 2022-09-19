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

      <section className={styles.section}>
        <div className={styles['timer-wrapper']}>
          <h3 className={styles['section-subtitle']}>
            <time>
              October 14, 2022
              &nbsp;&nbsp;&nbsp;
              10:00 AM EST
            </time>
          </h3>
        </div>

        <Timer targetDate={targetDateInMilliseconds} />
      </section>
    </main>
  );
};

export default App;
