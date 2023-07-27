const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function clock() {
    const now = new Date();

    hour.innerHTML = now.getHours();
    min.innerHTML = now.getMinutes();
    sec.innerHTML = now.getSeconds();
}

setInterval(clock, 1000);
