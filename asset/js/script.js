let screen = document.getElementById("inpp");
let hedder = document.getElementById("hedder");
let hp=setInterval(() => {
    hedder.innerHTML="welcome to all";
    clearInterval(hp);
}, 1000);
hpp=setInterval(() => {
    hedder.innerHTML="Calculater";
    clearInterval(hpp);
}, 4000);
function calc(b){
screen.value+=b;


}
function clearDis(){
    screen.value="";
}
function eqaz(){
    let nums=screen.value;
  let result=eval(nums);
    screen.value=result;
}