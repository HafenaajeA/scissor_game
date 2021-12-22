

const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());
  
optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });

let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay () {
  let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}

function playRound (playerSelection, computerSelection) {
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
  let playerWinCombo = ['1-0', '0-2', '2-1'];

    if (Number(playerSelection) === computerSelection.value) {
      playerPoints.textContent = ++playerScore
      computerPoints.textContent = ++compScore
      roundResults.textContent = "Kukuta![tie]"
    }else if (playerWinCombo.includes(roundWinCombo)) {
        playerPoints.textContent = ++playerScore
        roundResults.textContent = `You win! ${playerChoice} beats ${computerSelection.choice}`;
    }else {
        computerPoints.textContent = ++compScore
        roundResults.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
    }
 checkWinner();
}

const winnerResults ={
  computer: ["You Lost the game to a computer!", 'red'],
  player: ["You Win the game!!!!", 'green'],
  tie: ["The game is a draw!", 'blue']
}

function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore){
      updateWinner('mwakukuta [tie]')
    }else{
      let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
      updateWinner(win);
    }
  }
}

function updateWinner(winner){
  roundResults.textContent = winnerResults[winner][0];
  roundResults.style.color = winnerResults[winner][1];

  optionBtn.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
}

function getPlayerChoice(e) {
  let playerSelection= (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
}







// Old code



// // console.log("hello world")

// // function computerPlay(){
// //     const rules = ['Rock', 'Paper', 'Scissors'];
// //     for(i=0; i<=rules; i++){
// //         console.log(rules)
// //     }
// // }

//  // step 3 - randomly return Rock/Paper/Scissor 
//  let choices = ['Rock', 'Paper', 'Scissors'];
//  function computerPlay () {
//    let result = choices[Math.floor(Math.random() * choices.length)];
//    return result;
//  }
//  // step 4 - function that plays 1 round R/P/S, and returns string
 
//  function playRound (playerChoice, computerChoice) {
//  let playerSelection = prompt("Choose: Rock/Paper/Scissors",'');
//  let computerSelection = computerPlay();
//  if (playerSelection.toLowerCase() == "Rock".toLowerCase()) {
//      if (computerSelection === "Scissors") {
//          ++playerScore
//        return "You win! Rock beats Scissors.";
//      }else if(computerSelection === "Paper"){
//          ++compScore
//        return "You lose! Paper beats rock.";
//      }else {
//        return "kukuta!"
//      }
//  }else if (playerSelection.toLowerCase() === "Paper".toLowerCase()) {
//    if (computerSelection === "Scissors") {
//          ++compScore
//        return "You lose! Scissors beats Paper!";
//      }else if (computerSelection === "Rock") {
//          ++playerScore
//        return "You win! Paper beats Rock!";
//      }else if(computerSelection === "Paper"){
//        return "Tie!";
//      }
//  }else if(playerSelection.toLowerCase() === "Scissors".toLowerCase()) {
//    if (computerSelection === "Rock") {
//          ++compScore
//        return "You lose! Rock beats Scissors!";
//      }else if (computerSelection === "Paper") {
//          ++playerScore
//        return "You win! Paper beats Rock!";
//      }else {
//        return "Tie!"
//      }
//  }
// }
// function game() {
//   console.log (playRound());
//   console.log (playRound());
//   console.log (playRound());
//   console.log (playRound());
//   console.log (playRound());
//   if (playerScore > compScore) {
//       return "You Win the game!!!!";
//   }else if (playerScore < compScore) {
//       return "You Lost the game to a computer!";
//   }else {
//       return "It's a Draw!";
//   }
//  }
//  let playerScore = 0;
//  let compScore = 0;
