const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (event) => {
  const target = event.target.parentElement;
  const targetId = parseInt(target.id);

  todos = todos.filter((todo) => todo.id !== targetId);
  save();

  target.remove();
};

const toggleDone = (event) => {
  const target = event.target.closest("li");
  const targetId = parseInt(target.id);

  const todo = todos.find((todo) => todo.id === targetId);
  if (todo) {
    todo.completed = !todo.completed;
    target.classList.toggle("completed", todo.completed);
    const checkbox = target.querySelector(".checkbox");
    checkbox.checked = todo.completed;
    save();
  }
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.checked = todo.completed;

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(checkbox);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
    li.classList.toggle("completed", todo.completed);
    li.addEventListener("click", toggleDone);
  }
};

const handler = (event) => {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
    completed: false,
  };

  todos.push(todo);
  addItem(todo);
  save();

  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });

    todos = userTodos;
  }
};

init();

form.addEventListener("submit", handler);
