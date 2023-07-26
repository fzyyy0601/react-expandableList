// ExpandableList.js
import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import DetailView from './DetailView';

const ExpandableList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(()=>{
    console.log("List")
    data.map(item=>console.log(item.title))
  })
  const showDetailView = (category) => {
    setSelectedCategory(category);
  };

  // Sample data for the tree-like structure
  const data = [
    {
      'title': 'Category 1',
      'children': [
        { 'title': 'Subcategory 1.1', 'children': ['Leaf 1.1.1', 'Leaf 1.1.2'] },
        { 'title': 'Subcategory 1.2', 'children': ['Leaf 1.2.1', 'Leaf 1.2.2'] },
      ],
    },
    {
      'title': 'Category 2',
      'children': [
        { 'title': 'Subcategory 2.1', 'children': ['Leaf 2.1.1', 'Leaf 2.1.2'] },
        { 'title': 'Subcategory 2.2', 'children': ['Leaf 2.2.1', 'Leaf 2.2.2'] },
      ],
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        {data.map((category) => (
          <CategoryItem key={category.title} title={category.title} children={category.children} showDetailView={showDetailView} setSelectedCategory={setSelectedCategory} />
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <DetailView selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default ExpandableList;
