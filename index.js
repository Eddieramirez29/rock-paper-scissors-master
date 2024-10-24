//Variables for buttons
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");

//Other variables
const winLable = document.getElementById("win");
const buttonPlayAgainLable = document.getElementById("buttonPlayAgain");
const scoreValue = document.getElementById("score");
let score = 0;




let computerSelection;

//Calls the rules.html file
function send()
{
    window.location.href = "./rules.html";
}

//Events for buttons
//1 is for paper, 2 is for scissors and 3 for rock
paper.addEventListener("click", function(){
    computerSelection = Math.floor(1 + Math.random() * 3);//Returns a number {1, 2, 3}

    //Possible results user vs computer
    switch(computerSelection)
    {
        case 1:
            displayResult("MATCH!");//Paper and paper(computer)
            break;
        case 2:
            displayResult("YOU LOST!");//Paper and scissors(computer)
            break;
        case 3:
            displayResult("YOU WIN!");//Paper and rock(computer)
            break;
        default:
    }

});

scissors.addEventListener("click", function() {
    computerSelection = Math.floor(1 + Math.random() * 3);//Returns a number {1, 2, 3}

    switch(computerSelection)
    {
        case 1:
            displayResult("YOU WIN!");//scissors and paper(computer)
            break;
        case 2:
            displayResult("MATCH!");//scissors and scissors(computer)
            break;
        case 3:
            displayResult("YOU LOST!");//scissors and rock(computer)
            break;
        default:
    }
});

rock.addEventListener("click", function() {
    computerSelection = Math.floor(1 + Math.random() * 3);//Returns a number {1, 2, 3}

    switch(computerSelection)
    {
        case 1:
            displayResult("YOU LOST!");//rock and paper(computer)
            break;
        case 2:
            displayResult("YOU WIN!");//rock and scissors(computer)
            break;
        case 3:
            displayResult("MATCH!");//rock and rock(computer)
            break;
        default:
    }
});

function displayResult(text)
{
    winLable.style.display = "block";
    winLable.textContent = text;
    buttonPlayAgainLable.style.display = "block";

    if(text === "YOU WIN!")
    {
        score++;
        scoreValue.textContent = score;
    }
}
