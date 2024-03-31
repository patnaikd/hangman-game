import React from 'react';
import Game from './components/Game';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <main>
        <Game />
      </main>
      <footer>
        <p>&copy; 2023 Hangman Game. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
