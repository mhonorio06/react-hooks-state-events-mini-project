import React from "react";
import Task from './Task'; 

function TaskList({ tasks, deleteTask }){
  const tasksToDisplay = tasks.map((item) => {
    return (
      <Task key={item.text}
            text={item.text}
            category={item.category}
            deleteTask={deleteTask}
            
            />
    )
    })
  return (
    <div className="tasks">
      <div>{tasksToDisplay}</div>
    </div>
  );
}

export default TaskList;
