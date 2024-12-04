





//PRODUCT SWITCHER 
// selecting all of the albums and button on page
let albums = document.querySelectorAll('.album');
let buttons = document.querySelectorAll('#albumButtons button');

// added event listener for clicking buttons
for (let i = 0;  i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {

        // looping through the albums
        for (let j = 0; j < albums.length; j++) {
            // show the album that has been clicked
            if (i === j) {
                albums[j].classList.add('currentItem');
                albums[j].classList.remove('hiddenItem');
            } else {
                albums[j].classList.remove('currentItem');
                albums[j].classList.add('hiddenItem');
            }
        }
     });
}