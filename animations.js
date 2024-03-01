window.addEventListener('load', function () {
    const loader = this.document.querySelector('#loader');
    loader.classList.add('loading-hidden');
})


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
let playerChoices = ['rock', 'paper', 'scissors'];
let isAnimating = false;
let roundWinSound = new Audio('sfx/win.mp3');
let roundLoseSound = new Audio('sfx/lose.mp3');
let isPlaying = false;


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
        playerFist.src = "fist pump animations/player frames/scissors/5.png"; isAnimating = false;
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
        playerFist.src = "fist pump animations/player frames/rock/5.png"; isAnimating = false;
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
        compFist.src = "fist pump animations/computer frames/rock/5.png"; isAnimating = false;
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
        compFist.src = "fist pump animations/computer frames/scissors/5.png"; isAnimating = false;
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
        compFist.src = "fist pump animations/computer frames/paper/1.png"; isAnimating = false;
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
        playerFist.src = "fist pump animations/player frames/paper/2.png"; isAnimating = false;
    }, deltaTime * 54);

}

function animations() {
    isAnimating = true;

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

// GETTING USERNAME FOR GAME!!!!! 


let inputBox = document.querySelector('#userName');
let usernameArray = [];

inputBox.addEventListener('input', function () {
    let revealSound = new Audio("typing.mp3");
    revealSound.play()
    revealSound.volume = 0.2;

    usernameArray = inputBox.value.split('');
    if (usernameArray[0] === undefined) {
        usernameArray[0] = '‎ ';
    }
    if (usernameArray[1] === undefined) {
        usernameArray[1] = '‎ ';
    }
    if (usernameArray[2] === undefined) {
        usernameArray[2] = '‎ ';
    }
    document.querySelector('#box1').innerText = usernameArray[0];
    document.querySelector('#box2').innerText = usernameArray[1];
    document.querySelector('#box3').innerText = usernameArray[2];
});

if (isPlaying === false) {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const scene1 = document.querySelector('.getUsernameScreen')
            const scene2 = document.querySelector('.cover');
            const usernameTextBox = document.querySelector('#usernameText');

            scene1.classList.add('d-none');
            scene2.classList.remove('d-none');

            isPlaying = true;
            playGame();

            usernameTextBox.innerText = inputBox.value;

        }
    })
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
    roundWinSound.volume = 0.2;
    roundLoseSound.volume = 0.2;


    if (playerChoice === computerChoice) {
        console.log("TIE!!!");
    }

    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            compScore++;
            setTimeout(function () {
                roundLoseSound.play();
            }, deltaTime * 54)
        } else if (computerChoice === 'rock') {
            playerScore++;
            setTimeout(function () {
                roundWinSound.play();
            }, deltaTime * 54)
        }
    }
    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            compScore++;
            setTimeout(function () {
                roundLoseSound.play();
            }, deltaTime * 54)
        } else if (computerChoice === "paper") {
            playerScore++;
            setTimeout(function () {
                roundWinSound.play();
            }, deltaTime * 54)
        }
    }
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            compScore++;
            setTimeout(function () {
                roundLoseSound.play();
            }, deltaTime * 54)
        } else if (computerChoice === 'scissors') {
            playerScore++;
            setTimeout(function () {
                roundWinSound.play();
            }, deltaTime * 54)
        }
    }

    playerChoice = '';
    computerChoice = '';
}

function updateScore() {
    let playerHealth = document.querySelector('#playerHealth .pill:nth-child(' + playerScore + ')');
    let compHealth = document.querySelector('#compHealth .pill-2:nth-last-child(' + compScore + ')');

    console.log(playerHealth)

    if (playerHealth != null || playerHealth != undefined) {
        playerHealth.classList.add('won');
    }

    if (compHealth != null || compHealth != undefined) {
        compHealth.classList.add('won');
    }
}

function playGame() {
    let selectSound = new Audio("blipSelect.wav");

    if (isPlaying === true) {
        function handleRock() {
            playerChoice = playerChoices[0];
            computerChoice = getComputerChoice();
            animations();
            determineWinner(playerChoice, computerChoice);
            setTimeout(updateScore, deltaTime * 54);
            selectSound.play()
            selectSound.volume = 0.2;
        }
    
        function handlePaper() {
            playerChoice = playerChoices[1];
            computerChoice = getComputerChoice();
            animations();
            determineWinner(playerChoice, computerChoice);
            setTimeout(updateScore, deltaTime * 54);
            selectSound.play()
            selectSound.volume = 0.2;
        }
    
        function handleScissors() {
            playerChoice = playerChoices[2];
            computerChoice = getComputerChoice();
            animations();
            determineWinner(playerChoice, computerChoice);
            setTimeout(updateScore, deltaTime * 54);
            selectSound.play()
            selectSound.volume = 0.2;
        }
    }

    rockBtn.addEventListener('click', handleRock);
    paperBtn.addEventListener('click', handlePaper);
    scissorsBtn.addEventListener('click', handleScissors);

}

function turnOn() {
    const cover = document.querySelector('.getUsernameScreen');
    cover.classList.add('turn-on');
}

// User Win Stuff

function checkPlayerScore() {
    if (playerScore === 3) {
        setTimeout(function () {
            roundWinSound.pause();
            const winScreen = document.querySelector('#winScreen');
            winScreen.classList.remove('d-none');
            winScreen.classList.add('d-flex');
            const gameWinSound = new Audio('sfx/game win.mp3');
            gameWinSound.volume = 0.2;
            gameWinSound.play();

            //confetti
            var defaults = { startVelocity: 10, spread: 150, ticks: 20, zIndex: -1 };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            var myCanvas = document.createElement('canvas');
            winScreen.appendChild(myCanvas);
            myCanvas.classList.add('canvas-styling');

            myCanvas.width = winScreen.offsetWidth;
            myCanvas.height = winScreen.offsetHeight;

            window.addEventListener('resize', function (e) {
                myCanvas.width = winScreen.offsetWidth;
                myCanvas.height = winScreen.offsetHeight;
            })
            var myConfetti = confetti.create(myCanvas, {
                resize: true,
            });
            var interval = setInterval(function () {

                var particleCount = 50;
                // since particles fall down, start a bit higher than random
                myConfetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, shapes: ['square'] });
                myConfetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2, }, shapes: ['square'] });
            }, 250);
        }, deltaTime * 54)
        clearInterval(scoreCheck);
    }
}

let scoreCheck = setInterval(checkPlayerScore, 1000);




