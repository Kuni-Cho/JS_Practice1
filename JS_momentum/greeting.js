const greetingForm = document.querySelector(".form"),
    inputName = document.querySelector(".inputName"),
    greetings = document.querySelector(".greeting");
init();

function init() {
    checkName();
}

function checkName() {

    const name = localStorage.getItem("name")

    if (name != null) {
        const greetingWords = `Hello, ${name} !`;
        const greetingMsg = document.createElement("h5");
        greetingMsg.innerHTML = greetingWords;
        greetings.appendChild(greetingMsg);
        greetings.classList.add("showing");

    } else {
        greetingForm.addEventListener("submit", saveName)
        greetingForm.classList.add("showing");
    }
}

function saveName(event) {
    event.preventDefault();
}