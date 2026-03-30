// Your Todo List App implementation will go here!

// DOM selectors for the dynmatic todo list
// DOM Selectors --
const form = document.querySelector("#todo-form");
const input = form.querySelector("#todo-input");
const button = form.querySelector(".add-btn");
const errorMessage = form.querySelector("#error-message");
// DOM selectors for the dynmatic todo list
const todoList = document.querySelector("#todo-list");

let todos = [];

document.addEventListener("DOMContentLoaded", () => {
  loadTodos();
  render();

  form.addEventListener("submit", handleSubmit);
  todoList.addEventListener("click", handleClick);
});

function handleSubmit(event) {
  // stops default action
  event.preventDefault();

  const todoText = input.value.trim();
  if (!todoText || todoText.length < 3) {
    showErrorMessage("Enter a three character length todo item");
    return;
  }

  hideErrorMessage();

  // creates a validated todo
  addTodo(todoText);
  input.value = "";
}

function handleClick(event) {
  const closest = event.target.closest(".todo-item");
  if (!closest) return;

  const id = closest.dataset.id;
  if (event.target.classList.contains("todo-checkbox")) {
    toggleTodo(id);
  }

  if (event.target.classList.contains("delete-btn")) {
    deleteTodo(id);
  }
}

function showErrorMessage(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add("show");
  setTimeout(hideErrorMessage, 3000);
}

function hideErrorMessage() {
  errorMessage.classList.remove("show");
}

function addTodo(text) {
  const newTodo = {
    id: Date.now().toString(),
    text: text,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  todos.push(newTodo);
  renderNewTodo();
}

function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
  saveToLocalStorage();
  render();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveToLocalStorage();
  render();
}

function renderNewTodo() {
  saveToLocalStorage();
  render();
}

function render() {
  // Edge case
  if (todos.length === 0) {
    todoList.innerHTML = `<li class="empty-state">Please add a todo above!</li>`;
    return;
  }

  // Clear existing items
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const newTodo = createTodo(todo);
    todoList.appendChild(newTodo);
  });
}

// create the todos
function createTodo(todo) {
  // create the li element
  const li = document.createElement("li");
  li.className = "todo-item";

  li.classList.toggle("completed", todo.completed);
  li.dataset.id = todo.id;

  li.innerHTML = `
        <input type="checkbox"
               class="todo-checkbox"
               ${todo.completed ? "checked" : ""}
               aria-label="Mark '${todo.text}' as ${todo.completed ? "incomplete" : "complete"}">
        <span class="todo-text"></span>
        <div class="todo-actions">
            <button class="delete-btn" aria-label="Delete '${todo.text}'">Delete</button>
        </div>
    `;

  li.querySelector(".todo-text").textContent = todo.text;
  return li;
}

// save to local storage
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Load Todo to local storage
function loadTodos() {
  const todosItems = localStorage.getItem("todos");
  if (todosItems) {
    todos = JSON.parse(todosItems);
  }
}

function updateCount() {
    const remaining = todos.filter((todo) => !todo.completed).length;
    document.querySelector("#todo-count").textContent = `${remaining} items remaining`;
}