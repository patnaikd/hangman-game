import React from 'react';

const WordBlanks = ({ selectedWord, guessedLetters }) => {
  const renderBlanks = () => {
    return selectedWord.split('').map((letter, index) => {
      if (guessedLetters.includes(letter.toLowerCase())) {
        return (
          <span key={index} className="letter">
            {letter}
          </span>
        );
      } else {
        return <span key={index} className="blank">_</span>;
      }
    });
  };

  return <div className="word-blanks">{renderBlanks()}</div>;
};

export default WordBlanks;
