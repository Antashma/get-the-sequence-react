import { useEffect, useState } from "react";

function Timer({on, setOn}){
    const [timeLeft, setTimeLeft] = useState(5)

    useEffect(() => {
      function gameTimer() {
        
        if (timeLeft > 0 && on){
          setTimeLeft(timeLeft-1);
        }
        
        if (timeLeft === 0 && on) {
          clearInterval(timer);
          setOn(false)
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
