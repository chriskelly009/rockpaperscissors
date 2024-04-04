function playRound(playerSelection, computerSelection) {
    // Your code here
    // Compare each assigned number to its corresponding
    // selection (rock, paper, scissors)
    if (playerSelection === 1 && computerSelection === 2) {
        console.log("You lose! Paper beats Rock!");
    }else if (playerSelection === 1 && computerSelection === 3) {
        console.log("You win! Rock beats scissors!");
    }else if (playerSelection === 2 && computerSelection === 1) {
        console.log("You win! Paper beats rock!");
    }else if (playerSelection === 2 && computerSelection === 3) {
        console.log("You lose! Scissors beat paper!");
    }else if (playerSelection === 3 && computerSelection === 1) {
        console.log("You lose! Rock beats scissors!");
    }else if (playerSelection === 3 && computerSelection === 2) {
        console.log("You lose! Scissors beats paper!");
    }else if (playerSelection === 4) {
        console.log("Please enter a valid choice");
    } else {
        console.log("tie");
    }
    
    
}

  function getComputerChoice() {
    let computerChoice = "";
    let answer= "";
    // create random number between 1 and 3
    computerChoice = Math.floor(Math.random() * 3) + 1;
    // assign random number to a variable representing
    // each choice (1-rock, 2-paper, 3-scissors)
    if(computerChoice === 1) {
        answer = 1;
    } else if (computerChoice === 2) {
        answer = 2;
    } else answer = 3;

    return answer;
  }

  function getPlayerChoice(playerSelection) {
    // assign each input choice to a number
    if(playerSelection.toLowerCase() === "rock") {
        playerSelection = 1;
    } else if (playerSelection.toLowerCase() === "paper") {
        playerSelection = 2;
    } else if (playerSelection.toLowerCase() === "scissors") {
        playerSelection = 3; //scissors
    }else {
        playerSelection = 4;
    }
    return playerSelection;
  }
  // loop through the game 5 times
  for(i = 1; i <= 5; i++) {
  const playerInput = prompt("Enter choice: ");

  const playerSelection = getPlayerChoice(playerInput);
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  }