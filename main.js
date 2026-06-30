let input = document.querySelector("#task-input");
let add = document.querySelector("#add-button");
let appDiv = document.querySelector(".app");

let tasks = []; 

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let stored = localStorage.getItem("tasks");
  if (stored) {
    tasks = JSON.parse(stored);
    tasks.forEach(function (taskObj) {
      renderTask(taskObj);
    });
  }
}


function renderTask(taskObj) {
  let div = document.createElement("div");
  div.classList.add("task");

  let taskDiv = document.createElement("div");
  taskDiv.classList.add("left");

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = taskObj.completed;

  let span = document.createElement("span");
  span.innerText = taskObj.text;
  if (taskObj.completed) {
    span.style.textDecoration = "line-through";
  }

  checkBox.addEventListener("change", function () {
    span.style.textDecoration = checkBox.checked ? "line-through" : "none";
    taskObj.completed = checkBox.checked;
    saveTasks();
  });

  let del = document.createElement("button");
  del.innerText = "DELETE";
  del.classList.add("delete");

  del.addEventListener("click", function () {
    div.remove();
    tasks = tasks.filter(function (t) {
      return t !== taskObj;
    });
    saveTasks();
  });

  taskDiv.appendChild(checkBox);
  taskDiv.appendChild(span);
  div.appendChild(taskDiv);
  div.appendChild(del);
  appDiv.appendChild(div);
}


function addTask() {
  if (input.value.trim() === "") {
    alert("Enter the task");
    return;
  }

  let taskObj = { text: input.value.trim(), completed: false };
  tasks.push(taskObj);
  renderTask(taskObj);
  saveTasks();

  input.value = "";
  input.focus();
}

add.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});

loadTasks();