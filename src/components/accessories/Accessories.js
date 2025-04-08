import React from 'react';
import './Accessories.css';

import bag1 from './show_peices/bag1.png';
import belt from './show_peices/belt.png';
import bag3 from './show_peices/bag3.png';

const accessories = [
  { id: 1, name: 'Pink Hand Bag', price: 'Rs. 699.00', image: bag3 },
  { id: 2, name: 'Women Belt', price: 'Rs. 399.00', image: belt },
  { id: 3, name: 'Pink Hand Bag', price: 'Rs. 699.00', image: bag3 },
];

const Accessories = () => {
  return (
    <div className='page'>
      <div className='section'>
        <h2 className='section-title'>Accessories</h2>
        <div className='show_peices'>
          {accessories.map((item) => (
            <div className='card' key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className='peice_details'>
                <p>{item.name}</p>
                <p className='cost'>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
