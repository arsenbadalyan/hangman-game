import { ReactElement } from "react";

type THangmanParts = {
    [key: string]: ReactElement
}

let keyCounter = 0;

const HANGMAN_PARTS: THangmanParts = {
    VERTICAL_UP_STICK: ( <div key={keyCounter++} className="HangmanDraw_Top" /> ),
    HORIZONTAL_RIGHT_STICK: ( <div key={keyCounter++} className="HangmanDraw_Right" /> ),
    VERTICAL_DOWN_STICK: ( <div key={keyCounter++} className="HangmanDraw_BottomStick" /> ),
    HEAD: ( <div key={keyCounter++} className="HangmanDraw_Head" /> ),
    BODY: ( <div key={keyCounter++} className="HangmanDraw_Body" /> ),
    RIGHT_HAND: ( <div key={keyCounter++} className="HangmanDraw_RHand" /> ),
    LEFT_HAND: ( <div key={keyCounter++} className="HangmanDraw_LHand" /> ),
    LEFT_LEG: ( <div key={keyCounter++} className="HangmanDraw_LLeg" /> ),
    RIGHT_LEG: ( <div key={keyCounter++} className="HangmanDraw_RLeg" /> )
};

export default Object.values(HANGMAN_PARTS);