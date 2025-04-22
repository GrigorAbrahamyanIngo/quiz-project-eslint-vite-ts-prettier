import css from './KeyBoard.module.css';

const KEYS = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
]
type  KeyboardProps = {
  disabled: boolean,
  activeLetter: string[],
  inactiveLetters: string[],
  addGuessedLetter:  (letter: string) => void
}

const KeyBoard: React.FC  = ({activeLetter, inactiveLetters, addGuessedLetter,disabled = false}: KeyboardProps) => {

  return (
    <div className={css.KeyBoard}>
      {KEYS.map((key, index) => {
        const isActive = activeLetter.includes(key)
        const isInactive = inactiveLetters.includes(key)

        return (
          <button
            onClick = {() => addGuessedLetter(key)}
            key={key}
            className={`${css.btn} ${isActive ? css.active : ""} ${isInactive ? css.inactive : ""}  `}
            disabled={isInactive || isActive || disabled}
          > {key}</button>
        )
      })  }
    </div>
  )
}

export default KeyBoard;