import { useCallback, useEffect, useState } from 'react';
import { words } from '../json/wordList.json';
import css from './wordToGuess.module.css';
import HangmanDrawing from './hangmanComponents/HangmanDrawing/HangmanDrawing.tsx';
import HangmanWord from './hangmanComponents/HangmanWord/HangmanWord.tsx';
import KeyBoard from './hangmanComponents/KeyBoard/KeyBoard.tsx';

const WordToGuess: React.FC = () => {
  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuesdLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letters) => !wordToGuess.includes(letters)
  );

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuesdLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  // console.log(guessedLetters)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { key } = e;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  return (
    <div className={css.wordGuess_wrapper}>
      <div className={css.wordGuess_text}>
        {isWinner && 'Winner! - Refresh to try again:'}
        {isLoser && 'Nice Try - Refresh to try again:'}
      </div>
      <HangmanDrawing numberOfGuess={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <KeyBoard
          disabled={isWinner || isLoser}
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default WordToGuess;
