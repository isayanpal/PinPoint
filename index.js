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
