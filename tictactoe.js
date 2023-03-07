/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const playerFactory = (name, symbol) => {
  const wins = 0;
  const losses = 0;
  const draws = 0;
  const currentMove = '';
  return {
    name, symbol, wins, losses, draws, currentMove,
  };
};

// Generated players for testing purposes
const john = playerFactory('John', 'X');
const adam = playerFactory('Adam', 'O');

const gameBoardModule = (() => {
  let board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  const winningCondition = () => {
    if (
      (board[0] === 'X' && board[1] === 'X' && board[2] === 'X')
      || (board[3] === 'X' && board[4] === 'X' && board[5] === 'X')
      || (board[6] === 'X' && board[7] === 'X' && board[8] === 'X')
      || (board[0] === 'X' && board[3] === 'X' && board[6] === 'X')
      || (board[1] === 'X' && board[4] === 'X' && board[7] === 'X')
      || (board[2] === 'X' && board[5] === 'X' && board[8] === 'X')
      || (board[0] === 'X' && board[4] === 'X' && board[8] === 'X')
      || (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')
    ) {
      alert('X wins the game');
      board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    } else if (
      (board[0] === 'O' && board[1] === 'O' && board[2] === 'O')
      || (board[3] === 'O' && board[4] === 'O' && board[5] === 'O')
      || (board[6] === 'O' && board[7] === 'O' && board[8] === 'O')
      || (board[0] === 'O' && board[3] === 'O' && board[6] === 'O')
      || (board[1] === 'O' && board[4] === 'O' && board[7] === 'O')
      || (board[2] === 'O' && board[5] === 'O' && board[8] === 'O')
      || (board[0] === 'O' && board[4] === 'O' && board[8] === 'O')
      || (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')
    ) {
      alert('O wins the game');
      board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    }
  };

  const playRound = (player1, player2) => {
    const firstPlayer = player1;
    const secondPlayer = player2;
    const turnCount = 0;
    console.log('Tic Tac Toe game started');

    for (let index = 0; index < 5; index += 1) {
      firstPlayer.currentMove = prompt(`${firstPlayer.name} where would you like to place '${firstPlayer.symbol}'?\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);
      if (board[firstPlayer.currentMove] === 'X' || board[firstPlayer.currentMove] === 'O') {
        alert('Invalid move, that spot is taken, choose another spot.');
      } else if (board[firstPlayer.currentMove] !== 'X' || board[firstPlayer.currentMove] !== 'O') {
        board.splice(firstPlayer.currentMove, 1, firstPlayer.symbol);
        console.log(board);
        if (
          (board[0] === 'X' && board[1] === 'X' && board[2] === 'X')
          || (board[3] === 'X' && board[4] === 'X' && board[5] === 'X')
          || (board[6] === 'X' && board[7] === 'X' && board[8] === 'X')
          || (board[0] === 'X' && board[3] === 'X' && board[6] === 'X')
          || (board[1] === 'X' && board[4] === 'X' && board[7] === 'X')
          || (board[2] === 'X' && board[5] === 'X' && board[8] === 'X')
          || (board[0] === 'X' && board[4] === 'X' && board[8] === 'X')
          || (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')
        ) {
          alert(`${firstPlayer.name} wins the game`);
          board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
          break;
      }
    }

      secondPlayer.currentMove = prompt(`${secondPlayer.name} where would you like to place '${secondPlayer.symbol}'?\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);
      board.splice(secondPlayer.currentMove, 1, secondPlayer.symbol);
      console.log(board);
      if (
        (board[0] === 'O' && board[1] === 'O' && board[2] === 'O')
        || (board[3] === 'O' && board[4] === 'O' && board[5] === 'O')
        || (board[6] === 'O' && board[7] === 'O' && board[8] === 'O')
        || (board[0] === 'O' && board[3] === 'O' && board[6] === 'O')
        || (board[1] === 'O' && board[4] === 'O' && board[7] === 'O')
        || (board[2] === 'O' && board[5] === 'O' && board[8] === 'O')
        || (board[0] === 'O' && board[4] === 'O' && board[8] === 'O')
        || (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')
      ) {
        alert(`${secondPlayer.name} wins the game`);
        board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
        break;
      }
    }
  };

  return {
    board, winningCondition, playRound,
  };
})();

