import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const categories = [
    { id: 1, name: 'Traditional Wear', path: '/traditional' },
    { id: 2, name: 'Western Wear', path: '/western' },
    { id: 3, name: 'Party Wear', path: '/party' }
  ];

  return (
    <div className="categories">
      <h2>Our Collections</h2>
      <div className="category-list">
        {categories.map(category => (
          <Link key={category.id} to={category.path} className="category-item">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
