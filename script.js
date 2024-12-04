
// DARK MODE FUNCTION














// GUESSING GAME FUNCTION
function guessGame(event) {
    event.preventDefault(); // prevents the default action from happening

    // store each variable used for function
    let randomNum = Math.floor(Math.random() * 10) + 1;
    let numGuess = document.getElementById("numGuess");
    let gameOutput = document.getElementById("gameOutput");
    let userGuess = parseInt(numGuess.value, 10);
    let message = document.querySelector(".message");

    // set default, so they don't show up on page load
    message.style.display = "none";
    gameOutput.innerHTML = "";
    
    //  loop if user entered a non valid number
    if(isNaN(userGuess) || userGuess < 1 || userGuess >10) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
        gameOutput.innerHTML = `Your guess was: ${userGuess}, <br>Random Number is: ${randomNum}<br>`;
    }

    // valid number loop, win or lose 
    if (userGuess === randomNum) { // win 
        gameOutput.innerHTML += "Congratulations!! You Won a Free Vinyl!!"
    } else { //lose
        gameOutput.innerHTML += "Sorry! Better Luck Next Time!"
    }
}

//event listener for submit button for the game
document.getElementById("guessGame").addEventListener("click", guessGame);


//PRODUCT SWITCHER 
// selecting all of the albums and button on page
let albums = document.querySelectorAll('.album');
let buttons = document.querySelectorAll('#albumButtons button');

// added event listener for clicking each of the buttons
for (let i = 0;  i < buttons.length; i++) { // loop through buttons
    buttons[i].addEventListener('click', function() { 

        // looping through the albums
        for (let j = 0; j < albums.length; j++) {
            // show the album that has been clicked
            if (i === j) {
                albums[j].classList.add('currentItem');
                albums[j].classList.remove('hiddenItem');
            } else { // album that is not currently showing
                albums[j].classList.remove('currentItem');
                albums[j].classList.add('hiddenItem');
            }
        }
     });
}

// FORM VALIDATION FUNCTION