// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)


let time = document.getElementById("time");
let result = document.getElementById("result");
let body = document.querySelector("body");
let victory = false;

let timeAmount = Math.random() * 2 + 3;
time.innerText = timeAmount;

function clickEvent(){
    victory = true;
    body.removeEventListener("click", clickEvent);
}

body.addEventListener("click", clickEvent);

setTimeout(function(){
    if (victory === true){
        result.innerText = "You've won!!!";
        body.removeEventListener("click", clickEvent);
    } else {
        result.innerText="You were too slow...";
        body.removeEventListener("click", clickEvent);
    }
}, timeAmount * 1000);

