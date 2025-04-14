import React from 'react';
import './Women.css';

import saree1 from './show_peices/saree1.jpg';
import saree2 from './show_peices/saree2.jpg';
import saree3 from './show_peices/saree3.jpg';
import kurti1 from './show_peices/kurti1.png';
import kurti2 from './show_peices/kurti2.png';
import salwar1 from './show_peices/salwar1.png';
import salwar2 from './show_peices/salwar2.png';
import salwar3 from './show_peices/salwar3.png';

const categories = [
    {
        title: 'Sarees',
        items: [
            { id: 1, name: 'Cotton Saree', price: 'Rs. 499.00', image: saree1 },
            { id: 2, name: 'Cotton Saree', price: 'Rs. 499.00', image: saree2 },
            { id: 3, name: 'Cotton Saree', price: 'Rs. 499.00', image: saree3 },
        ],
    },
    {
        title: 'Kurtis',
        items: [
            { id: 4, name: 'Cotton Kurti', price: 'Rs. 499.00', image: kurti1 },
            { id: 5, name: 'Cotton Kurti', price: 'Rs. 499.00', image: kurti2 },
            { id: 6, name: 'Cotton Kurti', price: 'Rs. 499.00', image: kurti1 },
        ],
    },
    {
        title: 'Salwars',
        items: [
            { id: 7, name: 'Cotton Salwar', price: 'Rs. 499.00', image: salwar1 },
            { id: 8, name: 'Cotton Salwar', price: 'Rs. 499.00', image: salwar2 },
            { id: 9, name: 'Cotton Salwar', price: 'Rs. 499.00', image: salwar3 },
        ],
    },
];

function Women() {
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
                                    <p className='cost'>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Women;
