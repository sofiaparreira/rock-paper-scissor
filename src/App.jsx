import { useState } from 'react';
import './App.css';
import paperHandImage from './assets/paper-hand-transparent.png';
import rockHandImage from './assets/rock-hand-transparent.png';
import scissorHandImage from './assets/scissor-hand-transparent.png';

function App() {
  const [winner, setWinner] = useState('')
  const [possibleMoves, setPossibleMoves] = useState([
    {
      type: 'paper',
      label: 'Papel',
      wins: 'rock',
      lose: 'scissor'
    },
    {
      type: 'rock',
      label: 'Pedra',
      wins: 'scissor',
      lose: 'paper'
    },
    {
      type: 'scissor',
      label: 'Tesoura',
      wins: 'paper',
      lose: 'rock'
    }
  ]);

  const makeMove = (playerMove) => {

    const minimumMoveNumber = 1;
    const maximumMoveNumber = 3;
    const randomMove = Math.floor(Math.random() * (maximumMoveNumber - minimumMoveNumber + 1)) + minimumMoveNumber;

    let moveType = '';
    switch(randomMove) {
      case 1: 
        moveType = 'paper';
        break;
      case 2: 
        moveType = 'rock';
        break;
      case 3: 
        moveType = 'scissor';
        break;
      default:
        moveType = '';
    }

    console.log(moveType);
  };

  if(moveType = playerMove) {
    setWinner('Empate')
    return
  } 

  return (
    <div className='w-screen h-screen bg-slate-800 mx-0 text-white pt-16'>
      <div className='border border-gray-100 rounded-lg py-2 px-4 mx-64 flex justify-between items-center'>
        <h1 className='text-3xl w-1/3'>ROCK, PAPER OR SCISSOR</h1>
        <div className='rounded-md bg-gray-100 text-black px-6 flex flex-col justify-center text-center py-4'>
          <span className='text-gray-600'>Placar</span>
          <span className='text-4xl font-medium'>2</span>
        </div>
      </div>

      <div>
        <button onClick={() => makeMove('paper')}>
          <img src={paperHandImage} alt="Paper" />
        </button>

        <button onClick={() => makeMove('rock')}>
          <img src={rockHandImage} alt="Rock" />
        </button>

        <button onClick={() => makeMove('scissor')}>
          <img src={scissorHandImage} alt="Scissor" />
        </button>
      </div>
    </div>
  );
}

export default App;
