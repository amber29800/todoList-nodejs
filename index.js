const readline = require("readline-sync");
const fs = require('fs')

let tasks = [];

const getTask = () => {
    let userInput = readline.question("Please eanter a task: \n");
    return userInput;
};

const addTask = () => {
  console.log("Enter task to add...\n")
  let userInput = getTask();
  tasks.push({
    name:userInput,
    completed:false,
  });
};

const deleteTask = () => {
  console.log("Enter task to delete...\n")
  let userInput = getTask();
  tasks = tasks.filter((obj) => obj.name !== userInput)
};

const showTasks = () => {
  console.log("These are the tasks\n")
  console.log(tasks);
};

const completeTask = () => {
  console.log("Enter completed task\n");
    let userInput = getTask();
    const taskIndex = tasks.findIndex((obj) => obj.name === userInput);
    if(taskIndex !== -1) {
      tasks[taskIndex].completed = true;
    }
    const completedTaskName = tasks[taskIndex].name;
    fs.appendFile('completedTasks.txt', completedTaskName + '\n', (err) => {
      if(err) {
        console.log('There is an error', err);
      }
      else {
        console.log('Task is added successfully to the file');
      }
    })
}

function init() {
  console.log("Todo has been Initialized");
  addTask();
  addTask()
  showTasks();
  completeTask();
  showTasks();
}
init();
