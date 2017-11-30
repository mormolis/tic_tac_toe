var Board = require('./lib/board.js');
var Game = require('./lib/game.js');
var Player = require('./lib/player.js');


var p1 = new Player("bot1", "X", "COMPUTER");
var p2 = new Player("fakeHuman", "O", "COMPUTER");
var game = new Game(p1,p2);
game.start()