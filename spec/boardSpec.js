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

    describe(".returnRow", ()=>{
        it ("should throw error if row number is negative", () => {
            expect(()=>{board.returnRow(-1)}).toThrow(new RangeError("Row out of scope"));
        });

        it ("should throw error if row number is greater than 2", () => {
            expect(()=>{board.returnRow(3)}).toThrow(new RangeError("Row out of scope"));
        });

        it ("should return the row", ()=>{
            board.inputMarker(1,0,"x");
            board.inputMarker(1,2,"x");
            expect(board.returnRow(1)).toEqual(["X","X","X"]);
        });
    });

    describe(".returnColumn", ()=>{
        it ("should throw error if column number is negative", () => {
            expect(()=>{board.returnColumn(-1)}).toThrow(new RangeError("Column out of scope"));
        });

        it ("should throw error if row number is greater than 2", () => {
            expect(()=>{board.returnColumn(3)}).toThrow(new RangeError("Column out of scope"));
        });

        it ("should return the column", ()=>{
            board.inputMarker(0,1,"O");            
            expect(board.returnColumn(1)).toEqual(["O","X"," "]);
        });
    });

    describe(".returnDiagonal", ()=>{
        it("should return an array with the diagonal values", ()=> {
            expect(board.returnDiagonal()).toEqual(["O", "X", " "])

        }); 
    });

    describe(".returnReverseDiagonal", ()=>{
        it("should return an array with the reverse diagonal values", ()=> {
            board.inputMarker(2,0,"o");
            expect(board.returnReverseDiagonal()).toEqual([" ", "X", "O"])
        }); 
    });

    describe(".isAllTheSame", ()=>{
        it("should return false if the elements on an array are not the same", ()=>{
            var tempArray = board.returnColumn(1);
            expect(board.isAllTheSame(tempArray)).toEqual(false);
        });

        it("should return true if the elements on an array are the same", ()=>{
            var tempArray = board.returnRow(1);
            expect(board.isAllTheSame(tempArray)).toEqual(true);
        });

        it("should throw an error if the argument is not an array", () => {
            expect(()=> { board.isAllTheSame("string")}).toThrow(new TypeError("Argument must be type of array"))
            expect(()=> { board.isAllTheSame(new Object)}).toThrow(new TypeError("Argument must be type of array"))
            
        });
    });
});