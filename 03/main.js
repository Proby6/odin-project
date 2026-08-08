console.log("hello world")
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
console.log(getComputerChoice ());
console.log(getComputerChoice ());
console.log(getComputerChoice ());