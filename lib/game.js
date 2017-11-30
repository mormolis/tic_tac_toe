var Board = require('./board.js');

class Game{

    constructor(player1, player2){
        this.turn = 0;
        this.players = [player1, player2];
        this.board = new Board();
    }

    start(){
        var round = 0;
        var theEnd = false;
        while( round < 9 && !theEnd ){
            this.players[round % 2].play(this.board)
            round ++;
            console.log(this.board.toString());
            //the end condition find a winner 
            //and asign points to players
        }
    }


}

module.exports = Game;