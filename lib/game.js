var Board = require('./board.js');

class Game {

    constructor(player1, player2) {
        this.turn = 0;
        this.players = [player1, player2];
        this.board = new Board();
        this.theEnd = false;
    }

    play(row = null, column = null) {
        if (!this.theEnd) {
            var currentPlayer = this.players[this.turn % 2];
            if (currentPlayer.type === "COMPUTER") {
                currentPlayer.play(this.board)
            } else {
                currentPlayer.play(this.board, row, column)
            }
            console.log(this.board.toString());
            this.theEnd = this._isTheEnd();
            this.turn++;
        }
    }

    _isTheEnd() {
        if (this._isAThreeMatch(this.board.returnDiagonal()) || this._isAThreeMatch(this.board.returnReverseDiagonal())) {
            this._currentPlayerWins();
            return true;
        }
        for (var i = 0; i < 3; i++) {
            if (this._isAThreeMatch(this.board.returnRow(i)) || this._isAThreeMatch(this.board.returnColumn(i))) {
                this._currentPlayerWins();                
                return true;
            }
        }
        if (this.turn == 8){
            console.log("It's a Draw!");
            this.players[this.turn % 2].incrementDraws();
            this.players[((this.turn +1) % 2)].incrementDraws();
        }
    }

    _currentPlayerWins(){
        this.players[this.turn % 2].incrementWins()
        this.players[(this.turn + 1) % 2].incrementLosses()
        console.log(this.players[this.turn % 2] + " won on turn " + this.turn)
    }

    _isAThreeMatch(array) {
        return this.board.isAllTheSame(array) && !array.includes(" ")
    }

}

module.exports = Game;