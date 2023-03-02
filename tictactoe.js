/* eslint-disable no-unused-vars */
const gameBoardModule = (() => {
  const board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  const playRound = (player1, player2) => {
    console.log(`Tic Tac Toe game started\n${player1.name}'s turn\nSymbol:${player1.symbol}`);
    prompt(`Where would you like to place '${player1.symbol}'\n[${board[0]} ${board[1]} ${board[2]}]\n[${board[3]} ${board[4]} ${board[5]}]\n[${board[6]} ${board[7]} ${board[8]}]`);
  };
  return {
    board, playRound,
  };
})();

const playerFactory = (name, symbol) => {
  const wins = 0;
  const losses = 0;
  const draws = 0;
  return {
    name, symbol, wins, losses, draws,
  };
};

// Generated players for testing purposes
const john = playerFactory('John', 'x');
const brooke = playerFactory('Brooke', 'o');
