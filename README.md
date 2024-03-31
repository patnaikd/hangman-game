# Hangman Game

This is a classic Hangman game implementation using React. The game allows players to guess a word by selecting letters one at a time. The objective is to guess the word correctly before the hangman figure is fully drawn.

## Live Demo

You can play the Hangman game live at: [https://hangman-game-0.web.app/](https://hangman-game-0.web.app/)

## Features

- Random word selection from a predefined list of words
- Interactive user interface for guessing letters
- Visual representation of the hangman figure based on incorrect guesses
- Display of the guessed word with blanks for unguessed letters
- Tracking of used letters
- Game status messages (win/lose)
- Play again functionality

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Firebase (for hosting)

## Getting Started

To run the Hangman game locally on your machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/hangman-game.git
   ```

2. Navigate to the project directory:
   ```
   cd hangman-game
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000` to play the game.

## Game Rules

- The game selects a random word from a predefined list of words.
- The player guesses letters one at a time to uncover the word.
- For each incorrect guess, a part of the hangman figure is drawn.
- The game ends when either the word is guessed correctly (player wins) or the hangman figure is fully drawn (player loses).
- The player can restart the game by clicking the "Play Again" button or pressing the space bar.

## Project Structure

The project structure is organized as follows:

```
hangman-game/
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── components/
  │   │   ├── Game.js
  │   │   ├── Hangman.js
  │   │   ├── LetterInput.js
  │   │   ├── GameStatus.js
  │   │   └── WordBlanks.js
  │   ├── App.js
  │   ├── App.css
  │   ├── index.js
  │   └── wordList.js
  ├── .gitignore
  ├── package.json
  └── README.md
```

- The `public/` directory contains the public assets and the `index.html` file.
- The `src/` directory contains the main source code of the application.
- The `components/` directory contains the individual React components used in the game.
- The `App.js` file is the main component that renders the game.
- The `App.css` file contains the styles for the game.
- The `index.js` file is the entry point of the application.
- The `wordList.js` file contains the list of words used in the game.

## Deployment

The Hangman game is hosted on Firebase. To deploy the game to your own Firebase project, follow these steps:

1. Create a new Firebase project in the Firebase Console.
2. Install the Firebase CLI by running `npm install -g firebase-tools`.
3. Log in to Firebase using `firebase login`.
4. Initialize your project for Firebase hosting using `firebase init hosting`.
5. Build your React app using `npm run build`.
6. Deploy your app to Firebase hosting using `firebase deploy --only hosting`.

For detailed instructions, please refer to the [Firebase Hosting documentation](https://firebase.google.com/docs/hosting).

## Contributing

Contributions to the Hangman game project are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

Enjoy playing Hangman!