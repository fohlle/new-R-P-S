
function computerPlay(){
    let rand = Math.floor(Math.random() * 3) + 1;

    if(rand === 1){
        return "rock";
    }else if(rand === 2){
        return "paper"
    }else{
        return "scissors";
    }
}

function playerSelection(choice){
    if(choice === "rock"){
        return "rock";
    }else if(choice == "paper"){
        return "paper";
    }else if(choice == "scissors"){
        return "scissors";
    }
}

function playRound(player, comp){
    console.log("Player: " + player + " Computer: " + comp);
    if(comp === "rock" && player === "scissors"){
        return "you lose rock beats scissors";
    }
    if(comp === "rock" && player === "rock"){
        return "Draw";
    }
    if(comp === "paper" && player === "rock"){
        return "you lose paper beats rock";
    }
    if(comp === "paper" && player === "paper"){
        return "Draw";
    }
    if(comp === "scissors" && player === "paper"){
        return "you lose scissors beats paper"
    }
    if(comp === "scissors" && player === "scissors"){
        return "Draw";
    }else{
        return "you win " + player + " beats " + comp;
    }

}

let player = playerSelection("scissors");

console.log(playRound(player, computerPlay()));