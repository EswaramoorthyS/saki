import React from 'react';
import './Men.css';
import menShirt from './show_peices/men.jpg';

const menProducts = [
  { id: 1, name: 'Plain White Shirt', price: 'Rs. 499.00', image: menShirt },
  { id: 2, name: 'Plain White Shirt', price: 'Rs. 499.00', image: menShirt },
  { id: 3, name: 'Plain White Shirt', price: 'Rs. 499.00', image: menShirt },
];

function Men() {
  return (
    <div className='page'>
      <div className='section'>
        <h2 className='section-title'>Shirts</h2>
        <div className='show_peices'>
          {menProducts.map(product => (
            <div className='card' key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className='peice_details'>
                <p>{product.name}</p>
                <p className='cost'>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Men;
