//This will be the number of button to click (randomly between 2 and 10)
let num = Math.round(Math.random() * 8) + 2;
let arr = [];

document.getElementById("start").addEventListener("click", function(){
    document.getElementById("start").remove();
    document.getElementById("instructions").innerText= "You have 8 seconds to click";

    function game(num){
        for(let i = 1; i <= num; i++){
            let gameBoard = document.getElementById("main");
            let button = document.createElement("button");
            button.id = i;
            button.className = "clickMe";
            button.innerText = "Click me!";
            button.style.top = `${Math.random() * 350}px`;
            button.style.left = `${Math.random() * 400}px`;
            button.addEventListener("click", press);
            gameBoard.appendChild(button);
        }
    
        function press(event){
            let buttonId = event.target.id;
            arr.push(buttonId);
            document.getElementById(buttonId).remove();
        }
    }

    game(num);
    
    setTimeout(function(){


        console.log(arr);
        if (arr.length === num){
            document.getElementById("instructions").innerText= "You won!";
        } else {
            document.getElementById("instructions").innerText= "You lost... Press F5 and try again!";
        }
    }, 8000);
})

