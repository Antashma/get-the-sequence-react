import { useState, useEffect } from 'react';
import Timer from './Timer';
import Sequence from './Sequence';
import Message from "./Message";
import { scrambleArr, createSequence } from '../helpers';


const initialSequence = createSequence();
const intitialBoard = scrambleArr([1, 2, 3, 4, 5, 6, 7, 8, 9])


function Game() {

  const [state, setState] = useState({
    currSequence: initialSequence,
    currSequenceIndex: 0,
    playerSequence: [],
    wrongCount: 0,
    isGameOver: false,
    message: null
  })

  const [timerIsRunning, setTimeIsRunning] = useState(true);

  function makeNumButtons() {  
    return intitialBoard.map((el, i) => {
      return (
        <button 
          key={i}
          id={`btn${el}`}
          onClick={checkInput}
          className='num-btn'
          disabled={state.isGameOver}
        >
            {el}
        </button>
      )
    })
  }

  function checkInput(e){
    const { currSequence, currSequenceIndex } = state;
    const input = e.target.textContent
    if (input == currSequence[currSequenceIndex]) {
      setState({
        ...state,
        currSequenceIndex: state.currSequenceIndex + 1, 
        playerSequence: [...state.playerSequence, input]
      });
      e.target.disabled = true;
    } else {
      setState({
        ...state,
        wrongCount: state.wrongCount + 1
      })
    }
  }

  function checkEndgame(){
    if (state.wrongCount > 2 && timerIsRunning) {
      console.log("3 Xs! game over!")
      setTimeIsRunning(false);
      setState({
        ...state,
        isGameOver: true,
        message: "3 Xs! game over!"
      })
    }

    if (!timerIsRunning && state.wrongCount < 3) {
      console.log("time up! game over!")
      setState({
        ...state,
        isGameOver: true,
        message: "time up! game over!"
      })
    }
  }
  
  useEffect(() => {
    checkEndgame();
  }, [timerIsRunning, state.wrongCount])

  return (
    <section id="game-container">
      <div id="game-stats">
        <Timer 
          on={timerIsRunning} 
          setOn={setTimeIsRunning}
        />
        <p>wrong count: <span id="wrong-count">{state.wrongCount}</span></p>
        <p><a href="./">Reset Game</a></p>
      </div>
      <Sequence currSequence={state.currSequence} />
      {state.message && <Message message={state.message} />}
      <div id="button-container">
        {makeNumButtons()}
      </div>
    </section>
  );
};

export default Game;