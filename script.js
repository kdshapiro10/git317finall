"use strict";
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
    gameOutput.innerHTML  = "";
    numGuess.classList.remove("error");
    
    //  loop if user entered a non valid number
    if(isNaN(userGuess) || userGuess < 1 || userGuess >10) {
        message.style.display = "block";
        numGuess.classList.add("error");
    } else {
        message.style.display = "none";
        gameOutput.innerHTML = `Your guess is: ${userGuess} <br>Random Number is: ${randomNum}<br>`; //only displayed once user has inputted a number that is between 1 and 10

        // valid number loop, win or lose 
        if (userGuess === randomNum) { // win 
            gameOutput.innerHTML += "Congratulations!! You Won a Free Vinyl!!"
        } else { //lose
            gameOutput.innerHTML += "Sorry! Better Luck Next Time!"
        }
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

function validateForm(event) {

    event.preventDefault();

    let fullName = document.getElementById("fullName");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let comments = document.getElementById("comments");
    let contactPhone = document.getElementById("phonePref");
    let contactEmail = document.getElementById("emailPref");
    let contactOutput = document.getElementById("contact");

    let fullNameError =  fullName.nextElementSibling;
    let phoneError = phone.nextElementSibling;
    let emailError = email.nextElementSibling;
    let commentsError = comments.nextElementSibling;

    let phoneRequiredSpan = document.querySelector(".phoneRequired");
    let emailRequiredSpan = document.querySelector(".emailRequired");

    let method = "";


    contactOutput.classList.add("hidden");

    fullName.classList.add("error");
    phoneNum.classList.remove("error");
    email.classList.remove("error");
    comments.classList.remove("error");
   

    ;

    contactOutput = "";

    let isValid = true;
}