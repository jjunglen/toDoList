// Your Todo List App implementation will go here!

// DOM selectors for the dynmatic todo list
// DOM Selectors --
const form = document.querySelector("#todo-form");
const input = form.querySelector("#todo-input");
const button = form.querySelector(".add-btn");
const errorMessage = form.querySelector("#error-message");  
// DOM selectors for the dynmatic todo list
const toDoList = document.querySelector("#todo-list");

let todos = [];

form.addEventListener("submit", event => {
    // Stops the default action of the submit button
    event.preventDefault();

    // input value
    const value = input.value.trim();

    if (!value && value.length < 3) {
        errorMessage.textContent = "Please enter a valid todo"
    }
})