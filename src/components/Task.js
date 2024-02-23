import React from "react";
function Task({text, item, deleteTask, category}) {

  function clickButton () {
   deleteTask(text)
  }
  return (
    <div className="task">
      
      <div className="label">{category}</div>
      <div className="text">{ text }</div>
      <button onClick={clickButton} className="delete">X</button>
    </div>
  );
}

export default Task
