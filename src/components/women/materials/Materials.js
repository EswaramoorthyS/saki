import React from 'react';
import './Materials.css';

import salwar1 from './show_peices/salwar1.png';
import salwar2 from './show_peices/salwar2.png';
import salwar3 from './show_peices/salwar3.png';

const categories = [
    {
        title: 'Chudidhar Materials',
        items: [
            { id: 1, name: 'Cotton Chudidhar', price: 'Rs. 999.00', discounted_price: 'Rs. 799.00', image: salwar1 },
            { id: 2, name: 'Cotton Chudidhar', price: 'Rs. 1,499.00', discounted_price: 'Rs. 899.00', image: salwar2 },
            { id: 3, name: 'Cotton Chudidhar', price: 'Rs. 799.00', discounted_price: 'Rs. 499.00', image: salwar3 },
        ],

    }
];

function Materials() {
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

export default Materials;
