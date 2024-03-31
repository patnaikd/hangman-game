import React from 'react';

const WordBlanks = ({ selectedWord, guessedLetters, gameStatus }) => {
  const renderBlanks = () => {
    return selectedWord.split('').map((letter, index) => {
      if (guessedLetters.includes(letter.toLowerCase())) {
        return (
          <span key={index} className="letter">
            {letter}
          </span>
        );
      } else {
        return gameStatus === 'lost' ? (
          <span key={index} className="missed-letter">
            {letter}
          </span>
        ) : (
          <span key={index} className="blank">_</span>
        );
      }
    });
  };

  return <div className="word-blanks">{renderBlanks()}</div>;
};

export default WordBlanks;