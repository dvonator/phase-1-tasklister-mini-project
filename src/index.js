document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let taskColor = e.target["new-task-priority"].value;
    let taskInput = e.target["new-task-description"].value; //since ID has a long string with hyphens use [ ] notation.
    buildTodo(taskInput, taskColor);
    form.reset();
  });
});

function buildTodo(todo, color) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "x";
  li.textContent = `${todo} `;
  li.style.color = color;
  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}

//A delete function that will remove tasks from your list

function handleDelete(e) {
  e.target.parentNode.remove();
}

//A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)

//As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority

//An additional input field (e.g. user, duration, date due)

//Ability to edit tasks
