import React from 'react';
import Countdown from 'components/Countdown';

const App: React.FC = () => {
  const targetDateInMilliseconds = Math.floor(new Date('Fri Oct 14 2022 11:00:00') as any);

  return (
    <div className="App">
      <Countdown eventTime={targetDateInMilliseconds} />
    </div>
  );
};

export default App;
