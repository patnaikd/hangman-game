import React, { useState, useEffect } from 'react';

const LetterInput = ({ onGuess, selectedWord, gameStatus }) => {
  const disabled = gameStatus !== 'playing';

  const [letter, setLetter] = useState('');
  const [usedLetters, setUsedLetters] = useState([]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const typedLetter = event.key.toLowerCase();
      if (/^[a-z]$/.test(typedLetter)) {
        onGuess(typedLetter);
        setLetter('');
        if (!selectedWord.includes(typedLetter) && !usedLetters.includes(typedLetter)) {
          setUsedLetters([...usedLetters, typedLetter]);
        }
      }
    };

    if (!disabled) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onGuess, disabled, selectedWord, usedLetters]);

  useEffect(() => {
    if (gameStatus === 'playing') {
      setUsedLetters([]);
    }
  }, [gameStatus]);  

  return (
    <div className="letter-input">
      <div className="input-container">
        <label htmlFor="letter">Type a letter:</label>
        <input
          type="text"
          id="letter"
          maxLength="1"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          disabled={disabled}
          autoFocus
        />
      </div>
      <div className="used-letters-container">
        <p>Used letters:</p>
        <ul className="used-letters">
          {usedLetters.map((usedLetter, index) => (
            <li key={index}>{usedLetter}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LetterInput;