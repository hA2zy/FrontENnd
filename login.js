const openButton = document.querySelector(".open");
const container = document.querySelector(".container");
const closeButton = document.querySelector(".close");
const h1 = document.querySelector("h1");

openButton.addEventListener("click", () => {
    container.style.display = "flex",
    openButton.style.display = "none";
    h1.style.display = "none";
});