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
document.querySelector("#push").onclick = function () {
  //Alert functionality
  if (document.querySelector("#new_task input").value.length == 0) {
    alert("Plzz enter the Task");
  } else {
    //Adding items in todo-list
    document.querySelector("#tasks").innerHTML += `
        <div class='task'>
        <span id='taskName'>
            ${document.querySelector("#new_task input").value}
            </span>
            <button class='delete'>
            <box-icon type='solid' name='trash'></box-icon>
            </button>
        </div>    
        `;

    //Delete functionality
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
