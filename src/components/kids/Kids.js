import React from 'react';
import './Kids.css';

import kid1 from './show_peices/kid1.png';
import kid2 from './show_peices/kid2.png';
import kid3 from './show_peices/kid3.png';

const kidsWear = [
  { id: 1, name: 'Cute Gown', price: 'Rs. 999.00', image: kid1 },
  { id: 2, name: 'Kids Set', price: 'Rs. 499.00', image: kid2 },
  { id: 3, name: 'Kids Suit', price: 'Rs. 1499.00', image: kid3 },
];

function Kids() {
  return (
    <div className='page'>
      <div className='section'>
        <h2 className='section-title'>Kids Wear</h2>
        <div className='show_peices'>
          {kidsWear.map((item) => (
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
}

export default Kids;
