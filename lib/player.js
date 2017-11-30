
class Player {

    constructor (name, marker, type) {
        this.name = name;
        this.marker = marker;
        this.type = type.toUpperCase();
        this.wins = 0;
        this.draws = 0;
        this.loses = 0;
    }

    play(board){
        if (this.type = "COMPUTER"){
            this._decideMove(board);
        } 
    }
    _preventLoss(array){
        var emptyCell = -1;
        var opponetsMarkerCounter = 0;

        for (var i = 0; i < array.length; i++){
            if (array[i] === " ") 
                emptyCell = i;
            if ((array[i] !== " ") && (array[i] !== this.marker))
                opponetsMarkerCounter++;
        }
        if (opponetsMarkerCounter == 2)
            return emptyCell;
        return -1;
    }



}

module.exports = Player;