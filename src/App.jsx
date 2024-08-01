  import { useState } from 'react';
  import './App.css';
  import paperHandImage from './assets/paper-hand-transparent.png';
  import rockHandImage from './assets/rock-hand-transparent.png';
  import scissorHandImage from './assets/scissor-hand-transparent.png';

  function App() {
    const [winner, setWinner] = useState('');
    const [machineMove, setMachineMove] = useState('');
    const [resultMessage, setResultMessage] = useState('Escolha para começar');
    const [pontosJogador, setPontosJogador] = useState(0)
    const [pontosMaquina, setPontosMaquina] = useState(0)
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
        setPontosJogador(pontosJogador + 1)
      } else {
        setWinner('Computador');
        setPontosMaquina(pontosMaquina + 1)
        setResultMessage('Você perdeu');
      }
    };

    const reinciarGame = () => {

      setResultMessage('Começar')
      setPontosJogador(0)
      setPontosMaquina(0)
    }


    const getMachineMoveImage = () => {
      const move = possibleMoves.find(move => move.type === machineMove);
      return move ? move.image : null;
    };

    return (
      <div className='w-screen h-screen bg-slate-800 mx-0 text-white pt-16'>
        <div className='border border-gray-100 rounded-lg py-2 px-4 mx-52 flex justify-between items-center'>
          <h1 className='text-3xl w-1/3'>ROCK, PAPER OR SCISSOR</h1>
          <div className='flex gap-8'>
            <div className='rounded-md bg-gray-100 text-black px-6 flex flex-col justify-center text-center py-4'>
              <span className='text-gray-600'>Máquina</span>
              <span className='text-4xl font-medium'>{pontosMaquina}</span>
            </div>
            <div className='rounded-md bg-gray-100 text-black px-6 flex flex-col justify-center text-center py-4'>
              <span className='text-gray-600'>Jogador</span>
              <span className='text-4xl font-medium'>{pontosJogador}</span>
            </div>
          </div>
        </div>

        <div className='flex justify-between mx-52 items-center'>
          <div className='flex flex-col gap-4 justify-center mt-8 items-center'>
            <button className='mx-4 w-32 h-32 border px-2  border-gray-500 rounded-lg' onClick={() => makeMove('paper')}>
              <img src={paperHandImage} alt="Paper" />
            </button>
            <button className='mx-4 w-32 h-32 border px-2  border-gray-500 rounded-lg' onClick={() => makeMove('rock')}>
              <img src={rockHandImage} alt="Rock" />
            </button>
            <button className='mx-4 w-32 h-32 border px-2  border-gray-500 rounded-lg' onClick={() => makeMove('scissor')}>
              <img src={scissorHandImage} alt="Scissor" />
            </button>
          </div>

          {resultMessage && (
            <div>
              <div className='text-center mt-8  px-16 rounded-lg py-2'>
                <h2 className='text-3xl text-center uppercase font-base'>{resultMessage}!</h2>
              </div>

              <div className='text-center mt-8 bg-gray-50 px-16 rounded-lg py-2'>
                <h2 className='text-lg text-red-600 uppercase font-medium cursor-pointer' onClick={reinciarGame}>Reiniciar Jogo</h2>
              </div>
            </div>
          )}


          {machineMove && (
            <div className='text-center mt-8'>
              <h2 className='text-xl mb-4 text-center'>Máquina: </h2>
              <img className='w-32' src={getMachineMoveImage()} alt={machineMove} className='mx-auto' />
            </div>
          )}
        </div>


      </div>
    );
  }

  export default App;
