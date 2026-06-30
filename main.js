let input = document.querySelector("#task-input");
let add = document.querySelector("#add-button");

add.addEventListener("click", function () {

    if(input.value===""){
        alert("Enter the task");
    }
  
  if (input.value.trim() === "") return;
  let div = document.createElement("div");
  div.classList.add("task");

  let taskDiv = document.createElement("div");
  taskDiv.classList.add("left");

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let span = document.createElement("span");
  span.innerText = input.value;

  checkBox.addEventListener("click", function () {
    span.style.textDecoration = "line-through";
  });

  let del = document.createElement("button");
  del.innerText = "DELETE";
  del.classList.add("delete");

  del.addEventListener("click", function () {
    div.remove();
  });

  taskDiv.appendChild(checkBox);
  taskDiv.appendChild(span);
  div.appendChild(taskDiv);
  div.appendChild(del);
  document.querySelector(".app").appendChild(div);

  input.value = "";
});
