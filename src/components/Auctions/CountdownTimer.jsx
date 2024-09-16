import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ endTime }) => {
  return (
    <Countdown
      date={new Date(endTime)}
      renderer={({ hours, minutes, seconds }) => (
        <span>{hours}h {minutes}m {seconds}s</span>
      )}
    />
  );
};

export default CountdownTimer;
