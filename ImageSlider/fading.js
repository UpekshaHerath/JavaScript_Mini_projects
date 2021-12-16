const img1 = document.getElementById("img");
const img2 = document.getElementById("zoom-img");

function fadein() {
    img1.style.opacity = 0.5;
}

function fadeout() {
    img1.style.opacity = 1;
}

function increase() {
    img2.style.width = "400px";
}

function decrease() {
    img2.style.width = "300px";
}