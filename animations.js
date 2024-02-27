let playerFist = document.querySelector(".fist");
let compFist = document.querySelector(".comp-fist");
let deltaTime = 65;
let compScore = 0;
let playerChoice = '';
let playerScore = 0;
let computerChoice = getComputerChoice();
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

function shake() {
    let fistShakeAnim = setInterval(function () {
        // Fist going up
        playerFist.src = "fist pump animations/player frames/rock/6.png";
        setTimeout(function () {
            playerFist.src = "fist pump animations/player frames/rock/5.png";
        }, deltaTime);
        setTimeout(function () {
            playerFist.src = "fist pump animations/player frames/rock/4.png";
        }, deltaTime * 2);
        setTimeout(function () {
            playerFist.src = "fist pump animations/player frames/rock/3.png";
        }, deltaTime * 3);
        setTimeout(function () {
            playerFist.src = "fist pump animations/player frames/rock/2.png";
        }, deltaTime * 4);
        setTimeout(function () {
            playerFist.src = "fist pump animations/player frames/rock/1.png";
        }, deltaTime * 5);
        // Fist going down
        setTimeout(function () {
            playerFist.src = "fist pump animations/player frames/rock/2.png";
        }, deltaTime * 6);
        setTimeout(function () {
            playerFist.src = "fist pump animations/player frames/rock/3.png";
        }, deltaTime * 7);
        setTimeout(function () {
            playerFist.src = "fist pump animations/player frames/rock/4.png";
        }, deltaTime * 7);
        setTimeout(function () {
            playerFist.src = "fist pump animations/player frames/rock/5.png";
        }, deltaTime * 8);
        setTimeout(function () {
            playerFist.src = "fist pump animations/player frames/rock/6.png";
        }, deltaTime * 9);
    }, deltaTime * 11);

    setTimeout(function () {
        clearInterval(fistShakeAnim);
    }, deltaTime * 33);

    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/5.png";
    }, deltaTime * 45);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/4.png";
    }, deltaTime * 46);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/3.png";
    }, deltaTime * 47);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/2.png";
    }, deltaTime * 48);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/1.png";
    }, deltaTime * 49);
}

function playerScissors() {
    shake();
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/scissors/1.png";
    }, deltaTime * 50);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/scissors/2.png";
    }, deltaTime * 51);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/scissors/3.png";
    }, deltaTime * 52);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/scissors/4.png";
    }, deltaTime * 53);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/scissors/5.png";
    }, deltaTime * 54);
}
function playerRock() {
    shake();
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/1.png";
    }, deltaTime * 50);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/2.png";
    }, deltaTime * 51);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/3.png";
    }, deltaTime * 52);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/4.png";
    }, deltaTime * 53);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/5.png";
    }, deltaTime * 54);
}

function compShake() {
    let fistShakeAnim = setInterval(function () {
        // Fist going up
        compFist.src = "fist pump animations/computer frames/rock/6.png";
        setTimeout(function () {
            compFist.src = "fist pump animations/computer frames/rock/5.png";
        }, deltaTime);
        setTimeout(function () {
            compFist.src = "fist pump animations/computer frames/rock/4.png";
        }, deltaTime * 2);
        setTimeout(function () {
            compFist.src = "fist pump animations/computer frames/rock/3.png";
        }, deltaTime * 3);
        setTimeout(function () {
            compFist.src = "fist pump animations/computer frames/rock/2.png";
        }, deltaTime * 4);
        setTimeout(function () {
            compFist.src = "fist pump animations/computer frames/rock/1.png";
        }, deltaTime * 5);
        // Fist going down
        setTimeout(function () {
            compFist.src = "fist pump animations/computer frames/rock/2.png";
        }, deltaTime * 6);
        setTimeout(function () {
            compFist.src = "fist pump animations/computer frames/rock/3.png";
        }, deltaTime * 7);
        setTimeout(function () {
            compFist.src = "fist pump animations/computer frames/rock/4.png";
        }, deltaTime * 7);
        setTimeout(function () {
            compFist.src = "fist pump animations/computer frames/rock/5.png";
        }, deltaTime * 8);
        setTimeout(function () {
            compFist.src = "fist pump animations/computer frames/rock/6.png";
        }, deltaTime * 9);
    }, deltaTime * 11);

    setTimeout(function () {
        clearInterval(fistShakeAnim);
    }, deltaTime * 33);

    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/5.png";
    }, deltaTime * 45);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/4.png";
    }, deltaTime * 46);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/3.png";
    }, deltaTime * 47);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/2.png";
    }, deltaTime * 48);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/1.png";
    }, deltaTime * 49);
}

function compRock() {
    compShake();
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/1.png";
    }, deltaTime * 50);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/2.png";
    }, deltaTime * 51);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/3.png";
    }, deltaTime * 52);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/4.png";
    }, deltaTime * 53);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/5.png";
    }, deltaTime * 54);
}

function compScissors() {
    compShake();
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/scissors/1.png";
    }, deltaTime * 50);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/scissors/2.png";
    }, deltaTime * 51);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/scissors/3.png";
    }, deltaTime * 52);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/scissors/4.png";
    }, deltaTime * 53);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/scissors/5.png";
    }, deltaTime * 54);
}

function compPaper() {
    compShake();
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/1.png";
    }, deltaTime * 50);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/2.png";
    }, deltaTime * 51);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/rock/3.png";
    }, deltaTime * 52);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/paper/2.png";
    }, deltaTime * 53);
    setTimeout(function () {
        compFist.src = "fist pump animations/computer frames/paper/1.png";
    }, deltaTime * 54);
}

function playerPaper() {
    shake();
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/1.png";
    }, deltaTime * 50);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/2.png";
    }, deltaTime * 51);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/rock/3.png";
    }, deltaTime * 52);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/paper/1.png";
    }, deltaTime * 53);
    setTimeout(function () {
        playerFist.src = "fist pump animations/player frames/paper/2.png";
    }, deltaTime * 54);

}

function animations() {
    switch (computerChoice) {
        case "rock":
            compRock();
            break;
        case "paper":
            compPaper();
            break;
        case "scissors":
            compScissors();
            break;
    }

    switch (playerChoice) {
        case "rock":
            playerRock();
            break;
        case "paper":
            playerPaper();
            break;
        case "scissors":
            playerScissors();
            break;
    }
}

function getComputerChoice() {
    const numba = Math.floor(Math.random() * 3);

    switch (numba) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        console.log("TIE!!!");
    }

    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            compScore++;
        } else if (computerChoice === 'rock') {
            playerScore++;
        }
    }
    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            compScore++;
        } else if (computerChoice === "paper") {
            playerScore++;
        }
    }
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            compScore++;
        } else if (computerChoice === 'scissors') {
            playerScore++;
        }
    }

    playerChoice = '';
    computerChoice = '';
}

function playGame() {
    function handleRock() {
        playerChoice = 'rock';
        computerChoice = getComputerChoice();
        animations();
        determineWinner(playerChoice, computerChoice);
        console.log(playerScore);
        console.log(compScore);
    }

    function handlePaper() {
        playerChoice = 'paper';
        computerChoice = getComputerChoice();
        animations();
        determineWinner(playerChoice, computerChoice);
        console.log(playerScore);
        console.log(compScore);
    }

    function handleScissors() {
        playerChoice = 'scissors';
        computerChoice = getComputerChoice();
        animations();
        determineWinner(playerChoice, computerChoice);
        console.log(playerScore);
        console.log(compScore);
    }

    rockBtn.addEventListener('click', handleRock);
    paperBtn.addEventListener('click', handlePaper);
    scissorsBtn.addEventListener('click', handleScissors);
    
}

playGame();