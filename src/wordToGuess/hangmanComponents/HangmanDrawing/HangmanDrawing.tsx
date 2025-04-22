import './hangmanDrawing.css';

const HEAD = (
  <div className="head"> </div>
)

const BODY = (
  <div className="body"></div>
)

const RIGHT_ARM = (
  <div className="rigth-arm"></div>
)

const LEFT_ARM = (
  <div className="left-arm"></div>
)

const RIGHT_LEG = (
  <div className="right-leg"></div>
)
const LEFT_LEG = (
  <div className="left-leg"></div>
)

type HangmanWordProps = {
  numberOfGuess: number
}

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

const HangmanDrawing: React.FC  = ({numberOfGuess}: HangmanWordProps) => {
  return (

    <div className="hangmanDrawing-wrapper">
      {BODY_PARTS.slice(0, numberOfGuess)}

      <div className="hangmanDrawing-top-bottom"></div>
      <div className="hangmanDrawing-top"></div>
      <div className="hangmanDrawing-midle"></div>
      <div className="hangmanDrawing-bottom">
      </div>
    </div>
  )
}

export default HangmanDrawing;