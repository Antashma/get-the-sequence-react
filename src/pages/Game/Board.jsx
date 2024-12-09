import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Sequence from './Sequence';
import { scrambleArr, createSequence } from '../helpers';


const initialSequence = createSequence();
const intitialBoard = scrambleArr([1, 2, 3, 4, 5, 6, 7, 8, 9])


function Game() {

  const [state, setState] = useState({
    currSequence: initialSequence,
    currSequenceIndex: 0,
    playerSequence: [],
    wrongCount: 0
  })

  function makeNumButtons() {  
    return intitialBoard.map((el, i) => {
      return (
        <button 
          key={i}
          id={`btn${el}`}
          onClick={checkInput}
          className='num-btn'
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
    } else {
      console.log(`else block HIT with input ${input}`)
      console.log(currSequence[currSequenceIndex])
    }
  }
  

  return (
    <section id="game-container">
      <div id="game-stats">
        <Timer />
        <p>wrong count: <span id="wrong-count"></span></p>
        <p><a href="./">Reset Game</a></p>
      </div>
      <Sequence currSequence={state.currSequence} />
      <div id="button-container">
        {makeNumButtons()}
      </div>
    </section>
  );
};

export default Game;