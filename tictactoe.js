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
    symbolImageX.classList.add('xboard-symbol');
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
    symbolImageO.classList.add('oboard-symbol');
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
    xSymbol.style.filter = 'invert(48%) sepia(60%) saturate(3359%) hue-rotate(183deg) brightness(104%) contrast(101%)';
    const oSymbol = document.createElement('img');
    oSymbol.src = './assets/ellipse.svg';
    oSymbol.style.filter = 'invert(48%) sepia(60%) saturate(3359%) hue-rotate(150deg) brightness(104%) contrast(101%)';
    gameBoardArray.forEach((element) => {
      if (element.hasChildNodes() === false) {
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

    const highlightSymbol = () => {
      const xBoardSymbol = document.querySelector('.xboard-symbol');
      const oBoardSymbol = document.querySelector('.oboard-symbol');

      if (currentTurn === firstPlayer) {
        xBoardSymbol.style.filter = 'invert(48%) sepia(60%) saturate(3359%) hue-rotate(183deg) brightness(104%) contrast(101%)';
        oBoardSymbol.style.filter = '';
      } else {
        oBoardSymbol.style.filter = 'invert(48%) sepia(60%) saturate(3359%) hue-rotate(150deg) brightness(104%) contrast(101%)';
        xBoardSymbol.style.filter = '';
      }
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
          highlightSymbol();
        } else if (currentTurn === secondPlayer && board[e.target.dataset.square] === '') {
          board[e.target.dataset.square] = secondPlayer.symbol;
          displayController.displayBoard();
          gameFlow();
          winningCondition();
          logEvents();
          currentTurn = firstPlayer;
          highlightSymbol();
        }
      });
    };

    displayController.createSquares();
    displayController.createPlayerBoard();
    displayNames();
    highlightSymbol();
    boardClickEvents();

    if (displayController.gameInitialized !== true) {
      const newRoundButton = document.querySelector('.new-round-btn');
      newRoundButton.addEventListener('click', () => {
        newRoundReset();
      });
    }

    displayController.gameInitialized = true;

    const winningReset = (player) => {
      displayController.playersCont.style.display = 'none';
      const winnerContainer = document.querySelector('.winner-cont');
      winnerContainer.style.display = 'flex';
      const winnerMessage = document.querySelector('.game-winner-placeholder');
      let gameWinner = '';
      gameWinner = `${player} wins the game!`;
      winnerMessage.textContent = gameWinner;
      console.log(gameWinner);
      turnCount = 0;
      boardArrayReset();
      // displayController.gameBoardCont.replaceChildren();
      // displayController.playersCont.replaceChildren();
    };

    const newRoundReset = () => {
      displayController.gameBoardCont.replaceChildren();
      displayController.playersCont.replaceChildren();
      displayController.playersCont.style.display = 'flex';
      const winnerContainer = document.querySelector('.winner-cont');
      winnerContainer.style.display = 'none';
      turnCount = 0;
      playRound(firstPlayer, secondPlayer);
      // boardArrayReset();
      // displayController.gameBoardCont.replaceChildren();
      // displayController.playersCont.replaceChildren();
    };

    const winningCondition = () => {
      if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
        displayController.gameBoardArray[0].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[1].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[2].style.backgroundColor = '#6028ba';
        winningReset(firstPlayer.name);
      } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
        displayController.gameBoardArray[3].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[4].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[5].style.backgroundColor = '#6028ba';
        winningReset(firstPlayer.name);
      } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
        displayController.gameBoardArray[6].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[7].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[8].style.backgroundColor = '#6028ba';
        winningReset(firstPlayer.name);
      } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
        displayController.gameBoardArray[0].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[3].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[6].style.backgroundColor = '#6028ba';
        winningReset(firstPlayer.name);
      } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
        displayController.gameBoardArray[1].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[4].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[7].style.backgroundColor = '#6028ba';
        winningReset(firstPlayer.name);
      } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
        displayController.gameBoardArray[2].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[5].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[8].style.backgroundColor = '#6028ba';
        winningReset(firstPlayer.name);
      } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
        displayController.gameBoardArray[0].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[4].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[8].style.backgroundColor = '#6028ba';
        winningReset(firstPlayer.name);
      } else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
        displayController.gameBoardArray[2].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[4].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[6].style.backgroundColor = '#6028ba';
        winningReset(firstPlayer.name);
      } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
        displayController.gameBoardArray[0].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[1].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[2].style.backgroundColor = '#6028ba';
        winningReset(secondPlayer.name);
      } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
        displayController.gameBoardArray[3].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[4].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[5].style.backgroundColor = '#6028ba';
        winningReset(secondPlayer.name);
      } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
        displayController.gameBoardArray[6].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[7].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[8].style.backgroundColor = '#6028ba';
        winningReset(secondPlayer.name);
      } else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
        displayController.gameBoardArray[0].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[3].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[6].style.backgroundColor = '#6028ba';
        winningReset(secondPlayer.name);
      } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
        displayController.gameBoardArray[1].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[4].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[7].style.backgroundColor = '#6028ba';
        winningReset(secondPlayer.name);
      } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
        displayController.gameBoardArray[2].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[5].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[8].style.backgroundColor = '#6028ba';
        winningReset(secondPlayer.name);
      } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
        displayController.gameBoardArray[0].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[4].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[8].style.backgroundColor = '#6028ba';
        winningReset(secondPlayer.name);
      } else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
        displayController.gameBoardArray[2].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[4].style.backgroundColor = '#6028ba';
        displayController.gameBoardArray[6].style.backgroundColor = '#6028ba';
        winningReset(secondPlayer.name);
      }
    };
    return {
      firstPlayer,
      secondPlayer,
      newRoundReset,
    };
  };

  return {
    board,
    playRound,
  };
})();
