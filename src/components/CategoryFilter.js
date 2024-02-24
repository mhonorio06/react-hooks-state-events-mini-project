import React from "react";

function CategoryFilter({ categories, selected, setSelected }) {
 
   const newCategory = categories.map(category => {  
   
    return (
      <button key={category}   
              onClick={() => handleClick(category)}
              className={selected === category ? "selected" : null}
              >{category}</button>    
 ) 
  })

  function handleClick(category){
      setSelected(category)
    }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
            {newCategory}
    </div>
  );
}

export default CategoryFilter;
