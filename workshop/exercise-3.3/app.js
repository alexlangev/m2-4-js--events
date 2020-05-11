for(let i = 1; i <= 20; i++) {
    let buttonLand = document.getElementById("fieldOfButtons");
    let button = document.createElement("button");
    button.innerText = i;    
    button.id = i;
    button.style.top = `${Math.random() * 100}vh`;
    button.style.left = `${Math.random() * 100}vw`;
    button.addEventListener("click", press);
    buttonLand.appendChild(button);
}

function press(event){
    let buttonId = event.target.id;
    document.getElementById(buttonId).classList.add("pressed");
}