const button = document.querySelector(".js-button"),
    todoList = document.querySelector(".js-toDoList"),
    checkboxForm = document.querySelector(".js-checkboxForm"),
    inputToDo = checkboxForm.querySelector("input");

const toDos = []; // todo가 추가될 때마다, 해당 array에 추가되도록 한다.

init();

function init() {
    loadToDos();
    makeTodo();
}

function checkOutParent(e) {
    const removeTodo = e.target.parentElement;
    todoList.removeChild(removeTodo);
    removeList(removeTodo.id);
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function removeList(idx) {
    toDos.splice(idx - 1, 1);
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
    delBtn.addEventListener("click", checkOutParent);

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

