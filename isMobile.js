const toDolists = toDoList.querySelector("li"),
    toDospans = toDoList.querySelector("span"),
    toDoButton = toDoList.querySelector("button");

const h1 = document.querySelector("h1"),
    h3 = document.querySelector("h3");

function resize(){
    toDolists.style.fontSize="50px";
    toDospans.style.fontSize="50px";
    toDoButton.style.padding="15px 15px";
    h1.style.fontSize="100px";
    h3.style.fontSize="80px";
    toDoInput.style.height="60px";
    toDoInput.style.fontSize="50px";
    toDoInput.style.backgroundPosition="60px 50px";
}

function init(){
    if( is_mobile ) {
        resize();
    }
}
init();