//date function
function showDate() {
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  var currentDate = `${day}-${month}-${year}`;

  document.getElementById("Date").innerHTML = currentDate;
}
showDate();

//clock function
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("Clock").innerText = time;
  document.getElementById("Clock").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

//todo list function

// local storage function
function saveTasksToLocalStorage() {
  const tasks = document.querySelectorAll(".task span#taskName");
  const taskList = [];

  tasks.forEach((task) => {
    taskList.push(task.textContent);
  });

  localStorage.setItem("tasks", JSON.stringify(taskList));
}
// Load tasks from local storage when the page loads
window.addEventListener("load", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  storedTasks.forEach((taskText) => {
    addTaskToDOM(taskText);
  });
});

// add tasks
function addTaskToDOM(taskText) {
  const tasksList = document.getElementById("tasks");
  const li = document.createElement("div");
  li.className = "task";
  li.innerHTML = `
  <span id='taskName'>
            ${taskText}
        </span>
        <button class='delete'>
            <box-icon type='solid' name='trash'></box-icon>
        </button>
  `;
  tasksList.appendChild(li);

  // update the local storage
  saveTasksToLocalStorage();

  // clear input field
  document.querySelector("#new_task input").value = "";

  // delete functionality
  var current_tasks = document.querySelectorAll(".delete");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
      saveTasksToLocalStorage();
    };
  }
}
document.querySelector("#push").onclick = function () {
  const taskText = document.querySelector("#new_task input").value.trim();
  //Alert functionality
  if (taskText.length == 0) {
    Toastify({
      text: "Please add something!",
      duration: 3000,
    }).showToast();
  } else {
    addTaskToDOM(taskText);
    Toastify({
      text: "New Task added",
      duration: 3000,
    }).showToast();
  }
};
