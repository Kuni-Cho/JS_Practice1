const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    clockTitle.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${minute < 10 ? `0${minute}` : `${minute}`}:${second < 10 ? `0${second}` : `${second}`}`;
}


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();

