describe("Player", () => {
    var Player = require('./../lib/player.js');
    player = new Player ("Bot", "X", "COMPUTER");
    describe("._preventLoss", ()=>{
        
        it("should return -1 if there is no danger of loss in the array",()=>{
            expect(player._preventLoss([" ", " ", "X"])).toEqual(-1);
        });
        
        it("should return -1 if there is no danger of loss in the array",()=>{
            expect(player._preventLoss([" ", "X", "X"])).toEqual(-1);
        });

        it("should return -1 if there is no danger of loss in the array",()=>{
            expect(player._preventLoss([" ", "O", "X"])).toEqual(-1);
        });


        it("should return the available cell if danger of loss", ()=>{
            expect(player._preventLoss(["O", " ", "O"])).toEqual(1);
        })
        it("should return the available cell if danger of loss", ()=>{
            expect(player._preventLoss([" ", "O", "O"])).toEqual(0);
        })
        it("should return the available cell if danger of loss", ()=>{
            expect(player._preventLoss(["O", "O", " "])).toEqual(2);
        })
    })
});