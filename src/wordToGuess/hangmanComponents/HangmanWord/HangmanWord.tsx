import './HangmanWord.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

const HangmanWord: React.FC = ({
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) => {
  return (
    <div className="HangmanWord-wrapper">
      {wordToGuess.split('').map((letter) => (
        <span className="letter-text" key={letter}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? 'visible'
                : 'hidden',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
