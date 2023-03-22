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
  return {
    name, symbol, wins, losses, draws,
  };
};

// Generated players for testing purposes
const aracely = playerFactory('Aracely', 'X');
const conrado = playerFactory('Conrado', 'O');

const displayController = (() => {
  const gameBoardCont = document.querySelector('.gameboard-cont');
  const gameBoardArray = [];
  const gameInitialized = false;

  const createSquares = () => {
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('gameboard');
    gameBoardCont.appendChild(gameBoard);
    for (let index = 0; index < 9; index += 1) {
      const gameSquare = document.createElement('div');
      gameSquare.classList.add('gamesquare');
      gameSquare.dataset.square = index;
      gameBoard.appendChild(gameSquare);
      if (gameInitialized === false) {
        gameBoardArray.push(gameSquare);
      }
    }
  };

  const displayBoard = () => {
    gameBoardArray.forEach((element) => {
      if (element.textContent === '') {
        element.textContent = gameBoardModule.board[element.dataset.square];
      }
    });
  };

  return {
    gameBoardCont, gameBoardArray, gameInitialized, createSquares, displayBoard,
  };
})();

const gameBoardModule = (() => {
  let turnCount = 0;
  const board = ['', '', '', '', '', '', '', '', ''];

  // Reset the board array
  const boardArrayReset = () => {
    for (const item in gameBoardModule.board) {
      if (gameBoardModule.board[item] !== '') {
        gameBoardModule.board[item] = '';
      }
    }
    displayController.gameBoardArray.length = 0;
  };

  const gameFlow = () => {
    turnCount += 1;
    if (turnCount === 9) {
      console.log('The game is tied');
      turnCount = 0;
      boardArrayReset();
      displayController.gameBoardCont.replaceChildren();
    }
  };

  const playRound = (player1, player2) => {
    const firstPlayer = player1;
    const secondPlayer = player2;
    let currentTurn = firstPlayer;

    const logEvents = () => {
      console.log(board);
      console.log(`Turn count: ${turnCount}`);
    };

    const boardClickEvents = () => {
      const gameBoard = document.querySelector('.gameboard');
      gameBoard.addEventListener('click', (e) => {
        if (currentTurn === firstPlayer && board[e.target.dataset.square] === '') {
          board[e.target.dataset.square] = firstPlayer.symbol;
          displayController.displayBoard();
          gameFlow();
          winningCondition();
          logEvents();
          currentTurn = secondPlayer;
        } else if (currentTurn === secondPlayer && board[e.target.dataset.square] === '') {
          board[e.target.dataset.square] = secondPlayer.symbol;
          displayController.displayBoard();
          gameFlow();
          winningCondition();
          logEvents();
          currentTurn = firstPlayer;
        }
      });
    };

    displayController.createSquares();
    boardClickEvents();
    displayController.gameInitialized = true;

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
        displayController.gameBoardCont.replaceChildren();
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
        displayController.gameBoardCont.replaceChildren();
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
