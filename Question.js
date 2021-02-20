class Question{
    constructor(){
        this.title = createElement('h2');
        this.nameInput = createInput("Enter your name here...");
        this.answerInput = createInput("Enter Correct Answer No.");
        this.button = createButton("Submit");
    }

    hide(){
        this.title.hide();
        this.nameInput.hide();
        this.answerInput.hide();
        this.button.hide();
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);

        var question = createElement('h3')
        question.html("Question:- I come from a mine and always get surrounded by wood. Everyone uses me. What am I?");
        question.position(50, 80);

        var option1 = createElement('h4');
        option1.html("1: Nail ");
        option1.position(50, 120);

        var option2 = createElement('h4');
        option2.html("2: Campfire ");
        option2.position(50, 140);

        var option3 = createElement('h4');
        option3.html("3: Pencil ");
        option3.position(50, 160);
        
        var option4 = createElement('h4');
        option4.html("4: Pencil lead");
        option4.position(50, 180);

        this.nameInput.position(50, 250);
        this.answerInput.position(350, 250);
        this.button.position(250, 300);

        this.button.mousePressed(() =>{
            this.title.hide();
            this.nameInput.hide();
            this.answerInput.hide();
            this.button.hide();
            contestant.answer = this.answerInput.value();
            contestant.name = this.nameInput.value();
            contestantCount += 1;
            //console.log("Done!");
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }
}