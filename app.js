let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const answers = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return answers[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Tie!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return 'You lose! Paper beats Rock.'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You win! Rock beats Scissors.'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You win! Paper beats Rock.'
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Tie!'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'You lose! Scissors beats Paper.'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return 'You lose! Rock beats Scissors.'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You win! Scissors beats Paper.'
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Tie!'
    }

    return 'Error!'
}

function game() {
    while (playerScore < 5 || computerScore < 5) {
        playerSelection = prompt("Please select! (Rock, Paper, Scissors)");
        console.log(playRound(playerSelection, getComputerChoice()));
        console.log('Player: ' + playerScore);
        console.log('Computer: ' + computerScore);
    }
    if (playerScore == 5) {
        console.log('You Win!')
    } else {
        console.log('You Lose!');
    }
}

game();