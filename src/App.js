import React, { useState, useEffect } from 'react';
import SquareComponent from "./SquareComponent";

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, updateGameState] = useState(clearState)
  const [isXChance, updateIsXChance] = useState(false)

  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance)
    updateGameState(strings)
  }

  const clearGame = () => {
    updateGameState(clearState)
  }

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      // clearGame();
      alert(` ${winner} won the Game !`)
    }
  }, [gameState])

  const checkWinner = (winner) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }
  var winner = checkWinner(gameState);
  let status;
  if (winner) {
    // alert(` ${winner} won the Game !`)
    status = `'Winner is : ${isXChance ? '0' : 'X'} `;
  } else {
    status = ` Next Player : ${isXChance ? 'X' : '0'} `;
  }

  return (
    <>
      <div class="grid-container">
        <div class="status">
          <div className="status">{status}</div>
        </div>
        <div class=" status clear-btn">
          <button onClick={clearGame} className="clear-button">Clear Game</button>
        </div>
      </div>
      <div className="app-header">
        <br /><br />
        <div className="row jc-center">
          <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(0)} state={gameState[0]} />
          <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(1)} state={gameState[1]} />
          <SquareComponent onClick={() => onUserClicked(2)} state={gameState[2]} />
        </div>
        <div className="row jc-center">
          <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(3)} state={gameState[3]} />
          <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(4)} state={gameState[4]} />
          <SquareComponent onClick={() => onUserClicked(5)} state={gameState[5]} />
        </div>
        <div className="row jc-center">
          <SquareComponent className="b-right" onClick={() => onUserClicked(6)} state={gameState[6]} />
          <SquareComponent className="b-right" onClick={() => onUserClicked(7)} state={gameState[7]} />
          <SquareComponent onClick={() => onUserClicked(8)} state={gameState[8]} />
        </div>
      </div>
      <div className="status history-details">

      </div>
    </>
  );

}



export default App;