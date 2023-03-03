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
const john = playerFactory('John', 'x');
const adam = playerFactory('Adam', 'o');

const gameBoardModule = (() => {
  let board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  const winningCondition = () => {
    if (
      (board[0] === 'x' && board[1] === 'x' && board[2] === 'x')
      || (board[3] === 'x' && board[4] === 'x' && board[5] === 'x')
      || (board[6] === 'x' && board[7] === 'x' && board[8] === 'x')
      || (board[0] === 'x' && board[3] === 'x' && board[6] === 'x')
      || (board[1] === 'x' && board[4] === 'x' && board[7] === 'x')
      || (board[2] === 'x' && board[5] === 'x' && board[8] === 'x')
      || (board[0] === 'x' && board[4] === 'x' && board[8] === 'x')
      || (board[2] === 'x' && board[4] === 'x' && board[6] === 'x')
    ) {
      alert('X wins the game');
      board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    } else if (
      (board[0] === 'o' && board[1] === 'o' && board[2] === 'o')
      || (board[3] === 'o' && board[4] === 'o' && board[5] === 'o')
      || (board[6] === 'o' && board[7] === 'o' && board[8] === 'o')
      || (board[0] === 'o' && board[3] === 'o' && board[6] === 'o')
      || (board[1] === 'o' && board[4] === 'o' && board[7] === 'o')
      || (board[2] === 'o' && board[5] === 'o' && board[8] === 'o')
      || (board[0] === 'o' && board[4] === 'o' && board[8] === 'o')
      || (board[2] === 'o' && board[4] === 'o' && board[6] === 'o')
    ) {
      alert('O wins the game');
      board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    }
  };

  const playRound = (player1, player2) => {
    const firstPlayer = player1;
    const secondPlayer = player2;
    console.log('Tic Tac Toe game started');

    for (let index = 0; index < 5; index += 1) {
      firstPlayer.currentMove = prompt(`${firstPlayer.name} where would you like to place '${firstPlayer.symbol}'?\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);
      board.splice(firstPlayer.currentMove, 1, firstPlayer.symbol);
      console.log(board);
      if (
        (board[0] === 'x' && board[1] === 'x' && board[2] === 'x')
        || (board[3] === 'x' && board[4] === 'x' && board[5] === 'x')
        || (board[6] === 'x' && board[7] === 'x' && board[8] === 'x')
        || (board[0] === 'x' && board[3] === 'x' && board[6] === 'x')
        || (board[1] === 'x' && board[4] === 'x' && board[7] === 'x')
        || (board[2] === 'x' && board[5] === 'x' && board[8] === 'x')
        || (board[0] === 'x' && board[4] === 'x' && board[8] === 'x')
        || (board[2] === 'x' && board[4] === 'x' && board[6] === 'x')
      ) {
        alert(`${firstPlayer.name} wins the game`);
        board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
        break;
      }

      secondPlayer.currentMove = prompt(`${secondPlayer.name} where would you like to place '${secondPlayer.symbol}'?\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);
      board.splice(secondPlayer.currentMove, 1, secondPlayer.symbol);
      console.log(board);
      if (
        (board[0] === 'o' && board[1] === 'o' && board[2] === 'o')
        || (board[3] === 'o' && board[4] === 'o' && board[5] === 'o')
        || (board[6] === 'o' && board[7] === 'o' && board[8] === 'o')
        || (board[0] === 'o' && board[3] === 'o' && board[6] === 'o')
        || (board[1] === 'o' && board[4] === 'o' && board[7] === 'o')
        || (board[2] === 'o' && board[5] === 'o' && board[8] === 'o')
        || (board[0] === 'o' && board[4] === 'o' && board[8] === 'o')
        || (board[2] === 'o' && board[4] === 'o' && board[6] === 'o')
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
