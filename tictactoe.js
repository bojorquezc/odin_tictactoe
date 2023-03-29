/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const nameInputForm = document.querySelector('.name-input-form');
const player1name = document.querySelector('#player1-name');
const player2name = document.querySelector('#player2-name');
nameInputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  nameInputForm.style.display = 'none';
  gameBoardModule.playRound(playerFactory(player1name.value, 'X'), playerFactory(player2name.value, 'O'));
  // nameInputForm.reset();
});

const playerFactory = (name, symbol) => {
  const wins = 0;
  const losses = 0;
  const draws = 0;
  return {
    name,
    symbol,
    wins,
    losses,
    draws,
  };
};

// Generated players for testing purposes
const aracely = playerFactory('Aracely', 'X');
const conrado = playerFactory('Conrado', 'O');

const displayController = (() => {
  const gameBoardCont = document.querySelector('.gameboard-cont');
  const gameBoardArray = [];
  const playersCont = document.querySelector('.players');
  const gameInitialized = false;

  const createPlayerBoard = () => {
    // player1 name and symbol display section
    const player1Section = document.createElement('div');
    player1Section.classList.add('player-cont');
    playersCont.appendChild(player1Section);

    const pTagPlayer1 = document.createElement('p');
    player1Section.appendChild(pTagPlayer1);

    const spanTagPlayer1 = document.createElement('span');
    spanTagPlayer1.classList.add('bold');
    pTagPlayer1.appendChild(spanTagPlayer1);

    const spanTagPlayer1Name = document.createElement('span');
    spanTagPlayer1Name.classList.add('player1-name');
    pTagPlayer1.appendChild(spanTagPlayer1Name);

    spanTagPlayer1.textContent = 'Player: ';

    const symbolImageX = document.createElement('img');
    symbolImageX.src = './assets/xmark.svg';
    player1Section.appendChild(symbolImageX);

    // player2 name and symbol display
    const player2Section = document.createElement('div');
    player2Section.classList.add('player-cont');
    playersCont.appendChild(player2Section);

    const pTagPlayer2 = document.createElement('p');
    player2Section.appendChild(pTagPlayer2);

    const spanTagPlayer2 = document.createElement('span');
    spanTagPlayer2.classList.add('bold');
    pTagPlayer2.appendChild(spanTagPlayer2);

    const spanTagPlayer2Name = document.createElement('span');
    spanTagPlayer2Name.classList.add('player2-name');
    pTagPlayer2.appendChild(spanTagPlayer2Name);

    spanTagPlayer2.textContent = 'Player: ';

    const symbolImageO = document.createElement('img');
    symbolImageO.src = './assets/ellipse.svg';
    symbolImageO.classList.add('ellipse');
    player2Section.appendChild(symbolImageO);
  };

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
    const xSymbol = document.createElement('img');
    xSymbol.src = './assets/xmark.svg';
    const oSymbol = document.createElement('img');
    oSymbol.src = './assets/ellipse.svg';
    gameBoardArray.forEach((element) => {
      if (element.textContent === '') {
        // element.textContent = gameBoardModule.board[element.dataset.square];
        if (gameBoardModule.board[element.dataset.square] === 'X') {
          element.appendChild(xSymbol);
        } else if (gameBoardModule.board[element.dataset.square] === 'O') {
          element.appendChild(oSymbol);
        }
      }
    });
  };

  return {
    gameBoardCont,
    gameBoardArray,
    playersCont,
    gameInitialized,
    createSquares,
    createPlayerBoard,
    displayBoard,
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
      displayController.playersCont.replaceChildren();
    }
  };

  const playRound = (player1, player2) => {
    const firstPlayer = player1;
    const secondPlayer = player2;
    console.log(firstPlayer, secondPlayer);
    let currentTurn = firstPlayer;

    const displayNames = () => {
      const firstPlayerSpan = document.querySelector('.player1-name');
      firstPlayerSpan.textContent = firstPlayer.name;
      const secondPlayerSpan = document.querySelector('.player2-name');
      secondPlayerSpan.textContent = secondPlayer.name;
    };

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
    displayController.createPlayerBoard();
    displayNames();
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
        displayController.playersCont.replaceChildren();
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
        displayController.playersCont.replaceChildren();
      }
    };
  };

  return {
    board,
    playRound,
  };
})();
