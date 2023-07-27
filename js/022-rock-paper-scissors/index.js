const btns = document.querySelectorAll("button");

const result = ["가위", "바위", "보"];

const game = (user, computer) => {
  const li = document.createElement("li");
  if (user === computer) {
    console.log("No win!");
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        console.log("user win!");
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        console.log("computer win!");
        break;
    }
  }
};

const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

btns.forEach((btns) => {
  btns.addEventListener("click", play);
});

Math.random();
