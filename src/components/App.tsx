import React from 'react';
import Countdown from 'components/Countdown';

const App: React.FC = () => {
  // Date(year, month, day, hours, minutes, seconds, milliseconds)
  const targetDateInMilliseconds = Math.floor(new Date('October 14, 2022 11:00:00') as any);

  return (
    <div className="App">
      <Countdown targetDate={targetDateInMilliseconds} />
    </div>
  );
};

export default App;
