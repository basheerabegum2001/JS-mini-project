const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks on page load
window.onload = loadTasks;

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    createTaskElement(taskText);
    saveTask(taskText);

    taskInput.value = "";
}

function createTaskElement(text) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="delete">X</button>
    `;

    // Mark as done on click
    li.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete")) return;
        li.classList.toggle("done");
        updateLocalStorage();
    });

    // Delete task
    li.querySelector(".delete").addEventListener("click", function() {
        li.remove();
        updateLocalStorage();
    });

    taskList.appendChild(li);
}

function saveTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: text, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTaskElement(task.text);
        if (task.done) {
            const lastLi = taskList.lastElementChild;
            lastLi.classList.add("done");
        }
    });
}

function updateLocalStorage() {
    const liElements = document.querySelectorAll("li");
    let tasks = [];

    liElements.forEach(li => {
        tasks.push({
            text: li.querySelector(".task-text").textContent,
            done: li.classList.contains("done")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}