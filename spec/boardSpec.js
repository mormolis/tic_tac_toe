
describe("Player", function(){

    var Board = require('./../lib/board.js');
    var board = new Board();

    describe(".typeMarker", function(){
        it ("should throw error if marker is different than x or o", function(){
            expect(()=>{board.inputMarker(1,1,"f")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });
        it ("should throw error if column < 0", function(){
            expect(()=>{board.inputMarker(1,-1,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });
        it ("should throw error if row < 0", function(){
            expect(()=>{board.inputMarker(-1,1,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });
        it ("should throw error if row and column < 0 ", function(){
            expect(()=>{board.inputMarker(-1,-1,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });

        it ("should throw error if column > 2", function(){
            expect(()=>{board.inputMarker(1,3,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });
        it ("should throw error if row > 2", function(){
            expect(()=>{board.inputMarker(-1,3,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });
        it ("should throw error if row and column > 2 ", function(){
            expect(()=>{board.inputMarker(3,3,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });

        it ("should add a marker to the cell if cell is empty", ()=>{
            board.inputMarker(0,0,"o")
            expect(board._board[0][0]).toEqual("O");
        })

        it ("should throw error if cell is already marked ", function(){
            board.inputMarker(1,1,"x");
            expect(()=>{board.inputMarker(1,1,"x")}).toThrow(new Error("Cell already marked"));
        });

    });
    
});