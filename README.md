# Tic Tac Toe 
This is an object oriented approach to tic tac toe classic game.

The implementation involves three classes:
* Board
* Player
* Game

### Board class
Responsible for managing the board. It makes sure that a marker cannot be put outside the borders and the marker is type of X or O.

It also return every part of the board as a one dimension array for further process.

### Player class
The player class is responsible for placing the markers on the board. 

It keeps the players name, marker, human/computer and counters of losses, wins and draws.

It also contains a basic logic for the type of computer player to decide a move that will prevent immediate loss. 

#### Future improvements for Player Class

* extract two classes that inherit from Player class, Computer and Human. Computer class will hold the logic for computer response

* refactor _preventLoss** methods to receive a callback and have only one instead of  different methods for each array type

### Game class
Responsible for tying everything together.

## Try it on node repl

*edit feature.js for modification*
``` 
$ node feature.js
> game.play(row, column) // human plays
> game.play() // computer plays
```


