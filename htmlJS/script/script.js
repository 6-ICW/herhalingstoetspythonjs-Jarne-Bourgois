// element.textContent = "✅"; --> maakt als inhoud een vinkje
// deleteBtn.textContent = "🗑️"; --> maakt als inhoud een vuilbakje

// schrijf je code om de volledige todo te doen werken
const txtToDo = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const btnAdd = document.getElementById("add-btn");
// algemene variabelen en verwijzingen

// toevoegen van een todo
btnAdd.addEventListener("click", () => {
  let todo = document.createElement("li");
  todo.setAttribute("id ");
  let tekst = document.createElement("p");
  tekst.innerText = txtToDo.value;
  todo.appendChild(tekst);
  todoList.appendChild(todo);
  txtToDo.value = "";
});
// afvinken van een todo

// verwijderen van een todo
