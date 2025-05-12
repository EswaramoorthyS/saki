import React from 'react';
import './Western.css';

import kurti1 from './show_peices/kurti1.png';
import kurti2 from './show_peices/kurti2.png';
const categories = [
    {
        title: 'Jeans',
        items: [
            { id: 1, name: 'Skinny Jeans', image: kurti1, price: '₹1499', discounted_price: '₹1199' },
            { id: 2, name: 'Ripped Jeans', image: kurti2, price: '₹1699', discounted_price: '₹1399' },
            { id: 3, name: 'Skinny Jeans', image: kurti1, price: '₹1499', discounted_price: '₹1199' },
        ],
    },
    {
        title: 'Crop Tops',
        items: [
            { id: 4, name: 'Floral Crop Top', image: kurti1, price: '₹999', discounted_price: '₹799' },
            { id: 5, name: 'Plain Crop Top', image: kurti2, price: '₹1099', discounted_price: '₹899' },
            { id: 6, name: 'Floral Crop Top', image: kurti1, price: '₹999', discounted_price: '₹799' },
        ],
    },
    {
        title: 'Short Tops',
        items: [
            { id: 7, name: 'Casual Short Top', image: kurti1, price: '₹899', discounted_price: '₹699' },
            { id: 8, name: 'Formal Short Top', image: kurti2, price: '₹1199', discounted_price: '₹999' },
        ],
    },
    {
        title: 'Skirts',
        items: [
            { id: 10, name: 'Mini Skirt', image: kurti1, price: '₹1299', discounted_price: '₹999' },
            { id: 11, name: 'A-Line Skirt', image: kurti2, price: '₹1499', discounted_price: '₹1199' },
            { id: 12, name: 'Mini Skirt', image: kurti1, price: '₹1299', discounted_price: '₹999' },

        ],
    },
];

function Western() {
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

export default Western;
