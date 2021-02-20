class Quiz{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    updateGameState(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play(){
        background("yellow");
        var resultTitle = createElement('h2');
        resultTitle.html("Result of the Quiz");
        resultTitle.position(350, 0);

        var note = createElement('h3');
        note.html("*NOTE: Contestant(s) who answered correct are highlighted in green!");
        note.position(50, 220);

        Contestant.getContestantInfo();
        if(allContestants !== undefined){
            for(var plr in allContestants){
                var correctAns = "4"
                if(correctAns === allContestants[plr].answer){
                    fill("green");
                } else{
                    fill("red");
                }
            }
        }
    }
}