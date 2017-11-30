
describe("Board", () => {

    var Board = require('./../lib/board.js');
    var board = new Board();

    describe(".inputMarker", () => {
        it ("should throw error if marker is different than x or o", () => {
            expect(()=>{board.inputMarker(1,1,"f")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });

        it ("should throw error if column < 0", () => {
            expect(()=>{board.inputMarker(1,-1,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });

        it ("should throw error if row < 0", () => {
            expect(()=>{board.inputMarker(-1,1,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });

        it ("should throw error if row and column < 0 ", () => {
            expect(()=>{board.inputMarker(-1,-1,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });

        it ("should throw error if column > 2", () => {
            expect(()=>{board.inputMarker(1,3,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });
        
        it ("should throw error if row > 2", () => {
            expect(()=>{board.inputMarker(-1,3,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });
        
        it ("should throw error if row and column > 2 ", () => {
            expect(()=>{board.inputMarker(3,3,"x")}).toThrow(new RangeError("Marker out of border or incorect marker"));
        });

        it ("should add a marker to the cell if cell is empty", ()=>{
            board.inputMarker(0,0,"o")
            expect(board._board[0][0]).toEqual("O");
        })

        it ("should throw error if cell is already marked ", () => {
            board.inputMarker(1,1,"x");
            expect(()=>{board.inputMarker(1,1,"x")}).toThrow(new Error("Cell already marked"));
        });
    });
});