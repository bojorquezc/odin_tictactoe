# The Odin Project - Tic Tac Toe
Start Date: Feb 28 2023
Completion Date:


## Project Description
Tic Tac Toe game to play against another player.
After the project is completed we have the option to add an AI opponent.

**Basic Functionality**

-A game board consisting of a 3 by 3 grid needs to be created
-The game needs to differentiate between 2 users, either “X” or “O”
-The game needs to alternate between “X” user and “O” user per turn.
-1 turn is completed once a user adds a symbol to the game board.
-1 space cannot contain 2 symbols, once 1 symbol is added it cannot be overwritten until a new game starts.


**Winning the game**
The game is won if either of this happens:

1 column of a symbol is completed 
[x o o] 
[x o o]
[x o o]

1 row of a symbol is completed
[x x x] 
[o o o]
[o o o]

1 diagonal of a symbol is completed
[x o o] 
[o x o]
[o o x]

There are 8 different ways to win
-Columns (3 different ways)
-Rows (3 different ways)
-Diagonals (2 different ways)

**Game tie**
The game is tied if the board is filled and neither of the 8 combinations to win were achieved.



## Technical Requirements
From a technical standpoint, this project needs to use modules and factory functions to better organize code and reduce the need for global code, while making some of the functionality of the game private.

**Game board (Module)**
-An array will save the state of the board
-The array will have 9 empty elements to start
-With each move that the player makes, the array will need to be updated to store the latest board state, updating any of the 9 indices
-When a game is won, tied or reset, the array will need to start with 9 empty elements
-A game is won by either of these combinations in the array:


[0 1 2] 
[3 4 5]
[6 7 8]
Representation of array in grid

**Row combinations**
*First Row - Indices[0,1,2]*
[‘X’, ‘X’, ‘X’, ‘’, ‘’, ‘’, ‘’, ‘’, ‘’]
[‘O’, ‘O’, ‘O’, ‘’, ‘’, ‘’, ‘’, ‘’, ‘’]

*Second Row - Indices[3,4,5]*
[‘’, ‘’, ‘’, ‘X’, ‘X’, ‘X’, ‘’, ‘’, ‘’]
[‘’, ‘’, ‘’, ‘O’, ‘O’, ‘O’, ‘’, ‘’, ‘’]

*Third Row - Indices[6,7,8]*
[‘’, ‘’, ‘’, ‘’, ‘’, ‘’, ‘X’, ‘X’, ‘X’]
[‘’, ‘’, ‘’, ‘’, ‘’, ‘’, ‘O’, ‘O’, ‘O’]

**Column combinations**
*First Column - Indices[0,3,6]*
[‘X’, ‘’, ‘’, ‘X’, ‘’, ‘’, ‘X’, ‘’, ‘’]
[‘O’, ‘’, ‘’, ‘O’, ‘’, ‘’, ‘O’, ‘’, ‘’]

*Second Column - Indices[1,4,7]*
[‘’, ‘X’, ‘’, ‘’, ‘X’, ‘’, ‘’, ‘X’, ‘’]
[‘’, ‘O’, ‘’, ‘’, ‘O’, ‘’, ‘’, ‘O’, ‘’]

*Third Column - Indices[2,5,8]*
[‘’, ‘’, ‘X’, ‘’, ‘’, ‘X’, ‘’, ‘’, ‘X’]
[‘’, ‘’, ‘O’, ‘’, ‘’, ‘O’, ‘’, ‘’, ‘O’]

**Diagonal combinations**
*1st Diagonal - Indices[0,4,8]*
[‘X’, ‘’, ‘’, ‘’, ‘X’, ‘’, ‘’, ‘’, ‘X’]
[‘O’, ‘’, ‘’, ‘’, ‘O’, ‘’, ‘’, ‘’, ‘O’]

*2nd Diagonal - Indices[2,4,6]*
[‘’, ‘’, ‘X’, ‘’, ‘X’, ‘’, ‘X’, ‘’, ‘’]
[‘’, ‘’, ‘O’, ‘’, ‘O’, ‘’, ‘O’, ‘’, ‘’]

-An object to control the flow of the project will be needed, this can be added to this game board module.



**Display Controller (Module)**
The display controller will link the gameboard array to the DOM
-A function that reads the game board array status and displays it in the webpage will need to be created
-The function to link the array to the DOM will need to run every time a player makes a move

**Players (Factory Function)**
A factory function will create new player objects, the player objects will return:
-Name
-Symbol
-Win - initiated at 0
-Loss - initiated at 0
-Draw - initiated at 0

## Steps to Complete Project

**Project preparation**
1. Create repository https://github.com/bojorquezc/odin_tictactoe
1. Create core files HTML, CSS, JS, README
1. Add ESLint to project (Using AirBnB style)

**Project design and visuals**
1. Create design in Figma - [Design link](https://www.figma.com/file/c1Y3JYL91c2rtVeqDMdClS/TicTacToe?node-id=0%3A1&t=CPBgq2MV3cNAdyHz-1 "Design Link")
1. Code HTML/CSS - [Codepen link](https://codepen.io/bojorquezconrado/pen/VwGpXyb "Codepen Link")

**Project functionality**
Section coming soon


Full project description
[TOP - Tic Tac Toe Project](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe "TOP - Tic Tac Toe Project")