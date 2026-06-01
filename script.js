const input = document.getElementById("input");
const list = document.getElementById("list");

let total = 0;
let done = 0;

// ADD TODO
function addTodo() {
  const value = input.value.trim();

  if (value === "") return;

  const li = document.createElement("li");
  li.textContent = value;

  total++;

  // CLICK = COMPLETE / UNCOMPLETE
  li.addEventListener("click", function () {
    li.classList.toggle("done");

    if (li.classList.contains("done")) {
      done++;
    } else {
      done--;
    }

    updateStats();
  });

  // DOUBLE CLICK = DELETE
  li.addEventListener("dblclick", function () {
    if (li.classList.contains("done")) done--;

    total--;
    li.remove();
    updateStats();
  });

  list.appendChild(li);
  input.value = "";

  updateStats();
}

// STATS
function updateStats() {
  console.log(`Total: ${total}, Done: ${done}`);
}

// ENTER KEY
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});