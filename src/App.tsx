import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { GameStatus } from './components/GameStatus/GameStatus';
import GuessWord from './components/GuessWord/GuessWord';
import { HangmanDraw } from './components/HangmanDraw/HangmanDraw';
import { Keyboard } from './components/Keyboard/Keyboard';
import { Modal } from './components/Modal/Modal';
import { getAllModal } from './features/modalSlice';

function App() {
  const settings = useSelector(getAllModal);
  return (
    <div className="App">
      <Modal settings={settings} />
      <GameStatus />
      <HangmanDraw />
      <GuessWord />
      <Keyboard />
    </div>
  );
}

export default App;
