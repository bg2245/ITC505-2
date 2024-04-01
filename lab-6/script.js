function playGame() {
    var computerChoice = Math.random();
    if (computerChoice < 0.33) {
        computerChoice = 'rock';
    } else if (computerChoice < 0.66) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    var playerChoice = prompt("Choose: rock, paper, or scissors?").toLowerCase();

    var result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    alert("Computer chose: " + computerChoice + "\n" + "You chose: " + playerChoice + "\n" + result);
}
