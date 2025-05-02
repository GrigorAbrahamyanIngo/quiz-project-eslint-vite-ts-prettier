import React from 'react';
import './hangmanDrawing.css';

const HEAD = <div className="head"> </div>;

const BODY = <div className="body" />;

const RIGHT_ARM = <div className="rigth-arm" />;

const LEFT_ARM = <div className="left-arm" />;

const RIGHT_LEG = <div className="right-leg" />;
const LEFT_LEG = <div className="left-leg" />;

type HangmanWordProps = {
  numberOfGuess: number;
};

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmanDrawing: React.FC<HangmanWordProps> = ({
  numberOfGuess,
}: HangmanWordProps) => {
  return (
    <div className="hangmanDrawing-wrapper">
      {BODY_PARTS.slice(0, numberOfGuess)}

      <div className="hangmanDrawing-top-bottom" />
      <div className="hangmanDrawing-top" />
      <div className="hangmanDrawing-midle" />
      <div className="hangmanDrawing-bottom" />
    </div>
  );
};

export default HangmanDrawing;
