// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
let body = document.querySelector("body");
let result = document.getElementById("result");
let victory = false;

function clickEvent(){
    victory = true;
    body.removeEventListener("click", clickEvent);
}

body.addEventListener("click", clickEvent);

setTimeout(function (){
    if (victory === true) {
        result.innerText = "You've won!!!";
        body.removeEventListener("click", clickEvent);
    } else {
        result.innerText = "Too slow...";
        body.removeEventListener("click", clickEvent);
    }
}, 1000)