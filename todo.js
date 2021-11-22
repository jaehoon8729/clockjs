const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function paintToDo(text){
    console.log("paint123");
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    console.log("hand");
    event.preventDefault();
    const currnetValue = toDoInput.value;
    paintToDo(currnetValue);
}

function loadToDos(){
    console.log("load");
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
    }
}

function init(){
    console.log("init");
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();