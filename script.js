function addTask() {
  var taskInput = document.getElementById("taskInput");
  var prioritySelect = document.getElementById("prioritySelect");
  var dateTimeInput = document.getElementById("dateTimeInput");
  var taskList = document.getElementById("taskList");

  var task = document.createElement("li");

  var taskText = document.createElement("span");
  taskText.innerText = taskInput.value;
  task.appendChild(taskText);

  var priorityText = document.createElement("span");
  priorityText.innerText = " (" + prioritySelect.value + ")";
  task.appendChild(priorityText);

  var dateTimeText = document.createElement("span");
  dateTimeText.innerText = " - " + formatDateTime(dateTimeInput.value);
  task.appendChild(dateTimeText);

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      taskText.style.textDecoration = "line-through";
      priorityText.style.textDecoration = "line-through";
      dateTimeText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
      priorityText.style.textDecoration = "none";
      dateTimeText.style.textDecoration = "none";
    }
  });
  task.appendChild(checkbox);

  taskList.appendChild(task);

  taskInput.value = "";
  prioritySelect.value = "Низкий";
  dateTimeInput.value = "";
}

function clearTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
}

function formatDateTime(dateTime) {
  var date = new Date(dateTime);
  var options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
