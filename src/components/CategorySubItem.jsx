// CategorySubItem.js
import React, { useEffect, useState } from 'react';

const CategorySubItem = ({ title, children, setSelectedCategory}) => {
   const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const c = children;
//   const handleItemClick = () => {
//     if (!children) {
//       showDetailView(title); // Show detail view when a leaf node is clicked
//     }
//   };
  useEffect(()=>{
    console.log("sub item");
    console.log(title)
    c.map(item=>console.log(item))
  })

  return (
    <div>
      <div onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        <span>{title}</span>
        <span>{isExpanded ? '-' : '+'}</span>
      </div>
      {(isExpanded && c)? c.map((child) => <ul key={child} onClick={()=>setSelectedCategory(child)}>{child}</ul>):""}
    </div>
  );
};

export default CategorySubItem;
