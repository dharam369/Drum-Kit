
var ln = document.querySelectorAll(".drum").length;

for(var i = 0; i <ln ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        soundKey(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
          
    });  
}

document.addEventListener("keypress", function (event) {
    soundKey(event.key);
    buttonAnimation(event.key);
});


function soundKey(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-4.mp3");
            tom2.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/snare.mp3");
            tom2.play();
            break;
        case "k":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.play();
            break;
        case "l":
            var tom2 = new Audio("sounds/kisk-bass.mp3");
            tom2.play();
            break;
        default: console.log(key);
    }
}


function buttonAnimation(key) {
    var currentKey = document.querySelector("." + key);
    currentKey.classList.add("pressed");
    setTimeout(function () {
        currentKey.classList.remove("pressed")
    }, 100);
}