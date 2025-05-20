import React from 'react';
import './Kurti.css';

import kurti1 from './show_peices/kurti1.png';
import kurti2 from './show_peices/kurti2.png';

const categories = [
    {
        title: 'Tops',
        items: [
            { id: 1, name: 'Casual Top', image: kurti1, price: '₹999', discounted_price: '₹799' },
            { id: 2, name: 'Formal Top', image: kurti2, price: '₹1199', discounted_price: '₹899' },
            { id: 2, name: 'Formal Top', image: kurti2, price: '₹1199', discounted_price: '₹899' },
        ],
    },
    {
        title: 'Umbrella Tops',
        items: [
            { id: 3, name: 'Floral Umbrella Top', image: kurti1, price: '₹1299', discounted_price: '₹999' },
            { id: 4, name: 'Plain Umbrella Top', image: kurti2, price: '₹1399', discounted_price: '₹1099' },
        ],
    },
    {
        title: 'Combos',
        items: [
            { id: 5, name: 'Top Combo Pack', image: kurti1, price: '₹1999', discounted_price: '₹1499' },
            { id: 6, name: 'Umbrella Top Combo', image: kurti2, price: '₹2499', discounted_price: '₹1999' },
        ],
    }
];

function Kurti() {
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

export default Kurti;
