const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        askName();
    } else {
        greetings();
    }
}

function greetings() {
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerHTML = `${localStorage.getItem(USER_LS)}님 안녕하세요`;
}

function askName() {
    form.classList.add("showing");
    form.addEventListener("submit", handleSubmit);
}

function handleSubmit() {
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem("currentUser", currentValue);
    greetings();

}


function init() {
    loadName();
}

init();