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

  const displayBoard = () => {
    squareArray.forEach((square) => {
      if (square.textContent !== 'X' || square.textContent !== 'O') {
        square.textContent = gameBoardModule.board[squareArray.indexOf(square)];
      }
    });
  };

  return {
    squareArray, displayBoard,
  };
})();

const gameBoardModule = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];

  const playRound = (player1, player2) => {
    const firstPlayer = player1;
    const secondPlayer = player2;
    let turnCount = 0;

    const winningCondition = () => {
      let gameWinner = '';
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
        gameWinner = `${firstPlayer.name} wins the game`;
        console.log(gameWinner);
        board = ['', '', '', '', '', '', '', '', ''];
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
        gameWinner = `${secondPlayer.name} wins the game`;
        console.log(gameWinner);
        board = ['', '', '', '', '', '', '', '', ''];
      }

      turnCount += 1;
      console.log(turnCount);
      if (turnCount === 9) {
        console.log('The game is tied');
        board = ['', '', '', '', '', '', '', '', ''];
      }
    };

    const boardClickFirstPlayer = () => {
      displayController.squareArray.forEach((square) => {
        square.addEventListener('click', () => {
          // if (board[displayController.squareArray.indexOf(square)] === 'X'
          // || board[displayController.squareArray.indexOf(square)] === 'O') {
          //   console.log('Spot already taken, choose another spot');
          // }
          board[displayController.squareArray.indexOf(square)] = firstPlayer.symbol;
          firstPlayer.currentMove = board[displayController.squareArray.indexOf(square)];
          displayController.displayBoard();
          winningCondition();
          currentTurn = secondPlayer;
          gameFlow();
        });
      });
    };

    const boardClickSecondPlayer = () => {
      displayController.squareArray.forEach((square) => {
        square.addEventListener('click', () => {
          // if (board[displayController.squareArray.indexOf(square)] === 'X'
          // || board[displayController.squareArray.indexOf(square)] === 'O') {
          //   console.log('Spot already taken, choose another spot');
          // }
          board[displayController.squareArray.indexOf(square)] = secondPlayer.symbol;
          secondPlayer.currentMove = board[displayController.squareArray.indexOf(square)];
          displayController.displayBoard();
          winningCondition();
          currentTurn = firstPlayer;
          gameFlow();
        });
      });
    };

    let currentTurn = firstPlayer;

    const gameFlow = () => {
      if (currentTurn === firstPlayer) {
        boardClickFirstPlayer();
        // winningCondition();
      } else if (currentTurn === secondPlayer) {
        boardClickSecondPlayer();
        // winningCondition();
      }
    };

    gameFlow();

    return {
      firstPlayer, secondPlayer,
    };
  };

  return {
    board, playRound,
  };
})();
