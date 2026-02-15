let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const clearFileds = () => {
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
}

const notValidDate = (givenDate) => { 
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight

    const taskDate = new Date(givenDate);
    taskDate.setHours(0, 0, 0, 0); // Reset time to midnight

    return taskDate < today;
}

const addTask = () => {
    // clearAllTasks();    
  const taskInput = document.getElementById("taskInput");
  const taskTitle = taskInput.value.trim();

  const taskDate = document.getElementById("dateInput").value;

  if(notValidDate(taskDate)) {
    alert("Please select a valid date. Date cannot be in the past.");
    return;
  }

  if (taskTitle && taskDate) {
    allTasks.push({id: Date.now(), taskTitle, taskDate, isCompleted: false});
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    taskTitle.value = "";
    displayTasks();
    clearFileds();
  } else {
    alert("Please enter a task and select a date.");
  }
}

const deleteTask = (id) => { 
    allTasks = allTasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    displayTasks();
}

const markCompleted = (index) => {
    allTasks[index].isCompleted = true;
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    displayTasks();
}

const editTask = (index) => {
    const newTitle = prompt("Edit Task Title", allTasks[index].taskTitle);
    const newDate = prompt("Edit Task Date (YYYY-MM-DD)", allTasks[index].taskDate);
    if(newTitle && newDate) {
        allTasks[index].taskTitle = newTitle;
        allTasks[index].taskDate = newDate;
        localStorage.setItem("tasks", JSON.stringify(allTasks));
        displayTasks();
    } else {
        alert("Both title and date are required.");
    }
}

const displayTasks = () => {
    // console.log(allTasks);
    const completedTasks = document.getElementById("completedTasks");
    completedTasks.innerHTML = "";
    const todaysTasks = document.getElementById("todaysTasks");
    todaysTasks.innerHTML = "";
    const upcommingTasks = document.getElementById("upcommingTasks");
    upcommingTasks.innerHTML = "";
    const today = new Date().toLocaleDateString("en-CA");

    allTasks.forEach((task, index) => {

        if(task.isCompleted) {
            const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <div class="w-full flex justify-between items-center bg-green-200 border-l-5 border-green-500 rounded-md p-2 mt-2 shadow-md">
                <p class="font-bold line-through">${task.taskTitle}</p>
                <button onclick="deleteTask(${task.id})" class="bg-green-500 hover:bg-green-800 text-green-100 hover:text-white rounded-md px-2 py-1 cursor-pointer "><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
            completedTasks.appendChild(taskElement);
        } else if(task.taskDate === today) {
            const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <div class="w-full flex justify-between items-center bg-blue-200 border-l-5 border-blue-500 rounded-md p-2 mt-2 shadow-md">
                <p class="font-bold">${task.taskTitle}</p>
                <button onclick="markCompleted(${index})" class="bg-blue-500 hover:bg-blue-800 text-blue-100 hover:text-white rounded-md px-2 py-1 cursor-pointer "><i class="fa-solid fa-check"></i></button>
            </div>
        `;
            todaysTasks.appendChild(taskElement);
        } else {
            const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <div class="w-full flex justify-between items-center bg-orange-200 border-l-5 border-orange-500 rounded-md p-2 mt-2 shadow-md">
                <div class="flex flex-col">
                    <p class="font-bold">${task.taskTitle}</p>
                    <p class="text-xs text-gray-500"><i class="fa-solid fa-calendar-days"></i> ${task.taskDate}</p>
                </div>
                <button onclick="editTask(${index})" class="bg-orange-500 hover:bg-orange-800 text-orange-100 hover:text-white rounded-md px-2 py-1 cursor-pointer "><i class="fa-solid fa-pen"></i></button>
            </div>
        `;
            upcommingTasks.appendChild(taskElement);
        }
    });
}

const clearAllTasks = () => {   
    allTasks = [];
    localStorage.removeItem("tasks");
    displayTasks();
}


displayTasks();