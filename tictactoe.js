/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
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
  const gameBoard = document.querySelector('.gameboard');

  const createSquares = () => {
    for (let index = 0; index < 9; index += 1) {
      const gameSquare = document.createElement('div');
      gameSquare.classList.add('gamesquare');
      gameSquare.dataset.square = index;
      gameBoard.appendChild(gameSquare);
    }
  };

  const gameBoardChildren = gameBoard.children;
  const gameBoardArray = Array.from(gameBoardChildren);

  const displayBoard = () => {
    console.log(gameBoardChildren);
    console.log(gameBoardArray);
    gameBoardArray.forEach((element) => {
      if (element.textContent === '') {
        element.textContent = gameBoardModule.board[element.dataset.square];
      }
    });
  };

  const boardDisplayReset = () => {
    gameBoardArray.forEach((element) => {
      if (element.textContent !== '') {
        element.textContent = '';
      }
    });
  };

  return {
    gameBoard, createSquares, displayBoard, boardDisplayReset,
  };
})();

const gameBoardModule = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];

  const playRound = (player1, player2) => {
    const firstPlayer = player1;
    const secondPlayer = player2;
    let turnCount = 0;
    let currentTurn = firstPlayer;

    const logEvents = () => {
      console.log(board);
      console.log(`Turn count: ${turnCount}`);
    };

    // Reset the board array
    const boardArrayReset = () => {
      for (const item in gameBoardModule.board) {
        if (gameBoardModule.board[item] !== '') {
          gameBoardModule.board[item] = '';
        }
      }
    };

    const gameFlow = () => {
      turnCount += 1;
      let isPlaying = true;
      if (turnCount === 9) {
        console.log('The game is tied');
        isPlaying = false;
        turnCount = 0;
        boardArrayReset();
        displayController.boardDisplayReset();
      }
    };

    const addBoardClickEvents = () => {
      displayController.gameBoard.addEventListener('click', (e) => {
        if (currentTurn === firstPlayer) {
          board[e.target.dataset.square] = firstPlayer.symbol;
          firstPlayer.currentMove = e.target.dataset.square;
          displayController.displayBoard();
          gameFlow();
          winningCondition();
          logEvents();
          currentTurn = secondPlayer;
        } else if (currentTurn === secondPlayer) {
          board[e.target.dataset.square] = secondPlayer.symbol;
          secondPlayer.currentMove = e.target.dataset.square;
          displayController.displayBoard();
          gameFlow();
          winningCondition();
          logEvents();
          currentTurn = firstPlayer;
        }
      });
    };

    displayController.createSquares();
    addBoardClickEvents();

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
        turnCount = 0;
        boardArrayReset();
        displayController.boardDisplayReset();
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
        turnCount = 0;
        boardArrayReset();
        displayController.boardDisplayReset();
      }
    };
  };

  return {
    board, playRound,
  };
})();

// if (currentTurn === firstPlayer) {
//   if (board[displayController.squareArray.indexOf(square)] === 'X'
//     || board[displayController.squareArray.indexOf(square)] === 'O') {
//     console.log('Spot already taken, choose another spot');
//   }
//   board[displayController.squareArray.indexOf(square)] = firstPlayer.symbol;
//   firstPlayer.currentMove = board[displayController.squareArray.indexOf(square)];
//   displayController.displayBoard();
//   gameFlow();
//   winningCondition();
//   currentTurn = secondPlayer;
// } else if (currentTurn === secondPlayer) {
//   if (board[displayController.squareArray.indexOf(square)] === 'X'
//     || board[displayController.squareArray.indexOf(square)] === 'O') {
//     console.log('Spot already taken, choose another spot');
//   }
//   board[displayController.squareArray.indexOf(square)] = secondPlayer.symbol;
//   secondPlayer.currentMove = board[displayController.squareArray.indexOf(square)];
//   displayController.displayBoard();
//   gameFlow();
//   winningCondition();
//   currentTurn = firstPlayer;
