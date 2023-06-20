import React, { useState, useEffect } from 'react';
import '../styles/Timer.css'

function Timer(props) {
    
  const {isGameOver, setTotalTime} = props;
  const [seconds, setSeconds] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && !isGameOver) {
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
    } else if (isGameOver) {
        setEndTime(Date.now()); // Set end time when game is over
        clearInterval(interval);
    } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, isGameOver]);

  useEffect(() => {
    if (isGameOver) {
        const totalTime = Math.floor((endTime - startTime) / 1000);
        setTotalTime(totalTime);
    }
}, [isGameOver, endTime, startTime]);

  return (
    <div className='timer'>
      <p>Elapsed time: {seconds} seconds</p>
    </div>
  );
}

export default Timer;