import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selected, setSelected] = useState("All")
  
 
  const taskFilter = tasks.filter(task => {
    if(selected === "All") {
      return task;
    } else {
    return task.category === selected;
    }
  })
 

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  
  }
  console.log(tasks)
  function deleteTask(text) {
    const newTasks = tasks.filter((item) =>  item.text !== text)
    setTasks(newTasks)
  }
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} tasks={tasks} setSelected={setSelected} />
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}
                     />
      <TaskList tasks={taskFilter} deleteTask={deleteTask}/>
      
    </div>
  );
}

export default App;
