// CategoryItem.js
import React, { useState,useEffect } from 'react';
import CategorySubItem from './CategorySubItem';

const CategoryItem = ({ title, children, showDetailView, setSelectedCategory}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemClick = () => {
    if (!children) {
      showDetailView(title); // Show detail view when a leaf node is clicked
    }
  };
  useEffect(()=>{
    console.log('items')
    children.map((item)=>console.log(item))
  })
  return (
    <div>
      <div onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        <span>{title}</span>
        <span>{isExpanded ? '-' : '+'}</span>
      </div>
      {(isExpanded && children)? children.map((child) => <CategorySubItem children={child.children} key={child.title} title={child.title} setSelectedCategory={setSelectedCategory}/>):""} 
    </div>
  );
};

export default CategoryItem;
