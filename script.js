"use strict";
// DARK MODE FUNCTION





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


// FORM VALIDATION FUNCTION
function validateForm(event) {

    event.preventDefault();

    // inputs
    let fullName = document.getElementById("fullName");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let comments = document.getElementById("comments");
    let contactPhone = document.getElementById("phonePref");
    let contactEmail = document.getElementById("emailPref");
    let contactOutput = document.getElementById("contact");

    // spans
    let phoneRequiredSpan = document.querySelector(".phoneRequired");
    let emailRequiredSpan = document.querySelector(".emailRequired");

    // regular expressions
    let fullNameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/ ;
    let phoneRegex =  /^\+?[1-9]\d{1,14}$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    // hide output paragraph
    contactOutput.classList.add("hidden");

    // remove error from inputs
    fullName.classList.remove("error");
    phoneNum.classList.remove("error");
    email.classList.remove("error");
    comments.classList.remove("error");
   
    fullName.nextElementSibling.classList.add("hidden");
    phone.nextElementSibling.classList.add("hidden");
    email.nextElementSibling.classList.add("hidden");
    comments.nextElementSibling.classList.add("hidden");
    
    
    let output= "";

    let isValid = true;


    // full name validation
    if(!fullNameRegex.test(fullName.value)) {
        isValid = false;
        //add error class to input
        fullName.classList.add("error");
        //display the error message 
        fullName.nextElementSibling.classList.remove("hidden");
    }
    
    if(!phoneRegex.test(phone.value)) {
        isValid = false;
        phone.classList.add("error");
        phone.nextElementSibling.remove("hidden");
    }

    if(!emailRegex.test(email.value)) {
        isValid = false;
        email.classList.add("error");
        email.nextElementSibling.classList.remove("hidden");
    }
    
    if(comments.value === "") {
        isValid = false;
        comments.classList.add("error");
        comments.nextElementSibling.remove("hidden");
    }

    
   
}

document.getElementById("contactForm").addEventListener("submit", validateForm);