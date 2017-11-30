
class Player {

    constructor (name, marker, type) {
        this.name = name;
        this.marker = marker;
        this.type = type.toUpperCase();
        this.wins = 0;
        this.draws = 0;
        this.losses = 0;
    }

    play (board, row = null, column = null){
        if (this.type = "COMPUTER"){
            var move = this._makeMove(board);
            row = move[0];
            column = move[1];
        } 
        board.inputMarker(row, column, this.marker);  
    }

    incrementWins(){
        this.wins ++;
    }

    incrementDraws(){
        this.draws ++;
    }

    incrementLosses(){
        this.losses ++;
    }

    _makeMove(board) {
        var possibleMove;
        for (var i = 0; i < 3; i++){
            possibleMove = this._preventLossRows(board, i);
            if ( possibleMove.length>0 ) return possibleMove;
            possibleMove = this._preventLossColumn(board, i);
            if ( possibleMove.length > 0 ) return possibleMove;
        }

        possibleMove = this._preventLossDiagonal(board);
        if ( possibleMove.length > 0) return possibleMove;
        
        possibleMove = this._preventLossReverseDiagonal(board);
        if (possibleMove.length > 0) return possibleMove;

        return this._randomMove(board);
    }

    _randomMove(board) {
        var row , column;
        do {
            row = Math.floor(Math.random()*10)%3;
            column = Math.floor(Math.random()*10)%3;
        } while(!board.isCellEmpty(row, column))
        return [row, column];
    }
   

    _preventLossReverseDiagonal(board) {
        var tempArray = board.returnReverseDiagonal();
        var tempPossition = this._preventLoss(tempArray);
        if ( tempPossition >= 0 ) 
            return [tempPossition , 2 - tempPossition];
        return [];
    }
    _preventLossDiagonal(board) {
        var tempArray = board.returnDiagonal();
        var tempPossition = this._preventLoss(tempArray);
        if ( tempPossition >= 0 ) 
            return [tempPossition, tempPossition];
        return [];
    }

    _preventLossRows(board, row){
        var tempArray = board.returnRow(row);
        var tempPossition = this._preventLoss(tempArray);
        if ( tempPossition >= 0)
            return [i, tempPossition];
        return [];
    }

    _preventLossColumns(board, column) {
        var tempArray = board.returnColumn(column);
        var tempPossition = this._preventLoss(tempArray);
        if ( tempPossition >= 0)
            return [tempPossition, i]; 
        return []
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