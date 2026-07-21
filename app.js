//#region declarations
const input = document.querySelector("input");

const addBtn = document.getElementById("add");
const searchBtn = document.getElementById("search");
const deleteBtn = document.getElementById("delete");
const completeBtn = document.getElementById("complete");
const allBtn = document.getElementById("all");
const completedBtn = document.getElementById("completed");
const pendingBtn = document.getElementById("pending");
const azBtn = document.getElementById("az");
const zaBtn = document.getElementById("za");
const statBtn = document.getElementById("stat");

const header = document.querySelector("h2");
const list = document.querySelector("ul");

const anyBtn=document.querySelectorAll("button");

const tasks = [
  {
    id: 1,
    title: "Learn Arrays",
    completed: true
  },
  {
    id: 2,
    title: "Finish Expense Tracker",
    completed: false
  },
  {
    id: 3,
    title: "Exercise",
    completed: true
  },
  {
    id: 4,
    title: "Read Clean Code",
    completed: false
  }
];
//#endregion declarations



//global vaiables
let userInput;



//common functions
function nameCase(title) {
  return title
    .split(" ")
    .map(word =>
      word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ")
}

function isIinputValid() {
  userInput = nameCase(input.value.trim());
  if (userInput === "") {
    header.innerText = "Enter valid title";
    return false
  }
  return true
}


function findDuplicate() {
  return tasks.find(task => task.title === userInput)
}

function filterTasks(key,inputData){
  return tasks.filter(task=>task[key]===inputData)
}



function updateUI(task) {
  const icon = task.completed ? "✔" : "✖"
  list.innerHTML = `<li>${icon} ${task.title}`
}


function clear(){
  input.value=""
}


//clear inputs
anyBtn.forEach(button=>button.addEventListener("click",clear))


//1. Add Task
addBtn.addEventListener("click", addTask);

function addTask() {
  /**
   * -f validate input (new)
   * -f find duplicates (new)
   * -m add task as cpmpleted:false
   * -f update ui (new)
   * -f clear input when clicked any button (new)
   */
}



//2. Search Task
searchBtn.addEventListener("click", searchTask);

function searchTask() {
  /**
   * -f validate input
   * -f find duplicates
   * -f update ui
   */
}


//3. Delete Task
deleteBtn.addEventListener("click", deleteTask);

function deleteTask() {
  /**
   * -f validate input
   * -f find duplicate
   * -m delete tasks
   * -f update ui
   */
}

//4. Complete Task ⭐
completeBtn.addEventListener("click", completeTasks);

function completeTasks() {
  /**
   * -f find task
   * -m make tast completed
   * -f update ui
   */
}


//5. Show All
allBtn.addEventListener("click", showAllTasks);

function showAllTasks() {
  /**
 * -f filter tasks (new)
 * -f update ui
 */
}


//6. Completed
completedBtn.addEventListener("click", completedTasks);

function completedTasks() {
  /**
 * -f filter tasks
 * -f update ui
 */
}


//7. 7. Pending
pendingBtn.addEventListener("click", pendingTasks);

function pendingTasks() {
  /**
   * -f filter tasks
   * -f update ui
   */
}


//8. A → Z
azBtn.addEventListener("click", azTasks);

function azTasks() {
  /**
   * -m sort tasks
   * -f update ui
   */
}


//9. Z → A
zaBtn.addEventListener("click", zaTasks);

function zaTasks() {
  /**
   * -m sort tasks
   * -f update ui
   */
}



//10. Statistics
statBtn.addEventListener("click", showStats);

function showStats() {
  /**
   * -m show number of total tasks, completed tasks, pending tasks
   */
}