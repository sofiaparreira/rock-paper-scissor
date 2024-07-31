import { useState } from 'react';
import './App.css';
import paperHandImage from './assets/paper-hand-transparent.png';
import rockHandImage from './assets/rock-hand-transparent.png';
import scissorHandImage from './assets/scissor-hand-transparent.png';

function App() {
  const [winner, setWinner] = useState('');
  const [machineMove, setMachineMove] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [possibleMoves] = useState([
    {
      type: 'paper',
      label: 'Papel',
      wins: 'rock',
      lose: 'scissor',
      image: paperHandImage
    },
    {
      type: 'rock',
      label: 'Pedra',
      wins: 'scissor',
      lose: 'paper',
      image: rockHandImage
    },
    {
      type: 'scissor',
      label: 'Tesoura',
      wins: 'paper',
      lose: 'rock',
      image: scissorHandImage
    }
  ]);

  const makeMove = (playerMove) => {
    const randomMoveIndex = Math.floor(Math.random() * possibleMoves.length);
    const machineMoveType = possibleMoves[randomMoveIndex].type;
    setMachineMove(machineMoveType);

    if (machineMoveType === playerMove) {
      setWinner('Empate');
      setResultMessage('Empate');
      return;
    }

    const playerMoveValidation = possibleMoves.find(
      currentMove => currentMove.type === playerMove
    );

    const isPlayerTheWinner = playerMoveValidation.wins === machineMoveType;

    if (isPlayerTheWinner) {
      setWinner('Jogador');
      setResultMessage('Você ganhou');
    } else {
      setWinner('Computador');
      setResultMessage('Você perdeu');
    }
  };

  const getMachineMoveImage = () => {
    const move = possibleMoves.find(move => move.type === machineMove);
    return move ? move.image : null;
  };

  return (
    <div className='w-screen h-screen bg-slate-800 mx-0 text-white pt-16'>
      <div className='border border-gray-100 rounded-lg py-2 px-4 mx-64 flex justify-between items-center'>
        <h1 className='text-3xl w-1/3'>ROCK, PAPER OR SCISSOR</h1>
        <div className='rounded-md bg-gray-100 text-black px-6 flex flex-col justify-center text-center py-4'>
          <span className='text-gray-600'>Placar</span>
          <span className='text-4xl font-medium'>2</span>
        </div>
      </div>

      <div className='flex justify-center mt-8'>
        <button className='mx-4' onClick={() => makeMove('paper')}>
          <img src={paperHandImage} alt="Paper" />
        </button>

        <button className='mx-4' onClick={() => makeMove('rock')}>
          <img src={rockHandImage} alt="Rock" />
        </button>

        <button className='mx-4' onClick={() => makeMove('scissor')}>
          <img src={scissorHandImage} alt="Scissor" />
        </button>
      </div>

      {machineMove && (
        <div className='text-center mt-8'>
          <h2 className='text-2xl'>A máquina escolheu:</h2>
          <img src={getMachineMoveImage()} alt={machineMove} className='mx-auto' />
        </div>
      )}

      {resultMessage && (
        <div className='text-center mt-8'>
          <h2 className='text-2xl'>{resultMessage}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
