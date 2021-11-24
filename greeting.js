const form = document.querySelector(".js-form"),
input = form.querySelector('input'),
greeting = document.querySelector(".js-greetings");

const title = document.querySelector("title");

const USER_LS ="currentUser",
SHOWING_CN = "showing";

// var is_mobile = isMobile();

// function isMobile() { 
//     var user = navigator.userAgent; 
//     var is_mobile = false; 
//     if( user.indexOf("iPhone") > -1 
//         || user.indexOf("Android") > -1 
//         || user.indexOf("iPad") > -1 
//         || user.indexOf("iPod") > -1 ){ 
//         is_mobile = true; 
//     } 
//     return is_mobile; 
// }

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currnetValue = input.value;
    paintGreeting(currnetValue); 
    saveName(currnetValue);
} 

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
    paintGreeting(currnetValue);
}


function paintGreeting(text){
    //form = document.querySelector(".js-form")
    form.classList.remove(SHOWING_CN);
    // greeting = document.querySelector(".js-greetings");
    greeting.classList.add(SHOWING_CN);
    greeting.innerText =`Hello ${text}`;
    title.innerText =`${text}`;

}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();