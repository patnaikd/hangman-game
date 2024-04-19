import React, { useState, useEffect } from 'react';
import Hangman from './Hangman';
import WordBlanks from './WordBlanks';
import LetterInput from './LetterInput';
import GameStatus from './GameStatus';
import { selectRandomWord } from '../wordList';

const Game = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing');

  useEffect(() => {
    // Select a random word when the component mounts
    const word = selectRandomWord();
    setSelectedWord(word);
  }, []);

  const handleGuess = (letter) => {
    if (gameStatus !== 'playing') return;

    if (guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!selectedWord.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  useEffect(() => {
    // Check if the game is won or lost after each guess
    if (incorrectGuesses >= 6) {
      setGameStatus('lost');
    } else if (selectedWord && selectedWord.split('').every((letter) => guessedLetters.includes(letter))) {
      setGameStatus('won');
    }
  }, [guessedLetters, incorrectGuesses, selectedWord]);

  const resetGame = () => {
    const word = selectRandomWord();
    setSelectedWord(word);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus('playing');
  };

  return (
    <div>
      <h1>Hangman</h1>
      <Hangman incorrectGuesses={incorrectGuesses} />
      <WordBlanks
        selectedWord={selectedWord}
        guessedLetters={guessedLetters}
        gameStatus={gameStatus}
      />
      <LetterInput
        onGuess={handleGuess}
        selectedWord={selectedWord}
        gameStatus={gameStatus}
      />
      <GameStatus gameStatus={gameStatus} resetGame={resetGame} />
    </div>
  );
};

export default Game;
