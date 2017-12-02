describe("Game", ()=>{
    var Game = require('./../lib/game.js');
    var bot = {
        type: "COMPUTER",
        play: (board) => {},
        incrementWins: () => {},
        incrementDraws: () => {},
        incrementLosses: () => {}
    }
    var human = {
        type: "HUMAN",
        play: (board) => {},
        incrementWins: () => {},
        incrementDraws: () => {},
        incrementLosses: () => {}
    }

    var game = new Game(bot,human);
    
    describe(".play", ()=>{
        it("should increase the turn counter", ()=>{
            game.play();
            game.play(0,0);
            expect(game.turn).toEqual(2);
        });
    });


});