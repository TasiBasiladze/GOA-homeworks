const form = document.getElementById("form");
const tasksContainer = document.getElementById("tasks");
const saved = localStorage.getItem("todoTasks");
const tasks = saved ? JSON.parse(saved) : [];

function renderTasks() {
  tasksContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskEl = document.createElement("p");
    taskEl.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("todoTasks", JSON.stringify(tasks));
      renderTasks();
    });

    tasksContainer.appendChild(taskEl);
    tasksContainer.appendChild(removeBtn);
  });
}

renderTasks();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = form.elements.name.value;

  tasks.push(taskName);
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
  renderTasks();
  
});
