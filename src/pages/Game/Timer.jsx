import React, { useEffect, useState } from "react";

function Timer(){
    const [timeLeft, setTimeLeft] = useState(5)

    useEffect(() => {
      function gameTimer() {
        if (timeLeft === 0) {
          clearInterval(timer);
          //checkLoss();
        } else {
          setTimeLeft(timeLeft-1);
        }
  
      }
      const timer = setInterval(gameTimer, 1000)
  
      return () => clearInterval(timer)
    }, [timeLeft])

    return (
        <p>
          time left: <span id='timerDisplay'>{timeLeft}</span>
        </p>
    )
}

export default Timer;
