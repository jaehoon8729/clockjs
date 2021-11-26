const form = document.querySelector(".js-form"),
input = form.querySelector('input'),
greeting = document.querySelector(".js-greetings");
const h4 = document.querySelector("h4");

const title = document.querySelector("title");

const USER_LS ="currentUser",
SHOWING_CN = "showing";

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
    if(is_mobile){
        input.style.height="60px";
        input.style.fontSize="50px";
        input.style.backgroundPosition="60px 50px";
    }
    form.addEventListener("submit",handleSubmit);
}


function paintGreeting(text){
    //form = document.querySelector(".js-form")
    form.classList.remove(SHOWING_CN);
    // greeting = document.querySelector(".js-greetings");
    greeting.classList.add(SHOWING_CN);
    if(is_mobile){
        greeting.innerText =`Hello ${text}`;
        h4.style.fontSize="80px"
        title.innerText =`${text}`;
    }else{
        greeting.innerText =`Hello ${text}`;
        title.innerText =`${text}`;
    }
    

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