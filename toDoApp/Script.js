let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let arrayOfTasks = []; // Empty Array TO Store The Tasks

// Check If Tere Is Tasks In Local storage

if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Get Data From Local Storage 
getDataFromLocalStorageFrom();

// Submit Tasks
submit.onclick = function () {
    if (input.value !== "") {
        addTaskToArray(input.value); // Add Task To Array Of Tasks
        input.value = ""; //Empty Input Field
    }
};

// Click On Task Element
tasksDiv.addEventListener("click", (e) => {
    // Delete Button
    if (e.target.classList.contains("del")) {
        // Remove Task From Local Storage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        // Remove Element From Page
        e.target.parentElement.remove();
    }
    // Task Element
    if (e.target.classList.contains("task")) {
        // Toggle Completed For The Task
        toggleStatusTaskWith(e.target.getAttribute("data-id"));
        // Toggle Done Class
        e.target.classList.toggle("done");
    }
})

function addTaskToArray(tasksText) {
    // Task Data
    const task = {
        id: Date.now(),
        title: tasksText,
        completed: false
    };
    arrayOfTasks.push(task); // Push Task To Array
    addElementsToPageFrom(arrayOfTasks); // Add Task To Page
    addDataToLocalStorageFrom(arrayOfTasks); // Add Task To LOcal Storage
}

function addElementsToPageFrom(arrayOfTasks) {
    tasksDiv.innerHTML = ""; // Empty Tasks Div
    // Loop On Array Of Tasks
    arrayOfTasks.forEach((task) => {
        // Creat Main Div
        let div = document.createElement("div"); // Create Main Div
        div.className = "task";
        // Check If Task Is Done
        if (task.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        // Creat Delete Button
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        // Append Button TO Main Div
        div.appendChild(span);
        // Add Div To Tsks Container
        tasksDiv.appendChild(div);
    });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorageFrom() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let task = JSON.parse(data);
        addElementsToPageFrom(arrayOfTasks); // Add Task To Page
    }
}

function deleteTaskWith(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTasks);

}



function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == taskId) {
            arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
        }
    }
    addDataToLocalStorageFrom(arrayOfTasks);
}