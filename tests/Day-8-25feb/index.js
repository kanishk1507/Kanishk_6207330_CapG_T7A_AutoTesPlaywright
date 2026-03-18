const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", addTask);
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}