
function getComputerChoice(){
    let result;
    result = Math.floor(Math.random() * 3);
    if (result == 0){
        return "rock";
    }
    if (result == 1){
        return "paper";
    }
    if (result == 2){
        return "scissors";
    }
    else {return "error";}
}

function getHumanChoice(){
    let userInput = prompt("input your choice", "rock/paper/scissors").toLowerCase();
    return (userInput);
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    function playAround(humanChoice, computerChoice){
    if(humanChoice !== "rock" && humanChoice !== "paper" && 
  humanChoice !== "scissors"){
        console.error("Invalid choice!");
        return;
    }
    if(humanChoice == "rock"){
        switch(computerChoice){
            case "rock": console.log("no winner is declared");
            console.log(`你的得分：${humanScore} 电脑的得分：${computerScore}`);
            break;
            case "paper": console.log("u lose...");
            computerScore = computerScore + 1;
            console.log(`你的得分：${humanScore} 电脑的得分：${computerScore}`);
            break;
            case "scissors": console.log('u win!');
            humanScore = humanScore + 1;
            console.log(`你的得分：${humanScore} 电脑的得分：${computerScore}`);
            break;
        }
    }
    if(humanChoice == "paper"){
        switch(computerChoice){
            case "paper": console.log("no winner is declared");
            console.log(`你的得分：${humanScore} 电脑的得分：${computerScore}`);
            break;
            case "scissors": console.log("u lose...");
            computerScore = computerScore + 1;
            console.log(`你的得分：${humanScore} 电脑的得分：${computerScore}`);
            break;
            case "rock": console.log('u win!');
            humanScore = humanScore + 1;
            console.log(`你的得分：${humanScore} 电脑的得分：${computerScore}`);
            break;
        }
    }
    if(humanChoice == "scissors"){
        switch(computerChoice){
            case "scissors": console.log("no winner is declared");
            console.log(`你的得分：${humanScore} 电脑的得分：${computerScore}`);
            break;
            case "rock": console.log("u lose...");
            computerScore = computerScore + 1;
            console.log(`你的得分：${humanScore} 电脑的得分：${computerScore}`);
            break;
            case "paper": console.log('u win!');
            humanScore = humanScore + 1;
            console.log(`你的得分：${humanScore} 电脑的得分：${computerScore}`);
            break;
        }
    }
    
    
}
for(let i = 0; i < 5; i++){
    playAround(getHumanChoice(), getComputerChoice());
}
}
playGame();