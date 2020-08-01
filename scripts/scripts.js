
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

function playerSelection(){
    let x = prompt("rock, paper, scissors");
    while(true){
        if(x === "rock"){
            break;
        }else if(x === "paper"){
            break;
        }else if(x === "scissors"){
            break;
        }
         x = prompt("try again");
    }
    return x.toLocaleLowerCase();
}



function playRound(player, comp){
    console.log("Player: " + player + " Computer: " + comp);
    if(comp === "rock" && player === "scissors"){
        console.log("you lose rock beats scissors");
        return 1;
    }
    if(comp === "rock" && player === "rock"){
        console.log("Draw");
        return 0;
    }
    if(comp === "paper" && player === "rock"){
        console.log("you lose paper beats rock");
        return 1;
    }
    if(comp === "paper" && player === "paper"){
        console.log("Draw");
        return 0;
    }
    if(comp === "scissors" && player === "paper"){
        console.log("you lose scissors beats paper");
        return 1;
    }
    if(comp === "scissors" && player === "scissors"){
        console.log("Draw");
        return 0;
        
    }else{
        console.log("you win " + player + " beats " + comp);
        return 2;
    }
    

}

function score(){

}

function game(){
    let rounds = 0;
    let player = 0;
    let comp = 0;
    while(rounds < 5){
      let score = playRound(playerSelection(),computerPlay());
        rounds++;
        console.log(rounds + " of 5");
        if(score === 2){
            player++;
        }else if(score === 1){
            comp++;
        }
    }
    console.log("Player points: " + player + " " + "Computer points: " +comp )
    if(player > comp){
        console.log(`You win with ${player} points`);
    }else if(comp > player){
        console.log(`You lose with ${player} points`);
    }else{
        console.log("Draw");
    }
}
game();

