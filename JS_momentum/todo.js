const button = document.querySelector(".js-button"),
    todoList = document.querySelector(".js-toDoList"),
    checkboxForm = document.querySelector(".js-checkboxForm"),
    inputToDo = checkboxForm.querySelector("input");

const toDos = []; // todo가 추가될 때마다, 해당 array에 추가되도록 한다.

function init() {
    loadToDos();
    makeTodo();
}

function loadToDos() {
    const loadToDos = localStorage.getItem("toDos");

    if (loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);

        // for (let i = 0; i < parsedToDos.length; i++) {
        //     paintTodo(parsedToDos[i].text);
        // }

        parsedToDos.forEach(function (toDos) { //array forEach 사용하는 방법
            paintTodo(toDos.text);
        });
    }

}

function updateToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function makeTodo() {
    checkboxForm.addEventListener("submit", handleToDo);

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
    li.id = newId;

    todoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }

    toDos.push(toDoObj);
    updateToDos();
}


init();