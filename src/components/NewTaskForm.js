import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit }) {
const [name, setName] = useState("")
const [category, setCategory] = useState("Code")

  const categoryFilter = categories.filter(category => {
    return category !== "All";

  })
  const categoriesToDisplay = categoryFilter.map(category => {
    return <option key={category} value={category} >{category}</option>
    
  })
  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({text: name, category: category})
    

  }
  function handleCategory(event){
    setCategory(event.target.value)
  }
  function handleName(event) {
    setName(event.target.value)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={name} onChange={handleName}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {categoriesToDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm
