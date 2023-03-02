# The Odin Project - Tic Tac Toe
Start Date: Feb 28 2023 <br>
Completion Date: <br>


## Project Description
Tic Tac Toe game to play against another player. <br>
After the project is completed we have the option to add an AI opponent. <br>

**Basic Functionality**

-A game board consisting of a 3 by 3 grid needs to be created <br>
-The game needs to differentiate between 2 users, either “X” or “O” <br>
-The game needs to alternate between “X” user and “O” user per turn. <br>
-1 turn is completed once a user adds a symbol to the game board. <br>
-1 space cannot contain 2 symbols, once 1 symbol is added it cannot be overwritten until a new game starts. <br>


**Winning the game** <br>
The game is won if either of this happens: <br>

1 column of a symbol is completed <br>
[x o o] <br>
[x o o] <br>
[x o o] <br>

1 row of a symbol is completed <br>
[x x x] <br>
[o o o] <br>
[o o o] <br>

1 diagonal of a symbol is completed <br>
[x o o] <br>
[o x o] <br>
[o o x] <br>

There are 8 different ways to win: <br>
-Columns (3 different ways) <br>
-Rows (3 different ways) <br>
-Diagonals (2 different ways) <br>

**Game tie** <br>
The game is tied if the board is filled and neither of the 8 combinations to win were achieved. <br>



## Technical Requirements
From a technical standpoint, this project needs to use modules and factory functions to better organize code and reduce the need for global code, while making some of the functionality of the game private. <br>

**Game board (Module)** <br>
-An array will save the state of the board <br>
-The array will have 9 empty elements to start <br>
-With each move that the player makes, the array will need to be updated to store the latest board state, updating any of the 9 indices <br>
-When a game is won, tied or reset, the array will need to start with 9 empty elements <br>
-A game is won by either of these combinations in the array: <br>

Representation of array in grid <br>
[0 1 2] <br>
[3 4 5] <br>
[6 7 8] <br>

**Row combinations** <br>
*First Row - Indices[0,1,2]* <br>
[‘X’, ‘X’, ‘X’, ‘’, ‘’, ‘’, ‘’, ‘’, ‘’] <br>
[‘O’, ‘O’, ‘O’, ‘’, ‘’, ‘’, ‘’, ‘’, ‘’] <br>

*Second Row - Indices[3,4,5]* <br>
[‘’, ‘’, ‘’, ‘X’, ‘X’, ‘X’, ‘’, ‘’, ‘’] <br>
[‘’, ‘’, ‘’, ‘O’, ‘O’, ‘O’, ‘’, ‘’, ‘’] <br>

*Third Row - Indices[6,7,8]* <br>
[‘’, ‘’, ‘’, ‘’, ‘’, ‘’, ‘X’, ‘X’, ‘X’] <br>
[‘’, ‘’, ‘’, ‘’, ‘’, ‘’, ‘O’, ‘O’, ‘O’] <br>

**Column combinations** <br>
*First Column - Indices[0,3,6]* <br>
[‘X’, ‘’, ‘’, ‘X’, ‘’, ‘’, ‘X’, ‘’, ‘’] <br>
[‘O’, ‘’, ‘’, ‘O’, ‘’, ‘’, ‘O’, ‘’, ‘’] <br>

*Second Column - Indices[1,4,7]* <br>
[‘’, ‘X’, ‘’, ‘’, ‘X’, ‘’, ‘’, ‘X’, ‘’] <br>
[‘’, ‘O’, ‘’, ‘’, ‘O’, ‘’, ‘’, ‘O’, ‘’] <br>

*Third Column - Indices[2,5,8]* <br>
[‘’, ‘’, ‘X’, ‘’, ‘’, ‘X’, ‘’, ‘’, ‘X’] <br>
[‘’, ‘’, ‘O’, ‘’, ‘’, ‘O’, ‘’, ‘’, ‘O’] <br>

**Diagonal combinations** <br>
*1st Diagonal - Indices[0,4,8]* <br>
[‘X’, ‘’, ‘’, ‘’, ‘X’, ‘’, ‘’, ‘’, ‘X’] <br>
[‘O’, ‘’, ‘’, ‘’, ‘O’, ‘’, ‘’, ‘’, ‘O’] <br>

*2nd Diagonal - Indices[2,4,6]* <br>
[‘’, ‘’, ‘X’, ‘’, ‘X’, ‘’, ‘X’, ‘’, ‘’] <br>
[‘’, ‘’, ‘O’, ‘’, ‘O’, ‘’, ‘O’, ‘’, ‘’] <br>

-An object to control the flow of the project will be needed, this can be added to this game board module. <br>


**Display Controller (Module)** <br>
The display controller will link the gameboard array to the DOM <br>
-A function that reads the game board array status and displays it in the webpage will need to be created <br>
-The function to link the array to the DOM will need to run every time a player makes a move <br>

**Players (Factory Function)** <br>
A factory function will create new player objects, the player objects will return: <br>
-Name <br>
-Symbol <br>
-Win - initiated at 0 <br>
-Loss - initiated at 0 <br>
-Draw - initiated at 0 <br>

## Steps to Complete Project

**Project preparation**
1. Create repository https://github.com/bojorquezc/odin_tictactoe
1. Create core files HTML, CSS, JS, README
1. Add ESLint to project (Using AirBnB style)

**Project design and visuals**
1. Create design in Figma - [Design link](https://www.figma.com/file/c1Y3JYL91c2rtVeqDMdClS/TicTacToe?node-id=0%3A1&t=CPBgq2MV3cNAdyHz-1 "Design Link")
1. Code HTML/CSS - [Codepen link](https://codepen.io/bojorquezconrado/pen/VwGpXyb "Codepen Link")

**Project functionality** <br>
Section coming soon <br>


Full project description
[TOP - Tic Tac Toe Project](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe "TOP - Tic Tac Toe Project")
