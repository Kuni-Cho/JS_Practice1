const body = document.querySelector("body");

const IMG_Number = 5;

function genRandom() {

    const number = Math.floor(Math.random() * IMG_Number);
    return number + 1;
}

function paintImage(imageNumber) {
    const image = new Image();
    image.src = `./images/${imageNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();