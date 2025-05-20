import React from 'react';
import './Accessories.css';

import bag3 from './show_peices/bag3.png';

const accessories = [
  {
    title: 'Hand Bags',
    items: [
      { id: 1, name: 'Women Belt', price: 'Rs. 999.00', discounted_price: 'Rs. 749.00', image: bag3 },
      { id: 2, name: 'Women Belt', price: 'Rs. 999.00', discounted_price: 'Rs. 749.00', image: bag3 },
      { id: 3, name: 'Pink Hand Bag', price: 'Rs. 699.00', discounted_price: 'Rs. 529.00', image: bag3 },
    ],
  },
  {
    title: 'Jewellery',
    items: [
      { id: 4, name: 'Women Belt', price: 'Rs. 999.00', discounted_price: 'Rs. 749.00', image: bag3 },
      { id: 5, name: 'Pink Hand Bag', price: 'Rs. 699.00', discounted_price: 'Rs. 529.00', image: bag3 },
      { id: 6, name: 'Pink Hand Bag', price: 'Rs. 699.00', discounted_price: 'Rs. 529.00', image: bag3 },
      { id: 7, name: 'Pink Hand Bag', price: 'Rs. 699.00', discounted_price: 'Rs. 529.00', image: bag3 },
    ],
  },
];

const Accessories = () => {
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

export default Accessories;
