let input = document.querySelector("#input");
let priority = document.querySelector("#priority");
let date = document.querySelector("#date");

let pendingCell = document.querySelector(".pendingTask");
let completeCell = document.querySelector(".completeTask");

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let inputValue = input.value;
  let priorityValue = priority.value;
  let dateValue = date.value;
  
  if (inputValue !== "" && priorityValue !== "" && dateValue !== "") {
    let taskDiv = document.createElement("div");
    taskDiv.className = "div";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    
    let taskInfo = document.createElement("p");
    taskInfo.innerHTML = `Task: "${inputValue}" <br> Priority: "${priorityValue}" <br> Due Date: ${dateValue}`;

    let deleteIcon = document.createElement("span");
    deleteIcon.className = "material-symbols-outlined deleteIcon";
    deleteIcon.textContent = "delete";

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskInfo);
    taskDiv.appendChild(deleteIcon);

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        completeCell.appendChild(taskDiv);
      } else {
        pendingCell.appendChild(taskDiv);
      }
    });

    deleteIcon.addEventListener("click", function () {
      taskDiv.remove();
    });

    pendingCell.appendChild(taskDiv);

    input.value = "";
    date.value = "";
  }
});
