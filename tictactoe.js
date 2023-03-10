/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
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
const aracely = playerFactory('Aracely', 'X');
const conrado = playerFactory('Conrado', 'O');

const displayController = (() => {
  const square0 = document.querySelector('.square-0');
  const square1 = document.querySelector('.square-1');
  const square2 = document.querySelector('.square-2');
  const square3 = document.querySelector('.square-3');
  const square4 = document.querySelector('.square-4');
  const square5 = document.querySelector('.square-5');
  const square6 = document.querySelector('.square-6');
  const square7 = document.querySelector('.square-7');
  const square8 = document.querySelector('.square-8');
  const squareArray = [square0, square1, square2, square3, square4, square5, square6, square7, square8];

  // squareArray.forEach((square) => {
  //   square.addEventListener('click', () => {
  //     gameBoardModule.board.forEach(() => {
  //       if (gameBoardModule.board[squareArray.indexOf(square)] === 'X' || gameBoardModule.board[squareArray.indexOf(square)] === 'O') {
  //         square.textContent = gameBoardModule.board[squareArray.indexOf(square)];
  //       }
  //     });
  //   });
  // });

  const displayBoard = () => {

  };

  return {
    displayBoard, squareArray,
  };
})();

const gameBoardModule = (() => {
  let board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  const playRound = (player1, player2) => {
    const firstPlayer = player1;
    const secondPlayer = player2;
    let turnCount = 0;

    displayController.squareArray.forEach((square) => {
      square.addEventListener('click', () => {
        board[displayController.squareArray.indexOf(square)] = firstPlayer.symbol;
        square.textContent = board[displayController.squareArray.indexOf(square)];
      });
    });

    for (let index = 0; index < 5; index += 1) {
      // firstPlayer.currentMove = prompt(`${firstPlayer.name} where would you like to place '${firstPlayer.symbol}'?\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);

      while (
        Number(firstPlayer.currentMove) > 9
        || Number(firstPlayer.currentMove) < 0
      ) {
        alert('Invalid number, choose a valid number.');
        firstPlayer.currentMove = prompt(`${firstPlayer.name} where would you like to place '${firstPlayer.symbol}'?\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);
      }

      while (
        board[firstPlayer.currentMove] === 'X'
        || board[firstPlayer.currentMove] === 'O'
      ) {
        alert('Invalid move, that spot is taken, choose another spot.');
        firstPlayer.currentMove = prompt(`${firstPlayer.name} where would you like to place '${firstPlayer.symbol}'?\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);
      }

      if (board[firstPlayer.currentMove] !== 'X' || board[firstPlayer.currentMove] !== 'O') {
        board.splice(firstPlayer.currentMove, 1, firstPlayer.symbol);
        console.log(board);
        displayController.displayBoard();
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
      turnCount += 1;
      if (turnCount === 9) {
        alert('The game is tied');
        board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
        break;
      }

      secondPlayer.currentMove = prompt(`${secondPlayer.name} where would you like to place '${secondPlayer.symbol}'?\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);

      while (
        Number(secondPlayer.currentMove) > 9
        || Number(secondPlayer.currentMove) < 0
      ) {
        alert('Invalid number, choose a valid number.');
        secondPlayer.currentMove = prompt(`${secondPlayer.name} where would you like to place '${secondPlayer.symbol}'?\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);
      }

      while (
        board[secondPlayer.currentMove] === 'X'
        || board[secondPlayer.currentMove] === 'O'
      ) {
        alert('Invalid move, that spot is taken, choose another spot.');
        secondPlayer.currentMove = prompt(`${secondPlayer.name} where would you like to place '${secondPlayer.symbol}'?\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);
      }

      if (board[secondPlayer.currentMove] !== 'X' || board[secondPlayer.currentMove] !== 'O') {
        board.splice(secondPlayer.currentMove, 1, secondPlayer.symbol);
        console.log(board);
        displayController.displayBoard();
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
          alert(`${secondPlayer.name} wins the game`);
          board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
          break;
        }
      }
      turnCount += 1;
      if (turnCount === 9) {
        alert('The game is tied');
        board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
        break;
      }
    }
  };

  return {
    board, playRound,
  };
})();
