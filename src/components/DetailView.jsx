// DetailView.js
import React from 'react';

const DetailView = ({ selectedCategory }) => {
  return (
    <div>
      <h3>Detail View</h3>
      {selectedCategory ? <p>{selectedCategory}</p> : <p>No item selected</p>}
    </div>
  );
};

export default DetailView;
