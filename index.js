
var nodeList=document.querySelectorAll("button");
for(var i=0;i<nodeList.length;i++){
    nodeList[i].addEventListener("click",function (){
        var buttonInnerHTML=this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var crash =new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "k":
                var kick=new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "l":
                var snare=new Audio('sounds/snare.mp3');
                snare.play();
                break;
            default:
                break;
        }
        ButtonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keydown",function(event){
    ButtonAnimation(event.key);
    var buttonkey=event.key;
        switch (buttonkey) {
            case "w":
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var crash =new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "k":
                var kick=new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "l":
                var snare=new Audio('sounds/snare.mp3');
                snare.play();
                break;
            default:
                break;
        }
});
// var audio= new Audio('sounds/tom-1.mp3');
// audio.play();
function ButtonAnimation(value){
    document.querySelector("." + value).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("." + value).classList.remove("pressed");
    },100);
}