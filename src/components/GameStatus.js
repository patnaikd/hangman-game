import React, { useEffect, useRef } from 'react';

const GameStatus = ({ gameStatus, resetGame }) => {
  const playAgainButtonRef = useRef(null);

  useEffect(() => {
    if (gameStatus !== 'playing') {
      playAgainButtonRef.current.focus();
    }
  }, [gameStatus]);

  const handleKeyPress = (event) => {
    if (event.key === ' ' && gameStatus !== 'playing') {
      resetGame();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameStatus, resetGame]);

  const renderMessage = () => {
    switch (gameStatus) {
      case 'won':
        return 'Congratulations! You won the game!';
      case 'lost':
        return 'Oops! You lost the game. Better luck next time!';
      default:
        return 'Try to guess the word by selecting letters.';
    }
  };

  return (
    <div className="game-status">
      <p>{renderMessage()}</p>
      {gameStatus !== 'playing' && (
        <button ref={playAgainButtonRef} onClick={resetGame}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default GameStatus;
