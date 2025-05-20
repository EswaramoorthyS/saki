import React from 'react';
import './Bestsellers.css';

import saree1 from './show_peices/saree1.jpg';
import saree2 from './show_peices/saree2.jpg';
import saree3 from './show_peices/saree3.jpg';

const accessories = [
  {
    title: 'Best Sellers',
    items: [
      { id: 1, name: 'Cotton Saree', price: 'Rs. 999.00', discounted_price: 'Rs. 799.00', image: saree1 },
      { id: 2, name: 'Cotton Saree', price: 'Rs. 1,499.00', discounted_price: 'Rs. 899.00', image: saree2 },
      { id: 3, name: 'Cotton Saree', price: 'Rs. 799.00', discounted_price: 'Rs. 499.00', image: saree3 },
    ],
  },

];

const Bestsellers = () => {
  return (
    <div className='page'>
      {accessories.map((category, index) => (
        <div className='section' key={index}>
          <h2 className='section-title'>{category.title}</h2>
          <div className='show_peices'>
            {category.items.map((item) => (
              <div className='card' key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className='peice_details'>
                  <p>{item.name}</p>
                  <p className='cost'>{item.price}</p>
                  <p className='discounted-cost'>{item.discounted_price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bestsellers;
