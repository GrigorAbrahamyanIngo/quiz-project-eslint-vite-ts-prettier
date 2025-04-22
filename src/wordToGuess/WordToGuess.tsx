import {useCallback, useEffect, useState} from "react";
import {words} from "../json/wordList.json";
import './wordToGuess.css'
import HangmanDrawing from "./hangmanComponents/HangmanDrawing/HangmanDrawing.tsx";
import HangmanWord from "./hangmanComponents/HangmanWord/HangmanWord.tsx";
import KeyBoard from "./hangmanComponents/KeyBoard/KeyBoard.tsx";


const  WordToGuess: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuesdLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letters => !wordToGuess.includes(letters)
  )
  console.log(wordToGuess)

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuesdLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters, isLoser, isWinner])

  // console.log(guessedLetters)


  useEffect(() => {
    const handler = (e: KeyboardEvent)=> {
      const { key } = e;
        if(!key.match(/^[a-z]$/)) return
          e.preventDefault();
          addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    }
  },[guessedLetters])

  const isLoser  = incorrectLetters.length >= 6
  const isWinner   = wordToGuess.split("").every(letter =>  guessedLetters.includes(letter));



  return (
    <div className="wordGuess-wrapper">
      <div className="wordGuess-text">
        {isWinner && "Winner! - Refresh to try again:"}
        {isLoser && "Nice Try - Refresh to try again:"}

      </div>
      <HangmanDrawing  numberOfGuess={incorrectLetters.length}/>
      <HangmanWord  guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
      <KeyBoard
        disabled = {isWinner || isLoser}
        activeLetter = {guessedLetters.filter(letter => wordToGuess.includes(letter)  )}
        inactiveLetters = {incorrectLetters}
        addGuessedLetter = {addGuessedLetter}
      />
      </div>
    </div>
  )
}

export default WordToGuess;
