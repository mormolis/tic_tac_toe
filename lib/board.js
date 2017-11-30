class Board {
    constructor(){
        this._board = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    }
    
    inputMarker(row, column, marker) {
        if ( this._outOfBorder(row, column) || this._markerValidator(marker)){
            throw RangeError("Marker out of border or incorect marker")
        } else if (this._board[row][column] != " "){
            throw Error("Cell already marked");
        }
        this._board[row][column] = marker.toUpperCase();
    }

    _markerValidator(marker) {
        return !(marker.toUpperCase() == "O" || marker.toUpperCase() == "X")
    }
    _outOfBorder(row, column) {
        return row >2 || row < 0 || column > 2 || column < 0;
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