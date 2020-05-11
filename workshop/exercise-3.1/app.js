
for(let i = 1 ; i <= 20; i++){
    let buttonSection = document.getElementById("buttonLand");
    let button = document.createElement("button");
    button.id = i;
    buttonSection.appendChild(button);
    button.addEventListener("click", pressed);
}

function pressed(press){
    let buttonId = event.target.id;
    document.getElementById(buttonId).classList.add("pressed");
}