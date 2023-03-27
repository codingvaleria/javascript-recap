const newTodoInput = document.getElementById("new-to-do-input")
const addToButton = document.getElementById("add-to-do-btn")
const todoList = document.getElementById("todo-list")


let todos = [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Finish homework" },
  { id: 3, text: "Do laundry" },
  { id: 4, text: "Go for a run" },
  { id: 5, text: "Call mom" },
];

function renderTodos() {
    // Clear current list of todos
    todoList.innerHTML = "";

    // Render each todo as a list item
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        li.dataset.id = todo.id;
    }
  )
    
}

