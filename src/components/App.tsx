import React from 'react';
import CountdownTimer from 'components/CountdownTimer';

const App: React.FC = () => {
  const targetDateInMilliseconds = Math.floor(new Date('October 14, 2022 11:00:00') as any);

  return (
    <main>
      <CountdownTimer targetDate={targetDateInMilliseconds} />
    </main>
  );
};

export default App;
