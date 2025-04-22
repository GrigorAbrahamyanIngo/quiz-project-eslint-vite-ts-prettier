import './HangmanWord.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string
}


const HangmanWord: React.FC  = ({guessedLetters, wordToGuess}: HangmanWordProps) => {


  return (
    <div className="HangmanWord-wrapper">
      {wordToGuess.split("").map((letter, index) =>(
        <span className="letter-text" key={index}>
          <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}} key={index}>{letter}</span>
          </span>
      ))}
    </div>
  )
}

export default HangmanWord;