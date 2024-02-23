import React from "react";

function CategoryFilter({ categories, setSelected  }) {
 
   const newCategory = categories.map(category => {  
   
    return (
      <button key={category}  onClick={() => handleClick(category)} value={category}>{category}</button>    
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
