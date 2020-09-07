const button = document.querySelector(".js-button"),
    todoList = document.querySelector(".js-toDoList"),
    checkboxForm = document.querySelector(".js-checkboxForm"),
    inputToDo = checkboxForm.querySelector("input");

const toDos = []; // todo가 추가될 때마다, 해당 array에 추가되도록 한다.

function init() {
    makeTodo();

}

function updateToDos() {
    localStorage.setItem("toDos", toDos);
}

function makeTodo() {
    checkboxForm.addEventListener("submit", handleToDo);
    updateToDos();
}

function handleToDo() {
    event.preventDefault();
    const currentValue = inputToDo.value;
    paintTodo(currentValue);
    inputToDo.value = "";

}

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    delBtn.innerText = "❌";

    li.appendChild(span);
    li.appendChild(delBtn);

    todoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }

    toDos.push(toDoObj);
}


init();