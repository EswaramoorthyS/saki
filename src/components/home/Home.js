import React from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import saree from "./categories/women.png";
import western from "./categories/western.png";
import kurti from "./categories/kurti1.png";
import material from "./categories/material.png";
import kids from "./categories/kids.png";
import best from "./categories/best.jpg";
import accessories from "./categories/accessories.jpg";
import carousel1 from "./images/carousel-1.png";
import carousel2 from "./images/carousel-2.png";
import carousel3 from "./images/carousel-3.png";
import saree1 from "./show_peices/saree1.jpg";
import saree2 from "./show_peices/saree2.jpg";
import saree3 from "./show_peices/saree3.jpg";

const carouselImages = [carousel1, carousel2, carousel3];

const categories = [
  { id: 1, name: 'Best Sellers', path: '/best-seller', image: best },
  { id: 2, name: 'Kurti', path: '/kurti', image: kurti },
  { id: 3, name: 'Western', path: '/western', image: western },
  { id: 4, name: 'Sarees', path: '/sarees', image: saree },
  { id: 5, name: 'Materials', path: '/materials', image: material },
  { id: 6, name: 'Accessories', path: '/accessories', image: accessories },
];

const sarees = [saree1, saree2, saree3];

function Home() {
  return (
    <div className="top-section">

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        {carouselImages.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-img" />
          </div>
        ))}
      </Carousel>

      <div className='section'>
        <h2 className='section-title'>Categories</h2>
        <div className="category">
          {categories.map(cat => (
            <div className="category-card" key={cat.id}>
              <a href={cat.path}>
                <img src={cat.image} alt={cat.name} className="category-img" />
                <p className="category-label">{cat.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className='section'>
        <h2 className='section-title'>About Shop</h2>
        <div className='show_peices'>
          {sarees.map((img, index) => (
            <img src={img} alt={`Piece ${index + 1}`} key={index} className='show-img' />
          ))}
        </div>

        <div className='about-content'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum dolorem, ipsum, quo nisi perferendis nesciunt ab molestiae deleniti, quae non blanditiis voluptas aut. Hic ex minima sed est explicabo atque assumenda aut quia nam magnam fugiat, impedit a possimus, eveniet sequi inventore ullam cupiditate laudantium autem repellat voluptatem aliquam.
        </div>
      </div>
    </div>
  );
}

export default Home;
