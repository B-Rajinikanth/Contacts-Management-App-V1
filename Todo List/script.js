let allTasks = JSON.parse(localStorage.getItem('tasks')) || []
// localStorage.removeItem('tasks')
function clearAllFields() {
    document.getElementById('taskInput').value = ''
    document.getElementById('dateInput').value = ''
}

function displayTasks() {   
    const completedTasks = document.getElementById('completedTasks')
    completedTasks.innerHTML = ''
    const todaysTasks = document.getElementById('todaysTasks')
    todaysTasks.innerHTML = ''
    const upcomingTasks = document.getElementById('upcomingTasks')
    upcomingTasks.innerHTML = ''

    const today = new Date().toLocaleDateString('en-CA')

    allTasks.forEach((task, index) => {

        if(task.isCompleted) {
            const taskElement = document.createElement('div')
            taskElement.innerHTML = `
            <div class="w-full bg-green-300 my-3 px-3 py-2 rounded-md flex justify-between items-center border-l-5 border-green-800 shadow-md">
                <p class="font-bold">${task.taskTitle}</p>
                <button class="font-bold bg-green-500 text-green-800 px-3 py-1 rounded-md cursor-pointer hover:bg-green-800 hover:text-green-100"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            `
            completedTasks.appendChild(taskElement);
        } else if(task.taskDate === today) {
            const taskElement = document.createElement('div')
            taskElement.innerHTML = `
            <div class="w-full bg-blue-300 my-3 px-3 py-2 rounded-md flex justify-between items-center border-l-5 border-blue-800 shadow-md">
                <p class="font-bold">${task.taskTitle}</p>
                <button class="font-bold bg-blue-500 text-blue-100 px-3 py-1 rounded-md cursor-pointer hover:bg-blue-800 hover:text-blue-100"><i class="fa-solid fa-check"></i></button>
            </div>
            `
            todaysTasks.appendChild(taskElement);
        } else {
            const taskElement = document.createElement('div')
            taskElement.innerHTML = `
            <div class="w-full bg-orange-300 my-3 px-3 py-2 rounded-md flex justify-between items-center border-l-5 border-orange-800 shadow-md">
                <p class="font-bold">${task.taskTitle}</p>
                <button class="font-bold bg-orange-500 text-orange-100 px-3 py-1 rounded-md cursor-pointer hover:bg-orange-800 hover:text-orange-100"><i class="fa-solid fa-pencil"></i></button>
            </div>
            `
            upcomingTasks.appendChild(taskElement);
        }

        

    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput')
    const taskText = taskInput.value.trim()

    const dateInput = document.getElementById('dateInput').value;

    if (taskText && dateInput) {
        const newTask = {
            id: Date.now(),
            taskTitle: taskText,
            taskDate: dateInput,
            isCompleted: false
        } 
        allTasks.push(newTask)
        localStorage.setItem('tasks', JSON.stringify(allTasks))
        displayTasks();
        clearAllFields();
    } else {
        alert('Please enter a task and select a date.')
    }
}

displayTasks()