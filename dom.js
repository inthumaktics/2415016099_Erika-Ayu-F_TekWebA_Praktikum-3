const bgColorSelect = document.getElementById("bgColor");
const fontSizeSlider = document.getElementById("fontSize");
const toggleDarkBtn = document.getElementById("toggleDark");
const fontStyleSelect = document.getElementById("fontStyle");
const body = document.body;

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// --- Change Background Color ---
bgColorSelect.addEventListener("change", () => {
    body.style.backgroundColor = bgColorSelect.value;
});

// --- Change Font Size ---
fontSizeSlider.addEventListener("input", () => {
    body.style.fontSize = fontSizeSlider.value + "px";
});

// --- Toggle Dark Mode ---
toggleDarkBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleDarkBtn.textContent = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// --- Change Font Style ---
fontStyleSelect.addEventListener("change", () => {
    body.style.fontFamily = fontStyleSelect.value;
});

// --- Add Task ---
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete";
    delBtn.onclick = () => li.remove();

    // Edit on double click
    li.ondblclick = () => editTask(li);

    // Mark completed
    li.onclick = (e) => {
        if (e.target.tagName !== "BUTTON") {
            li.classList.toggle("completed");
        }
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}

// --- Edit Task ---
function editTask(li) {
    const currentText = li.firstChild.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    li.innerHTML = "";
    li.appendChild(input);
    input.focus();

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const newText = input.value.trim();
            li.innerHTML = newText;
            const delBtn = document.createElement("button");
            delBtn.textContent = "X";
            delBtn.className = "delete";
            delBtn.onclick = () => li.remove();
            li.appendChild(delBtn);
        }
    });
}
