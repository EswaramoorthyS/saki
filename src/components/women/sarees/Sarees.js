import React from 'react';
import './Sarees.css';

import saree1 from './show_peices/saree1.jpg';
import saree2 from './show_peices/saree2.jpg';
import saree3 from './show_peices/saree3.jpg';

const categories = [
    {
        title: 'Silk Sarees',
        items: [
            { id: 1, name: 'Cotton Saree', price: 'Rs. 999.00', discounted_price: 'Rs. 799.00', image: saree1 },
            { id: 2, name: 'Cotton Saree', price: 'Rs. 1,499.00', discounted_price: 'Rs. 899.00', image: saree2 },
            { id: 3, name: 'Cotton Saree', price: 'Rs. 799.00', discounted_price: 'Rs. 499.00', image: saree3 },
        ],
    },
    {
        title: 'Cotton Sarees',
        items: [
            { id: 1, name: 'Cotton Saree', price: 'Rs. 999.00', discounted_price: 'Rs. 799.00', image: saree1 },
            { id: 2, name: 'Cotton Saree', price: 'Rs. 1,499.00', discounted_price: 'Rs. 899.00', image: saree2 },
            { id: 3, name: 'Cotton Saree', price: 'Rs. 799.00', discounted_price: 'Rs. 499.00', image: saree3 },
        ],
    },
    {
        title: 'Handloom Sarees',
        items: [
            { id: 1, name: 'Cotton Saree', price: 'Rs. 999.00', discounted_price: 'Rs. 799.00', image: saree1 },
            { id: 2, name: 'Cotton Saree', price: 'Rs. 1,499.00', discounted_price: 'Rs. 899.00', image: saree2 },
            { id: 3, name: 'Cotton Saree', price: 'Rs. 799.00', discounted_price: 'Rs. 499.00', image: saree3 },
        ],
    },
    {
        title: 'Synthetic Sarees',
        items: [
            { id: 1, name: 'Cotton Saree', price: 'Rs. 999.00', discounted_price: 'Rs. 799.00', image: saree1 },
            { id: 2, name: 'Cotton Saree', price: 'Rs. 1,499.00', discounted_price: 'Rs. 899.00', image: saree2 },
            { id: 3, name: 'Cotton Saree', price: 'Rs. 799.00', discounted_price: 'Rs. 499.00', image: saree3 },
        ],
    },
];

function Sarees() {
    return (
        <div className='page'>
            {categories.map((category, index) => (
                <div className='section' key={index}>
                    <h2 className='section-title'>{category.title}</h2>
                    <div className='show_peices'>
                        {category.items.map((item) => (
                            <div className='card' key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className='peice_details'>
                                    <p>{item.name}</p>
                                    <p className='cost'><span className='price-strike'>{item.price} </span>{item.discounted_price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sarees;
