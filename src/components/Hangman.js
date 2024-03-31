import React from 'react';

const Hangman = ({ incorrectGuesses }) => {
  const getParts = () => {
    const parts = [
      <circle key="head" cx="50" cy="30" r="10" fill="none" stroke="black" />,
      <line key="body" x1="50" y1="40" x2="50" y2="80" stroke="black" />,
      <line key="leftArm" x1="50" y1="50" x2="30" y2="60" stroke="black" />,
      <line key="rightArm" x1="50" y1="50" x2="70" y2="60" stroke="black" />,
      <line key="leftLeg" x1="50" y1="80" x2="30" y2="100" stroke="black" />,
      <line key="rightLeg" x1="50" y1="80" x2="70" y2="100" stroke="black" />,
    ];

    return parts.slice(0, incorrectGuesses);
  };

  return (
    <svg className="hangman" viewBox="0 0 100 120">
      {/* Gallows */}
      <line x1="10" y1="110" x2="90" y2="110" stroke="black" />
      <line x1="50" y1="110" x2="50" y2="10" stroke="black" />
      <line x1="50" y1="10" x2="20" y2="10" stroke="black" />
      <line x1="20" y1="10" x2="20" y2="20" stroke="black" />

      {/* Hangman Parts */}
      {getParts()}
    </svg>
  );
};

export default Hangman;
