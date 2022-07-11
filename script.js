function computerPlay() {
    let cMove = Math.floor(Math.random() * 3);
    console.log(cMove)
    return cMove
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 0 && playerSelection == 1) {
        return 1;
    }
    else if (computerSelection == 0 && playerSelection == 0) {
        return 0;
    }
    else if (computerSelection == 0 && playerSelection == 2) {
        return 2;
    }
    else if (computerSelection == 1 && playerSelection == 0) {
        return 2;
    }
    else if (computerSelection == 1 && playerSelection == 1) {
        return 0;
    }
    else if (computerSelection == 1 && playerSelection == 2) {
        return 1;
    }
    else if (computerSelection == 2 && playerSelection == 0) {
        return 1;
    }
    else if (computerSelection == 2 && playerSelection == 1) {
        return 2;
    }
    else return 0;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let pMove = prompt("Make your move (Rock-0, Paper-1, Scissor-2)")
        let result = playRound(pMove, computerPlay());

        if (result == 0) {
            console.log("Tie")
        }
        else if (result == 1) {
            console.log("You Won")
        }
        else console.log("You Lost")
    }
}


game()
