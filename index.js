//Variables for buttons
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");

//Other variables
const winningLabel = document.getElementById("win");
const buttonPlayAgainButton = document.getElementById("buttonPlayAgain");
const scoreValue = document.getElementById("score");
let score = 0;
let selectedItem = "";




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
    selectedItem = "paper";
    //Possible results user vs computer
    switch(computerSelection)
    {
        case 1:
            displayResult("MATCH!",selectedItem);//Paper and paper(computer)
            break;
        case 2:
            displayResult("YOU LOST!",selectedItem);//Paper and scissors(computer)
            break;
        case 3:
            displayResult("YOU WIN!",selectedItem);//Paper and rock(computer)
            break;
        default:
    }

});

scissors.addEventListener("click", function() {
    computerSelection = Math.floor(1 + Math.random() * 3);//Returns a number {1, 2, 3}
    selectedItem = "scissors";
    switch(computerSelection)
    {
        case 1:
            displayResult("YOU WIN!",selectedItem);//scissors and paper(computer)
            break;
        case 2:
            displayResult("MATCH!",selectedItem);//scissors and scissors(computer)
            break;
        case 3:
            displayResult("YOU LOST!",selectedItem);//scissors and rock(computer)
            break;
        default:
    }
});

rock.addEventListener("click", function() {
    computerSelection = Math.floor(1 + Math.random() * 3);//Returns a number {1, 2, 3}
    selectedItem = "rock";
    switch(computerSelection)
    {
        case 1:
            displayResult("YOU LOST!",selectedItem);//rock and paper(computer)
            break;
        case 2:
            displayResult("YOU WIN!", selectedItem);//rock and scissors(computer)
            break;
        case 3:
            displayResult("MATCH!", selectedItem);//rock and rock(computer)
            break;
        default:
    }
});

buttonPlayAgainButton.addEventListener("click", function()
{
    winningLabel.style.display = "none";
    buttonPlayAgainButton.style.display = "none";
    scoreValue.textContent = "0";
    score = 0;
});

function displayResult(text, selectedItem)
{
    // After one and a half seconds, it disappears
    if(selectedItem === "paper" && text === "YOU WIN!")
    {
        scissors.style.boxShadow = "none";
        scissors.style.border = "15px solid hsl(54, 90%, 19%)";
        rock.style.boxShadow = "none";
        rock.style.border = "15px solid hsl(1, 94%, 25%)";
        winningLabel.textContent = text;
        winningLabel.style.display = "block";
        buttonPlayAgainButton.style.display = "block";
        setTimeout(function()
        {
            winningLabel.style.display = "none";
            scissors.style.boxShadow = "2px 2px 5px gray";
            scissors.style.border = "15px solid hsl(54, 93%, 52%)";
            rock.style.boxShadow = "2px 2px 5px gray";
            rock.style.border = "15px solid hsl(1, 92%, 59%)"
        }, 1500);
    }
    else if(selectedItem === "scissors" && text === "YOU WIN!")
    {
        paper.style.boxShadow = "none";
        paper.style.border = "15px solid hsl(214, 90%, 20%)";
        rock.style.boxShadow = "none";
        rock.style.border = "15px solid hsl(1, 94%, 25%)";
        winningLabel.textContent = text;
        winningLabel.style.display = "block";
        buttonPlayAgainButton.style.display = "block";
        setTimeout(function()
        {
            winningLabel.style.display = "none";
            paper.style.boxShadow = "2px 2px 5px gray";
            paper.style.border = "15px solid hsl(214, 85%, 34%)";
            rock.style.boxShadow = "2px 2px 5px gray";
            rock.style.border = "15px solid hsl(1, 92%, 59%)";
        }, 1500);
    }
    else if(selectedItem === "rock" && text === "YOU WIN!")
    {
        paper.style.boxShadow = "none";
        paper.style.border = "15px solid hsl(214, 90%, 20%)";
        scissors.style.boxShadow = "none";
        scissors.style.border = "15px solid hsl(54, 90%, 19%)";
        winningLabel.textContent = text;
        winningLabel.style.display = "block";
        buttonPlayAgainButton.style.display = "block";
        setTimeout(function()
        {
            winningLabel.style.display = "none";
            paper.style.boxShadow = "2px 2px 5px gray";
            paper.style.border = "15px solid hsl(214, 85%, 34%)";
            scissors.style.boxShadow = "2px 2px 5px gray";
            scissors.style.border = "15px solid hsl(54, 93%, 52%)";
        }, 1500);
    }

    winningLabel.textContent = text;
    winningLabel.style.display = "block";
    setTimeout(function()
    {
        winningLabel.style.display = "none";
    }, 1500);
    
    if(text === "YOU WIN!")
    {
        score++;
        scoreValue.textContent = score;
    }
}
