class Board {
     
    constructor(){
        this._board = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    }
    
    inputMarker (row, column, marker) {
        if ( this._outOfBorder(row, column) || this._markerValidator(marker)){
            throw RangeError("Marker out of border or incorect marker")
        } else if (this._board[row][column] != " "){
            throw Error("Cell already marked");
        }
        this._board[row][column] = marker.toUpperCase();
    }

    returnRow (row) {
        if (row < 0 || row > 2) throw new RangeError("Row out of scope")
        return this._board[row]
    }

    returnColumn (column) {
        if (column < 0 || column > 2) throw new RangeError("Column out of scope")
        var resultArray = []
        for (var i = 0; i < 3; i++){
            resultArray.push(this._board[i][column]);
        }
        return resultArray;
    }

    _markerValidator(marker) {
        return !(marker.toUpperCase() == "O" || marker.toUpperCase() == "X")
    }
    _outOfBorder(row, column) {
        return row >2 || row < 0 || column > 2 || column < 0;
    }

    returnDiagonal () {
        var resultArray = [];
        for(var i = 0; i < 3; i++){
            resultArray.push(this._board[i][i]);
        }
        return resultArray;
    }

    returnReverseDiagonal () {
        var resultArray = [];
        for (var i = 0; i < 3; i++){
            resultArray.push(this._board[i][2 - i]);
        }
        return resultArray;
    }

    toString() {
        var str = "";
        for(var i=0; i<this._board.length; i++){
            for (var j=0; j<this._board[i].length; j++){
                str += "| " +this._board[i][j]+ " ";
            }
            str += "|\n";
        }
        return str;
    }

}

module.exports = Board;